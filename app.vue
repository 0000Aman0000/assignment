<template>
  <div class="text-center bg-gradient-to-r from-green-100 to-green-400">
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
      // abortNavigation('/login'&&'/signup')
    }
    else {
      store.deActivate();
      return navigateTo('/login')
    }

  })
})

</script>
