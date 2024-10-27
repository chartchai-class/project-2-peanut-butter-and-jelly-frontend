import apiClient from "./AxiosClient";
import { type AxiosResponse } from 'axios'

export default{
    getUsers(perPage: Number, page: Number){
        return apiClient.get('/users?_limit='+perPage+'&_page='+page)
    },
    updateUserRole(userId: Number,newRole: string){
        return apiClient.put(`/users/${userId}/role`, { newRole });
    },
    
}