<template>
  <div class="prod-wrapper">
    <md-toolbar>
      <span class="md-subheading">Products</span>
    </md-toolbar>
    <div class="prod-list">
      <product id="product" v-for="prod in getProducts" :key="prod.id"
               :product="prod"></product>
    </div>

  </div>
</template>

<script>
import Product from "./Product";
import {mapGetters} from "vuex";
export default {
  name: "ProdWrapper",
  components: {Product},
  computed: {
    ...mapGetters({
      getProducts: 'getProducts'
    })
  }
}
</script>

<style scoped>

.prod-wrapper {
  padding: 20px;
  width: 80%;
}

.prod-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: stretch;
}

#product {
  width: 200px;
  height: 200px;
  margin: 20px;
  align-items: center;
  display: flex;
}

.outer {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.inner {
  width: 400px;
  display: flex;
}

</style>
