<template>
  <div class="cart-product">
    <span>Product {{ product.title }}</span>
    <span>x {{ product.quantity }}</span>
    <span>{{ product.price }} $</span>
    <div class="cart-controls">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <md-button @click="decreaseQuantity" class="md-icon-button md-list-action">
        <md-icon class="fa fa-minus-circle"></md-icon>
      </md-button>
      <md-button @click="increaseQuantity" class="md-icon-button md-list-action">
        <md-icon class="fa fa-plus-circle"></md-icon>
      </md-button>
      <md-dialog-confirm
        :md-active.sync="active"
        md-title="Are you sure you want to remove the item from your cart?"
        md-content="Choose yes or no"
        md-confirm-text="Yes"
        md-cancel-text="No"
        @md-cancel="onNo"
        @md-confirm="onYes" />

      <md-button @click="onYes" class="md-icon-button md-list-action">
        <md-icon class="fa fa-trash"></md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "CartProduct",
  data: () => ({
    active: false
  }),
  props: {
    product: {}
  },
  methods: {
    decreaseQuantity() {
      let cloneProduct = _.cloneDeep(this.product)
      const currentPrice = cloneProduct.price
      const initialPrice = cloneProduct.price / cloneProduct.quantity
      if(this.product.quantity > 1) {
        cloneProduct.quantity--
        cloneProduct.price = currentPrice - initialPrice
        this.$store.commit('cart/setItem', cloneProduct)
      }
      else {
        this.active = true
      }
    },
    increaseQuantity() {
      let cloneProduct = _.cloneDeep(this.product)
      const price = cloneProduct.price
      cloneProduct.quantity++
      cloneProduct.price = Math.floor(price/(cloneProduct.quantity - 1)) * cloneProduct.quantity
      this.$store.commit('cart/setItem', cloneProduct)
    },
    onYes() {
      this.$store.commit('cart/removeItem', this.product)
    },
    onNo() {

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
