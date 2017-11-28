<template>
  <div class="main">
    <h1>Job List</h1>
    <div class="jobLoop" v-for="job in jobs">
      <div v-bind:class="{ 'tile' : !job.clicked, 'hidden' : job.clicked }" v-on:click="job.clicked = true">{{job.jobNo}}</div>
      <div v-bind:class="{ 'job' : job.clicked, 'hidden' : !job.clicked }">
        <div v-on:click="job.clicked = false">Back</div>
        <div class="showNumber">{{job.showNumber}}</div>
        <div class="firstName">Customer Name:{{job.firstName}}</div>
        <div class="lastName">{{job.lastName}}</div>
        <div class="location">Address:{{job.location}}</div>
        <div class="phoneNumber">Phone:{{job.phoneNumber}}</div>
        <div class="installer">Installer:{{job.installer}}</div>
        <div class="mapContainer">MAP GOES HERE</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        { jobNo: 123456, showNumber: '1', firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 123456, showNumber: '2', firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 123456, showNumber: '3', firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 123456, showNumber: '4', firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 123456, showNumber: '5', firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 123456, showNumber: '6', firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false }
      ]
    }
  },
  created () {
    clearInterval()
  }
}
</script>

<style>
.main {
  text-align: justify;
  display: grid;
}
h1 {
  font-family: tahoma;
  text-align: center;
  font-size: 1.4em;
  background-color: #fbdd21;
}
.jobLoop {
  margin-top: 20px;
  width: 100%;
}
.tile {
  width: 100%;
  height: 40px;
  line-height: 25px;
  border-radius: 5px;
  padding: 4px;
  background: #6b6b6b;
  text-decoration: none;
  color: #FFF;
  letter-spacing: 2px;
}
.job {
  background-color: #6b6b6b;
  color: #fff;
  border-radius: 5px;
  letter-spacing: 1px;
}
.hidden {
  display: none;
}

</style>
