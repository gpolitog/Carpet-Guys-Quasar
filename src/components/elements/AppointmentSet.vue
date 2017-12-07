<template>
  <div class="main">
    <div v-if="!edit" class="appointmentNew">
      <h4>New Appointment</h4>
      <select v-model="timeStartSelect" class="timeStart">
        <option value="twelveAm">12:00am</option>
        <option value="oneAm">1:00am</option>
        <option value="twoAm">2:00am</option>
        <option value="threeAm">3:00am</option>
        <option value="fourAm">4:00am</option>
        <option value="fiveAm">5:00am</option>
        <option value="sixAm">6:00am</option>
        <option value="sevenAm">7:00am</option>
        <option value="eightAm">8:00am</option>
        <option value="nineAm">9:00am</option>
        <option value="tenAm">10:00pm</option>
        <option value="elevenAm">10:00pm</option>
        <option value="twelvePm">12:00pm</option>
        <option value="onePm">1:00pm</option>
        <option value="twoPm">2:00pm</option>
        <option value="threePm">3:00pm</option>
        <option value="fourPm">4:00pm</option>
        <option value="fivePm">5:00pm</option>
        <option value="sixPm">6:00pm</option>
        <option value="sevenPm">7:00pm</option>
        <option value="eightPm">8:00pm</option>
        <option value="ninePm">9:00pm</option>
        <option value="tenPm">10:00pm</option>
        <option value="elevenPm">11:00pm</option>
      </select>
      <select v-model="timeEndSelect" class="timeEnd">
      <option value="twelveAm">12:00am</option>
      <option value="oneAm">1:00am</option>
      <option value="twoAm">2:00am</option>
      <option value="threeAm">3:00am</option>
      <option value="fourAm">4:00am</option>
      <option value="fiveAm">5:00am</option>
      <option value="sixAm">6:00am</option>
      <option value="sevenAm">7:00am</option>
      <option value="eightAm">8:00am</option>
      <option value="nineAm">9:00am</option>
      <option value="tenAm">10:00pm</option>
      <option value="elevenAm">10:00pm</option>
      <option value="twelvePm">12:00pm</option>
      <option value="onePm">1:00pm</option>
      <option value="twoPm">2:00pm</option>
      <option value="threePm">3:00pm</option>
      <option value="fourPm">4:00pm</option>
      <option value="fivePm">5:00pm</option>
      <option value="sixPm">6:00pm</option>
      <option value="sevenPm">7:00pm</option>
      <option value="eightPm">8:00pm</option>
      <option value="ninePm">9:00pm</option>
      <option value="tenPm">10:00pm</option>
      <option value="elevenPm">11:00pm</option>
    </select>
      <select v-model="selected" class="type">
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
        <option value="installation">Installation</option>
        <option value="estimate">Estimate</option>
      </select>
      <input  v-model="title" class="title" placeholder="Title"></input>
      <input  v-model="description" class="description" placeholder="Description"></input>
      <div v-on:click="appointmentSave" class="appointmentSave">Save</div>
      <div v-on:click="cancel" class="cancel">Cancel</div>
    </div>
    <div v-if="edit" class="appointmentView">
      <h4>{{appointment[0].title}}</h4>
      <div class="timeStartView" id="startTime">{{appointment[0].timeStart}}-</div>
      <div class="timeEndView" id="endTime">{{appointment[0].timeEnd}}</div>
      <div class="typeView">{{appointment[0].type}}</div>
      <div class="descriptionView">{{appointment[0].description}}</div>
      <div v-on:click="" class="new">New</div>
      <div v-on:click="" class="edit">Edit</div>
      <div v-on:click="$emit('backAppointment')" class="backView">Back</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appointmentSet',
  props: ['appointmentProp', 'editable'],
  created () {
    this.appointment.push(this.appointmentProp)
    if (this.editable !== null) {
      this.edit = this.editable
    }
  },
  methods: {
    appointmentSave: function () {
      this.appointment[0].timeStart = this.timeStartSelect
      this.appointment[0].timeEnd = this.timeEndSelect
      this.appointment[0].type = this.selected
      this.appointment[0].title = this.title
      this.appointment[0].description = this.description
      this.$emit('backAppointment', this.appointment[0])
    },
    cancel: function () {
      this.$emit('backAppointment')
    }
  },
  data: function () {
    return {
      timeStartSelect: 'twelveAm',
      timeEndSelect: 'twelveAm',
      selected: 'personal',
      title: '',
      description: '',
      edit: false,
      appointment: []
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

// newAppointment
.appointmentNew {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 35px 35px 35px 35px 35px 35px 35px;
}

h4 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
}

.timeStart {
  grid-column: 1;
  grid-row: 3;
  margin-right: 5px;
}

.timeEnd {
  grid-column: 2;
  grid-row: 3;
  margin-right: 5px;
}

.type {
  grid-column: 3;
  grid-row: 3;
}

.title {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 4;
}

.description {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 7;
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
  grid-row: 7;
  text-align: center;
  background-color: #FF0000;
  border-radius: 6px;
  margin-right: 15px;
}

// view appointment
.appointmentView {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 35px 35px 35px 35px 35px 35px 35px;
}

.timeStartView {
  grid-column: 1;
  grid-row: 3;
}

.timeEndView {
  grid-column: 2;
  grid-row: 3;
}

.typeView {
  grid-column: 3;
  grid-row: 3;
}

.descriptionView {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 7;
  background-color: white;
}

.new {
  grid-column: 1;
  grid-row: 7;
  text-align: center;
  background-color: blue;
  border-radius: 6px;
  margin-right: 15px;
}

.edit {
  grid-column: 2;
  grid-row: 7;
  text-align: center;
  background-color: green;
  border-radius: 6px;
  margin-right: 15px;
}

.backView {
  grid-column: 3;
  grid-row: 7;
  text-align: center;
  background-color: #FF0000;
  border-radius: 6px;
  margin-right: 15px;
}

// edit appointment
.appointmentEdit {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 35px 35px 35px 35px 35px 35px 35px;
}

.timeStartEdit {
  grid-column: 1;
  grid-row: 3;
}

.timeEndEdit {
  grid-column: 2;
  grid-row: 3;
}

.typeEdit {
  grid-column: 3;
  grid-row: 3;
}

.titleEdit {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 3;
}

.descriptionEdit {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 7;
  background-color: white;
}

.appointmentSave {
  grid-column: 1;
  grid-row: 7;
  text-align: center;
  background-color: @yellow;
  border-radius: 6px;
  margin-right: 15px;
}

.backEdit {
  grid-column: 3;
  grid-row: 7;
  text-align: center;
  background-color: #FF0000;
  border-radius: 6px;
  margin-right: 15px;
}
</style>
