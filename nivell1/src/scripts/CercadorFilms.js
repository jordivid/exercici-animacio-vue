import store from "../store"

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
        }
    },
    methods: {
        prueba() {
            if(store.state.filters.search.length > 2) {
                store.state.animation = true;
            }
        }
    }
}