<script setup lang="ts">
import type { CountryInfo } from '@/types'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import InputText from '@/components/InputText.vue'

import CountryService from '@/services/CountryService'

const countryInfo = ref<CountryInfo>({
    id: 0,
    countryName: '',
    description: '',
    flag: '',
    sports: []
})

const newSport = ref('') // Holds the value of the new sport to add

onMounted(()=> {
  CountryService.getCountry()
    .then((response) => {
        countryInfo.value = response.data
    })
    .catch(()=> {
        router.push({name:'NetworkError'})
    })
})

const router = useRouter()
const store = useMessageStore()

function saveCountry() {
    CountryService.saveCountry(countryInfo.value)
    .then((response) => {
        router.push({
            name: 'CountryDetails',
            params: { id: response.data.id }
        })
        store.updateMessage('You are successfully adding a new country for ' + response.data.countryName, 'success');

        setTimeout(() => {
            store.resetMessage()
        }, 3000)
    })
    .catch(() => {
        router.push({ name: 'NetworkError' })
    })
}


function addSport() {
    if (newSport.value) {
        countryInfo.value.sports.push(newSport.value)
        newSport.value = '' 
    }
}
</script>

<template>
    <div class="event-form">
        <h1 class="text-2xl text-center">Adding new country</h1><br>
        <form @submit.prevent="saveCountry">
            <h3>Country Name: </h3>
            <InputText v-model="countryInfo.countryName" type="text" label="Country Name" />

            <h3>Description of Country: </h3>
            <InputText v-model="countryInfo.description" type="text" label="Description" />

            <h3>Add Sport:</h3>
            <div class="sport-input">
                <InputText v-model="newSport" type="text" placeholder="Enter a sport" />
            </div>
            <ul>
                <li v-for="(sport, index) in countryInfo.sports" :key="index">{{ sport }}</li>
            </ul>

            <button class="button" type="submit">Submit</button>
        </form>
    
    </div>
</template>

<style>
.event-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h1,
h3 {
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 15px;
  font-weight: bold;
}

.field {
  margin-top: 5px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.field:focus {
  outline: none;
  border-color: #007bff;
}

.button {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button:hover {
  background-color: #0056b3;
}

pre {
  margin-top: 20px;
  background-color: #ff0000;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
