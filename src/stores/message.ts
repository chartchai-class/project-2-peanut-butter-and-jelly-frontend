import type { MessageState } from '@/types'
import { defineStore } from 'pinia'
export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    message: '' as string,
    messageType: '' as 'success' | 'error' | ''
  }),
  actions: {
    updateMessage(message: string, type: 'success' | 'error') {
      this.message = message
      this.messageType = type
    },
    resetMessage(): void {
      this.message = ''
      this.messageType = ''
    }
  }
})
