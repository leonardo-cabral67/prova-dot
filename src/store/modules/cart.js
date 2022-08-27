const state = {
  cartList: [],
};

const mutations = {
  PUSH_MOVIE_TO_CART(state, { movie, quantity }) {
    let cartItem = state.cartList.find((item) => item.movie.id === movie.id);
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

  DELETE_CART_ITEM(state, cartItem) {
    const newCart = state.cartList.filter((item) => item.movie.id !== cartItem);
    console.log(newCart);
    state.cartList = newCart;
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
};

const getters = {
  priceTotal(state) {
    const total = state.cartList.reduce((acumulator, value) => {
      return acumulator + value.movie.popularity;
    }, 0);
    return total;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
