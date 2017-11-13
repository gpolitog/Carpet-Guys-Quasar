<template>
  <div class="main">
    <div class="month">
      <div>{{ this.month }}</div>
      <div class="prev">&#10094;</div>
      <div class="next">&#10095;</div>
      <div>{{this.year}}</div>
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
    <div class="days">
      <div>1</div>
    </div>

      <div>{{this.days}}</div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    let time = new Date()
    let month = time.month
    alert(month)
  // month -> {}# of days
  },
  data: { // number of days
    days: [
      { month: 'january', days: 31, startingDay: 'monday' },
      { month: 'feburary', days: 28, startingDay: 'thursday' }, // 29
      { month: 'march', days: 31, startingDay: 'thursday' },
      { month: 'april', days: 30, startingDay: 'sunday' },
      { month: 'may', days: 31, startingDay: 'tuesday' },
      { month: 'june', days: 30, startingDay: 'friday' },
      { month: 'july', days: 31, startingDay: 'sunday' },
      { month: 'august', days: 31, startingDay: 'wednesday' },
      { month: 'september', days: 30, startingDay: 'saturday' },
      { month: 'october', days: 31, startingDay: 'monday' },
      { month: 'november', days: 30, startingDay: 'thursday' },
      { month: 'december', days: 31, startingDay: 'saturday' }
    ]
  }
}
// for (i < #of days) {push i onto days recieving array in html}
</script>

<style>
.main {
  font-family: Tahoma;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 60px 200px;
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
    grid-row-end: 3;
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
    float: left;
    padding-top: 10px;
}

/* Next button */
.month .next {
    float: right;
    padding-top: 10px;
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
    grid-row-start: 4;
    grid-row-end: 4;
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
