<template>
  <div class="prod-list">
    <product
      @input="onProductAdded"
      id="product" v-for="prod in getProducts" :key="prod.id"
             :product="prod"></product>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapGetters} from "vuex";
import Product from "./Product";

export default {
  name: "ProdList",
  components: {Product},
  computed: {
    ...mapGetters({
      getProducts: 'products/getProductsPaginated'
    })
  },
  methods: {
    onProductAdded(product) {
      let prodList = _.cloneDeep(this.$store.state.cart.itemsList)
      if(product.title) {
        prodList.push(product)
      }
      this.$store.commit('cart/setItems', prodList)
    }
  }
}
</script>

<style scoped>

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

</style>
