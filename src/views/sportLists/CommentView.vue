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
const isFormVisible = ref(false)

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
const toggleForm = () => {
  isFormVisible.value = !isFormVisible.value
}
console.log(sportComments.value)
</script>

<template>
  <div v-if="sport">
    <div class="overflow-auto" :class="{ 'pb-60': isFormVisible }">
      <h1 class="text-5xl font-bold">{{ sport.sport_title }}</h1>
      <div class="py-4">
        <h1>&#x1f947; <a class="font-bold">1st place:</a> {{ sport.gold }}</h1>
        <h1>&#x1f948; <a class="font-bold">2nd place:</a> {{ sport.silver }}</h1>
        <h1>&#x1f949; <a class="font-bold">3rd place:</a> {{ sport.bronze }}</h1>
      </div>
      <!-- Comment section -->
      <div class="py-4">
        <div class="px-6 py-2" v-if="sportComments.length > 0">
          <h1 class="text-2xl text-slate-600">Cheer Up Comments:</h1>
          <CommentBlock v-for="comment in sportComments" :key="comment.id" :comment="comment" />
        </div>
        <div v-else class="grid justify-items-center text-slate-600 pt-12">
          <h1 class="text-2xl">No Comment</h1>
          <p>Be the first one who add a comment!</p>
        </div>
      </div>
      <!-- comment btn -->
      <div class="pb-10 grid justify-items-end fixed bottom-0 right-0 w-3/4 pr-12 text-lg">
        <button
          @click="toggleForm"
          class="bg-blue-500 text-white p-4 rounded-lg"
          v-if="!isFormVisible"
        >
          &#128172; Cheer your athletes
        </button>
      </div>
      <!-- Comment input form -->
      <div class="py-4 fixed bottom-0 right-0 w-3/4 p-4 bg-zinc-300" v-if="isFormVisible">
        <h1 class="text-2xl font-bold text-slate-700">Write a Comment:</h1>
        <p class="text-slate-700 pb-4">Say something to cheer up your favorite athletes.</p>
        <input
          v-model="author"
          type="text"
          placeholder="Commenting as..."
          class="border p-2 mb-2 w-full rounded-md"
        />
        <textarea
          v-model="commentText"
          placeholder="Enter your comment here..."
          class="border p-2 mb-2 w-full resize-none rounded-md"
          @keydown="handleKeydown"
        ></textarea>
        <div class="flex justify-end space-x-2">
          <button @click="addComment" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add Comment
          </button>
          <button
            @click="toggleForm"
            class="bg-neutral-500 text-white px-4 py-2 rounded-lg shadow-lg"
            v-if="isFormVisible"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
