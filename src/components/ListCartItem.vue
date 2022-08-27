<template>
  <li v-for="item in cartList" :key="item.id">
    <figure>
      <img
        :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
        :alt="`Poster do filme ${item.title}`"
      />
      <figcaption>
        <h4>{{ item.title }}</h4>
        <!-- <p>{{ item.quantity }}</p> -->
        <p>{{ item.price }}</p>
      </figcaption>
    </figure>
  </li>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const cartList = computed(() => store.state.cart.cartList);
</script>

<style>
img {
  width: 100px;
}
</style>
