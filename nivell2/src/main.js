import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Vue from 'vue'
import App from './App.vue'
const $ = require('jquery');
window.$ = $;
import store from './store'; 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app');