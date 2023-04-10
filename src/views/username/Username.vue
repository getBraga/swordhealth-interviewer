<template>
    <div class="sigup">
      <PageLoading :isLoading="isLoading" />
     <SignInOrSignUpComponent 
      
       tittle="My account" 
       :username.sync="username"
       password="" 
       :email.sync="email"
       buttonText="Save" 
       :signInPage="false" 
       :signin-or-signup="false" 
       :methodUser="putUser"
       :msgError="error"
       />
       
   </div>
</template>

<script>
import SignInOrSignUpComponent from './../../components/SignInOrSignUpComponent.vue';
export default {
   name: "SignUp",
   components: {
     SignInOrSignUpComponent
   },
   data() {
    return {
      user: null,
      username: "",
      email: "",
      testar: false,
      isLoading: false,
      error: "",
    }
   },
   async created(){
   
    await this.getUser()
   
   },
   methods: {
    async getUser() {
     try{
      this.isLoading = true;
      await this.$store.dispatch("validateToken");
      this.username =  this.$store.state.user.name
      this.email = this.$store.state.user.email 
      this.isLoading = false
     }catch(err) {
     if( err.response.data.error.message == "TOKEN_EXPIRED"){
     this.$router.push({name: "signin"})
    }
     }
    },
    async putUser() {
     try{
      if(this.username !== "") {
        this.isLoading = true;
        const user  = {
          displayName: this.username,
          email: this.email,
          idToken: window.localStorage.getItem("token"),
          returnSecureToken: true
          }
         await this.$store.dispatch("updateUser", user)
         this.$buefy.toast.open({
                    duration: 1000,
                    message: `User updated successfully!`,
                    position: 'is-bottom',
                    type: 'is-success'
                })
         this.isLoading = false
      }
      if(!this.username){
        this.$buefy.toast.open({
                    duration: 5000,
                    message: `INVALID_USERNAME`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
      }
     
     }catch(err) {
      this.isLoading = false
      this.error = err.response.data.error.message;
     }
   
    }
   }
}
</script>

<style>

</style>