<template>
  <Header />
  <ListOfMovies />
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ListOfMovies from "./components/ListMovies.vue";
import MovieListItem from "./components/MovieListItem.vue";
import Header from "./components/Header.vue";

const store = useStore();
const teste = computed(() => store.state.moviesList.teste);
</script>
