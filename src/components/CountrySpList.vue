<script setup lang="ts">
import type { SportList } from '@/types'

defineProps<{ sport: SportList, medal: string}>()
</script>

<template>
  <tr>
    <td class="py-2 px-4 border-b">{{ sport.title }}</td>
    <td class="py-2 px-4 border-b">
      <span v-if="medal === 'GOLD'">🥇</span>
      <span v-if="medal === 'SILVER'">🥈</span>
      <span v-if="medal === 'BRONZE'">🥉</span>
      {{ medal }}
    </td>
  </tr>
</template>
