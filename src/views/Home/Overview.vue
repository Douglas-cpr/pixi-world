<script setup lang="ts">
import Button from '@/components/Button/index.vue'
import Icon from '@/components/factories/Icon/index.vue'
</script>

<template>
  <section class="overview">
    <div class="overview__text">
      <h1 class="text__title">
        Discover <span class="text__title--special">Characters</span><br/>
        in Pixi-World
      </h1>
      <p class="text__description">We believe the world is more beautiful as each person gets better.</p>
      <Button :width="150" :height="40" :onClick="() => {}">Get Started for Free</Button>
    </div>
    <div class="overview__images">
      <div class="images__container">
        <Icon class="overview__icon" name="Calendar"/>
        <Icon class="overview__icon" name="Man"/>
      </div>
      <Icon class="images__background" name="Ball"/>
      <div class="images__container">
        <Icon class="overview__icon" name="Woman"/>
        <Icon class="overview__icon" name="Phone"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10% 0;
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

.text__description {
  max-width: 400px;
}

.overview__images {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
}

.images__container {
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overview__icon {
  padding: 0.5rem 0;
}

.images__background {
  position: absolute;
  z-index: -1;
  left: 20%;
}

.overview__icon {
  padding: 0;
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