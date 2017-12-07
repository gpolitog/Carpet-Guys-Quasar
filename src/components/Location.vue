<template>
  <div class="main">
    <div v-bind:class="mapContainer">
      <h4>Current Location:</h4>
      <mapbox :access-token="this.mapboxToken" :map-options="this.mapOptions" @map-load="mapLoaded"></mapbox>
    </div>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
export default {
  name: '',
  components: {
    'mapbox': Mapbox
  },
  data: function () {
    return {
      map: {},
      mapboxToken: 'pk.eyJ1IjoiZ3JhcGV0b2FzdCIsImEiOiJjajhkeHR5YzEwdXp4MnpwbWhqYzI4ejh0In0.JzUlf5asD6yOa5XvjUF5Ag',
      mapOptions: {
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [0, 0],
        zoom: 1
      }
    }
  }
}
</script>

<style >
#map {
  width: 100%;
  height: 300px;
  margin: 1.2%;
}
.mapContainer {

}
.currentLocation {

}
</style>
