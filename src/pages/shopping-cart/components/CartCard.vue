<template>
  <div class="component-container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-card>
      <md-card-header>
        <div class="md-title">Shopping Cart</div>
      </md-card-header>
      <md-card-content>
        <cart-list></cart-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import CartList from "./CartList";
export default {
  name: "CartCard",
  components: {CartList}
}
</script>

<style scoped>

.component-container {
  margin: 30px 100px;
  height: 600px;
  overflow: hidden;
}

</style>
