<template>
  <div class="select-list-content" id="country-list">
    <md-list class="select-list-wrapper">
      <md-list-item class="select-list-title" @click="isHidden = !isHidden">
        <span class="md-list-item-text">Select Country</span>
        <md-icon>expand_more</md-icon>
      </md-list-item>

      <md-list class="select-list"v-if="!isHidden">
        <country-item
        v-for="country in countries" :key="country.id"
        :country="country">
        </country-item>
      </md-list>
    </md-list>
  </div>
</template>

<script>
import CountryItem from "./CountryItem";
export default {
  name: "CountryList",
  components: {CountryItem},
  data: () => ({
    country: null,
    isHidden: true,
    countries: [
      {
        id: 1,
        name: "Romania"
      },
      {
        id: 2,
        name: "Italy"
      },
      {
        id: 3,
        name: "Germany"
      },
      {
        id: 4,
        name: "United Kingdom"
      },
      {
        id: 5,
        name: "Spain"
      },
      {
        id: 6,
        name: "Japan"
      },
      {
        id: 7,
        name: "Sweden"
      },
      {
        id: 8,
        name: "Finland"
      },
      {
        id: 9,
        name: "Norway"
      },
      {
        id: 10,
        name: "Canada"
      }
    ]
  }),
  methods: {

  }
}
</script>

<style scoped>

.select-list-content {
  width: 100%;
  display: flex;
  flex-direction: column;
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
  height: 200px;
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
