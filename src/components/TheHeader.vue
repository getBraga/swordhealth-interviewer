<template>
  <nav class="header">
    <PageLoading :isLoading="isLoading" />
   
    <ul class="header-ul">
        <li class="logo"><router-link to="/">LOGO</router-link></li>
        <li class="discovery"><router-link to="/discovery" c>Discovery</router-link></li>
        <li><router-link  to="/user">{{ name}}</router-link></li>
        <li @click="logout()"><router-link  to="#" >Logout</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
name: "TheHeader",
data(){
  return {
    isLoading: false
  }
},
methods: {
  logout() {
    window.localStorage.removeItem("token")
    this.$router.push({name: "signin"})
  }
},
components: {

},
computed: {
  name(){
    return  this.$store.getters.firstName;
  }
},
async created() {
  try{
  
      if(window.localStorage.getItem('token')){
        this.isLoading = true;
        await this.$store.dispatch("validateToken")
        this.isLoading = false
      }
     
    }catch(err) {
      this.isLoading = false
      window.localStorage.removeItem("token")
     
    }
},
}
</script>

<style scoped lang="scss"> 
  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
 }
 .logo {
    font-size: 1.3em;
 }
.header {
    width: 100%;
    background: #d9d9d9;
  
}
ul {
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 1rem 40px;
    margin: 0 auto;
    li {
        margin: 0 10px;
    }
    .discovery {
      flex: 1;
    }
}

nav a.router-link-exact-active{
 border-bottom: 3px solid #000;
} 
</style>