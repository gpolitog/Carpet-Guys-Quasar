<template>
  <div class="main">
    <div v-bind:class="accountEditLogic">
      <h1>Please enter Account Info</h1>
      <input type="text" class="userNameEdit" v-model="user.email" placeholder="Email Address" required></input>
      <select class="salutationEdit" v-model="user.salutation">
        <option value="mr">Mr.</option>
        <option value="mrs">Mrs.</option>
        <option value="ms">Ms.</option>
      </select>
      <input type="text" class="firstNameEdit" v-model="user.firstName" placeholder="First Name" required></input>
      <input type="text" class="middleNameEdit" v-model="user.middleName" placeholder="Mi" required></input>
      <input type="text" class="lastNameEdit" v-model="user.lastName" placeholder="Last Name" required></input><br/>
      <input type="tel" class="phoneEdit" v-model="user.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="password" class="password" v-model="user.password" placeholder="Password" required></input>
      <button class="confirmButton" v-on:click="submit">Confirm Changes</button>
    </div>
    <div v-bind:class="accountLogic">
      <h1>Account</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    var vue = this
    clearInterval()
    if (this.logged === false) {
      this.$router.push('/login')
    }
    else {
      axios.get('https://72.222.165.39:7778/users/' + vue.userId, {headers: { 'Authorization': 'JWT ' + vue.token }})
        .then(function (response) {
          vue.user = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  data: function () {
    return {
      user: {
        email: '',
        password: '',
        salutation: '',
        firstName: '',
        middleName: '',
        lastName: '',
        phoneNumber: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        cardDate: '',
        cvv: ''
      },
      error: '',
      tabSelected: 0,
      edit: false
    }
  },
  props: ['logged'],
  computed: {
    accountEditLogic: function () {
      return {
        accountEdit: this.edit,
        hidden: !this.edit
      }
    },
    accountLogic: function () {
      return {
        account: !this.edit,
        hidden: this.edit
      }
    }
  },
  methods: {
    accountEdit () {
      this.edit = true
    },
    submit () {
      var vue = this
      axios.put('https://72.222.165.39:7778/users/' + vue.userId, {headers: { 'Authorization': 'JWT ' + vue.token }}, {
        email: this.user.email.toLowerCase(),
        password: this.user.password,
        salutation: this.user.salutation,
        firstName: this.user.firstName.toLowerCase(),
        middleName: this.user.middleName.toLowerCase(),
        lastName: this.user.lastName.toLowerCase(),
        phoneNumber: this.user.phoneNumber,
        addressOne: this.user.addressOne,
        addressTwo: this.user.addressTwo,
        city: this.user.city.toLowerCase(),
        state: this.user.state,
        zipCode: this.user.zipCode,
        cardNumber: this.user.cardNumber,
        cardDate: this.user.cardDate,
        cvv: this.user.cvv
      })
        .then(function () {
          vue.edit = false
        })
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    margin-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 70px 70px 70px 70px 70px 70px;
    overflow: hidden;
    }
  hidden {
     display: none;

    }
  h1 {
    line-height: 50px;
    font-family: bebas neue;
    font-size: 2em;
    text-align: center;
    background-color: #f4c20d;
    margin-top: 30px;
    }
    .userNameEdit {
    margin: 10px;
    }
    .firstNameEdit {
      margin: 10px;
    }
    .middleNameEdit {
      margin: 10px;
    }
    .lastNameEdit {
      margin: 10px;
    }
    .phoneEdit {
      margin: 10px;
    }
    .password {
      margin: 10px;
    }
    .confirmButton {
      margin: 10px;
      background-color: #f4c20d;
    }

/* Account info display */
    .account {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 70px 70px 70px 70px 70px 70px 70px;
    }
    
</style>
