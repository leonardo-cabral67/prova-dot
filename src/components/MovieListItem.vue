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
      <button class="buttons button__heart">
        <i class="fa-solid fa-heart fa-lg"></i>
      </button>
    </figure>
    <header class="listItem__container">
      <h4 class="listItem__title">{{ item.title }}</h4>
    </header>
    <div class="listItem__average">
      <img src="../assets/icons/black-star.png" alt="ícone de estrela" />
      <p>{{ item.vote_average.toFixed(1) }}</p>
    </div>
    <p class="listItem__price">R$ {{ item.vote_average * 10 }}</p>
    <button @click="buyMovie(item)" class="listItem__button">adicionar</button>
  </li>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const cartList = store.state.cart.cartList;
const moviesList = computed(() => store.state.moviesList.moviesList);
store.dispatch("moviesList/loadMoviesList");
const buyMovie = (item) => {
  store.dispatch("cart/addToCart", {
    movie: item,
    quantity: 1,
  });
};
</script>

<style>
.listItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  text-align: center;
  border: 1px solid #0000004d;
  gap: 4px;
  margin-top: 60px;
}

.listItem:hover {
  box-shadow: -2px -2px 12px rgb(0, 0, 0, 0.8);
}

.listItem,
.movieImageContainer__releaseDate {
  border-radius: 5px;
}

.movieImageContainer {
  position: relative;
}

.movieImageContainer__img {
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.movieImageContainer__releaseDate {
  width: 200px;
  margin: 0 auto;
  padding: 20px 0 20px 0;
  position: absolute;
  bottom: 4px;

  color: #fff;

  font-size: 16px;
  font-weight: 300;

  opacity: 0.3;
}
.movieImageContainer__releaseDate:hover {
  background: #000011a9;
  opacity: 0.9;
  font-weight: 900;
}

.listItem__title {
  padding: 8px;
  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.listItem__average {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
}
.listItem__average img {
  width: 20px;
  margin-top: -4px;
}
.listItem__price {
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 6px;
}
.listItem__button {
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.button__heart {
  background: unset;
  position: absolute;
  top: 8px;
  right: -30px;
}
.button__heart:hover {
  background: none;
}

.fa-heart {
}
</style>
