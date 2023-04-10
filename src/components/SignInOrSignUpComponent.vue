<template>
  <section :class="signinOrSignup? 'signin-or-signup': 'username'">
 
    <h1  :style="!signinOrSignup?'text-align: left':''">{{ tittle }}</h1>
    <form >

      <div  v-if="!signInPage">
        <b-field label-for="username" :label="signinOrSignup ? 'Username': 'Username*'" >
          <b-input id="username" placeholder="Username" name="username" v-model="usernameInput" required></b-input>
        </b-field>
      </div>

      <div>
        <b-field label-for="email"  label="E-mail" >
          <b-input type="email" id="email" placeholder="E-mail" name="email" v-model="emailInput"></b-input>
        </b-field>
      </div>

      <div v-if="signinOrSignup">
        
        <b-field label-for="password" label="Password">
          <b-input type="password" id="password" placeholder="******" name="password" v-model="passwordInput" required></b-input>
        </b-field>
      </div>

      <b-button type="is-primary" class="btn" @click.prevent="methodUser()" >{{ buttonText }} </b-button>
      <span v-show="msgError" :class=" signinOrSignup? 'is-danger text-center': 'is-danger'">{{ msgError }}</span>
      <p v-if="signInPage" class="msg-signup-or-signin">Don't have an account?   <router-link class="signup-link" to="/signup">Click here to sign up.</router-link></p>
      <p v-if="signinOrSignup && !signInPage" class="msg-signup-or-signin"> <router-link class="signup-link" to="/signin">Click here to sign in.</router-link></p>  
    </form>
  </section>
</template>

<script>

export default {
name: "SignInOrSignUpComponent",
props:{
  tittle: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  methodUser: {
    type: Function,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
 
  signInPage: {
    type: Boolean,
    required: true
  },
  signinOrSignup: {
    type: Boolean,
    required: true
  },
  msgError: {
    type: String
  }
},
data() {
  return {
    usernameInput: this.username,
    emailInput: this.email,
    passwordInput:this.password
  }
},


watch: {
  username(){
   this.usernameInput = this.username
  },
  email(){
    this.emailInput =this.email;
  },
  usernameInput() {
   
    this.$emit("update:username", this.usernameInput)
  },
  emailInput(){
    this.$emit("update:email", this.emailInput)
  },
  passwordInput(){
    this.$emit("update:password", this.passwordInput)
  }
}
}
</script>

<style>

</style>