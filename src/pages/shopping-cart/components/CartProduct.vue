<template>
  <div class="cart-product">
    <span>Product {{ product.title }}</span>
    <span>Quantity {{ product.quantity }}</span>
    <span>Price {{ product.price }}</span>
    <div class="cart-controls">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <md-button @click="decreaseQuantity" class="md-icon-button md-list-action">
        <md-icon class="fa fa-minus-circle"></md-icon>
      </md-button>
      <md-button @click="increaseQuantity" class="md-icon-button md-list-action">
        <md-icon class="fa fa-plus-circle"></md-icon>
      </md-button>
      <md-button @click="removeItem" class="md-icon-button md-list-action">
        <md-icon class="fa fa-trash"></md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "CartProduct",
  props: {
    product: {}
  },
  methods: {
    decreaseQuantity() {
      let cloneProduct = _.cloneDeep(this.product)
      if(this.product.quantity > 1) {
        cloneProduct.quantity--;
        this.$store.commit('cart/setItem', cloneProduct)
      }
      else {
        this.$store.commit('cart/removeItem', this.product)
      }
    },
    increaseQuantity() {
      let cloneProduct = _.cloneDeep(this.product)
      cloneProduct.quantity++;
      this.$store.commit('cart/setItem', cloneProduct)
      this.$store.commit('cart/setPrice', cloneProduct)
    },
    removeItem() {
      this.$store.commit('cart/removeItem', this.product)
    }
  }
}
</script>

<style scoped>

.cart-product {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

span {
  padding-top: 10px;
}

</style>
