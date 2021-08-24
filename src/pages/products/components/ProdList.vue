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
      let index = prodList.length
      const price = product.price
      const prod = prodList.find(elem => {
        return elem.title === product.title})

      console.log(prod)

      // if(prodList.some(prod => prod.id === product.id)) {
      //
      //   prodList[index - 1].quantity++
      //   // prodList[index - 1].price = Math.floor(price/(prodList[product.id - 1].quantity - 1)) * prodList[product.id - 1].quantity
      //   console.log(product.id, product.title)
      // }
      // else {
      //   prodList.push(product)
      // }
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
