<template>
  <BlogComp/>
</template>

<script setup>
const route = useRoute();

const data =  await $fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
// const newData = await data.json();
// console.log(data)
               
</script>

<style>

</style>