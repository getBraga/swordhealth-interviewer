import Vue from 'vue'
import Vuex from 'vuex'
import service from "@/service/service"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      email: ""
    }
  },
  getters: {
    firstName: state => {
      var name =  state.user.name.replace(/ .*/, '');
      return name;
    }
  },
  mutations: {
    GET_USER({user}, payload) {
      user.email = payload.email;
      user.name = payload.displayName
    },
    UPDATE_USER({user}, payload) {
      user.email = payload.email;
      user.name = payload.displayName
    }
  },
  actions: {
    async validateToken({commit,}){
      const {data} = await service.validToken();
      const [user] = data.users;
      commit("GET_USER", user)
    },
   async updateUser({commit}, payload){
       const {data} =  await service.updateUser({
              displayName:payload.displayName,
              email: payload.email,
              idToken: window.localStorage.getItem("token"),
              returnSecureToken: true
            }) 
            if(data.idToken){
              window.localStorage.setItem("token", data.idToken)
            }
            commit("UPDATE_USER", data) 
    },
    async sigIn({commit}, payload) {
      const {data} =  await service.signIn({
        email: payload.email,
        password: payload.password,
        returnSecureToken:	true
      })
      commit("UPDATE_USER", data) 
      window.localStorage.setItem("token",data.idToken)
    },
    async signUp({dispatch}, payload) {
      const {data} =  await service.signUp({
        email: payload.email,
        password: payload.password,
        returnSecureToken:	true
      })
      window.localStorage.setItem("token",data.idToken)
      await dispatch("updateUser",payload )  
      
    }
  },
  modules: {
  }
})
