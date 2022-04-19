<script setup lang="ts">

defineProps({
  onClick: {
    type: Function,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'primary'
  },
  height: {
    type: Number,
    default: 35
  },
  width: {
    type: Number,
    default: 100
  }
})
</script>


<template>
<button
  @click="() => onClick()"
  :disabled="disabled"
  class="common__button"
  :class="{
    'common__button--primary': type === 'primary',
    'common__button--secondary': type === 'secondary',
  }"

  :style="{
    height: height + 'px',
    width: width + 'px'
  }">
  <slot></slot>
</button>
</template>

<style scoped>
.common__button {
  cursor: pointer;
  border: none;
  border-radius: 4rem;
  font-weight: 600;
}

.common__button--primary {
  color: #8C72FF;
  background-color: #fff;
}

.common__button--secondary {
  color: #fff;
  background-color: #8C72FF;
}
</style>