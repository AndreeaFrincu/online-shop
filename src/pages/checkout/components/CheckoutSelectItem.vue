<template>
  <div class="select-item-content">
    <md-list-item class="select-item" @click="onItemSelected">{{ country.name }}</md-list-item>
  </div>
</template>

<script>
export default {
  name: "CheckoutSelectItem",
  props: {
    country: {}
  },
  methods: {
    onItemSelected() {

    }
  }
}
</script>

<style scoped>

.select-item-content {
  width: 100%;
  display: flex;
}

.select-item {
  width: 100%;
}

</style>
