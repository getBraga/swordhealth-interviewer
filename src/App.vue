

<template>
  <div id="app">
    <TheHeaderVue  v-show="allowHeader"/>
    <router-view class="container-body"/>
  </div>
</template>

<script>
import service from "./service/service";
  import TheHeaderVue from "./components/TheHeader.vue";

  
export default {
  name: "IndexApp",
  components: {
    TheHeaderVue,
  },
data(){
  return {
    isLoading: false
  }
},
computed: {
  allowHeader() {
   
    return this.$route.name !=='signin' && 
           this.$route.name !=='signup'
  }
},

async created() {
  try{
   
      if(window.localStorage.getItem('token')){
        const {data}= await service.validToken()
        const [user]  = data.users
        this.$store.commit("GET_USER", user)
      }
     
    }catch(err) {
      console.log('errrorr')
      window.localStorage.removeItem("token")
     
    }
},
async updated() {
  try{
    this.isLoading = true;
   await service.validToken()


}catch(err) {
window.localStorage.removeItem("token")
this.isLoading = false;

     
}
}
}
</script>
<style lang="scss">

.container-body {
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 10px;
}

</style>
