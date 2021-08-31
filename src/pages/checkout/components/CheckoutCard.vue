<template>
  <div class="checkout-card-content">
    <md-card class="checkout-card">
      <checkout-toolbar></checkout-toolbar>
      <div class="card-container">
        <app-select>

        </app-select>
      </div>
    </md-card>
  </div>
</template>

<script>
import CheckoutToolbar from "./CheckoutToolbar";
import AppSelect from "../../../components/AppSelect";

export default {
  name: "CheckoutCard",
  components: {AppSelect, CheckoutToolbar},
  data: () => ({

  }),
  methods: {

  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

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
  padding: 20px;
}

</style>
