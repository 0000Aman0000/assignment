<template>
  <div class="text-center">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>


<script setup lang="ts">
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useAuthStore } from './store/auths';
const store = useAuthStore();

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.activate();
      store.email = user.email;
    }
    else {
      store.deActivate();
      return navigateTo('/login')
    }

  })
})

/**
 * Point to Add in this project
 * 1. Adding Middleware authentication for working on requests
 * 2. Adding User Authentication
 * 3. User can perform create , delete ,update operation on the website
 * 4. Admin can can perform create , delete ,update operation on the website
 * 5. Implement Internationalization using the i18 plugin
 * 6. Fetch data from the api graphQl or any other
 * 7. Replace navcomponent with default layout implemenatation
 * 8.
 */

// import { trackUser } from './cmposables/firebaseAuthentication';

</script>

