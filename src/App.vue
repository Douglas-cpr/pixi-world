<script setup lang="ts">
import ModalFactory from '@/components/factories/Modal/index.vue'
import Navbar from './components/Navbar/index.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view />
    <ModalFactory />
  </div>
</template>

<style scoped>
.app {
  padding: 1rem 15%;
}

@media (max-width: 425px) {
  .app {
    padding: 1rem 2rem;
  }
}
</style>