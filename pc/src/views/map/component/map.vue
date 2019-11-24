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
import RoundOverlay from "../overlays/roundOverlay.js";
import SquireOverlay from "../overlays/squireOverlay.js";

const testData = [
  {
    type: 1,
    name: "南山区",
    detailAdress: "南山区",
    value: 200,
    children: [
      {
        type: 2,
        name: "白石洲",
        detailAdress: "南山区白石洲",
        value: 100,
        children: []
      },
      {
        type: 2,
        name: "前海",
        detailAdress: "南山区前海",
        value: 100,
        children: []
      }
    ]
  },
  {
    type: 1,
    name: "福田区",
    detailAdress: "福田区",
    value: 300
  }
];

const houselist = [
  {
    price: 110,
    area: "1203-2403m2",
    imgUrl: "https://blueprint1453.github.io/zu/img/swiper_01.jpg",
    title: "海王星辰大厦",
    type: 3,
    detailAdress: "深圳市南山区海王星辰大厦"
  },
  {
    price: 210,
    area: "1203-2403m2",
    imgUrl: "https://blueprint1453.github.io/zu/img/swiper_01.jpg",
    title: "中国华润大厦",
    type: 3,
    detailAdress: "深圳市南山区中国华润大厦"
  }
];
export default {
  data() {
    return {
      map: null,
      city: "深圳",
      zoom: 12
    };
  },
  mounted() {
    this.initMap();
  },
  watch: {
    zoom(value) {
      this.updateVisibleOverlays();
    }
  },
  methods: {
    initMap() {
      this.map = new BMap.Map("map_2", { minZoom: 6, maxZoom: 20 });
      this.map.centerAndZoom("深圳", this.zoom);
      this.map.enableScrollWheelZoom(true);
      this.map.addEventListener("zoomend", e => {
        this.zoom = this.map.getZoom();
      });
      this.geocoder = new BMap.Geocoder();
      this.renderData(testData);
      this.renderBuildData(houselist);
    },
    renderBuildData(data) {
      for (let item of data) {
        let address = item.detailAdress;
        this.geoCodeAddress(address).then(point => {
          let data = item;
          let overlay = new SquireOverlay(point, item.type, data);
          this.map.addOverlay(overlay);
          this.overlaylist.push(overlay);
          this.setVisibleStatus(overlay);
        });
      }
    },
    updateVisibleOverlays() {
      for (let overlay of this.overlaylist) {
        this.setVisibleStatus(overlay);
      }
    },
    setVisibleStatus(overlay) {
      let type = overlay._type;
      if (this.zoom >= 16) {
        if (type === 3) {
          overlay.show();
        } else {
          overlay.hide();
        }
      } else if (this.zoom >= 14) {
        if (type === 2) {
          overlay.show();
        } else {
          overlay.hide();
        }
      } else if (this.zoom >= 12) {
        if (type === 1) {
          overlay.show();
        } else {
          overlay.hide();
        }
      }
    },
    renderData(data) {
      this.map.clearOverlays();
      this.overlaylist = [];
      this.addOverlays(data);
    },
    addOverlays(data) {
      for (let item of data) {
        let address = this.city + item.detailAdress;
        this.geoCodeAddress(address).then(point => {
          let type = item.type;
          let data = {
            name: item.name,
            value: item.value
          };
          let overlay = new RoundOverlay(point, 38, type, data);
          this.map.addOverlay(overlay);
          this.overlaylist.push(overlay);
          this.setVisibleStatus(overlay);
        });
        if (item.children && item.children.length > 0) {
          this.renderData(item.children);
        }
      }
    },
    // 地址解析
    geoCodeAddress(address) {
      return new Promise((resolve, reject) => {
        this.geocoder.getPoint(address, point => {
          if (point) {
            resolve(point);
          } else {
            reject(new Error(" geocode fail"));
          }
        });
      });
    }
  }
};
</script>


