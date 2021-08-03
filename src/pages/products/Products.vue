<template>
  <div class="products">
    <nav-bar></nav-bar>
    <h1>Products</h1>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  components: {NavBar},
  products: 'products',
  data () {
    return {
      title:'Products'
    }
  }
}
</script>

<style scoped>

</style>
