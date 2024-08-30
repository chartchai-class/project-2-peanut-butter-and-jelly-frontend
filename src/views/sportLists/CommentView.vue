<script setup lang="ts">
import CommentBlock from '@/components/sportLists/CommentBlock.vue'
import { useSportStore } from '@/stores/sport'
import { useCommentStore } from '@/stores/comment'
import { computed, ref } from 'vue'
import type { Comment } from '@/types'

const sportStore = useSportStore()
const commentStore = useCommentStore()

// Computed property to get the current sport from the store
const sport = computed(() => sportStore.sport)

// Local state for user input
const author = ref('')
const commentText = ref('')

// Function to add a comment
const addComment = () => {
  if (sport.value && commentText.value.trim()) {
    const newAuthor = author.value.trim() || 'Anonymous'
    const newComment = {
      author: newAuthor,
      comment: commentText.value
    }
    commentStore.addComment(sport.value.id.toString(), newComment)
    // Clear input fields after adding the comment
    commentText.value = ''
  }
}

// Computed property to get comments for the current sport
const sportComments = computed(() => {
  return sport.value ? commentStore.fetchComments(sport.value.id.toString()) : []
})

// Event handler for keydown events
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault() // Prevent the default action (e.g., new line)
    addComment()
  }
}
console.log(sportComments.value)
</script>

<template>
  <div v-if="sport">
    <div class="overflow-auto pb-40">
      <h1 class="text-5xl font-bold">{{ sport.sport_title }}</h1>
      <div class="py-4">
        <h1>&#x1f947; <a class="font-bold">1st place:</a> {{ sport.gold }}</h1>
        <h1>&#x1f948; <a class="font-bold">2nd place:</a> {{ sport.silver }}</h1>
        <h1>&#x1f949; <a class="font-bold">3rd place:</a> {{ sport.bronze }}</h1>
      </div>
      <!-- Comment section -->
      <div class="py-4">
        <h1 class="text-2xl">Cheer Up Comments:</h1>
        <div class="px-6 py-2" v-if="sportComments.length > 0">
          <CommentBlock v-for="comment in sportComments" :key="comment.id" :comment="comment" />
        </div>
        <div v-else>
          <h1>No Comment</h1>
        </div>
        
      </div>
      <!-- Comment input form -->
      <div class="py-4 fixed bottom-0 right-0 w-3/4 bg-white p-4 shadow-md">
        <input
          v-model="author"
          type="text"
          placeholder="Commenting as..."
          class="border p-2 mb-2 w-full"
        />
        <textarea
          v-model="commentText"
          placeholder="Enter your comment"
          class="border p-2 mb-2 w-full"
          @keydown="handleKeydown"
        ></textarea>
        <button @click="addComment" class="bg-blue-500 text-white px-4 py-2">Add Comment</button>
      </div>
    </div>
  </div>
</template>
