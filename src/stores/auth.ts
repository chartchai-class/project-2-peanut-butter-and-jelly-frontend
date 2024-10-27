import { defineStore } from 'pinia'
import axios from 'axios'
import type { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null
    }),
    actions: {
        login(email: string, password: string) {
            return apiClient
                .post('/api/v1/auth/authenticate', {
                    username: email,
                    password: password
                })
                .then((response) => {
                    this.token = response.data.access_token
                    localStorage.setItem('access_token', this.token as string)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                    return response
                })
        },
        // register(name: string, email: string, password: string){
        //     return apiClient
        //     .post('/api/v1/auth/register', {
        //         name: name,
        //         username: email,
        //         password: password,
        //     })
        //     .then((response) => {
        //         this.token = response.data.access_token
        //         localStorage.setItem('access_token', this.token as string)
        //         axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        //         return response
        //     }).catch((error) => {
        //         console.error('Registration error: ', error)
        //         throw error
        //     })
        // }
        // authStore register action
        async register({ firstname, lastname, username, email, password }: { firstname: string, lastname: string, username: string, email: string, password: string }) {
            try {
                const response = await apiClient
                    .post('/api/v1/auth/register', {
                        enable: true,
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        email: email,
                        password: password,
                    })
                this.token = response.data.access_token
                localStorage.setItem('access_token', this.token as string)
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                return response
            } catch (error) {
                console.error('Registration error: ', error)
                throw error
            }
        }
    }
})