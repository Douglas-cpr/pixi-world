<script setup lang="ts">
import { useModal } from '@/hooks/useModal'
import Button from '@/components/Button/index.vue';
import ErrorMessage from '@/components/factories/Modal/ErrorMessage.vue'
import { validateEmptyAndMinLength6 } from '@/utils/validators';
import services from '@/services'
import { setCurrentUser } from '@/store'

import { useField } from 'vee-validate'
import { reactive } from 'vue';
import { useToast } from 'vue-toastification'

const modal = useModal()
const toast = useToast()

const {
  value: usernameValue,
  errorMessage: usernameErrorMessage
} = useField<string>('username', validateEmptyAndMinLength6)

const {
  value: passwordValue,
  errorMessage: passwordErrorMessage
} = useField<string>('password', validateEmptyAndMinLength6)

type FormField = {
  value: string,
  errorMessage: string | undefined
}

type StateProps = {
  username: FormField,
  password: FormField
}

const state: StateProps = reactive({
  username: {
    value: usernameValue,
    errorMessage: usernameErrorMessage
  },
  password: {
    value: passwordValue,
    errorMessage: passwordErrorMessage
  }
})

function openModalSignup(): void {
  modal.open({
    component: 'ModalSignup'
  })
}

async function handleLogin() {
  const response = await services.login.login(state.username.value, state.password.value);

  if (response.data) {
    setCurrentUser(response.data);
    modal.close(null)
    return
  } 
  
  if (response.error) {
    toast.error(response.error.message)
  }

}
</script>

<template>
  <div class="modal__login">
    <header class="modal__header">
      <h1 class="modal__title">Login to your account</h1>
      <button @click="modal.close" class="modal__close" type="button">&times;</button>
    </header>

    <main>
      <form 
        @submit.prevent="handleLogin"
        class="modal__form">
          <input type="text" placeholder="Username" class="modal__input" v-model="state.username.value">
          <ErrorMessage v-if="state.username.errorMessage">
            {{ state.username.errorMessage }}
          </ErrorMessage>

          <input type="password" placeholder="Password" class="modal__input" v-model="state.password.value">
          <ErrorMessage v-if="state.password.errorMessage">
            {{ state.password.errorMessage }}
          </ErrorMessage>
        <a class="modal__link">Forgot your password?</a>
        <Button type="secondary" :onClick="() => { }">Login</Button>
        <div class="modal__divider"></div>
        <a class="modal__link" @click="openModalSignup">Don't already have an account? Sign up</a>
      </form>
    </main>
  </div>
</template>

<style scoped>
.modal__login {
  padding: 1.5rem;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal__close {
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  color: var(--brand-main);
  border: none;
  background-color: transparent;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--brand-main);
}

.modal__form {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.modal__input {
  padding: 10px;
  width: 90%;
  height: 40px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.25rem;
}


.modal__link {
  cursor: pointer;
  color: var(--bg-main);
  transition: all ease-out 0.2s;
  opacity: 0.7;
}

.modal__link:hover {
  opacity: 1;
}
</style>