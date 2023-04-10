<template>
     <div class="sigup">
      <PageLoading :isLoading="isLoading" />
      <SignInOrSignUpComponent 
        tittle="Code Challenge" 
        :username.sync="username"
        :email.sync="email" 
        :password.sync="password" 
        buttonText="Sign Up" 
        :signInPage="false" 
        :methodUser="createUser"
        :signin-or-signup="true"
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
        username: "",
        email: "",
        password: "",
        error: "",
        isLoading: false
        
      }
    },
    methods: {
      async createUser() {
        try{

          if(this.username !== "") {
            this.isLoading = true;
            const user = {
              displayName: this.username,
              email: this.email,
              password:this.password
            }
            await  this.$store.dispatch("signUp",user)
            
            this.isLoading = false;
            this.$buefy.toast.open({
              duration: 1000,
                    message: `User created successfully!`,
                    position: 'is-bottom',
                    type: 'is-success'
                })
            this.$router.push({name: "home"})
          }
          if(!this.username){
            this.$buefy.toast.open({
                    duration: 5000,
                    message: `Username field required`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
          }
           
        }catch(err) {
          this.isLoading = false;
          this.$buefy.toast.open({
                    duration: 5000,
                    message: `${err.response.data.error.message}`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
          
        }
      }
    }
}
</script>

<style>

</style>