<template>
  <Header />
  <div class="app">
    <ListOfMovies />
    <Cart />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ListOfMovies from "./components/ListMovies.vue";
import MovieListItem from "./components/MovieListItem.vue";
import Header from "./components/Header.vue";
import Cart from "./components/Cart.vue";

const store = useStore();
</script>

<style>
.app {
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  align-content: center;
  width: 100%;
}
</style>
