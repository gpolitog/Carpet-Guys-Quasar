<template>
  <div class="main">
    <div v-bind:class="leadLogic">
      <input type="text" class="searchTerm" placeholder="Customer Search"></input>
      <button type="submit" class="searchButton">
      <i class="fa fa-search">Search</i>
      </button>
      <input type="text" class="firstname" v-model="lead.firstName" placeholder="First Name" required</input>
      <input type="text" class="lastname" v-model="lead.lastName" placeholder="Last Name" required</input>
      <input type="text" class="customernum" v-model="lead.customernum" placeholder="Customer Number" required</input>
      <input type="text" class="phonenum" v-model="lead.phoneNumber" placeholder="Phone" required</input>
      <input type="text" class="secondname" v-model="lead.secondname" placeholder="Second Name" required</input>
      <input type="text" class="secondphone" v-model="lead.secondphone" placeholder="Second Phone" required</input>
      <input type="text" class="addressOne" v-model="lead.addressOne" placeholder="Address" required</input>
      <input type="text" class="addressTwo" v-model="lead.addressTwo" placeholder="Second Address" required</input>
      <input type="text" class="city" v-model="lead.city" placeholder="City" required</input>
      <input type="text" class="state" v-model="lead.state" placeholder="State" required</input>
      <input type="text" class="zip" v-model="lead.zip" placeholder="zip" required</input>
      <input type="text" class="email" v-model="lead.email" placeholder="E Mail" required</input>
      <input type="text" class="notes" v-model="lead.notes" placeholder="Notes" required</input>
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
<<<<<<< HEAD
<<<<<<< HEAD
    leadEditLogic: function () {
=======
    accountEditLogic: function () {
>>>>>>> parent of 91fa0b1... Tidied Leads
      return {
        accountEdit: this.edit,
        hidden: !this.edit
      }
    },
<<<<<<< HEAD
=======
>>>>>>> 91fa0b167e2a6b1815cd3101f764a603aeeaaccd
    leadLogic: function () {
=======
    accountLogic: function () {
>>>>>>> parent of 91fa0b1... Tidied Leads
      return {
        account: !this.edit,
        hidden: this.edit
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
  }
  .searchButton {
    grid-column-start: 6;
    grid-column-end: 7;
    grid-row: 2;
    }
  .search {
    width: 100%;
    position: relative
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #00B4CC;
    border-radius: 5px;
    outline: none;
    color: #9DBFAF;
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row: 2;

  }

  .searchTerm:focus{
    color: #00B4CC;
  }

/*LEAD INFORMATION VIEW*/

.customernum {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 4;
}


</style>
