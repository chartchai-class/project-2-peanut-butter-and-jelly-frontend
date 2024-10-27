<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps } from 'vue'
import type { Comment } from '@/types'

// Define props for the component
defineProps<{
  comment: Comment
}>()
</script>
<template>
  <div class="py-2"></div>
  <div class="bg-white px-12 py-4 rounded-xl max-w-3xl">
    <div class="text-slate-600">
      <strong class="text-2xl">{{ comment.author }}</strong>
      <p>{{ comment.message }}</p>
    </div>
  </div>
</template>
