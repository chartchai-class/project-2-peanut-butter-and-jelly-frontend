<script setup lang="ts">
  import { ref, onMounted, computed, watchEffect } from 'vue'
  import UsersService from '@/services/UsersService';
  import type { User } from '@/types';
  import { useRouter,useRoute } from 'vue-router';
  import { useMessageStore } from '@/stores/message';
  import { storeToRefs } from 'pinia';
 

  const router=useRouter()
  const route=useRoute()
  const messageStore=useMessageStore()
  const users=ref<User[] | null>(null)
  const totalUsers=ref(0)

const page = computed(() => Number(route.query.page) || 1);
const perPage=computed(()=> Number(route.query.perPage) || 3);

  const hasNexPage = computed(() => {
  const totalPages = Math.ceil(totalUsers.value / perPage.value)
  return page.value < totalPages
})

onMounted(()=>{
  fetchUsers();
})

watchEffect(()=>{
  fetchUsers();
})

function fetchUsers(){
  UsersService.getUsers(perPage.value,page.value)
  .then((response)=>{
    users.value=response.data;
    totalUsers.value=Number(response.headers['x-total-count'])
    console.log(totalUsers.value)
  })
  .catch(()=>{
    router.push({name:'NetworkError'});
  })
}

function updateRole(userId: number) {
  const user = users.value?.find((u) => u.id === userId);
  
  if (user) {
    // Determine the new role based on the current role
    let newRole: string;
    if (user.roles.includes('ROLE_ADMIN')) {
      newRole = 'ROLE_USER'; // Change to ROLE_USER if currently ROLE_ADMIN
    } else {
      newRole = 'ROLE_ADMIN'; // Change to ROLE_ADMIN if currently ROLE_USER
    }

    UsersService.updateUserRole(userId, newRole)
      .then(() => {
        // Update user's role in the local state
        user.roles = [newRole]; // Set the new role in the user's roles
        messageStore.updateMessage('Success Update', 'success');
        setTimeout(() => {
          messageStore.resetMessage();
        }, 3000);
      })
      .catch(() => {
        messageStore.updateMessage('Success Update', 'error');
        setTimeout(() => {
          messageStore.resetMessage();
        }, 3000);
      });
  }
}

function upgrade(userId: number) {
  updateRole(userId); // Call updateRole which will toggle the role
}

function downgrade(userId: number) {
  updateRole(userId); // Call updateRole which will toggle the role
}


</script>

<template>
  <div
    class="bg-scroll bg-no-repeat bg-cover bg-center text-center h-screen bg-gray-50"
  >
    <div class="flex flex-col items-center">
      <h1 class="font-poppins mt-4 font-semibold text-2xl text-brown-800 mb-8">
        Users Dashboard
      </h1>
      <div class="overflow-x-auto">
        <table
          class="table-auto min-w-full bg-white rounded border-separate border-spacing-y-3 shadow-lg"
        >
          <thead
            class="bg-brown-900 text-left tracking-wider text-white"
          >
            <tr>
              <th class="p-3 text-center">User name</th>
              <th class="p-2 text-center">Email</th>
              <th class="p-3 text-center">Role</th>
              <th class="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td class="p-3">{{ user.username }}</td>
              <td class="p-3">{{ user.email }}</td>
              <td class="p-3">{{ user.roles[0] }}</td>
              <td class="p-3">
                <button
                  v-if="user.roles.includes('ROLE_USER')"
                  class="text-brown-700 hover:text-red-900"
                  @click="upgrade(user.id)"
                >
                  Upgrade
                </button>
                <button
                  v-else
                  @click="downgrade(user.id)"
                  class="text-red-700 hover:text-red-900"
                >
                  Downgrade
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex pb-28 pt-8 pagination">
          <RouterLink
            class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-brown-700 border border-gray-300 rounded-lg hover:bg-red-700 shadow-lg transform transition duration-300 ease-in-out"
            id="page-prev"
            :to="{ name: 'users', query: { page: page - 1, perPage: perPage } }"
            rel="prev"
            v-if="page != 1"
          >
            &#60; Prev
          </RouterLink>

          <RouterLink
            id="page-next"
            class="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-white bg-brown-700 border border-gray-300 rounded-lg hover:bg-red-700 shadow-lg transform transition duration-300 ease-in-out"
            :to="{ name: 'users', query: { page: page + 1, perPage: perPage } }"
            rel="next"
            v-if="hasNexPage"
          >
            Next Page &#62;
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  width: 900px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.text-brown-700 {
  color: #5f3b3b;
}

.bg-brown-700 {
  background-color: #5f3b3b;
}

.bg-brown-900 {
  background-color: #3e1f1f;
}
</style>
