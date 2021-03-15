import Vue from 'vue'; 
import Vuex from 'vuex'; 
Vue.use(Vuex); 

export default new Vuex.Store({ 
    state() { 
      return { 
        showModal: false 
        }
    },
    mutations: {
        SwitchModal(state) { 
            state.showModal = !state.showModal;
        } 
    },
    getters: {
        GetShowModal(state) {
            return state.showModal;
        }
    }
});