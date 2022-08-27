<template>
  <ul class="listMovies">
    <MovieListItem />
  </ul>
</template>

<script setup>
import MovieListItem from "./MovieListItem.vue";
</script>

<style>
.listMovies {
  display: flex;
  flex-flow: row wrap;
  max-width: 900px;
  margin: 0 auto;
  justify-content: center;
  gap: 20px;
}

/* @media */
</style>
