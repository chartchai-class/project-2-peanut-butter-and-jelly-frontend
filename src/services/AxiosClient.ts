import axios from 'axios'
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,

    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Control-Allow-Origin': 'http://localhost:5173'
    }
})
export default apiClient