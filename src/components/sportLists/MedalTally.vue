<script setup lang="ts">
import { type Country } from '@/types'
import { useRouter } from 'vue-router'

const props = defineProps<{ country: Country }>()
const router = useRouter()




</script>
<template>
    <tr class="hover:bg-gray-100 cursor-pointer">
        <td class="py-2 px-4 border-b">{{ country.country }}</td>
        <td class="py-2 px-4 border-b">{{ country.gold }}</td>
        <td class="py-2 px-4 border-b">{{ country.silver }}</td>
        <td class="py-2 px-4 border-b">{{ country.bronze }}</td>
        <td class="py-2 px-4 border-b">{{ country.total }}</td>
      </tr>
  </template>