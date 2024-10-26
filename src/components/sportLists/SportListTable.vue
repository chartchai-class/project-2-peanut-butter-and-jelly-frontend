<script setup lang="ts">
import { type Sport } from '@/types'
import { useRouter } from 'vue-router'

const props = defineProps<{ sport: Sport }>()
const router = useRouter()

const navigateToCommentView = () => {
  router.push({ name: 'comment-view', params: { id: props.sport.id } })
}
</script>

<template>
  <tr class="hover:bg-gray-100 cursor-pointer" @click="navigateToCommentView">
    <td class="py-2 px-4 border-b">{{ sport.title }}</td>
    <td class="py-2 px-4 border-b">{{ sport.gold.countryName }}</td>
    <td class="py-2 px-4 border-b">{{ sport.silver.countryName }}</td>
    <td class="py-2 px-4 border-b">{{ sport.bronze.countryName }}</td>
  </tr>
</template>
