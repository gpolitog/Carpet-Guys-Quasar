<template>
  <div>
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
      <button class="editButton" v-on:click="toggleEdit">Edit</button>
    </div>
    <div v-bind:class="leadEditLogic">
      <h1 class="entertitle">Edit Lead Information</h1>
      <input type="text" class="userNameEdit" v-model="user.email" placeholder="Email Address" required></input>
      <input type="text" class="firstNameEdit" v-model="user.firstName" placeholder="First Name" required></input>
      <input type="text" class="middleNameEdit" v-model="user.middleName" placeholder="Mi"></input>
      <input type="text" class="lastNameEdit" v-model="user.lastName" placeholder="Last Name" required></input><br/>
      <input type="tel" class="phoneEdit" v-model="user.phoneNumber" placeholder="Phone Number" required></input><br/>
      <input type="text" class="secondnameEdit" v-model="user.secondname" placeholder="Secondary Name"></input>
      <input type="text" class="secondphoneEdit" v-model="user.secondphone" placeholder="Secondary Number"></input>
      <input type="text" class="addressOneEdit" v-model="user.addressOne" placeholder="Address 1"required></input>
      <input type="text" class="addressTwoEdit" v-model="user.addressTwo" placeholder="Addres 2"></input>
      <input type="text" class="cityEdit" v-model="user.city" placeholder="city" required></input>
      <input type="text" class="stateEdit" v-model="user.state" placeholder="State" required></input>
      <input type="text" class="zipCodeEdit" v-model="user.zipCode" placeholder="Zip" required></input>
      <input type="text" class="notesEdit" v-model="user.notes" placeholder="Notes"></input>
      <button class="confirmButton" v-on:click="submit">Confirm Changes</button>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    if (this.logged === false) {
      this.$router.push('/login')
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
      this.edit = false
    }
  }
}
</script>


<style scoped lang="less">
.main {
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(15,50px);
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
.editButton {
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row: 12;
  background-color: #c9272b;
  border: solid 2px #c9272b;
  border-radius: 5px;
  color: white;
}


/* LEAD EDIT */
.entertitle {
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 7;
  text-align: center;
  line-height: 1px;
}
.userNameEdit {
  grid-row: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-left: 10px;
}
.firstNameEdit {
  grid-row: 4;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 125px;
  margin-left: 10px;
}
.middleNameEdit {
  grid-row: 4;
  grid-column-start: 3;
  grid-column-end: 5;
  width: 96px;
  margin-left: 10px;
}
.lastNameEdit {
  grid-row: 4;
  grid-column-start: 5;
  grid-column-end: 7;
  width: 125px;
  margin-left: 10px;
}
.phoneEdit {
  grid-row: 5;
  grid-column-start: 1;
  grid-column-end: 3;
  margin-left: 10px;
}
.confirmButton {
  grid-row: 13;
  grid-column-start: 2;
  grid-column-end: 7;
  color: white;
  background-color: #c9272b;
  border: solid 2px #c9272b;
  border-radius: 5px;

}
.secondnameEdit {
  grid-row: 6;
  grid-column-start: 1;
  grid-column-end: 5;
  margin-left: 10px;
}
.secondphoneEdit {
  grid-row: 7;
  grid-column-start: 1;
  grid-column-end: 4;
  margin-left: 10px;
}
.addressOneEdit {
  grid-row: 8;
  grid-column-start: 1;
  grid-column-end: 4;
  margin-left: 10px;
}
.addressTwoEdit {
  grid-row: 10;
  grid-column-start: 1;
  grid-column-end: 4;
  margin-left: 10px;
}
.cityEdit {
  grid-row: 9;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 90px;
  margin-left: 10px;
}
.stateEdit {
  grid-row: 9;
  grid-column-start: 3;
  grid-column-end: 4;
  width: 50px;
}
.zipCodeEdit {
  grid-row: 9;
  grid-column-start: 6;
  grid-column-end: 4;
  width: 90px;
}
.notesEdit {
  grid-row-start: 11;
  grid-row-end: 12;
  grid-column-start: 1;
  grid-column-end: 5;
  width: 18em;
  margin-left: 10px;
}
</style>
