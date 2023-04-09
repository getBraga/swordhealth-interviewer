import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      email: ""
    }
  },
  getters: {
  },
  mutations: {
    GET_USER({user}, payload) {
      user.email = payload.email;
      user.name = payload.displayName
    }
  },
  actions: {
  },
  modules: {
  }
})
