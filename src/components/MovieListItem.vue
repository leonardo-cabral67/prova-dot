<template>
  <li v-for="item in moviesList" :key="item.id" class="listItem">
    <figure class="movieImageContainer">
      <img
        class="movieImageContainer__img"
        :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
        alt="Imagem do filme"
      />
      <figcaption class="movieImageContainer__releaseDate">
        {{ item.release_date }}
      </figcaption>
    </figure>
    <header class="listItem__container">
      <h4>{{ item.title }}</h4>
    </header>
    <p class="listItem__average">Nota: {{ item.vote_average }}</p>
    <p class="listItem__price">R$ 79,99</p>
  </li>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const moviesList = computed(() => store.state.moviesList.moviesList);
store.dispatch("moviesList/loadMoviesList");
</script>

<style>
.listItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.movieImageContainer__img {
  width: 150px;
}
</style>
