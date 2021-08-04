<template>
  <div class="component-container">
    <md-list class="md-triple-line">
      <prod-item></prod-item>
      <prod-item></prod-item>
      <prod-item></prod-item>
    </md-list>
  </div>
</template>

<script>
import ProdItem from "./ProdItem";
export default {
  name: "ProdList",
  components: {ProdItem}
}
</script>

<style scoped>

</style>
