<template>
  <div class="genres-wrapper">
    <md-toolbar>
      <span class="md-subheading">Genres</span>
    </md-toolbar>
    <div class="genres-list">
      <genres-filter-list
        @input="onGenreSelected"
        v-for="genre in getGenres" :key="genre.id"
                          :genres="genre"></genres-filter-list>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import GenresFilterList from "./GenresFilterList";
export default {
  name: "GenresFilter",
  components: {GenresFilterList},
  computed: {
    ...mapGetters({
      getGenres: 'getGenres'
    })
  },
  methods: {
    onGenreSelected({value, genre}){
      let genreList = _.cloneDeep(this.$store.state.products.selectedGenreList)
      if(value){
        genreList.push(genre)
      }
      else {
        genreList = genreList.filter(item => item.id !== genre.id)
      }
      this.$store.commit('setSelectedGenreList', genreList)
    }
  }
}
</script>

<style scoped>

.genres-wrapper {
  padding: 20px;
  width: 20%;
}

#genres-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.genres-list {
  padding-left: 15px;
  height: 200px;
  width: 100%;
  overflow-y: auto;
}

.genres-list::-webkit-scrollbar {
  width: 1em;
}

.genres-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

.genres-list::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
