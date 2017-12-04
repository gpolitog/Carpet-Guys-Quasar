<template>
  <div class="main">
    <h4>New Appointment</h4>
    <select class="timeStart">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    <select class="timeEnd">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    <select class="type">
        <option class="personal">personal</option>
        <option class="professional">professional</option>
        <option class="installation">installation</option>
        <option class="estimate">estimate</option>
      </select>
    <input class="title" placeholder="Title"></input>
    <input class="description" placeholder="Description"></input>
    <div v-on:click="appointmentSave" class="appointmentSave">Save</div>
  </div>
</template>

<script>
export default {
  name: 'appointmentSet',
  methods: {
    appointmentSave: function () {
      this.$emit('')
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
}

.timeEnd {
  grid-column: 2;
  grid-row: 7;
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

.appointmentSave {
  grid-column: 1;
  grid-row: 12;
  text-align: center;
  background-color: @yellow;
  border-radius: 6px;
  color: black;
}
</style>
