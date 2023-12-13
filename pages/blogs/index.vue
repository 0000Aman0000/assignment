<template>
  <h1 class="flex flex-left"> All  Blogs</h1>
  <p> {{blogStore.blogData.data}}</p>
  
</template>

<script setup>

import {useBlogStore} from '~/store/blogs.ts'
  const blogStore = useBlogStore();
   onBeforeMount( ()=>{
    blogStore.getData()
  })

</script>

<style scoped>

</style>