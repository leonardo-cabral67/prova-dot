import { createStore } from "vuex";
import moviesList from "./modules/moviesList";
import cart from "./modules/cart";

export default createStore({
  modules: {
    moviesList,
    cart,
  },
});
