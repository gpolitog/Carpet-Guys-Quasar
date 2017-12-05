<template>
  <div class="main">
    <h4>New Appointment</h4>
    <select v-model="timeStartSelect" class="timeStart">
        <option value="twelveAm">12:00am</option>
        <option value="{ timeStart: oneAm }">1:00am</option>
        <option value="{ timeStart: twoAm }">2:00am</option>
        <option value="{ timeStart: threeAm }">3:00am</option>
        <option value="{ timeStart: fourAm }">4:00am</option>
        <option value="{ timeStart: fiveAm }">5:00am</option>
        <option value="{ timeStart: sixAm }">6:00am</option>
        <option value="{ timeStart: sevenAm }">7:00am</option>
        <option value="{ timeStart: eightAm }">8:00am</option>
        <option value="{ timeStart: nineAm }">9:00am</option>
        <option value="{ timeStart: tenAm }">10:00pm</option>
        <option value="{ timeStart: elevenAm }">10:00pm</option>
        <option value="{ timeStart: twelvePm }">12:00pm</option>
        <option value="{ timeStart: onePm }">1:00pm</option>
        <option value="{ timeStart: twoPm }">2:00pm</option>
        <option value="{ timeStart: threePm }">3:00pm</option>
        <option value="{ timeStart: fourPm }">4:00pm</option>
        <option value="{ timeStart: fivePm }">5:00pm</option>
        <option value="{ timeStart: sixPm }">6:00pm</option>
        <option value="{ timeStart: sevenPm }">7:00pm</option>
        <option value="{ timeStart: eightPm }">8:00pm</option>
        <option value="{ timeStart: ninePm }">9:00pm</option>
        <option value="{ timeStart: tenPm }">10:00pm</option>
        <option value="{ timeStart: elevenPm }">11:00pm</option>
      </select>
    <select v-model="timeEndSelect" class="timeEnd">
      <option value="twelveAm">12:00am</option>
      <option value="{ timeEnd: oneAm }">1:00am</option>
      <option value="{ timeEnd: twoAm }">2:00am</option>
      <option value="{ timeEnd: threeAm }">3:00am</option>
      <option value="{ timeEnd: fourAm }">4:00am</option>
      <option value="{ timeEnd: fiveAm }">5:00am</option>
      <option value="{ timeEnd: sixAm }">6:00am</option>
      <option value="{ timeEnd: sevenAm }">7:00am</option>
      <option value="{ timeEnd: eightAm }">8:00am</option>
      <option value="{ timeEnd: nineAm }">9:00am</option>
      <option value="{ timeEnd: tenAm }">10:00pm</option>
      <option value="{ timeEnd: elevenAm }">10:00pm</option>
      <option value="{ timeEnd: twelvePm }">12:00pm</option>
      <option value="{ timeEnd: onePm }">1:00pm</option>
      <option value="{ timeEnd: twoPm }">2:00pm</option>
      <option value="{ timeEnd: threePm }">3:00pm</option>
      <option value="{ timeEnd: fourPm }">4:00pm</option>
      <option value="{ timeEnd: fivePm }">5:00pm</option>
      <option value="{ timeEnd: sixPm }">6:00pm</option>
      <option value="{ timeEnd: sevenPm }">7:00pm</option>
      <option value="{ timeEnd: eightPm }">8:00pm</option>
      <option value="{ timeEnd: ninePm }">9:00pm</option>
      <option value="{ timeEnd: tenPm }">10:00pm</option>
      <option value="{ timeEnd: elevenPm }">11:00pm</option>
    </select>
    <select v-model="selected" class="type">
      <option value="personal">Personal</option>
      <option value="professional">Professional</option>
      <option value="installation">Installation</option>
      <option value="estimate">Estimate</option>
    </select>
    <input class="title" placeholder="Title"></input>
    <input class="description" placeholder="Description"></input>
    <div v-on:click="appointmentSave" class="appointmentSave">Save</div>
    <div v-on:click="cancel" class="cancel">Cancel</div>
  </div>
</template>

<script>
export default {
  name: 'appointmentSet',
  methods: {
    appointmentSave: function () {
      this.$emit('')
    },
    cancel: function () {
      this.$emit('backAppointment')
    }
  },
  data: function () {
    return {
      timeStart: [
        { text: '12:00am', value: 'twelveAm' },
        { text: '1:00am', value: 'oneAm' },
        { text: '2:00am', value: 'twoAm' },
        { text: '3:00am', value: 'threeAm' },
        { text: '4:00am', value: 'fourAm' },
        { text: '5:00am', value: 'fiveAm' },
        { text: '6:00am', value: 'sixAm' },
        { text: '7:00am', value: 'sevenAm' },
        { text: '8:00am', value: 'eightAm' },
        { text: '9:00am', value: 'nineAm' },
        { text: '10:00am', value: 'tenAm' },
        { text: '11:00am', value: 'elevenAm' },
        { text: '12:00pm', value: 'twelvePm' },
        { text: '1:00pm', value: 'onePm' },
        { text: '2:00pm', value: 'twoPm' },
        { text: '3:00pm', value: 'threePm' },
        { text: '4:00pm', value: 'fourPm' },
        { text: '5:00pm', value: 'fivePm' },
        { text: '6:00pm', value: 'sixPm' },
        { text: '7:00pm', value: 'sevenPm' },
        { text: '8:00pm', value: 'eightPm' },
        { text: '9:00pm', value: 'ninePm' },
        { text: '10:00pm', value: 'tenPm' },
        { text: '11:00pm', value: 'elevenPm' }
      ],
      timeEnd: [
        { text: '12:00am', value: 'twelveAm' },
        { text: '1:00am', value: 'oneAm' },
        { text: '2:00am', value: 'twoAm' },
        { text: '3:00am', value: 'threeAm' },
        { text: '4:00am', value: 'fourAm' },
        { text: '5:00am', value: 'fiveAm' },
        { text: '6:00am', value: 'sixAm' },
        { text: '7:00am', value: 'sevenAm' },
        { text: '8:00am', value: 'eightAm' },
        { text: '9:00am', value: 'nineAm' },
        { text: '10:00am', value: 'tenAm' },
        { text: '11:00am', value: 'elevenAm' },
        { text: '12:00pm', value: 'twelvePm' },
        { text: '1:00pm', value: 'onePm' },
        { text: '2:00pm', value: 'twoPm' },
        { text: '3:00pm', value: 'threePm' },
        { text: '4:00pm', value: 'fourPm' },
        { text: '5:00pm', value: 'fivePm' },
        { text: '6:00pm', value: 'sixPm' },
        { text: '7:00pm', value: 'sevenPm' },
        { text: '8:00pm', value: 'eightPm' },
        { text: '9:00pm', value: 'ninePm' },
        { text: '10:00pm', value: 'tenPm' },
        { text: '11:00pm', value: 'elevenPm' }
      ],
      timeStartSelect: 'twelveAm',
      timeEndSelect: 'twelveAm',
      selected: 'personal',
      type: [
        { text: 'Personal', value: 'personal' },
        { text: 'Professional', value: 'professional' },
        { text: 'Installation', value: 'installation' },
        { text: 'Estimate', value: 'estimate' }
      ],
      title: '',
      description: ''
    }
  }
}
</script>

<style scoped lang="less">
@yellow: #f4c20d;
.main {
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30px repeat(14, 30px);
  background-color: #667;
}

h4 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
}

.timeStart {
  grid-column: 1;
  grid-row: 7;
  margin-right: 5px;
}

.timeEnd {
  grid-column: 2;
  grid-row: 7;
  margin-right: 5px;
}

.type {
  grid-column: 3;
  grid-row: 7;
}

.title {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row: 8;
}

.description {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 9;
  grid-row-end: 12;
}

input::placeholder {
  line-height: 1em;
}

.appointmentSave {
  grid-column: 1;
  grid-row: 12;
  text-align: center;
  background-color: @yellow;
  border-radius: 6px;
  margin-right: 15px;
}

.cancel {
  grid-column: 2;
  grid-row: 12;
  text-align: center;
  background-color: #FF0000;
  border-radius: 6px;
  margin-right: 15px;
}
</style>
