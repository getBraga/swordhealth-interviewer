import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import buefy from "buefy";
import PageLoading from "./components/PageLoading.vue"
import 'buefy/dist/buefy.css'
import "@/assets/scss/main.scss";
import VueCarouse from 'vue-carousel';

Vue.use(VueCarouse);
Vue.use(buefy)
Vue.config.productionTip = false
Vue.component("PageLoading", PageLoading)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
