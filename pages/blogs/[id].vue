

<template>
  <section class="container mx-auto p-4 md:p-8 mt-4">
    <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
      <h2 class="text-xl  mb-4">Current Blog Id <b class="text-green-600 text-3xl">{{ data.id }}</b></h2>
      <div class="grid grid-cols-1 md:grid-cols-2  gap-4">
        <div class="bg-gray-200 p-4 rounded-lg">
          <h3 class="text-xl font-semibold mb-6">{{ data.title }}</h3>
          <p class="text-gray-700"> Written by <b class="text-green-600 text-3xl">{{ data.userId }}</b></p>
        </div>
        <div class="bg-gray-200 p-4 rounded-lg">

          <p class="text-gray-700">{{ data.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">



const data: unknown = await $fetch(`https://jsonplaceholder.typicode.com/posts/${useRoute().params.id}`)
// console.log("🚀 ~ file: [id].vue:23 ~ data:", data)
</script>
