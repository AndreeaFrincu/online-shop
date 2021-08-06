<template>
  <div class="component-container">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <md-list-item>
      <div class="md-list-item-text">
        <span>{{ product.name }}</span>
        <span>{{ product.quantity }}</span>
      </div>
      <div class="cart-controls">
        <md-button @click="storeDecreaseProd" class="md-icon-button md-list-action">
          <md-icon class="fa fa-minus-circle"></md-icon>
        </md-button>
        <md-button @click="storeIncreaseProd" class="md-icon-button md-list-action">
          <md-icon class="fa fa-plus-circle"></md-icon>
        </md-button>
        <md-button @click="removeItem" class="md-icon-button md-list-action">
          <md-icon class="fa fa-trash"></md-icon>
        </md-button>
      </div>
    </md-list-item>

  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "CartItem",
  props: {
    product: {}
  },
  methods: {
    storeIncreaseProd() {
      let cloneProduct = _.cloneDeep(this.product)
      cloneProduct.quantity++;
      this.$store.commit('setItem', cloneProduct);
    },
    storeDecreaseProd() {
      let cloneProduct = _.cloneDeep(this.product)
      if(this.product.quantity > 1) {
        cloneProduct.quantity--;
        this.$store.commit('setItem', cloneProduct);
      }
      else {
        this.$store.commit('removeItem', this.product);
      }
    },
    removeItem() {
      this.$store.commit('removeItem', this.product);
    }
  }
}
</script>

<style scoped>

.md-list-item-text {
  display: flex;
  flex-direction: row;
}

</style>
