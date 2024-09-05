<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { type Country } from '@/types'
import { useCountryStore } from '@/stores/country'

const props = defineProps<{
  country: Country
  id: string
}>()
const { country } = toRefs(props)
console.log(country)
</script>
<template>
  <h1>{{ country.country }}</h1>
</template>
