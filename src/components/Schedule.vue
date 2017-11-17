<template>
  <div class="main">
    <div class="month">
      <div class="monthName">{{ this.month.month }}</div>
      <div class="prev" v-on:click="previous">&#10094;</div>
      <div class="next" v-on:click="next">&#10095;</div>
    </div>
    <div class="year">{{ this.year }}</div>
    <div class="weekdays">
      <div class="monday">Mo</div>
      <div class="tuesday">Tu</div>
      <div class="wednesday">We</div>
      <div class="thursday">Th</div>
      <div class="friday">Fr</div>
      <div class="saturday">Sa</div>
      <div class="sunday">Su</div>
    </div>
    <div class="days">
      <ul>
        <li class="monday" v-for="monday in mondays">{{monday.day}}</li>
        <li class="tuesday" v-for="tuesday in tuesdays">{{tuesday.day}}</li>
        <li class="wednesday" v-for="wednesday in wednesdays">{{wednesday.day}}</li>
        <li class="thursday" v-for="thursday in thursdays">{{thursday.day}}</li>
        <li class="friday" v-for="friday in fridays">{{friday.day}}</li>
        <li class="saturday" v-for="saturday in saturdays">{{saturday.day}}</li>
        <li class="sunday" v-for="sunday in sundays">{{sunday.day}}</li>
      </ul>
    </div>
      <div>{{ this.day }}</div>
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
  // month -> {}# of days
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
      saturday: [],
      sunday: []
    }
  },
  methods: {
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
  grid-template-rows: 100px 50px 50px 50px 50px 200px;
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
}

.monthName {
  grid-column-start:2;
  grid-column-end:2;
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

.year {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start:2;
  grid-column-end:2;
}
/* Weekdays (Mon-Sun) */
.weekdays {
    margin: 0;
    padding: 10px 0;
    background-color:#ddd;
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 3;
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
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 5;
    grid-row-end: 7;
}
.monday{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}
.tuesday {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}
.wednesday {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 3;
}
.thursday {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
}
.friday {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
}
.saturday {
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 3;
}
.sunday {
  grid-column-start: 7;
  grid-column-end: 7;
  grid-row-start: 3;
  grid-row-end: 3;
}
.days li {
    list-style-type: none;
    display: inline;
    width: 10%;
    text-align: center;
    margin-bottom: 5px;
    font-size:12px;
    color:#777;
}

/* Highlight the "current" day */
.days li .active {
    padding: 5px;
    background: #f4c20d;
    color: white !important
}
</style>
