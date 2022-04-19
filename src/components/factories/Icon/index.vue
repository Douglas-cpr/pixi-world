<script lang="ts" setup>
import Logo from '@/components/factories/Icon/Logo.vue'
import Ball from '@/components/factories/Icon/Ball.vue'
import Woman from '@/components/factories/Icon/Woman.vue'
import Man from '@/components/factories/Icon/Man.vue'
import Phone from '@/components/factories/Icon/Phone.vue'
import Calendar from '@/components/factories/Icon/Calendar.vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const components = {
  Logo,
  Ball,
  Woman,
  Man,
  Phone,
  Calendar
}
</script>

<template>
  <component :is="components[name]" v-bind="$props"></component>
</template>