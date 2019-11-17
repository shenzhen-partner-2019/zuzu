<template>
  <div class="bmap" :style="mapStyle">
    <div class="map" id="map"></div>
    <map-panel
     :tablist="searchlist"
     :data="curSearchResultlist"
     :active-index="curSearchIndex"
     @on-select-result-item="onSelectResultItem"
     @on-selct-item="onSelectItem"  >
    </map-panel>
  </div>
</template>

<script>
import { isObject } from "../utils/common.js";
import MapPanel from "./map-panel";
/*缩放控件type有四种类型:
  BMAP_NAVIGATION_CONTROL_SMALL：仅包含平移和缩放按钮；
  BMAP_NAVIGATION_CONTROL_PAN:仅包含平移按钮；
  BMAP_NAVIGATION_CONTROL_ZOOM：仅包含缩放按钮*/

var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }); // 左上角，添加比例尺
var top_left_navigation = new BMap.NavigationControl(); //左上角，添加默认缩放平移控件
var top_right_navigation = new BMap.NavigationControl({
  anchor: BMAP_ANCHOR_TOP_RIGHT,
  type: BMAP_NAVIGATION_CONTROL_SMALL
}); //右上角，仅包含平移和缩放按钮

export default {
  components: {
    MapPanel
  },
  data() {
    return {
      map: null,
      point: null,
      geocoder: null,
      localSearch: null,
      curSearchIndex: 3,
      curSearchResultlist: [],
      searchlist: [
        {
          title: "交通",
          keywords: ["公交站", "地铁站"]
        },
        {
          title: "餐饮",
          keywords: "餐饮"
        },
        {
          title: "娱乐",
          keywords: "娱乐"
        },
        {
          title: "银行",
          keywords: "银行"
        },
        {
          title: "酒店",
          keywords: "酒店"
        }
      ]
    };
  },
  props: {
    height: {
      type: [Number, String],
      default: 500
    }
  },
  computed: {
    mapStyle() {
      let styleMap = {};
      let height = Number.parseInt(this.height);
      height = height ? height : 500;
      styleMap.height = height + "px";
      return styleMap;
    }
  },
  mounted() {
    setTimeout(() => {
      this.initMap();
    }, 2000);
  },
  methods: {
    async initMap() {
      this.map = new BMap.Map("map", { minZoom: 6, maxZoom: 20 });
      this.geocoder = new BMap.Geocoder();
      let point = this.point = await this.geoCodeAddress("深圳南山海上世界太子路工业3路1号");
      this.localSearch = new BMap.LocalSearch(point, {
        renderOptions: { map: this.map }
      });
      if (point) {
        this.map.centerAndZoom(point, 15);
        this.addMarker(point, true);
        this.addCircle(point, 1000);
        this.onSelectItem(0);
      }
      // 在有滚动条的页面中开启enableScrollWheelZoom会有问题
      // 采用缩放控件实现缩放
      this.addCcontrol();

      this.map.addEventListener('click', (e) => {
        console.log('click', e)
      })
    },
    async onSelectItem(index) {
      this.curSearchIndex = index
      let keywords = this.searchlist[index].keywords;
      let point = this.point;
      let searchResult = (await this.searchServiceByRadius(keywords, point)) || [];
      this.curSearchResultlist = this.handleSearchResult(searchResult);
      console.log(searchResult);
      console.log(this.curSearchResultlist);
    },
    onSelectResultItem(item) {
      console.log(item.point)
      let itemPoint = item.point
      let overlays = this.map.getOverlays()
      console.log(overlays)
      let target = overlays.find(overlay => {
        console.log(overlay)
        let point = overlay.point
        return point && itemPoint.lat === point.lat && itemPoint.lng === point.lng
      })
      
      let content = `<div><p>地址：${item.address}</p><p>电话：${item.phoneNumber}</p></div>`
      let searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title: item.title,      //标题
        width: 240,             //宽度
        height: 105,              //高度
        panel: "panel",         //检索结果面板
        enableAutoPan : true,     //自动平移
        searchTypes   :[
          BMAPLIB_TAB_SEARCH,   //周边检索
          BMAPLIB_TAB_TO_HERE,  //到这里去
          BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
      });
      console.log(item.marker)
      // searchInfoWindow.open(item.marker)
    },
    handleSearchResult(result) {
      let arr = [];
      if (Array.isArray(result)) {
        for (let item of result) {
          let obj = {};
          obj.keyword = item.keyword;
          obj.total = item.Sq.length;
          obj.list = this.handleSqlist(item.Sq);
          arr.push(obj);
        }
      } else {
        let obj = {};
        obj.keyword = result.keyword;
        obj.total = result.Sq.length;
        obj.list = this.handleSqlist(result.Sq);
        arr.push(obj);
      }
      return arr;
    },
    handleSqlist(sq) {
      let arr = [];
      if (!Array.isArray(sq)) {
        return;
      }
      for (let item of sq) {
        arr.push({
          title: item.title,
          address: item.address,
          point: item.point,
          phoneNumber:item.phoneNumber,
          marker:item.marker
        });
      }
      return arr;
    },
    searchServiceByRadius(keyword, point) {
      return new Promise((resolve, reject) => {
        let localSearch = new BMap.LocalSearch(point, {
          renderOptions: { map: this.map }
        });
        this.localSearch.searchNearby(keyword, point, 1000);
        // 禁止根据结果调整地图层级
        this.localSearch.disableAutoViewport();
        this.localSearch.setSearchCompleteCallback(result => {
          if (result) {
            resolve(result);
          } else {
            reject(new Error("localSearch fail"));
          }
        });
      });
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
    },
    addCircle(point, r, options) {
      let defaultOptions = {
        strokeColor: "",
        fillColor: "#fff",
        strokeWeight: 1,
        fillOpacity: 0.5,
        strokeOpacity: 0.5
      };
      options = isObject(options)
        ? { ...defaultOptions, ...options }
        : defaultOptions;
      var circle = new BMap.Circle(point, r, options);
      this.map.addOverlay(circle);
    },
    // 添加标注
    addMarker(point, hasAnimation) {
      var marker = new BMap.Marker(point);
      this.map.addOverlay(marker);
      if (hasAnimation) {
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      }
    },
    // 添加控件
    addCcontrol() {
      this.map.addControl(top_left_control);
      this.map.addControl(top_left_navigation);
      // this.map.addControl(top_right_navigation);
    },
    // 删除控件
    deleteControl() {
      this.map.removeControl(top_left_control);
      this.map.removeControl(top_left_navigation);
      // this.map.removeControl(top_right_navigation);
    }
  }
};
</script>

<style lang="scss" scoped>
.bmap {
  overflow: hidden;
  position: relative;
  .map {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
