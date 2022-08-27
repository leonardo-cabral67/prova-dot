<template>
  <header class="pageHeader">
    <h1 class="pageHeader__logo">Movies zone</h1>

    <div class="pageHeader__inputContainer">
      <input class="pageHeader__input" placeholder="Digite Algo" />
    </div>

    <div class="pageHeader__buttons">
      <button>S2</button>
      <button>+=</button>
    </div>
  </header>
</template>

<script setup></script>

<style>
.pageHeader {
  width: 100vw;
  margin: 0 auto;
  height: 80px;
  padding: 12px 0;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  justify-items: center;
  align-items: center;
  margin-bottom: 70px;

  background: var(--color-main);
}

.pageHeader__logo {
  font-size: 30px;
  font-weight: 700;
  color: #1f220f;
}

.pageHeader__inputContainer {
  width: 350px;
  background: #fff;
  border-radius: 5px;
}

.pageHeader__input {
  width: 300px;
  padding: 10px;
  border: none;
  outline: none;
  background: none;
}
</style>
