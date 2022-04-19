<script lang="ts" setup>
import Navbar from '@/components/Navbar/index.vue'
import Overview from './Overview.vue'
</script>

<template>
  <main class="home">
    <Navbar />
    <Overview />
  </main>
</template>

<style scoped>
.home {
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 15%;
  gap: 10vh;
}

@media (max-width: 425px) {
  .home {
    padding: 1rem 2rem;
  }
}
</style>
