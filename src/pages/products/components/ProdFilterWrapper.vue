<template>
  <div class="prod-filter-wrapper-content">
    <md-card>
      <genres-filter></genres-filter>
      <prod-wrapper></prod-wrapper>
    </md-card>
  </div>
</template>

<script>
import ProdWrapper from "./ProdWrapper";
import GenresFilter from "./GenreFilterList";
import _ from "lodash";
export default {
  name: "ProdFilterWrapper",
  components: {GenresFilter, ProdWrapper}
}
</script>


<style scoped>

.prod-filter-wrapper-content {
  /*padding-top: 60px;*/
}

.md-card {
  display: flex;
  flex-direction: row;
  margin: 30px 100px;
}

</style>
