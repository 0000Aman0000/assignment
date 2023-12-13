<template>
  <div>
      <header>
        <NavComponent/>
    </header>
      <slot />
    <footer class="fixed">
        <h1>Footer</h1>
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