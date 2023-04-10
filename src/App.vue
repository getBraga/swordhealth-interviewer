

<template>
  <div id="app">
    <TheHeaderVue  v-show="allowHeader"/>
    <router-view class="container-body"/>
  </div>
</template>

<script>
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

async updated() {
  try{
    this.isLoading = true;
    if(this.allowHeader) 
       await this.$store.dispatch("validateToken")


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
