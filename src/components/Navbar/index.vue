<script lang="ts" setup>
import Icon from '@/components/factories/Icon/index.vue'
import Button from '@/components/Button/index.vue'
import { useModal } from '@/hooks/useModal'
import store from '@/store'

const modal = useModal()

const openLoginModal = () => {
  modal.open({
    component: 'ModalLogin'
  })
}

const openModalSignup = () => {
  modal.open({
    component: 'ModalSignup'
  })
}
</script>

<template>
  <header class="header">
    <Icon name="Logo"/>
    <ul class="header__routes">
      <li :class="{ 'route__link--selected': true }" class="route__link"><a>Home</a></li>
      <li class="route__link"><a>About</a></li>
      <li class="route__link"><a>Features</a></li>
    </ul>
    <div class="header__actions" v-if="!store.currentUser">
      <Button type="primary" :onClick="openLoginModal" class="actions__btn">Sign In</Button>
      <Button type="secondary" :onClick="openModalSignup" :width="140" class="actions__btn">Create Account</Button>
    </div>
    <div class="header__user" v-else>
      <div class="user__name">
        <span>{{ store.currentUser.username }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: var(--brand-main);
  color: var(--text-main);
}
.header__routes {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  cursor: pointer;
}

.header__actions {
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.actions__btn {
  cursor: pointer;
}

.route__link {
  transition: all ease-out var(--transition-seconds);
}

.route__link:hover {
  color: var(--link-hover);
}

.route__link {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.route__link--selected {
  color: var(--link-selected);
}

.route__link--selected::after {
  content: '';
  width: 10px;
  height: 10px;
  top: 25px;
  position: absolute;
  border-radius: 999px;
  background-color: var(--link-hover);
}

.user__name {
  font-weight: bold;
}

@media (max-width: 425px) {
  .header {
    flex-direction: column;
    gap: 2.5rem;
    height: auto;
  }
}
</style>