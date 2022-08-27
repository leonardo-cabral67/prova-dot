<template>
  <aside class="sideBar">
    <ul class="cart">
      <header class="cart__header">
        <h1>Meu Carrinho</h1>
        <p @click="drainOutCart">esvaziar Carrinho</p>
      </header>
      <ListCartItem />
    </ul>
    <footer class="total">
      <div>
        <h3>Total</h3>
        <p>- {{ total }}</p>
      </div>
    </footer>
  </aside>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ListCartItem from "./ListCartItem.vue";

const store = useStore();
const total = computed(() => store.getters.priceTotal);
const drainOutCart = () => store.dispatch("cart/drainOutCart");
</script>

<style>
.sideBar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  border: 1px solid #000;
}

.cart {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
}

.cart__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.cart__header p {
  color: #00f;
  cursor: pointer;
}

.cart__header p:hover {
  text-decoration: underline;
}
.cart__header h1 {
  font-weight: 700;
  font-size: 23px;
}
</style>
