<script setup lang="ts">
import InputText from '@/components/InputText.vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth';
import { useMessageStore } from '@/stores/message';
import { useRouter } from 'vue-router';
import { auth } from '@/firebase';

const messageStore = useMessageStore();
const router = useRouter();
const authStore = useAuthStore();

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const { errors, handleSubmit } = useForm({
    validationSchema,
    initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    },
});

const { value: name } = useField<string>('name');
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');
const { value: confirmPassword } = useField<string>('confirmPassword');

const onSubmit = handleSubmit(async (values) => {
    try {
        await authStore.register(values.name, values.email, values.password);
        messageStore.updateMessage('Registration successful', 'success');
        setTimeout(() => {
            messageStore.resetMessage();
            router.push({ name: 'login-view' });
        }, 3000);
    } catch (err) {
        messageStore.updateMessage('Could not register', 'error');
        setTimeout(() => {
            messageStore.resetMessage();
        }, 3000);
        console.error('Registration error:', err);
    }
});
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="onSubmit">
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <InputText v-model="name" placeholder="Your Name" required class="block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6" :error="errors['name']" />
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <InputText v-model="email" type="email" placeholder="Email address" required class="block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6" :error="errors['email']" />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Input password</label>
                    <InputText v-model="password" type="password" placeholder="Password" required class="block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6" :error="errors['password']" />
                </div>
                <div>
                    <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                    <InputText v-model="confirmPassword" type="password" placeholder="Confirm Password" required class="block w-full rounded-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-950 sm:text-sm sm:leading-6" :error="errors['confirmPassword']" />
                </div>
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-red-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">Sign up</button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <RouterLink :to="{ name: 'login-view' }" class="font-semibold leading-6 text-red-950 hover:text-red-950">Click to Login</RouterLink>
            </p>
        </div>
    </div>
</template>
