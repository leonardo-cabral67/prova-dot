<template>
  <aside class="sideBar" v-if="cartOpen">
    <button class="close" @click="openCart">X</button>
    <ul class="cart">
      <header class="cart__header">
        <h1>Meu Carrinho</h1>
        <p @click="drainOutCart">Esvaziar</p>
      </header>
      <div class="items">
        <ListCartItem />
      </div>
    </ul>
    <footer class="total">
      <div class="total__info">
        <h3>Total -</h3>
        <p>R$ {{ total.toFixed(2) }}</p>
      </div>
      <button>Finalizar compra</button>
    </footer>
  </aside>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ListCartItem from "./ListCartItem.vue";

const store = useStore();
const total = computed(() => store.getters["cart/priceTotal"]);
const drainOutCart = () => store.dispatch("cart/drainOutCart");
const cartOpen = computed(() => store.state.cart.cartOpen);
const openCart = () => store.dispatch("cart/openCart");
</script>

<style>
.close {
  height: 30px;
  width: 30px;
  border-radius: 40%;
}

.items {
  min-height: 400px;
}

.sideBar {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 350px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  height: 550px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.4);
}

.sideBar,
.total button {
  border-bottom-left-radius: 10px;
}

.cart {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  max-height: 600px;
  overflow: auto;
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

.total {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.total__info {
  display: flex;
  flex-flow: row noWrap;
  gap: 30px;
  font-size: 32px;
  padding: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.4);
}

.total button {
  padding: 20px;
  border-bottom-left-radius: 5px;
}

@media (max-width: 767px) {
  .sideBar {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 20%;
    top: 40px;
    width: 350px;
    height: 60%;
    overflow: auto;
    background-color: #fff;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 2px -4px 12px;
  }
  .cart {
    max-width: 95%;
    gap: 5px;
  }

  .close {
    margin-left: 300px;
  }
}
</style>
