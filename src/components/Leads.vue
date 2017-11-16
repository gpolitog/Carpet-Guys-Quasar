<template>
  <div v-bind:class="leadLogic">
    <input type="text" class="searchTerm" placeholder="Customer Search"></input>
    <button type="submit" class="searchButton">
    <i class="fa fa-search">Search</i>
    </button>
    <h1>Lead Information</h1>
    <p class="customernum">{{this.user.customernum}}</p>
    <p class="email">{{this.user.email}}</p>
    <p class="firstname">{{this.user.firstName}}</p>
    <p class="lastname">{{this.user.lastName}}</p>
    <p class="secondname">{{this.user.secondname}}</p>
    <p class="phonenum">{{this.user.phoneNumber}}</p>
    <p class="secondphone">{{this.user.secondphone}}</p>
    <p class="addressone">{{this.user.addressOne}}</p>
    <p class="addressTwo">{{this.user.addressTwo}}</p>
    <p class="city">{{this.user.city}}</p>
    <p class="state">{{this.user.state}}</p>
    <p class="zipCode">{{this.user.zipCode}}</p>
    <p class="notes">{{this.user.notes}}</p>
  <div v-bind:class="leadEditLogic">
    <div class="leadinfo">
      <h1 class="entertitle">Edit Lead Information</h1>
      <input type="text" class="userNameEdit" v-model="user.email" placeholder="Email Address" required></input>
      <input type="text" class="firstNameEdit" v-model="user.firstName" placeholder="First Name" required></input>
      <input type="text" class="middleNameEdit" v-model="user.middleName" placeholder="Mi" required></input>
      <input type="text" class="lastNameEdit" v-model="user.lastName" placeholder="Last Name" required></input><br/>
      <input type="tel" class="phoneEdit" v-model="user.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="password" class="password" v-model="user.password" placeholder="Password" required></input>
      <button class="confirmButton" v-on:click="submit">Confirm Changes</button>
    </div>
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
        email: 'user@gmail.com',
        customernum: '9876',
        firstName: 'Robert',
        lastName: 'Carpetman',
        secondname: 'Ann Carpetman',
        secondphone: '444-444-4444',
        phoneNumber: '555-555-5555',
        addressOne: '123 abc st.',
        addressTwo: '456 def rd',
        city: 'phoenix',
        state: 'AZ',
        zipCode: '85053',
        notes: 'lorem ipsum'

      },
      error: '',
      tabSelected: 0,
      edit: false
    }
  },
  props: ['logged'],
  computed: {
    leadLogic: function () {
      return {
        main: !this.edit,
        hidden: this.edit
      }
    },
    leadEditLogic: function () {
      return {
        main: this.edit,
        hidden: !this.edit
      }
    }
  },
  methods: {
    toggleEdit () {
      this.edit = true
    },
    submit () {
      var vue = this
      axios.put('https://72.222.165.39:7778/users/' + vue.userId, {headers: { 'Authorization': 'JWT ' + vue.token }}, {
        email: this.user.email.toLowerCase(),
        customernum: this.user.customernum,
        firstName: this.user.firstName.toLowerCase(),
        lastName: this.user.lastName.toLowerCase(),
        secondname: this.user.secondname,
        phoneNumber: this.user.phoneNumber,
        secondphone: this.user.secondphone,
        addressOne: this.user.addressOne,
        addressTwo: this.user.addressTwo,
        city: this.user.city.toLowerCase(),
        state: this.user.state,
        zipCode: this.user.zipCode,
        notes: this.user.notes

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
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: repeat(13,50px);
    overflow: hidden;
    text-align: justify;
  }


  .searchButton {
    margin-right: 20px;
    background-color: #fbdd21;
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row: 2;
    border: solid 2px #fbdd21;
    border-radius: 5px;
    }
  .search {
    width: 100%;
    position: relative;
  }

  .searchTerm {
    margin-left: 20px;
    text-align: center;
    width: 100%;
    border: 3px solid #fbdd21;
    border-radius: 5px;
    outline: none;
    color: #9DBFAF;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row: 2;
  }
  h1 {
    margin-top: 65px;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row: 2;
    font-size: 1.4em;
    font-family: tahoma;
    color: #c9272b;
  }
/*LEAD INFORMATION VIEW*/

  .customernum {
    margin-left: 20px;
    border: 2px solid #fbdd21;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row: 4;
  }
  .firstname {
    margin-left: 20px;
    border: 2px solid #fbdd21;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row: 5;
  }
  .lastname {
    border: 2px solid #fbdd21;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row: 5;
  }
  .phonenum {
    margin-left: 10px;
    border: 2px solid #fbdd21;
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row: 5;
  }
  .addressone {
    margin-left: 20px;
    border: 2px solid #fbdd21;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 7;
  }
  .addressTwo {
    margin-left: 20px;
    border: 2px solid #fbdd21;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 8;
  }
  .city {
    border: 2px solid #fbdd21;
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row: 7;
  }
  .state {
    border: 2px solid #fbdd21;
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row: 7;
  }
 .secondname {
   margin-left: 20px;
   border: 2px solid #fbdd21;
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row: 6;
 }
 .secondphone {
   margin-left: 10px;
   border: 2px solid #fbdd21;
   grid-column-start: 4;
   grid-column-end: 7;
   grid-row: 6;
 }

  .email {
    margin-left: 20px;
    border: 2px solid #fbdd21;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row: 9;
  }
  .zipCode {
    border: 2px solid #fbdd21;
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row: 7;
  }
  .notes {
    margin-left: 20px;
    border: 2px solid #fbdd21;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 10;
    grid-row-end: 12;
  }


  /* LEAD EDIT */


  .main {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: repeat(13,50px);
    overflow: hidden;
    text-align: justify;
  }
</style>
