<template>
  <div class="main">
    <div v-bind:class="accountEditLogic">
      <h1 class="entertitle">PLEASE ENTER ACCOUNT INFO</h1>
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
      <h1 class="acctitle">ACCOUNT</h1>
    <div class="acctinfo">
      <p class="email">{{this.user.email}}</p>
      <p class="firstname">{{this.user.firstName}}</p>
      <p class="lastname">{{this.user.lastName}}</p>
      <p class="phonenum">{{this.user.phoneNumber}}</p>
      <p class="addressone">{{this.user.addressOne}}</p>
      <p class="city">{{this.user.city}}</p>
      <p class="state">{{this.user.state}}</p>
      <p class="cardnum">{{this.user.cardNumber}}</p>
      <p class="carddate">{{this.user.cardDate}}</p>
      <p class="ccv">{{this.user.ccv}}</p>
      <button class="editButton" v-on:click="accountEdit">Edit Info</button>
    </div>
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
        password: '',
        salutation: '',
        firstName: 'Robert',
        middleName: '',
        lastName: 'Carpetman',
        phoneNumber: '555-555-5555',
        addressOne: '123 abc st.',
        addressTwo: '',
        city: 'phoenix',
        state: 'AZ',
        zipCode: '',
        cardNumber: '1234567890',
        cardDate: '1/1/18',
        ccv: '789'
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
      this.edit = false
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
    grid-template-rows: repeat(13,70px);
    overflow: hidden;
    }

  hidden {
     display: none;
    }

  .entertitle {
    background-color: #fbdd21;
    text-align: center;
    font-family: tahoma;
    font-size: 1.2em;
    line-height: 30px;
    margin-top: 10px;
    grid-column-start: 4 ;
    grid-column-end: 5;
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
      border: solid 2px #fbdd21;
      border-radius: 5px;
      text-align: center;
      margin: 10px;
      background-color: #fbdd21;
    }

/* Account info display */

    .acctinfo {
      margin-top: 10px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(13,70px);
    }

    p {
      margin-bottom: 10px;
      text-align: justify;
    }

    .email {
      grid-row: 4;
    }

    .acctitle {
      background-color: #fbdd21;
      text-align: center;
      font-family: tahoma;
      font-size: 1.2em;
      line-height: 30px;
      margin-top: 10px;
      grid-column-start: 4 ;
      grid-column-end: 5;
    }

    .firstname {
      grid-row: 1;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .lastname {
      grid-row: 1;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .phonenum {
      grid-row: 2;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    .addressone {
      grid-row: 2;
      grid-column-start: 2;
      grid-column-end: 5;
    }

    .city {
      grid-row: 2;
      grid-column-start: 3;
      grid-column-end: 5;
    }

    .state {
      margin-left: 70px;
      grid-row: 2;
      grid-column-start: 3;
      grid-column-end: 5;
    }

    .cardnum {
      grid-row: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .ccv {
      grid-row: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .carddate {
      grid-row: 3;
      grid-column-start: 3;
      grid-column-end: 4;
    }

    .editButton {
      border: solid 2px #fbdd21;
      background-color: #fbdd21;
      border-radius: 5px;
      margin: 10px;
      grid-row: 5;
      grid-column-start: 1;
      grid-column-end: 4;
    }

</style>
