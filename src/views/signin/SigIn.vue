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
        const user = {
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch("sigIn",  user)
        this.error ="";
        this.$buefy.toast.open({
              duration: 1000,
                    message: `successfully logged in user!`,
                    position: 'is-bottom',
                    type: 'is-success'
                })
        this.isLoading = false;
        this.$router.push({name: "home"})
        
       }catch(err) {

          this.$buefy.toast.open({
                    duration: 5000,
                    message: `${err.response.data.error.message}`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
          this.isLoading = false;
        
       }
      }
    }
 }
</script>

