<template>
  <div class="cart-card-content">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-card>
      <cart-toolbar></cart-toolbar>
      <cart-list></cart-list>
      <cart-total></cart-total>
    </md-card>
  </div>
</template>

<script>
import CartList from "./CartList";
import CartToolbar from "./CartToolbar";
import CartTotal from "./CartTotal";
export default {
  name: "CartCard",
  components: {CartTotal, CartToolbar, CartList}
}
</script>

<style scoped>

.cart-card-content {
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  margin-top: 20px;
}

.md-card {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.md-card-content {
  width: 97%;
}

</style>
