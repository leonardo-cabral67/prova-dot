import { createStore } from "vuex";
import moviesList from "./modules/moviesList";

export default createStore({
  modules: {
    moviesList,
  },
});
