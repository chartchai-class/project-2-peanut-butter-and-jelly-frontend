<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { type Sport } from '@/types'
import { useRouter } from 'vue-router'
defineProps<{ sport: Sport }>()
const router = useRouter()

const navigateToCommentView = () => {
  router.push({ name: 'comment-view', params: {} })
}
</script>
<template>
  <tr class="hover:bg-gray-100" @click="navigateToCommentView">
    <td class="py-2 px-4 border-b">{{ sport.sport_title }}</td>
    <td class="py-2 px-4 border-b">{{ sport.gold }}</td>
    <td class="py-2 px-4 border-b">{{ sport.silver }}</td>
    <td class="py-2 px-4 border-b">{{ sport.bronze }}</td>
  </tr>
</template>
