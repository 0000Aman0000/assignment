<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-300 text-white ">
      <NavComponent />
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-300 text-Black py-4 text-center">
      <h1 class="text-green-700">Footer</h1>
    </footer>
  </div>
</template>


<script>
export default {

}
</script>

<style>
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