<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
/*#nav {*/
/*  background-color: #51e8a3;*/
/*}*/

#nav a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
