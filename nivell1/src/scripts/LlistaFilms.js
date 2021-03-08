import store from "../store";
import Bounce from "./animations/Bounce";

export default {
    computed: {
        search: {
            get() {
                return store.state.filters.search;
            },
            set(value) {
                store.commit('SetSearch', value);
            }
        },
        available: {
            get() {
                return store.state.filters.available;
            },
            set(value) {
                store.commit('SetAvailable', value);
            }
        },
        SelectedMovies() {
            let movies = [];
            let cerca = this.search.toLowerCase();
            let titol = "";

            for(let film of store.getters.GetMovies) {
                if(film.available === this.available){
                    titol = film.title.toLowerCase();
                    if(cerca.length > 2) {
                        if(titol.includes(cerca)) {
                            movies.push(film);
                        }
                    } else {
                        movies.push(film);
                    }
                }
            }

            return movies;
        }
    },
    components: {
        Bounce
    },
    data() {
        return {
            show: true
        }
    },
}