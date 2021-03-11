import Vue from 'vue';
import Vuex from 'vuex';
import movies from './../assets/Films';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    
      movies: movies,
      animation: false,
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
      state.animation = true;

      for(const movie of movies) {
        let cerca = state.filters.search.toLowerCase();
        let titol = "";
        
        if(movie.available === state.filters.available){
          titol = movie.title.toLowerCase();
          if(state.filters.search.length > 2) {
            if(titol.includes(cerca)) {
              movieRefresh.push(movie);
            }
          } else {
            movieRefresh.push(movie);
          }
        }

      }
      movies = movieRefresh;
      return movies;
    }
  }
});
