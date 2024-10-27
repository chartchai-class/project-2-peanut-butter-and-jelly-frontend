import { type AxiosResponse } from 'axios'
import apiClient from './AxiosClient'
import type { CountryInfo } from '@/types'


export default {
  getCountries(perPage: Number, page: Number) {
    return apiClient.get('/countries?_limit=' + perPage + '&_page=' + page)
  },
  getCountry() {
    return apiClient.get('/countries')
  },
  saveCountry(country: CountryInfo){
    return apiClient.post('/countries',country)
  },
  getCountriesByKeyword(keyword:string,perPage:number,page:number):
  Promise<AxiosResponse<CountryInfo[]>>{
    return apiClient.get<CountryInfo[]>('/countries?countryName='+keyword+'&_limit='+perPage+'&_page='+page)
  }
}