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
        search: this.edit === false,
        hidden: this.edit === true
      }
    }
  },
  methods: {
    toggleEdit () {
      this.edit = true
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
