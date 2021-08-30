<template>
  <div class="select-list-content" id="country-list">
    <md-list class="select-list-wrapper">
      <md-list-item class="select-list-title" @click="isHidden = !isHidden">
        <span class="md-list-item-text">Select Region</span>
        <md-icon>expand_more</md-icon>
      </md-list-item>

      <region-item class="select-list" v-if="!isHidden" #[getCurrentCountry]="{countryRegions}">
        <md-list>
          <md-list-item v-for="region in countryRegions" :key="region"
                        @click="onRegionClicked">
            {{ region }}
          </md-list-item>
        </md-list>
      </region-item>
    </md-list>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import RegionItem from "./RegionItem";
export default {
  name: "RegionList",
  components: {RegionItem},
  computed: {
    ...mapGetters({
      getCurrentCountry: 'checkout/getCurrentCountry'
    })
  },
  methods: {
    onRegionClicked() {

    }
  },
  props: {},
  data: () => ({
    isHidden: true
  })
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
