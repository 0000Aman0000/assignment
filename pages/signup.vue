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
    console.log(data);
}
</script>

<template>
    <form>
        <div>
            <label for="email">Email</label>

            <input type="email" name="email" v-model="email" @input="email = $event.target.value">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" name="password" v-model="pass" @input="pass = $event.target.value">
        </div>


        <button type="submit" @click="Do">Sign Up</button>
        <p>
            <NuxtLink to="/login">
                Already have an account! </NuxtLink>
        </p>
    </form>
</template>
