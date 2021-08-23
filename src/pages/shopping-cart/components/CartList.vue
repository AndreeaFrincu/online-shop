<template>
  <md-card-content>
    <div class="cart-list-content">
      <cart-product id="cart-product" v-for="prod in getItems" :key="prod.id"
      :product="prod"></cart-product>
    </div>
  </md-card-content>
</template>

<script>
import {mapGetters} from "vuex";
import CartProduct from "./CartProduct";

export default {
  name: "CartList",
  components: {CartProduct},
  computed: {
    ...mapGetters({
        getItems: 'cart/getItems'
      })
  }
}
</script>

<style scoped>

.cart-list-content {
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
}

.md-list {
  display: flex;
  flex-direction: column;
}

.md-list::-webkit-scrollbar {
  width: 1em;
}

.md-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

.md-list::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
