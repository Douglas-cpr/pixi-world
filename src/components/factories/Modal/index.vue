<script lang="ts" setup>
import { useModal } from '@/hooks/useModal'
import { defineAsyncComponent, onBeforeUnmount, onMounted, reactive } from 'vue';

const ModalLogin = defineAsyncComponent(() => import('@/components/factories/Modal/ModalLogin.vue'));
const ModalSignup = defineAsyncComponent(() => import('@/components/factories/Modal/ModalSignUp.vue'));

const components = {
  ModalLogin,
  ModalSignup
}

const modal = useModal();

const DEFAULT_WIDTH = 500;

const state = reactive({
  isActive: false,
  component: {},
  props: {},
  width: DEFAULT_WIDTH,
})

type handleModalTogglePayload = {
  component: string,
  props: any,
  width?: number,
  status: boolean,
}

function handleModalToggle (payload: handleModalTogglePayload) {
  if (payload.status) {
    state.component = payload.component
    state.props = payload.props
    state.width = payload.width ?? DEFAULT_WIDTH
    state.isActive = payload.status
    return
  }

  state.component = {}
  state.props = {}
  state.width = DEFAULT_WIDTH
  state.isActive = false
}

onMounted(() => {
  modal.listen(handleModalToggle)
})

onBeforeUnmount(() => {
  modal.off(handleModalToggle)
})
</script>


<template>
  <teleport to="body">
    <div v-if="state.isActive">
      <div class="modal">
        <div 
          class="modal__container "
          :style="{
            maxWidth: `${state.width}px`
          }">
          <component :is="components[state.component]" v-bind="state.props"></component>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal__container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  background-color: var(--modal-bg);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

</style>