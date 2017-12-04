<template>
  <div class="main">
    <h2>New Appointment</h2>
    <div class="appointmentBox">
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
      <div v-on:click="appointmentSave" class="appointmentSave"></div>
    </div>
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
@grey: #bbdef0;
.main {
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 7;
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  background-color: @grey;
}

h2 {
  grid-column-start: ;1
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
}

.appointmentBox {

}

.timeStart {
  grid-column: 1;
  grid-row: 2;
}

.timeEnd {
  grid-column-start: ;
  grid-column-end: ;
  grid-row-start: ;
  grid-row-end: ;
}

.type {
  grid-column-start: ;
  grid-column-end: ;
  grid-row-start: ;
  grid-row-end: ;
}

.title {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
}

.description {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
}

.appointmentSave {

}
</style>
