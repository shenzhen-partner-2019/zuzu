<template>
  <div class="bmap" id="bamp" :style="mapStyle">
    <div class="map" id="map"></div>
    <div class="detail-mapBtn">
      <a data-index="0" href="javascript:;" class="map-icon ditie" :class="{active: currentKey === '地铁'}" @click="addMakerlist('地铁')"></a>
      <a data-index="1" href="javascript:;" class="map-icon gongjiao" :class="{active: currentKey === '公交'}" @click="addMakerlist('公交')"></a>
      <a data-index="2" href="javascript:;" class="map-icon canyin" :class="{active: currentKey === '餐饮'}" @click="addMakerlist('餐饮')"></a>
      <a data-index="3" href="javascript:;" class="map-icon yinhang" :class="{active: currentKey === '银行'}" @click="addMakerlist('银行')"></a>
      <a data-index="4" href="javascript:;" class="map-icon loupan" :class="{active: currentKey === '楼盘'}" ></a>
    </div>
    <div class="detail-mapInfo-wrapper">
      <div class="detail-mapInfo" >
        <div class="detail-mapTxt">
          <p class="p1 ff-yahei">玖悦雅轩</p>
          <ul class="vehicle ff-yahei">
            <li>
              <em class="map-icon vehicle-em ditie">
              </em>
              {{staticInfo.ditie.address}}－{{staticInfo.ditie.title}}站－{{staticInfo.distance1}} 步行{{staticInfo.duration1}}
            </li>
            <li>
              <em class="map-icon vehicle-em gongjiao">
              </em>
              {{staticInfo.gongjiao.address}}－{{staticInfo.gongjiao.title}}－{{staticInfo.distance2}} 步行{{staticInfo.duration2}}
            </li>
          </ul>
          <div class="detail-mapAround ff-yahei">
            <a data-index="2" href="javascript:;" :class="{active: currentKey === '餐饮'}"  @click="addMakerlist('餐饮')" >餐饮：{{staticInfo.eatNum}}个</a><a
              data-index="3" href="javascript:;" :class="{active: currentKey === '银行'}"  @click="addMakerlist('银行')" >银行：{{staticInfo.bankNum}}个</a><a data-index="4"
              href="javascript:;" class="around">周边楼盘：0个</a>
          </div>
        </div>
      </div>
    </div>
    <!-- <map-panel
     :tablist="searchlist"
     :data="curSearchResultlist"
     :active-index="curSearchIndex"
     @on-select-result-item="onSelectResultItem"
     @on-selct-item="onSelectItem"  >
    </map-panel> -->
  </div>
</template>

<script>
import { isObject } from "../utils/common.js";
import MapPanel from "./map-panel";
import IconMarker from '../utils/IconMarker.js'
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

const IMG_URL = 'https://blueprint1453.github.io/zu/img/map_icon.png'
const OFFSET_MAP = {
  '地铁': [-102, 0],
  '公交': [-132, 0],
  '餐饮': [-102, -29],
  '银行': [-103, -120],
  '楼盘': [-132, -29],
  geo: [-102, -75]
}
const GEO_ICON_SIZE = [30, 45]
const ICON_SIZE = [29, 29]
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
      currentKey: '',
      serviceKeywords: ['地铁',"公交", "餐饮", '银行', '楼盘'],
      staticInfo: {
        eatNum: 0,
        bankNum: 0,
        loupanNum: 0,
        gongjiao: {},
        ditie: {},
        distance1: '',
        distance2: '',
        duration1: '',
        duration2: '',
      },
      searchlist: [
        {
          title: "交通",
          keywords: ['地铁',"公交"]
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
      ],
      markerlist: []
    };
  },
  props: {
    height: {
      type: [Number, String],
      default: 500
    },
    address: {
      type: String,
      default: '深圳'
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
    }, 1000);

    // document.querySelector('#map').addEventListener('click', (e) => {
    //   console.log('hehe', e.target)
    // })
  },
  methods: {
    async initMap() {
      this.map = new BMap.Map("map", { minZoom: 6, maxZoom: 20 });
      this.geocoder = new BMap.Geocoder();
      console.log(this.address)
      let point = this.point = await this.geoCodeAddress(this.address);
     
      let targetKeys = this.serviceKeywords.slice(0, this.serviceKeywords.length - 1)
      let searchResult = await this.searchServiceByRadius(targetKeys, point)
      this.curSearchResultlist = this.handleSearchResult(searchResult)
      this.localSearch.clearResults()
      console.log(searchResult)
      console.log(this.curSearchResultlist)

      let walkRoute1Result1 = await this.searchWalkRoute(point, this.curSearchResultlist[0].list[0].point)
      let walkRoute1Result2 = await this.searchWalkRoute(point, this.curSearchResultlist[1].list[0].point)

      let distance1 = walkRoute1Result1.getPlan(0).getDistance()
      let distance2 = walkRoute1Result2.getPlan(0).getDistance()
      let duration1 = walkRoute1Result1.getPlan(0).getDuration()
      let duration2 = walkRoute1Result2.getPlan(0).getDuration()

      this.staticInfo = {
        eatNum: this.curSearchResultlist[2].total,
        bankNum: this.curSearchResultlist[3].total,
        loupanNum: 0,
        gongjiao: {
          address: this.curSearchResultlist[1].list[0].address.split('; ')[0],
          title: this.curSearchResultlist[1].list[0].title
        },
        ditie: {
          address: this.curSearchResultlist[0].list[0].address,
          title: this.curSearchResultlist[0].list[0].title
        },
        distance1,
        distance2,
        duration1,
        duration2
      }

      if (point) {
        this.map.centerAndZoom(point, 15);
        this.addCircle(point, 1000);
        let size = GEO_ICON_SIZE
        let iconOptions = {
          imgUrl: IMG_URL,
          offset: OFFSET_MAP['geo']
        }
        let marker = new IconMarker(point, size, iconOptions, '', 'animation-bounce')
        console.log(marker)
        marker.addEventListener('click', function() {
          console.log('marker event')
        })
        this.map.addOverlay(marker)
      }
      /**
       * 在有滚动条的页面中开启enableScrollWheelZoom会有问题
       * 采用缩放控件实现缩放
       */
      this.addCcontrol();

      this.map.addEventListener("click", e => {
        console.log("click", e);
      });
    },
    addMakerlist(keyword) {
      this.hideOldmarkers()
      this.currentKey = keyword
      let item = this.curSearchResultlist.find(item => item.keyword === keyword)
      if (item) {
        let list = item.list
        let size = [29, 29]
        let iconOptions = {
          imgUrl: IMG_URL,
          offset: OFFSET_MAP['银行']
        }
        for (let subItem of list) {
          iconOptions.offset = OFFSET_MAP[item.keyword]
          let {point, title} = subItem
          let marker = new IconMarker(point, size, iconOptions, title, 'icon-marker')
          this.map.addOverlay(marker)
          this.markerlist.push(marker)
          // marker.listen('click', (e) => {
          //   console.log('marker', e)
          // })
        }
      }
    },
    hideOldmarkers() {
      for (let item of this.markerlist) {
        item.hide()
      }
    },
    searchWalkRoute(point1, point2) {
      console.log(point1, point2)
      return new Promise( (resolve, reject) => {
        var walking = new BMap.WalkingRoute(this.map);
        walking.search(point1, point2);
        walking.setSearchCompleteCallback((result) => {
          if (result) {
            resolve(result)
          } else {
            reject('searchWalkRoute fail')
          }
        })
      })
    },
    // async onSelectItem(index) {
    //   this.curSearchIndex = index;
    //   let keywords = this.searchlist[index].keywords;
    //   let point = this.point;
    //   let searchResult =
    //     (await this.searchServiceByRadius(keywords, point)) || [];
    //   this.curSearchResultlist = this.handleSearchResult(searchResult);
    //   console.log(searchResult);
    //   console.log(this.curSearchResultlist);
    // },
    onSelectResultItem(item) {
      let itemPoint = item.point;
      let overlays = this.map.getOverlays();
      let target = overlays.find(overlay => {
        let point = overlay.point;
        return (
          point && itemPoint.lat === point.lat && itemPoint.lng === point.lng
        );
      });

      let content = `<div><p>地址：${item.address}</p><p>电话：${
        item.phoneNumber
      }</p></div>`;
      let searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title: item.title, //标题
        width: 240, //宽度
        height: 105, //高度
        panel: "panel", //检索结果面板
        enableAutoPan: true, //自动平移
        searchTypes: [
          BMAPLIB_TAB_SEARCH, //周边检索
          BMAPLIB_TAB_TO_HERE, //到这里去
          BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
      });
      console.log(item.marker);
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
          phoneNumber: item.phoneNumber,
          marker: item.marker
        });
      }
      return arr;
    },
    searchServiceByRadius(keyword, point) {
      return new Promise((resolve, reject) => {
        let localSearch = this.localSearch = new BMap.LocalSearch(point, {
          renderOptions: { map: this.map }
        });
        this.localSearch.searchNearby(keyword, point, 1000);
        // 禁止根据结果调整地图层级
        this.localSearch.disableAutoViewport();
        this.localSearch.disableFirstResultSelection();
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
      return marker
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
  .detail-mapBtn {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 2;
    width: 46px;
    a {
      display: inline-block;
      width: 46px;
      height: 46px;
      margin-bottom: 5px;
      font-size: 0;
      line-height: 0;
    }
    .map-icon {
      background: url("../../public/img/map_icon.png") no-repeat;
    }
    .ditie {
      background-position: -51px 0;
      &:hover, &.active {
        background-position: 0px 0px;
      }
    }
    .gongjiao {
      background-position: -51px -49px;
      &:hover, &.active {
        background-position: 0px -49px;
      }
    }
    .canyin {
      background-position: -51px -100px;
      &:hover, &.active {
        background-position: 0px -100px;
      }
    }
    .yinhang {
      background-position: -51px -204px;
      &:hover, &.active {
        background-position: 0px -204px;
      }
    }
    .loupan {
      background-position: -51px -151px;
      &:hover, &.active {
        background-position: 0px -151px;
      }
    }
  }
  
  .detail-mapInfo-wrapper {
    position: absolute;
    z-index: 10;
    left: 80px;
    top: 50px;
  }
  .detail-mapInfo {
    background: #fff;
    width: 280px;
    height: auto;
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    .detail-mapTxt {
      padding: 10px 15px 0;
      .p1 {
        font-size: 14px;
        color: #665c52;
      }
      .vehicle {
        padding: 10px 0;
        color: #998a7b;
        li {
          line-height: 18px;
          padding: 2px 0;
          font-size: 12px;
        }
      }
      .detail-mapAround {
        border-top: 1px #e3dfd9 dashed;
        height: 40px;
        line-height: 40px;
        color: #998a7b;
        font-size: 12px;
       a {
         margin-right: 8px;
         &.active {
           color: rgb(255, 187, 51);
         }
       }
      
      }
    }
  }
}
</style>
