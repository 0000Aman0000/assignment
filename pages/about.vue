<template>
    <!-- <p>{{ blog.counter }}</p> -->
    <h1> About Page</h1>
    <!-- <p @click="blogs.increment">{{ blogs.counter }}</p> -->

</template>

<script setup lang="ts">
import {useBlogStore} from '~/store/blogs';
const blogs = useBlogStore()

</script>
