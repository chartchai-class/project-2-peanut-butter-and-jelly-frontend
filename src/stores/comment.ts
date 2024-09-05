// stores/commentStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Comment } from '@/types'

let nextCommentId = 1 // Counter for generating unique IDs

export const useCommentStore = defineStore('commentStore', () => {
  const comments = ref<{ [sportId: string]: Comment[] }>({})

  function addComment(sportId: string, comment: Omit<Comment, 'id'>) {
    const id = nextCommentId++
    const commentWithId: Comment = { id, ...comment }

    if (!comments.value[sportId]) {
      comments.value[sportId] = []
    }
    comments.value[sportId].push(commentWithId)
  }

  function fetchComments(sportId: string) {
    return comments.value[sportId] || []
  }

  return { comments, addComment, fetchComments }
})
