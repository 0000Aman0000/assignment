<template>
  <div>
    <!-- Hero Section -->
    <section class=" bg-gradient-to-r from-green-100 to-green-400 text-gray text-center py-16">
      <h1 class="text-4xl font-bold mb-4">Welcome to Your Website</h1>
      <p class="text-lg">Explore and discover amazing things!</p>
    </section>

    <!-- Features Section -->
    

    <!-- Call to Action Section -->
    <section class=" bg-gradient-to-r from-green-100 to-green-400 text-gray text-center py-16">
      <h2 class="text-2xl font-bold mb-4">Ready to get started?</h2>
      <p class="text-lg mb-5">Sign up now and join our community!</p>
      <NuxtLink to="/login" class="bg-white  uppercase text-green-500 px-8 py-2 rounded-full mt-4 hover:bg-green-600 hover:text-white">{{$t("Signup")}}</NuxtLink>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  
})
</script>