<script setup lang="ts">
  // import { logOut } from '~/cmposables/firebaseAuthentication';
  import useFirebase from '~/composables/useFirebase';
import { useAuthStore } from '~/store/auths';
  const store = useAuthStore();
  const comp = useFirebase();
  async function handle(){
    const data = await comp.logOut();
    console.log('Logged Out: ');
    console.log(data);
    store.isActive=false;
    store.email='';
  }
</script>

<template>
  <div class="bg-gray-600 text-xl text-green-500 h-9 items-center ">
    <!-- Left side of Nav -->
      <ul class=" flex float-left uppercase h-full">
        <li  class=" hover:bg-white w-full">
          <NuxtLink  to="/">Home</NuxtLink>
        </li>
        <li  class=" hover:bg-white">
          <NuxtLink to="/blogs">Blogs</NuxtLink>
        </li>
        <li  class=" hover:bg-white">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li  class=" hover:bg-white">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
      <!-- Right side of Nav -->
      <ul class="flex h-full float-right uppercase">
        <li  class=" hover:bg-white">
          <NuxtLink to="/signup">Sing Up</NuxtLink>
        </li>
        <li class=" hover:bg-white">
          <NuxtLink  to="/login">Sign In</NuxtLink>
        </li>
        <li>
          <button @click="handle" class="hover:bg-white w-full h-full uppercase" type="button">Sign Out</button>
        </li>
      </ul>
    
  </div>
</template>
<style scoped>
.navbar {
  display: flex;
  height: 40px;
  width: 100%;
  font-size:20px;
  background-color: gray;
  
}


.left-nav {
  width: 100%;
 float:left;
  
}


.right-nav {
  width: 100%;
  float:right;
 
}

ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  padding: 2px;
  margin-left: 10px;
}
</style>