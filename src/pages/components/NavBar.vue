<template>
  <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-toolbar class="md-primary">
      <router-link id="link-home" class="links" to="/">Home</router-link>
      <router-link id="link-products" class="links" to="/products">Products</router-link>
      <md-icon id="basket" class="fa fa-shopping-basket"></md-icon>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#link-products, #link-home, #basket {
  color: aliceblue;
  text-decoration: none;
}

#basket {
  display: flex;
  align-items: end;
}

.links {
  padding: 20px;
  font-size: 16px;
}

</style>
