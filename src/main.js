import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import buefy from "buefy";
import "@/assets/scss/main.scss";
Vue.use(buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
