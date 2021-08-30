<template>
  <div class="country-item">
      <md-list-item class="select-item" @click="onItemSelected">{{ country.name }}</md-list-item>
  </div>
</template>

<script>
export default {
  name: "CountryItem",
  props: {
    country: {}
  },
  methods: {
    onItemSelected() {
      let countryName = this.country.name.toLowerCase()
      this.$store.commit('checkout/setCountry', countryName)
    }
  },
  data: () => ({
  })
}
</script>

<style scoped>

.country-item {
  width: 100%;
  display: flex;
}

.select-item {
  width: 100%;
  display: flex;
}

</style>
