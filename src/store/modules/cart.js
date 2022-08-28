const state = {
  cartList: [],
  cartOpen: false,
};

const mutations = {
  PUSH_MOVIE_TO_CART(state, { movie, quantity }) {
    const cartItem = state.cartList.find((item) => item.movie.id === movie.id);
    if (cartItem) {
      cartItem.quantity += quantity;
      cartItem.movie.popularity *= cartItem.quantity;
      return;
    }
    state.cartList.push({ movie, quantity });
  },

  DRAIN_OUT_CART(state) {
    state.cartList = [];
  },

  INCREASE_QUANTITY(state, movie) {
    const cartItem = state.cartList.find((item) =>
      item.movie.id === movie.movie.id ? (item.quantity += quantity) : false
    );
  },

  DELETE_CART_ITEM(state, cartItem) {
    const newCart = state.cartList.filter((item) => item.movie.id !== cartItem);
    state.cartList = newCart;
  },

  OPEN_CART(state) {
    state.cartOpen = !state.cartOpen;
  },
};

const actions = {
  addToCart: ({ commit }, { movie, quantity }) => {
    commit("PUSH_MOVIE_TO_CART", { movie, quantity });
  },

  deleteCartItem: ({ commit }, id) => {
    commit("DELETE_CART_ITEM", id);
  },

  drainOutCart: ({ commit }) => {
    commit("DRAIN_OUT_CART");
  },
  increaseQuantity: ({ commit }, quantity) => {
    commit("INCREASE_QUANTITY", quantity);
  },

  openCart: ({ commit }) => {
    commit("OPEN_CART");
  },
};

const getters = {
  priceTotal(state) {
    const total = state.cartList.reduce((acumulator, value) => {
      return acumulator + value.movie.popularity;
    }, 0);
    return total;
  },

  cartLength(state) {
    return state.cartList.length;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
