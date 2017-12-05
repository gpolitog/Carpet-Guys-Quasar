<template>
  <div class="main">
    <h1>Job List</h1>
    <div class="jobLoop" v-for="job in jobs">
      <div v-bind:class="{ 'tile' : !job.clicked, 'hidden' : job.clicked }" v-on:click="job.clicked = true">Job Number: {{job.jobNo}}</div>
      <div v-bind:class="{ 'job' : job.clicked, 'hidden' : !job.clicked }">
        <div v-on:click="job.clicked = false">Back</div>
        <div class="showNumber">{{job.jobNo}}</div>
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
        { jobNo: 1, firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 2, firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 3, firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 4, firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 5, firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false },
        { jobNo: 6, firstName: 'Robert', lastName: 'Carpetman', location: '123 abc st 85379 surprise az', phoneNumber: '555-555-5555', installer: 'Jim McCarpitt', clicked: false }
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
}

.jobLoop {
  width: 100%;
}

.tile {
  width: 100%;
  background-color: #6b6b6b;
  border-radius: 10px;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 1em;
  text-align: justify;
  color: #fff;
  padding-left: 10px;
}
.job {
  background-color: #6b6b6b;
  border-radius: 10px;
  color: #fff;
  letter-spacing: 1px;
  padding: 10px; 
}
h1 {
  background-color: #fbdd21;
  text-align: center;
  font-family: tahoma;
  font-size: 1.5em;
}
.hidden {
  display: none;
}
</style>
