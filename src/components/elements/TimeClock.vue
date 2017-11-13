<template>
  <div class="main">
    <div class="clock"></div>
    <div class="clockIn" v-on:click="clockIn">In</div>
    <div class="clockOut" v-on:click="clockOut">Out</div>
    <div class="lunchOut" v-on:click="lunchOut">Lunch Start</div>
    <div class="lunchIn" v-on:click="lunchIn">Lunch End</div>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    name: 'TimeClock',
    created () {
    /*  axios.get('https://', {

      })
        .then(response => {

        })
        .catch(response => {
          console.log(response)
        }) */
    },
    data: function () {
      return {
        time: '',
        hours: '',
        minutes: '',
        seconds: '',
        clockType: '',
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
        let vue = this
        vue.location = navigator.geolocation.getCurrentPosition(vue.locationSuccess, vue.locationFail)
        vue.time = new Date()
      /*  axios.post('https://', {
          user: vue.user,
          time: vue.time,
          location: vue.location,
          clockType: vue.clockType
        })
          .then(response => {

          })
          .catch(response => {
            console.log(response)
          }) */
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
      },
      clockIn () {
        this.clockType = 'in'
      },
      clockOut () {
        this.clockType = 'out'
      },
      lunchOut () {
        this.clockType = 'lunch out'
      },
      lunchIn () {
        this.clockType = 'lunch in'
      }
    }
  }
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
</script>

<style scoped lang="less">
  @buttonColor: #333;
  .main {
    grid-template-columns: 10px 1fr 1fr 10px;
    grid-template-rows: repeat(60px, 6);
  }

  .clock {
  font-size: 4em;
  grid-row: 1;
  grid-column-start: 2;
  grid-column-end: 4;
  }

  .clockIn {
    width: 100px;
    height: 80px;
    line-height: 80px;
    border-radius: 6px;
    background-color: @buttonColor;
    grid-row: 2;
    grid-column: 2;
  }

  .clockOut {
    width: 100px;
    height: 80px;
    line-height: 80px;
    border-radius: 6px;
    background-color: @buttonColor;
    grid-row: 2;
    grid-column: 3;
  }

  .lunchIn {
    width: 100px;
    height: 80px;
    line-height: 80px;
    border-radius: 6px;
    background-color: @buttonColor;
    grid-row: 3;
    grid-column: 2;
  }

  .lunchOut {
    width: 100px;
    height: 80px;
    line-height: 80px;
    border-radius: 6px;
    background-color: @buttonColor;
    grid-row: 3;
    grid-column: 3;
  }

</style>
