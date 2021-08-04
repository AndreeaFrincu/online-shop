<template>
  <div class="component-container">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <md-list-item>
      <div class="md-list-item-text">
        <span>{{product}}</span>
        <span>{{ $store.state.counter }}</span>
      </div>
      <div class="cart-controls">
        <md-button @click="storeDecreaseProd" class="md-icon-button md-list-action">
          <md-icon class="fa fa-minus-circle"></md-icon>
        </md-button>
        <md-button @click="storeIncreaseProd" class="md-icon-button md-list-action">
          <md-icon class="fa fa-plus-circle"></md-icon>
        </md-button>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="fa fa-trash"></md-icon>
        </md-button>
      </div>
    </md-list-item>

  </div>
</template>

<script>
import store from "../../../store";

export default {
  name: "ProdItem",
  props: {
    product: {
    }
  },
  methods: {
    storeIncreaseProd() {
      store.commit('increaseProd');
    },
    storeDecreaseProd() {
      store.commit('decreaseProd');
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
