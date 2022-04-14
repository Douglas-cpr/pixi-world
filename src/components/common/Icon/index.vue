<script lang="ts" setup>
import Logo from '@/components/common/Icon/Logo.vue'
import { reactive } from 'vue';

defineProps({
  name: {
    type: String,
    required: true
  }
})

const components = reactive({
  Logo
})

</script>

<template>
  <component :is="components[name]" v-bind="$props"></component>
</template>