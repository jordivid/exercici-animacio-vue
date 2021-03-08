import Vue from 'vue';
import Vuex from 'vuex';
import movies from './../assets/Films';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
      movies: movies,
      filters: {
        search: '',
        available: true
      }
  },
  mutations: {
    SetSearch(state, value) {
      state.filters.search = value;
    },
    SetAvailable(state) {
      state.filters.available = !state.filters.available;
    }
  },
  getters: {
    GetMovies(state) {
      let movies = state.movies();
      let movieRefresh = [];

      for(const movie of movies) {
        movieRefresh.push(movie);
      }
      movies = movieRefresh;
      return movies;
    }
  }
});
