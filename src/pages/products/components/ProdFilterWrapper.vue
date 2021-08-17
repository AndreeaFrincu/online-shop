<template>
  <div class="container-content">
    <md-card>
      <genres-filter></genres-filter>
      <prod-wrapper></prod-wrapper>
    </md-card>
  </div>
</template>

<script>
import ProdWrapper from "./ProdWrapper";
import GenresFilter from "./GenresFilter";
export default {
  name: "ProdFilterWrapper",
  components: {GenresFilter, ProdWrapper}
}
</script>

<style scoped>

.md-card {
  display: flex;
  flex-direction: row;
  margin: 30px 100px;
}

</style>
