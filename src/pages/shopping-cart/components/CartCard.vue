<template>
  <div class="cart-card-content">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <md-card>
      <md-card-header>
        <span class="md-subheading">Shopping Cart</span>
      </md-card-header>
      <md-card-content>
        <cart-list></cart-list>

        <div id="cart-total">
          Total price
        </div>
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

.cart-card-content {
  display: flex;
  flex-direction: column;
  margin: 30px 100px;
  padding: 20px;
}

.md-card {
  display: flex;
  flex-direction: column;
}

.md-card-content {
  display: flex;
  flex-direction: column;
}

.cart-list {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

#cart-total {
  display: flex;
}

</style>
