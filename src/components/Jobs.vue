<template>
  <div class="main">
    <div class="jobLoop" v-for="job in jobs">
      <div v-bind:class="{ 'tile' : !job.clicked, 'hidden' : job.clicked }" v-on:click="job.clicked = true">Job Number: {{job.jobNo}}</div>
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
    return {}
  },
  created () {
    clearInterval()
  }
}
</script>

<style>
.main {

}
.jobBox {

}
.location {

}
.tile {
  width: 100%;
  background-color: #ccc;
  border-radius: 10px;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 1em;
  text-align: center;
}

.afterPictures {

}
.details {

}
</style>
