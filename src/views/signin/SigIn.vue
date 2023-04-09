<template>
    <div class="sigin">
      <PageLoading :isLoading="isLoading" />
      <SignInOrSignUpComponent
        tittle="Code Challenge" 
        :username="username"
        :email.sync="email" 
        :password.sync="password" 
        buttonText="Sign In" 
        :signInPage="true" 
        :signin-or-signup="true"
        :methodUser="signIn"
        :msgError="error"
        />
      
    </div>
    
  </template>
  
<script>
 import SignInOrSignUpComponent from './../../components/SignInOrSignUpComponent.vue';
 import service from "./../../service/service"
 export default {
    name: "SigninView",
    components: {
      SignInOrSignUpComponent
    },
    data() {
      return {
        username: "",
        email: "",
        password: "",
        error: "",
        isLoading: false,
      }
    },
 
    methods: {
     async signIn() {
       try{
        this.isLoading = true;
        const token =  await service.signIn({
          email: this.email,
          password: this.password,
          returnSecureToken:	true
        })
       window.localStorage.setItem("token",token.data.idToken)
       const {data} =  await service.validToken()
        const [user] = data.users
        this.$store.commit("GET_USER", user)
        this.error ="";
        
        this.$router.push({name: "home"})
        this.isLoading = true;
       }catch(err) {
        if(err.response.status === 400){
          this.error = "invalid email or password"
          this.isLoading = false;
        }
       }
      }
    }
 }
</script>

