import apiClient from './AxiosClient'
// import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: 'https://my-json-server.typicode.com/chartchai-class/PBandJ_data',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   }
// })

export default {
  getMedalTally(limit: Number, page: Number) {
    return apiClient.get('/countries?_limit=' + limit + '&_page=' + page)
  },
  getSportList() {
    return apiClient.get('/sports')
  },
  getSport(id: number) {
    return apiClient.get('/sports/' + id)
  },
  getCountry(id: number) {
    return apiClient.get('/countries/' + id)
  }
}
