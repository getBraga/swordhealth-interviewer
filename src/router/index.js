import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from "../views/signin/SigIn.vue"
import Discovery  from "../views/discovery/Discovery.vue";
import Username from "../views/username/Username.vue";
import SignUp from "../views/signup/SignUp.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      login: true
    }
  
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      login: true
    }
  
  },
  {
    path: '/user',
    name: 'user',
    component: Username,
    meta: {
      login: true
    }
  
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.login)) {
   setTimeout(() => {
    if(!window.localStorage.getItem("token")) {
      next({name: "signin"})
    }
   }, 300);
    next()
  }
  else{
    next()
  }

})
export default router
