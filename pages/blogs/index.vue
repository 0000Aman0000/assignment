<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">All Blogs</h1>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <li v-for="item in products" :key="item.id">
        <NuxtLink :to="`/blogs/${item.id}`">
          <div class="bg-white rounded p-4">
            <div class="flex items-center mb-2">
              <p class="text-sm text-gray-500 ">Blog</p>
              <div class="ml-2">{{ item.id }}</div>
            </div>
            <h1 class="text-lg font-bold">{{ item.title }}</h1>
            <div class="text-gray-600">by user Id: {{ item.userId }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { useBlogStore } from '~/store/blogs.ts'
const blogStore = useBlogStore();
const products = ref([])
onBeforeMount(async () => {
  // const fetchedData=
  products.value = await blogStore.getData();
})

</script>

<style scoped></style>