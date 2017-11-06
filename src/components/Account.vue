<template>
  <div class="main">
    <div v-bind:class="accountEdit">
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
      <input type="number" class="phoneEdit" v-model="user.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="password" class="password" v-model="user.password" placeholder="Password" required></input>
      <button class="confirmButton" v-on:click="submit">Confirm Changes</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    var vue = this
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
  methods: {
    toggleEdit () {
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
  }

</style>
