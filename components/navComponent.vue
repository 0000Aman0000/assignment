<script setup lang="ts">

import useFirebase from '~/composables/useFirebase';
import { useAuthStore } from '~/store/auths';
const store = useAuthStore();
const comp = useFirebase();
const { locale } = useI18n();



async function handle() {
  const data = await comp.logOut();
  console.log('Logged Out: ');
  // console.log(data);
  store.isActive = false;
  store.email = '';
}

const lang = ref('English')
function langChange() {
  lang.value = lang.value === 'English' ? 'हिंदी' : 'English'
  locale.value = lang.value
  // console.log(locale.value);
}
</script>

<template>
  <div class="bg-gray-200 text-white text-xl">
    <!-- Left side of Nav -->
    <ul class=" flex flex-wrap float-left  space-x- p-4">
      <li class="nLink  ">
        <NuxtLink to="/">{{ $t("Home") }}</NuxtLink>
      </li>
      <li class="nLink  ">
        <NuxtLink to="/blogs">{{ $t("Posts") }}</NuxtLink>
      </li>
      <li class="nLink  ">
        <NuxtLink to="/contact">{{ $t("Contact") }}</NuxtLink>
      </li>
      <li class="nLink  ">
        <NuxtLink to="/about">{{ $t("About") }}</NuxtLink>
      </li>
    </ul>
    <!-- Right side of Nav -->
    <ul v-if="store.isActive" class="flex flex-wrap float-right space-x-4 p-4">
      <li class="nLink  ">
        <a @click="langChange">{{ lang }}</a>
      </li>
      <!-- <li class="nLink  ">
        <NuxtLink to="/signup">{{ $t("Signup") }}</NuxtLink>
      </li>
      <li class="nLink  ">
        <NuxtLink  to="/login">{{ $t("Signin") }}</NuxtLink>
      </li> -->
      <li  class="nLink  ">
        <a  @click="handle" type="button">{{ $t("Signout") }}</a>
      </li>
    </ul>


    <ul v-else class="flex flex-wrap float-right space-x-4 p-4">
      <li class="nLink  ">
        <a @click="langChange">{{ lang }}</a>
      </li>
      <li class="nLink  ">
        <NuxtLink to="/signup">{{ $t("Signup") }}</NuxtLink>
      </li>
      <li class="nLink  ">
        <NuxtLink  to="/login">{{ $t("Signin") }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style scoped>
 

li:hover{
  font-weight: 700;
  font-size:x-large
}
</style>