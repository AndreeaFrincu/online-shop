<template>
  <div class="component-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-card>
      <md-card-header>
        <div class="md-title">Shopping Cart</div>
      </md-card-header>
      <md-card-content>
        <prod-list></prod-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import ProdList from "./ProdList";
export default {
  name: "CartCard",
  components: {ProdList}
}
</script>

<style scoped>

.component-container {
  margin: 20px;
}

.cart-controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>
