import api from "../../services/api";

const state = {
  teste: "teste",
  moviesList: [],
};

const mutations = {
  SET_MOVIES_LIST(state, data) {
    state.moviesList = data;
  },
};

const actions = {
  loadMoviesList({ commit }) {
    api
      .get("3/trending/movie/week?api_key=60a9823609da5d74a6f269fe90d88edf")
      .then((res) => {
        console.log(res.data.results);
        commit("SET_MOVIES_LIST", res.data.results);
        console.log(res.data);
      });
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
