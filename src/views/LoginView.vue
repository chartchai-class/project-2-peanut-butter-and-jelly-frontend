<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import * as yup from 'yup'
import { useField, useForm} from 'vee-validate'
// import { defineComponent, ref } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase';


const messageStore = useMessageStore()
const router = useRouter()
const authStore = useAuthStore()

const validationSchema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required')
})
const { errors, handleSubmit } = useForm({
    validationSchema,
    initialValues:
    {
        email: '',
        password: ''
    }
})

const { value:email }= useField<String>('email')
const { value:password }=useField<String>('password')
const onSubmit = handleSubmit((values) => {
    authStore.login(values.email, values.password)
    .then(() => {
        router.push({ name:'medal-tally-view'})
    }).catch((err) => {
            messageStore.updateMessage('could not login', 'error')
        setTimeout(() =>{
            messageStore.resetMessage()
        }, 3000)
        console.log('error', err)
    })
})
// export default defineComponent({
//     setup(){
//         const email = ref("");
//         const password = ref("");
//         const errorMessage = ref("");

//         const login = async () => {
//             try {
//                 await auth.signInWithEmailAndPassword(email.value, password.value);
//                 console.log("Login successful!");
//                 router.push('/')
//             } catch (error){
//                 console.error("Login error: ", error.message);
//                 errorMessage.value = "Login failed. Please check your credentials.";
//             }
//         };
//         return {email, password, login, errorMessage};
//     }
// });
</script>
<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="onSubmit">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <!-- <div class="mt-2"> -->
                    <InputText type="text" v-model="email" placeholder="Email address" required class="block w-full rounded-md  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6"
                    :error="errors['email']"></InputText>
                    </div>       
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class=text-sm>
                            <a href="#" class="font-semibold text-red-950 hover:text-red-950">Forgot password?</a>
                        </div>
                    </div>
                    <!-- <div class="mt-2">
                        <input id="password" name="password" type="password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6" />
                    </div> -->
                    <InputText v-model="password" type="password" placeholder="Password" required class="block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6" 
                    :error="errors['password']"></InputText>
                </div>
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-red-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">Sign in</button>
                </div>
                <!-- <div v-if="errorMessage" class="text-red-950 text-center">{{ errorMessage }}</div> -->
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <!-- <RouterLink :to="{ name: 'register-view' }" a href="#" class="font-semibold leading-6 text-red-950 hover:text-red-950">Register here</RouterLink> -->
                <a href="#" class="font-semibold leading-6 text-red-950 hover:text-red-950">Register here</a>
            </p>
        </div>
    </div>
</template>