<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navBar">
      <nav>
        <RouterLink to="/">Build</RouterLink>
        <RouterLink to="/race">Race</RouterLink>
      </nav>
    </div>
  </header>
<RouterView />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
 nav {
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(22, 22, 22);
  padding: 1rem;
}
a {
  font-size: 3rem;
}
div {
  margin: 0;
  padding: 0;
 }

</style>
