<script setup lang="ts">
import type { SportList } from '@/types'

defineProps<{ sport: SportList }>()
</script>

<template>
  <tr>
    <td class="py-2 px-4 border-b">{{ sport.sport_title }}</td>
    <td class="py-2 px-4 border-b">
      <span v-if="sport.medal_type === 'GOLD'">🥇</span>
      <span v-if="sport.medal_type === 'SILVER'">🥈</span>
      <span v-if="sport.medal_type === 'BRONZE'">🥉</span>
      {{ sport.medal_type }}
    </td>
  </tr>
</template>
