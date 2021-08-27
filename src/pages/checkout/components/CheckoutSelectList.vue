<template>
  <div class="select-list-content">
    <md-list class="select-list-wrapper">
      <md-list-item class="select-list-title" @click="isHidden = !isHidden">
        <span class="md-list-item-text">Select Country</span>
        <md-icon>expand_more</md-icon>
      </md-list-item>

      <md-list class="select-list"
      v-if="!isHidden">
        <checkout-select-item
          v-for="country in getCountries" :key="country.id"
          :country="country"></checkout-select-item>
      </md-list>
    </md-list>
  </div>
</template>

<script>
import CheckoutSelectItem from "./CheckoutSelectItem";
import {mapGetters} from "vuex";

export default {
  name: "CheckoutSelectList",
  components: {CheckoutSelectItem},
  computed: {
    ...mapGetters({
      getCountries: 'checkout/getCountries'
    })
  },
  data: () => ({
    isHidden: false
  }),
  methods: {
    onSelectClicked() {

    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

.select-list-content {
  width: 100%;
  display: flex;
}

.select-list-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.md-list {
  width: 100%;
  text-decoration: none;
}

.md-list-item-text {
  color: #2e7bff;
}

.select-list {
  height: 300px;
  overflow: auto;
}

.select-list::-webkit-scrollbar {
  width: 1em;
}

.select-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

.select-list::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
