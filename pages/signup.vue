<script setup lang="ts">
import { ref } from 'vue';
import useFirebase from '~/composables/useFirebase';
const comp = useFirebase();
const email = ref('');
const pass = ref('')
async function Do() {
    event.preventDefault();
    console.log('Is it')
    const data = await comp.createUser(email.value, pass.value);
    // console.log(data);
}
</script>
<template>
<div class="min-h-screen flex items-center justify-center  bg-gradient-to-r from-green-100 to-green-400">
    <div class="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 class="text-2xl font-extrabold text-gray-800 mb-6">{{ $t("Signup") }}</h2>
        <form class="space-y-4">
            <label for="email" class="block text-m font-medium float-left text-green-600">{{ $t("Email") }}:</label>
            <input v-model="email" @input="email = $event.target.value" name="email" type="text"
                class="mt-1 p-3 w-full rounded-md border border-gray-300">

            <label for="password" class="block text-m font-medium float-left text-green-600">{{ $t("Password") }}:</label>
            <input v-model="pass" @input="pass = $event.target.value" name="password" type="password"
                class="mt-1 p-3 w-full rounded-md border border-gray-300">

            <button type="button" @click="Do"
                class="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
                {{ $t("Signup") }}
            </button>

            <p class="text-center text-gray-600 text-sm ">
                Don't have an account?
                <NuxtLink to="/login" class="text-green-500 hover:underline">{{ $t("Signin") }}</NuxtLink>
            </p>
        </form>
    </div>
</div>
</template>