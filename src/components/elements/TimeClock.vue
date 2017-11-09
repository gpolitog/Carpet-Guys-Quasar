<template>
  <div class="main">
    <div class="clock"></div>
    <div class="clockIn" :click="clockIn">In</div>
    <div class="clockOut" :click="clockOut">Out</div>
    <div class="lunchIn" :click="lunchIn">Lunch Start</div>
    <div class="lunchIn" :click="lunchIn">Lunch End</div>
  </div>
</template>

<script>
  import axios from 'axios'
  function clock () {
    this.time = new Date()
    this.hours = this.time.getHours()
    this.minutes = this.time.getMinutes()
    this.seconds = this.time.getSeconds()
    document.querySelectorAll('.clock')[0].innerHTML = harold(this.hours) + ':' + harold(this.minutes) + ':' + harold(this.seconds)
    function harold (standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn
    }
  }
  setInterval(clock, 1000)
  export default {
    name: 'TimeClock',
    created () {
      axios.get('https://', {

      })
        .then(response => {

        })
        .catch(response => {
          console.log(response)
        })
    },
    data: function () {
      return {
        time: '',
        hours: '',
        minutes: '',
        seconds: '',
        latitude: '',
        longitude: '',
        altitude: '',
        accuracy: '',
        altitudeAccuracy: ''
      }
    },
    props: ['user'],
    methods: {
      clock () {
        this.location = navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationFail)
        this.time = new Date()
        axios.post('https://', {
          user: this.user,
          time: this.time,
          location: this.location,
          clockType: this.clockType
        })
          .then(response => {

          })
          .catch(response => {
            console.log(response)
          })
      },
      locationSuccess (position) {
        let vue = this
        vue.latitude = position.coords.latitude
        vue.longitude = position.coords.longitude
        vue.altitude = position.coords.altitude
        vue.accuracy = position.coords.accuracy
        vue.altitudeAccuracy = position.coords.altitudeAccuracy
      },
      locationFail () {
        alert('It seems we cant find you, please reload the page and try again.')
        this.locationError = true
      }
    }
  }
</script>

<style scoped lang="less">
  .main {
  }

  .clock {
  font-size: 4em;
  }

</style>
