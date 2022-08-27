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
import Cart from "./components/Cart.vue";

const store = useStore();
const teste = computed(() => store.state.moviesList.teste);
</script>

<style>
div {
  display: grid;
  grid-template-columns: 100px, 200px;
}
</style>
