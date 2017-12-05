<template>
  <div class="main">
    <div class="calendarButton" v-on:click="calendar">
      <div class="monthNum">{{ this.monthDay }}</div>
      <div class="dayNum">{{ this.dayNum }}</div>
      <div class="yearNum">{{ this.yearNum }}</div>
    </div>
    <div class="back" v-on:click="backDay"><div class="backIcon">&#10094;</div></div>
    <div class="next" v-on:click="nextDay"><div class="nextIcon">&#10095;</div></div>
    <div class="dayView">
      <div class="twelveAm">12:00am<hr/></div>
      <div class="oneAm">1:00am<hr/></div>
      <div class="twoAm">2:00am<hr/></div>
      <div class="threeAm">3:00am<hr/></div>
      <div class="fourAm">4:00am<hr/></div>
      <div class="fiveAm">5:00am<hr/></div>
      <div class="sixAm">6:00am<hr/></div>
      <div class="sevenAm">7:00am<hr/></div>
      <div class="eightAm">8:00am<hr/></div>
      <div class="nineAm">9:00am<hr/></div>
      <div class="tenAm">10:00am<hr/></div>
      <div class="elevenAm">11:00am<hr/></div>
      <div class="twelvePm">12:00pm<hr/></div>
      <div class="onePm">1:00pm<hr/></div>
      <div class="twoPm">2:00pm<hr/></div>
      <div class="threePm">3:00pm<hr/></div>
      <div class="fourPm">4:00pm<hr/></div>
      <div class="fivePm">5:00pm<hr/></div>
      <div class="sixPm">6:00pm<hr/></div>
      <div class="sevenPm">7:00pm<hr/></div>
      <div class="eightPm">8:00pm<hr/></div>
      <div class="ninePm">9:00pm<hr/></div>
      <div class="tenPm">10:00pm<hr/></div>
      <div class="elevenPm">11:00pm<hr/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'days',
  props: ['monthDay', 'dayNum', 'yearNum'],
  data: function () {
    return {
      appointments: []
    }
  },
  created () {
    this.appointmentsClear()
    this.appointmentsPopulate()
  },
  methods: {
    backDay: function () {
      this.$emit('backDay')
      this.appointmentsClear()
    },
    nextDay: function () {
      this.$emit('nextDay')
      this.appointmentsClear()
    },
    calendar: function () {
      this.$emit('calendar')
    },
    appointmentsPopulate: function () {
      this.appointments.push({timeStart: 'twoAm', timeEnd: 'fourAm', type: 'personal', title: 'Lunch', description: ''})
    },
    appointmentsClear: function () {
      this.appointments = []
    }
  }
}
</script>

<style scoped lang="less">
@yellow: #f4c20d;
@grey: #bbdef0;
.main {
  width: 100%;
  height: 960px;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 90px 860px 20px;
  background-color: @grey;
}
.dayView {
  grid-column: 2;
  grid-row: 2;
  height: 790px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(24, 2em);
  padding-top: 10px;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  padding-left: 5px;
  padding-right: 5px;
}

.calendarButton {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: @yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  color: white;
}

.calendar {

}

.monthNum {
  grid-column-start: 2;
  grid-column-end: ;
  grid-row-start: ;
  grid-row-end: ;
  font-size: 2em;
}

.dayNum {
  grid-column-start: ;
  grid-column-end: ;
  grid-row-start: ;
  grid-row-end: ;
  text-align: center;
  font-size: 2em;
}

.yearNum {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  font-size: 2em;
}

.back {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row: 2;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(24, 2em);
  background-color: @grey;
}

.backIcon {
  text-align: center;
  grid-row: 12;
}

.next {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row: 2;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(24, 2em);
  background-color: @grey;
}

.nextIcon {
  text-align: center;
  grid-row: 12;
}

/* times: half hour and 12am-11pm */

.halfHour {
  margin-top: 5px;
}

.twelveAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 1;
}

.oneAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 2;
}

.twoAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 3;
}

.threeAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 4;
}

.fourAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 5;
}

.fiveAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 6;
}

.sixAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 7;
}

.sevenAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 8;
}

.eightAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 9;
}

.nineAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 10;
}

.tenAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 11;
}

.elevenAm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 12;
}

.twelvePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 13;
}

.onePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 14;
}

.twoPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 15;
}

.threePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 16;
}

.fourPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 17;
}

.fivePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 18;
}

.sixPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 19;
}

.sevenPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 20;
}

.eightPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 21;
}

.ninePm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 22;
}

.tenPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 23;
}

.elevenPm {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 24;
}

</style>
