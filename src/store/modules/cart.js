const state = {
  cartList: [],
};

const mutations = {
  pushIdToCartList(state, id) {
    console.log("função pushIdToCartList - ");
    state.cartList.push(id);
  },
};

const actions = {
  addToCart: ({ commit }, product) => {
    commit("pushIdToCartList", product);
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
