import apiClient from './AxiosClient'
import axios from 'axios'
import type { Comment } from '@/types'

const NormalapiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getComments() {
    return NormalapiClient.get('/comments')
  },
  postComment(comment: Comment){
    return apiClient.post('/countries',comment)
  },
}