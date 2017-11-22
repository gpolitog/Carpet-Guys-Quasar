<template>
  <div class="main">
    <div class="month">
      <div class="monthName">{{ this.month.month }}</div>
      <div class="prev" v-on:click="previous">&#10094;</div>
      <div class="next" v-on:click="next">&#10095;</div>
      <div class="year">{{ this.year }}</div>
    </div>
    <div class="weekdays">
      <div class="monday">Mo</div>
      <div class="tuesday">Tu</div>
      <div class="wednesday">We</div>
      <div class="thursday">Th</div>
      <div class="friday">Fr</div>
      <div class="saturday">Sa</div>
      <div class="sunday">Su</div>
    </div>
    <ul class="days">
      <li v-bind:class="{'mondayCol': true, 'rowOne': monday.row === 1, 'rowTwo': monday.row === 2, 'rowThree': monday.row === 3, 'rowFour': monday.row === 4, 'rowFive': monday.row === 5, 'rowSix': monday.row === 6}" v-for="monday in mondays">{{monday.day}}</li>
      <li v-bind:class="{'tuesdayCol': true, 'rowOne': tuesday.row === 1, 'rowTwo': tuesday.row === 2, 'rowThree': tuesday.row === 3, 'rowFour': tuesday.row === 4, 'rowFive': tuesday.row === 5, 'rowSix': tuesday.row === 6}" v-for="tuesday in tuesdays">{{tuesday.day}}</li>
      <li v-bind:class="{'wednesdayCol': true, 'rowOne': wednesday.row === 1, 'rowTwo': wednesday.row === 2, 'rowThree': wednesday.row === 3, 'rowFour': wednesday.row === 4, 'rowFive': wednesday.row === 5, 'rowSix': wednesday.row === 6}" v-for="wednesday in wednesdays">{{wednesday.day}}</li>
      <li v-bind:class="{'thursdayCol': true, 'rowOne': thursday.row === 1, 'rowTwo': thursday.row === 2, 'rowThree': thursday.row === 3, 'rowFour': thursday.row === 4, 'rowFive': thursday.row === 5, 'rowSix': thursday.row === 6}" v-for="thursday in thursdays">{{thursday.day}}</li>
      <li v-bind:class="{'fridayCol': true, 'rowOne': friday.row === 1, 'rowTwo': friday.row === 2, 'rowThree': friday.row === 3, 'rowFour': friday.row === 4, 'rowFive': friday.row === 5, 'rowSix': friday.row === 6}" v-for="friday in fridays">{{friday.day}}</li>
      <li v-bind:class="{'saturdayCol': true, 'rowOne': saturday.row === 1, 'rowTwo': saturday.row === 2, 'rowThree': saturday.row === 3, 'rowFour': saturday.row === 4, 'rowFive': saturday.row === 5, 'rowSix': saturday.row === 6}" v-for="saturday in saturdays">{{saturday.day}}</li>
      <li v-bind:class="{'sundayCol': true, 'rowOne': sunday.row === 1, 'rowTwo': sunday.row === 2, 'rowThree': sunday.row === 3, 'rowFour': sunday.row === 4, 'rowFive': sunday.row === 5, 'rowSix': sunday.row === 6}" v-for="sunday in sundays">{{sunday.day}}</li>
    </ul>
    <div>{{ this.day }}</div>
    <div class="dayView">
      <div class="time">12:00</div>
      <div class="title">Job</div>
      <div class="location">1234 w address ln</div>
      <div class="customerContact">(123)456-789</div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    let time = new Date()
    let vue = this
    vue.year = time.getFullYear()
    vue.monthNum = time.getMonth()
    vue.monthCompute()
    vue.dayPopulate()
  },
  data: function () {
    return { // number of days
      months: [
        { monthNum: 0, month: 'January', days: 31, startingDay: 'monday' },
        { monthNum: 1, month: 'Feburary', days: 28, startingDay: 'thursday' }, // 29
        { monthNum: 2, month: 'March', days: 31, startingDay: 'thursday' },
        { monthNum: 3, month: 'April', days: 30, startingDay: 'sunday' },
        { monthNum: 4, month: 'May', days: 31, startingDay: 'tuesday' },
        { monthNum: 5, month: 'June', days: 30, startingDay: 'friday' },
        { monthNum: 6, month: 'July', days: 31, startingDay: 'sunday' },
        { monthNum: 7, month: 'August', days: 31, startingDay: 'wednesday' },
        { monthNum: 8, month: 'September', days: 30, startingDay: 'saturday' },
        { monthNum: 9, month: 'October', days: 31, startingDay: 'monday' },
        { monthNum: 10, month: 'November', days: 30, startingDay: 'thursday' },
        { monthNum: 11, month: 'December', days: 31, startingDay: 'saturday' }],
      month: '',
      monthNum: 0,
      day: '',
      mondays: [],
      tuesdays: [],
      wednesdays: [],
      thursdays: [],
      fridays: [],
      saturdays: [],
      sundays: []
    }
  },
  methods: {
    dayPopulate () {
      let vue = this
      console.log(vue.months[vue.monthNum].days)
      let i = 0
      let rowNum = 1
      let dayString = vue.months[vue.monthNum].startingDay
      for (i = 0; i < vue.months[vue.monthNum].days; i++) {
        let dayNum = i + 1
        if (dayString === 'monday') {
          vue.mondays.push({ day: dayNum, row: rowNum })
          dayString = 'tuesday'
        }
        else if (dayString === 'tuesday') {
          vue.tuesdays.push({ day: dayNum, row: rowNum })
          dayString = 'wednesday'
        }
        else if (dayString === 'wednesday') {
          vue.wednesdays.push({ day: dayNum, row: rowNum })
          dayString = 'thursday'
        }
        else if (dayString === 'thursday') {
          vue.thursdays.push({ day: dayNum, row: rowNum })
          dayString = 'friday'
        }
        else if (dayString === 'friday') {
          vue.fridays.push({ day: dayNum, row: rowNum })
          dayString = 'saturday'
        }
        else if (dayString === 'saturday') {
          vue.saturdays.push({ day: dayNum, row: rowNum })
          dayString = 'sunday'
        }
        else if (dayString === 'sunday') {
          vue.sundays.push({ day: dayNum, row: rowNum })
          dayString = 'monday'
          rowNum++
        }
      }
    },
    dayClear () {
      let vue = this
      vue.mondays = []
      vue.tuesdays = []
      vue.wednesdays = []
      vue.thursdays = []
      vue.fridays = []
      vue.saturdays = []
      vue.sundays = []
    },
    monthCompute () {
      let vue = this
      if (vue.monthNum === vue.months[0].monthNum) {
        vue.month = vue.months[0]
      }
      else if (vue.monthNum === vue.months[1].monthNum) {
        vue.month = vue.months[1]
      }
      else if (vue.monthNum === vue.months[2].monthNum) {
        vue.month = vue.months[2]
      }
      else if (vue.monthNum === vue.months[3].monthNum) {
        vue.month = vue.months[3]
      }
      else if (vue.monthNum === vue.months[4].monthNum) {
        vue.month = vue.months[4]
      }
      else if (vue.monthNum === vue.months[5].monthNum) {
        vue.month = vue.months[5]
      }
      else if (vue.monthNum === vue.months[6].monthNum) {
        vue.month = vue.months[6]
      }
      else if (vue.monthNum === vue.months[7].monthNum) {
        vue.month = vue.months[7]
      }
      else if (vue.monthNum === vue.months[8].monthNum) {
        vue.month = vue.months[8]
      }
      else if (vue.monthNum === vue.months[9].monthNum) {
        vue.month = vue.months[9]
      }
      else if (vue.monthNum === vue.months[10].monthNum) {
        vue.month = vue.months[10]
      }
      else if (vue.monthNum === vue.months[11].monthNum) {
        vue.month = vue.months[11]
      }
    },
    previous () {
      let vue = this
      if (vue.monthNum > 0) {
        vue.monthNum--
      }
      else if (vue.monthNum === 0) {
        vue.monthNum = 11
      }
      vue.monthCompute()
      vue.dayClear()
      vue.dayPopulate()
    },
    next () {
      let vue = this
      if (vue.monthNum < 11) {
        vue.monthNum++
      }
      else if (vue.monthNum === 11) {
        vue.monthNum = 0
      }
      vue.monthCompute()
      vue.dayClear()
      vue.dayPopulate()
    }
  }
}
// for (i < #of days) {push i onto days recieving array in html}
</script>

<style>
.main {
  font-family: Tahoma;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 50px 50px 50px 50px 50px 50px 50px 50px;
}
/* Month header */
.month {
    padding: 70px 25px;
    width: 100%;
    background: #f4c20d;
    text-align: center;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 4;
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: auto;
    color: #fff;
}

.monthName {
  grid-column-start:2;
  grid-column-end:2;
  grid-row-start:1;
  grid-row-end:1;
}
/* Month list */
.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.year {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: ;
  grid-row-end: ;
}

/* Previous button inside month header */
.month .prev {
    grid-column-start: 1;
    grid-column-end: 1;
    padding-top: 10px;
}

/* Next button */
.month .next {
    grid-column-start: 3;
    grid-column-end: 3;
    padding-top: 10px;
}
/* Weekdays (Mon-Sun) */
.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color:#ddd;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 4;
    grid-row-end: 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
}

.weekdays li {
    width: 13.6%;
    color: #666;
}

/* Days (1-31) */
.days {
    padding: 10px 0;
    background: #eee;
    margin: 0;
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 5;
    grid-row-end: 10;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
/*schedule day view */
.dayView {
  display: none;
  grid-column-start: 2;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 9;
  z-index: 1;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 30px 30px 30px;
}

.time {
  display: none;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 5px;
  font-size: 2.5em;
}

.title {
  display: none;
  grid-column-start: 4;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 1.5em;
}

.location {
  display: none;
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
}

.customerContact {
  display: none;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 4;
}

.monday {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}

.tuesday {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}

.wednesday {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}

.thursday {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}

.friday {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}
.saturday {
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}

.sunday {
  grid-column-start: 7;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 3;
  margin-left: 15px;
}

.mondayCol {
  grid-column: 1;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.tuesdayCol {
  grid-column: 2;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.wednesdayCol {
  grid-column: 3;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.thursdayCol {
  grid-column: 4;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.fridayCol {
  grid-column: 5;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.saturdayCol {
  grid-column: 6;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.sundayCol {
  grid-column: 7;
  width: 100%;
  text-align: center;
  font-size: 1em;
}

.rowOne {
  grid-row: 1;
}
.rowTwo{
  grid-row: 2;
}

.rowThree {
  grid-row: 3;
}

.rowFour {
  grid-row: 4;
}

.rowFive {
  grid-row: 5;
}

.rowSix {
  grid-row: 6;
}
.days li {
    list-style-type: none;
    text-align: center;
    margin-bottom: 5px;
    color:#777;
}
/* Highlight the "current" day */
.days li .active {
    padding: 5px;
    background: #f4c20d;
    color: white !important
}
</style>
