<script setup lang="ts">
import Button from '@/components/common/Button/index.vue'
</script>

<template>
  <section class="overview">
    <div class="overview__text">
      <h1 class="text__title">
        Discover <span class="text__title--special">Characters</span><br/>
        in Pixi-World
      </h1>
      <p>We believe the world is more beautiful as each person gets better. We believe the world is more beautiful as each person gets better. Person gets better.</p>
      <Button :width="150" :height="40" :onClick="() => {}">Get Started for Free</Button>
    </div>

    <div class="overview__images">
      aaaa
    </div>
  </section>
</template>

<style scoped>
.overview {
  display: flex;
}
.overview__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  flex: 1;
}

.text__title {
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: bold;
}

.text__title--special {
  background: -webkit-linear-gradient(180deg, #6DC1DC,#A690FC,#FC96BB,#FFC397);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.overview__images {
  flex: 1;
}

@media (max-width: 425px) {
  .overview {
    flex-direction: column;
  }

  .text__title {
    font-size: 2.5rem;
  }
}
</style>