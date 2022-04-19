<script setup lang="ts">
import { useModal } from '@/hooks/useModal'
import Button from '@/components/Button/index.vue';
import ErrorMessage from '@/components/factories/Modal/ErrorMessage.vue'
import { useField } from 'vee-validate';
import { validateEmptyAndMinLength6 } from '@/utils/validators';
import { reactive } from 'vue';

const modal = useModal()

function validaIfEqualsPassword() {
  if (state.confirmPassword.value !== state.password.value) {
    return 'Passwords do not match'
  }
  return true
}

const {
  value: usernameValue,
  errorMessage: usernameErrorMessage
} = useField('username', validateEmptyAndMinLength6)

const {
  value: emailValue,
  errorMessage: emailErrorMessage
} = useField('email', validateEmptyAndMinLength6)

const {
  value: passwordValue,
  errorMessage: passwordErrorMessage
} = useField('password', validateEmptyAndMinLength6)

const {
  value: confirmPasswordValue,
  errorMessage: confirmPasswordErrorMessage,
} = useField('password', validaIfEqualsPassword)


const state = reactive({
  username: {
    value: usernameValue,
    errorMessage: usernameErrorMessage
  },
  email: {
    value: emailValue,
    errorMessage: emailErrorMessage
  },
  password: {
    value: passwordValue,
    errorMessage: passwordErrorMessage
  },
  confirmPassword: {
    value: confirmPasswordValue,
    errorMessage: confirmPasswordErrorMessage
  }
})

function openModalLogin(): void {
  modal.open({
    component: 'ModalLogin'
  })
} 

function handleSubmit() {
  return false;
}
</script>

<template>
  <div class="modal__signup">
    <header class="modal__header">
      <h1 class="modal__title">Create an account</h1>
      <button
        @click="modal.close"
        class="modal__close"
        type="button"
      >&times;</button>
    </header>

    <main>
      <form 
        @submit.prevent="handleSubmit"
        class="modal__form">
          <input 
            type="text" 
            placeholder="Username"
            class="modal__input"
            v-model="state.username.value"
          >
          <ErrorMessage v-if="state.username.errorMessage">
            {{ state.username.errorMessage }}
          </ErrorMessage>

          <input 
            type="email" 
            placeholder="E-mail"
            class="modal__input"
            v-model="state.email.value"
            >
          <ErrorMessage v-if="state.email.errorMessage">
            {{ state.email.errorMessage }}
          </ErrorMessage>

          <input 
            type="password" 
            placeholder="Password"
            class="modal__input"
            v-model="state.password.value"
            > 
          <ErrorMessage v-if="state.password.errorMessage">
            {{ state.password.errorMessage }}
          </ErrorMessage>

          <input 
          type="password" 
          placeholder="Confirm your password"
          class="modal__input"
          v-model="state.confirmPassword.value"
          > 
          <ErrorMessage v-if="state.confirmPassword.errorMessage">
            {{ state.confirmPassword.errorMessage }}
          </ErrorMessage>

          <Button type="secondary" :onClick="() => {}">Create</Button>
          <div class="modal__divider"></div>
          <a class="modal__link" @click="openModalLogin">Already have an account? Sign up</a>
      </form>
    </main>
  </div>
</template>

<style scoped>

.modal__signup {
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