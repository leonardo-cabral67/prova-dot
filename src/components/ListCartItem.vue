<template>
  <li v-for="item in cartList" :key="item.movie.id" class="cartItem">
    <figure class="movieContainer">
      <img
        :src="`https://image.tmdb.org/t/p/original${item.movie.poster_path}`"
        :alt="`Poster do filme ${item.movie.title}`"
      />
      <figcaption class="movieInfos">
        <h4>{{ item.movie.title }}</h4>
        <h3>{{ item.quantity }}</h3>
        <p>R${{ (item.movie.popularity / 10).toFixed(2) }}</p>
      </figcaption>

      <button @click="excluir(item.movie.id)">
        <i class="fa-solid fa-trash" @click="excluir(item.movie.id)"></i>
      </button>
    </figure>
  </li>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
const store = useStore();

const excluir = (movie) => store.dispatch("cart/deleteCartItem", movie);
const increaseButton = (quantity) =>
  store.dispatch("cart/INCREASE_QUANTITY", quantity);

const cartList = computed(() => store.state.cart.cartList);
const total = computed(() => {});
</script>

<style>
.movieContainer,
.cartItem {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 20px;
}

.movieContainer img {
  width: 60px;
  height: 60px;
}

.movieInfos {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

.movieInfos h3 {
  color: #007;
}

.movieInfos p {
  font-weight: 700;
  width: 170px;
  color: var(--color-main);
}

.movieInfos h4 {
  max-width: 10ch;
  min-width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
}

@media (min-width: 767px) {
  .movieInfos {
    flex-flow: column;
  }
}
</style>
