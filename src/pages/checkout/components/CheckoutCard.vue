<template>
  <div class="checkout-card-content">
    <md-card class="checkout-card">
      <checkout-toolbar></checkout-toolbar>
      <div class="card-container">
        <checkout-select-list id="country-list"></checkout-select-list>
        <checkout-select-list id="country-list"></checkout-select-list>
      </div>
    </md-card>
  </div>
</template>

<script>
import CheckoutToolbar from "./CheckoutToolbar";
import CheckoutSelectList from "./CheckoutSelectList";

export default {
  name: "CheckoutCard",
  components: {CheckoutToolbar, CheckoutSelectList}
}
</script>

<style scoped>

.checkout-card-content {
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  margin-top: 20px;
}

.checkout-card {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#country-list {
  width: 20%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

#county-list {
  width: 20%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

</style>
