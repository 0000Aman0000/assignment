<script setup>
import { ref } from 'vue';
import useFirebase from '~/composables/useFirebase';
import { useAuthStore } from '~/store/auths';
const store = useAuthStore();
const comp = useFirebase();
const email = ref('');
const pass = ref('')
async function Do() {
  event.preventDefault();
  console.log('Logged In')
  const data = await comp.logIn(email.value, pass.value);
  store.activate();
  store.name= data.user.email;
  // console.log(store.isActive,store.name);
  navigateTo('/blogs')
  // console.log(data.user.email);
}
</script>
<template>
  <div>


    <form>
      <label for="email">Email / Username : </label><input v-model="email" @input="email = $event.target.value"
        name="email" type="text"><br />
      <label for="password">Password : </label><input v-model="pass" @input="pass = $event.target.value" name="password"
        type="password"><br />

      <button type="button" @click="Do">Sign In</button>
      <p>
        <NuxtLink to="/signup">Don't have an account</NuxtLink>
      </p>

    </form>
  </div>
</template>

