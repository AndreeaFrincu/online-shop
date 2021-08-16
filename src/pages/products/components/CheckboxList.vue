<template>
  <div class="container-content">
    <md-checkbox></md-checkbox>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "CheckboxList",
  components: {},
  props: {
    genres: {}
  },
  computed: {
    ...mapGetters({
    })
  }
}
</script>

<style scoped>

</style>
