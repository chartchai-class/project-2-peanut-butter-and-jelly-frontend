<script setup lang="ts">
import { type Country } from '@/types'
import { useRouter } from 'vue-router'

const props = defineProps<{ country: Country }>()
const router = useRouter()

const navigateToDetailView = () => {
  router.push({ name: 'country-information-view', params: { id: props.country.id } })
}
</script>
<template>
  <tr class="hover:bg-gray-100 cursor-pointer" @click="navigateToDetailView">
    <td class="py-2 px-4 border-b">{{ country.countryName }}</td>
    <td class="py-2 px-4 border-b">
      <img :src="country.img" class="w-12 h-12 object-cover rounded-full" />
    </td>
    <td class="py-2 px-4 border-b">{{ country.amountGold }}</td>
    <td class="py-2 px-4 border-b">{{ country.amountSilver }}</td>
    <td class="py-2 px-4 border-b">{{ country.amountBronze }}</td>
    <td class="py-2 px-4 border-b">{{ country.total }}</td>
  </tr>
</template>
