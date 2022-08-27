<template>
  <header class="pageHeader">
    <div class="pageHeader__container">
      <h1 class="pageHeader__logo">
        Movies
        <img
          src="../assets/icons/cinema.png"
          alt="ícone logo"
          class="icone__logo"
        />
      </h1>

      <div class="inputContainer">
        <input class="inputContainer__input" placeholder="Digite Algo" />
        <i class="fa-solid fa-magnifying-glass inputContainer__lupa"></i>
      </div>

      <div class="buttons__container">
        <button class="buttons buttons__container--heart">
          <i class="fa-solid fa-heart fa-2x"></i>
        </button>
        <button class="buttons buttons__container--cart" @click="cartOpen">
          <i class="fa-solid fa-cart-shopping fa-2x"></i>
          <p class="cartLength">{{ cartLength }}</p>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const cartOpen = () => store.dispatch("cart/openCart");
const cartLength = computed(() => store.getters["cart/cartLength"]);
</script>

<style>
.icone__logo {
  width: 50px;
}

.fa-heart {
  width: 90px;
}
.pageHeader__logo {
  color: #fff;
}
.pageHeader {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pageHeader__container {
  background: var(--color-main);
  width: 100%;
  height: 60px;
  padding: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}

.pageHeader__logo {
  font-size: 30px;
  font-weight: 700;
  color: #1f220f;
}
.button__icon {
  width: 70px;
  height: 70px;
}

.inputContainer {
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 5px;
}

.inputContainer__lupa {
  cursor: pointer;
}
.inputContainer__input {
  width: 300px;
  padding: 10px;
  border: none;
  outline: none;
  background: none;
}

.buttons__container button {
  background: none;
}
.buttons__container--cart {
  position: relative;
}
.buttons__container button:hover {
  background: none;
}
.buttons__container button i {
  background: none;
  cursor: pointer;
}

.cartLength {
  position: relative;
  top: -45px;
  left: 12px;
  width: 20px;
  height: 20px;
  background: yellow;
  color: black;
  border-radius: 50%;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 700;
}

.fa-heart:hover {
  color: #f00;
}
.fa-cart-shopping:hover {
  color: grey;
}

@media (max-width: 767px) {
  .pageHeader__container {
    height: auto;
    gap: 30px;
  }
  h1 {
    font-size: 20px;
  }
  .icone__logo {
    width: 40px;
  }
}
</style>
