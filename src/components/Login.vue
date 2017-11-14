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
      clearInterval()
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
@backgroundColor: ;
@secondaryColor: ;
@paymentColor: ;
@medicalColor: ;
@darkTR: ;
@lightTR: ;
@textColor: ;
@baseFontSize: ;
@boldText: "";
@sideText: "";
@bodyText: "";
@font-face {
  font-family: "";
  src: url("");
}
@font-face {
  font-family: "";
  src: url("");
}
@font-face {
  font-family: "";
  src: url("");
}
.main {
   background-size: cover;
   width: 100%;
   height: 100%;
   margin-left: 0px;
   margin-right: 0px;
   margin-bottom: 0px;
   padding-left: 0px;
   padding-right: 0px;
   display: grid;
   grid-template-columns: 100%;
   grid-template-rows: 20px 500px 10px 20px;
  }
.loginBox {
  grid-column: 1;
  grid-row: 2;
  text-align: center;
  box-shadow: 2px 6px #d1d1d1;
  border-radius: 24px;
  background: ;
  background-image: -webkit-linear-gradient;
  background-image: -moz-linear-gradient;
  background-image: -ms-linear-gradient;
  background-image: -o-linear-gradient;
  background-image: linear-gradient;
}
h1 {
  font-family: ;
  color: ;
  text-shadow: 2px 1px 2px #515151;
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  font-size: ;
  padding-left: 12px;
}
input {
  background-color: transparent;
  border: none;
  border-left: ;
  border-bottom: ;
  color: ;
  padding-top: 12px;
  padding-left: 14px;
}
.loginMain {

}
.topLogin {
 padding-bottom: 10px;
 border-left: ;
}
.bottomLogin {
  border-left: ;
}
.wrongInput {

}
.signIn {

}
.links h6 {
  text-align: center;
}
</style>
