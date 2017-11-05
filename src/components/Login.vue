<template>
  <div class="main">
    <div class="loginBox">
      <div class="loginMain">
        <h1>Log - In</h1>
        <input class="topLogin" v-model="user.email" placeholder="example@address.net" type="email" required>
        <input class="bottomLogin" v-model="user.password" placeholder="*********" type="password" required>
      </div>
      <div v-bind:class="wrongInput">Wrong Username/Password</div>
      <button class="signIn" v-on:click="submit()">Sign - in</button>
      <div class="links">
        <h6>New User? <span class="link" v-on:click="registerNav">Create a new account</span></h6>
        <h6>Forgot Your Password? <span class="link" v-on:click="recoverNav">Recover Password</span></h6>
        <h5 class="link" v-on:click="legalNav">©2017 Carpet Guys</h5>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',
    created () {
      if (this.logged === true) {
        this.$router.push('/account')
      }
    },
    data: function () {
      return {
        user: {
          email: '',
          password: '',
          id: '',
          token: ''
        },
        wrong: false
      }
    },
    props: ['logged'],
    computed: {
      wrongInput: function () {
        return {
          hidden: this.wrong === false,
          wrongInput: this.wrong === true
        }
      }
    },
    methods: {
      registerNav () {
        this.$router.push('/register')
      },
      recoverNav () {
        this.$router.push('/recover')
      },
      legalNav () {
        this.$router.push('/legal')
      },
      submit () {
        axios.post('https://', {
          email: this.user.email.toLowerCase(),
          password: this.user.password
        })
          .then(response => {
            if (response.status !== 401) {
              this.user.token = response.data.token
              this.user.id = response.data.userId
              this.$emit('login', this.user)
            }
          })
          .catch(response => {
            console.log(response)
            this.wrong = true
          })
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
  }

</style>
