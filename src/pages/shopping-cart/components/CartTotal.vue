<template>
  <md-card-content>
    <div id="cart-total">
      Total PRICE: {{getTotalPrice}}
    </div>
  </md-card-content>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "CartTotal",
  computed: {
    ...mapGetters({
      getTotalPrice: 'cart/getTotalPrice'
    })
  }
}
</script>

<style scoped>

</style>
