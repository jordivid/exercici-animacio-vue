// import Vuex from 'vuex';

import store from "../store"

export default {
    computed: {
        // ...Vuex.mapGetters({movies:'GetMovies'})
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
        }
    }
}