<template>
  <div class="component-container">
    <md-list class="md-triple-line">
      <prod-item v-for="product in $store.state.productsList"
      :product="product"></prod-item>
    </md-list>
  </div>
</template>

<script>
import ProdItem from "./ProdItem";
export default {
  name: "ProdList",
  components: {ProdItem},
  // data: function (){
  //   return {
  //     productsList: [
  //       "produs1", "produs2", "produs3"
  //     ]
  //   }
  // }
}
</script>

<style scoped>

</style>
