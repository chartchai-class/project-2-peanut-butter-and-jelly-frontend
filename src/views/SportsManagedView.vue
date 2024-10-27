<script setup lang="ts">
import type { SportsInfo } from '@/types';
import { MedalType } from '@/types';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import InputText from '@/components/InputText.vue';
import SportService from '@/services/SportService';

const sportsInfo = ref<SportsInfo>({
    id: 0,
    sportName: '',
    eventCategory: '',
    medalType: MedalType.GOLD,
    medalCount: 0,
});

const router = useRouter();
const store = useMessageStore();

onMounted(() => {
    SportService.getSportList()
        .then((response) => {
            if (response.data.length > 0) {
                sportsInfo.value = response.data[0]; 
            }
        })
        .catch(() => {
            router.push({ name: 'NetworkError' });
        });

});

// function saveSport() {
//     SportService.saveSport(sportsInfo.value)
//         .then((response) => {
//             router.push({
//                 name: 'SportDetails',
//                 params: { id: response.data.id }
//             });
//             store.updateMessage(`Sport details added successfully for ${response.data.sportName}`, 'success');

//             setTimeout(() => {
//                 store.resetMessage();
//             }, 3000);
//         })
//         .catch(() => {
//             router.push({ name: 'NetworkError' });
//         });
// }
function saveSport() {
    SportService.saveSport(sportsInfo.value)
    .then((response) => {
        router.push({
            name: 'SportDetails',
            params: { id: response.data.id }
        })
        store.updateMessage('You are successfully adding a new sport detail for ' + response.data.countryName, 'success');

        setTimeout(() => {
            store.resetMessage()
        }, 3000)
    })
    .catch(() => {
        router.push({ name: 'NetworkError' })
    })
}

</script>
<template>
    <div class="event-form">
        <h1 class="text-2xl text-center">Adding New Sport</h1><br>
        <form @submit.prevent="saveSport">
            <h3>Sport Name: </h3>
            <InputText v-model="sportsInfo.sportName" type="text" label="Sport Name" />

            <h3>Event Category: </h3>
            <InputText v-model="sportsInfo.eventCategory" type="text" label="Event Category" />

            <h3>Medal Type: </h3>
            <select v-model="sportsInfo.medalType">
                <option :value="MedalType.GOLD">Gold</option>
                <option :value="MedalType.SILVER">Silver</option>
                <option :value="MedalType.BRONZE">Bronze</option>
            </select>

            <h3>Medal Count: </h3>
            <InputText v-model="sportsInfo.medalCount" type="number" label="Medal Count" />

            <button class="button" type="submit">Submit</button>
        </form>
    </div>
</template>
