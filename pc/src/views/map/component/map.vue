<template>
  <div class="map-container">
    <div class="map" id="map_2"></div>
  </div>
</template>
<style lang="scss" scoped>
.map-container {
  .map {
    height: 100%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.map = new BMap.Map("map_2", { minZoom: 6, maxZoom: 20 });
      this.map.centerAndZoom('深圳', 12);
      this.map.enableScrollWheelZoom(true);
    }
  },
}
</script>


