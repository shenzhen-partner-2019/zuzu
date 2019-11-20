<template>
  <div class="map-house">
    <div class="left" :class="{'slide-left': !leftAreaVisible}">
      <div class="btn-slide"  @click="toggleSlide()">
        <span class="icon icon-left" v-if="leftAreaVisible"></span>
        <span class="icon icon-right" v-else ></span>
      </div>
      <div class="left-top">
        <div class="city">
          <span class="icon-geo"></span>
          <span>深圳</span>
        </div>
        <div class="house-count">为您找到 701 个楼盘</div>
      </div>
      <div class="tab">
        <div class=" tab-item" :class="{active: activeTab === 0}" @click="onSelectTab(0)"><span>默认</span></div>
        <div class="tab-item" :class="{active: activeTab === 1}" @click="onSelectTab(1)">
          <span class="text">按价格</span>
          <span class="icon-up" v-show="activeTab === 0 || sortType === 1" @click.stop="toggleSortType(1)"></span>
          <span class="icon-down" v-show="activeTab === 0 || sortType === 0" @click.stop="toggleSortType(0)"></span>
        </div>
      </div>
      <div class="content">
        <div class="list" >
          <ul>
            <li class="loupan-item-wrapper">
              <Loupan-item ></Loupan-item>
            </li>
            <li class="loupan-item-wrapper">
              <Loupan-item></Loupan-item>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
    <div class="right">
      <div class="select-area">
        <div class="selct-list">

          <div class="item">
            <div class="select-box">
              <span class="text">{{currentRegion === '全部' ? '区域' : currentRegion}}</span>
              <span class="icon"></span>
            </div>
            <div class="options">
               <a href="javascript:;" @click="selectCurrentRegion('全部')">全部</a>
               <a 
                  href="javascript:;"
                  v-for="(item, i) in region"
                  :key="i"
                  @click="selectCurrentRegion(item.name)"
                 >
                 <span>{{item.name}}</span>
                 <div class="sub-options">
                    <a 
                      href="javascript:;"
                      v-for="(subItem, j) in item.items"
                      :key="j"
                      @click="selectCurrentRegion(subItem)"
                      >
                      {{subItem}}
                    </a>
                 </div>
              </a>
            </div>
          </div>

          <div class="item">
            <div class="select-box">
              <span class="text">{{currentSubway === '全部' ? '地铁' : currentSubway}}</span>
              <span class="icon"></span>
            </div>
            <div class="options">
              <a href="javascript:;" @click="selectCurrentSubway('全部')" >全部</a>
               <a 
                href="javascript:;"
                v-for="(item, i) in subways"
                :key="i"
                @click="selectCurrentSubway(item.name)">
                <span>{{item.name}}</span>
                 <div class="sub-options">
                    <a 
                      href="javascript:;"
                      v-for="(subItem, j) in item.items"
                      :key="j"
                       @click="selectCurrentSubway(item.name, subItem)">
                      {{subItem}}
                    </a>
                 </div>
              </a>
            </div>
          </div>

           <div class="item">
            <div class="select-box">
              <span class="text">{{currentType === '全部' ? '类型' : currentType}}</span>
              <span class="icon"></span>
            </div>
            <div class="options">
              <a href="javascript:;" @click="selectCurrenType('全部')">全部</a>
              <a href="javascript:;" @click="selectCurrenType('普通办公')" >普通办公</a>
              <a href="javascript:;" @click="selectCurrenType('共享办公')">共享办公</a>
            </div>
          </div>

          <div class="item">
            <div class="select-box area">
              <span class="text">{{currentArea === '全部' ? '面积' : currentArea}}</span>
              <span class="icon"></span>
            </div>
            <div class="options">
              <a href="javascript:;"  @click="selectCurrenArea('全部')">全部</a>
               <a 
                href="javascript:;"
                v-for="(item, i) in area"
                :key="i"
               @click="selectCurrenArea(item)">
                {{item}}
              </a>
            </div>
          </div>  
           <div class="item">
            <div class="select-box price">
              <span class="text">{{currentPrice === '全部' ? '价格' : currentPrice}}</span>
              <span class="icon"></span>
            </div>
            <div class="options">
              <a href="javascript:;"  @click="selectCurrenPrice('全部')">全部</a>
               <a 
                href="javascript:;"
                v-for="(item, i) in pricelist"
                :key="i"
                >
                <span>{{item.name}}</span>
                <div class="sub-options">
                  <a
                    href="javascript:;"
                    v-for="(subItem, j) in item.items"
                    :key="j"
                    @click="selectCurrenPrice(subItem, item.name)">
                    {{subItem}}
                  </a>
                 </div>
              </a>
            </div>
          </div>

        <div class="clear"><span class="icon-delete"></span><span>清除全部条件</span></div>
        </div>

      </div>
      <map-component class="map-custom"></map-component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$boder: 1px solid #c2c2c2;
.map-house {
  position: absolute;
  top: 118px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #f2f2f2;
  box-shadow: -1px -1px #f2f2f2;
  display: flex;
  .left {
    height: 100%;
    width: 386px;
    border-right: $boder;
    position: relative;
    &.slide-left {
      width: 0;
    }
    .btn-slide {
      position: absolute;
      top: 200px;
      right: -16px;
      height: 50px;
      width: 16px;
      border: 1px solid #e2e2e2;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      z-index: 1000;
      .icon {
        display: inline-block;
        height: 15px;
        width: 15px;
      }
      .icon-left {
        background: url("../../../public/img/lt.png") no-repeat;
        background-size: 100% 100%;
      }
      .icon-right {
        background: url("../../../public/img/gt.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .left-top {
      height: 36px;
      line-height: 36px;
      overflow: hidden;
      border-bottom: $boder;
      font-size: 12px;
      .city {
        display: inline-block;
        width: 80px;
        text-align: center;
        border-right: $boder;
        .icon-geo {
          display: inline-block;
          height: 16px;
          width: 16px;
          background: url('../../../public/img/local_black.png') no-repeat;
          background-size: 100% 100%;
          vertical-align: -2px;
          margin-right: 2px;
        }
      }
      .house-count {
        display: inline-block;
        padding-left: 24px;
      }
    }

    .tab {
      display: flex;
      background: #f0f0f0;
      height: 34px;
      overflow: hidden;

      .tab-item {
        height: 100%;
        width: 80px;
        line-height: 34px;
        font-size: 12px;
        text-align: center;
        cursor: pointer;
        border-right: $boder;

        &:last-child {
          border-right: none;
        }

        &.active {
          background: #fff;
          border-right: $boder;

        }
        .text {
          margin-right: 4px;
        }
        .icon-up {
          display: inline-block;
          height: 12px;
          width: 12px;
          background: url('../../../public/img/sort_up.png') no-repeat;
          background-size: 100% 100%;
          vertical-align: -2px;
          margin-right: 2px;
        }
        .icon-down {
          display: inline-block;
          height: 12px;
          width: 12px;
          background: url('../../../public/img/sort_down.png') no-repeat;
          background-size: 100% 100%;
          vertical-align: -2px;
        }
      }
    }
    .content {
      height: calc(100% - 70px);
      overflow-y: auto;
      .loupan-item-wrapper {
        padding: 14px 20px;
        border-top: 1px solid #e0e0e0;
        &:hover {
          background: #f0f0f0;
        }
      }
    }
  }
  .right {
    flex: 1;
    .select-area {
      position: relative;
      height: 36px;
      border-bottom: 1px solid #e2e2e2;
      padding: 8px 24px 6px;
      .clear {
        display: inline-block;
        font-size: 12px;
        margin-left: 10px;
        height: 22px;
        line-height: 22px;
        cursor: pointer;
        .icon-delete {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background: url("../../../public/img/delete_circle.png") no-repeat;
          background-size: 100% 100%;
          vertical-align: -1px;
        }
      }
      .item {
        position: relative;
        display: inline-block;
        margin-right: 8px;
        &:hover {
          .options {
            display: block;
          }
        }
      }
      .select-box {
        position: relative;
        width: 76px;
        height: 22px;
        font-size: 12px;
        color: #444;
        line-height: 22px;
        border: 1px solid #e5ceb9;
        cursor: pointer;
        padding-left: 8px;

        &.area {
          width: 96px;
        }
        &.price {
          width: 108px;
        }
        .icon {
          position: absolute;
          top: 6px;
          right: 10px;
          display: inline-block;
          height: 8px;
          width: 8px;
          background: url("../../../public/img/sanjiao.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .options {
        position: absolute;
        top: 21px;
        left: 0;
        width: 100%;
        border: 1px solid #e5ceb9;
        border-top: none;
        z-index: 1000;
        background: #fff;
        display: none;
        a {
          display: block;
          font-size: 12px;
          line-height: 20px;
          padding-left: 8px;

          &:hover {
            display: block;
            background: #f3f1e9;
            color: #f90;

            .sub-options {
              display: block;
            }
          }
        }

        .sub-options {
          position: absolute;
          display: none;
          top: 1px;
          right: -100%;
          width: 100%;
          min-height: 160px;
          max-height: 400px;
          overflow-y: auto;
          z-index: 1000;
          background: #f3f1e9;
          padding: 6px 0;
          box-shadow: 2px 2px 2px #f2f2f2;
        }
      }
    }
    .map-custom {
      height: calc(100% - 36px);
    }
  }
}
</style>

<script>
import LoupanItem from "./component/loupan-item";
import { areas, subways } from "../../utils/location.js";
import MapComponent from './component/map'
export default {
  data() {
    return {
      activeTab: 0, // 0 1
      sortType: 0, // 0-降序 1-升序
      leftAreaVisible: true,
      region: areas,
      subways,
      area: ["0-100m²", "100-300m²", "300-500m²", "500-1000m²", "1000m² 以上"],
      pricelist: [
        {
          name: "按单价",
          items: [
            "0-40元/m²⋅月",
            "40-60元/m²⋅月",
            "60-80元/m²⋅月",
            "80-120元/m²⋅月",
            "120-140元/m²⋅月",
            "140元/m²⋅月以上"
          ]
        },
        {
          name: "按总价",
          items: [
            "0-0.5万元/月",
            "0.5-1.5万元/月",
            "1.5-3万元/月",
            "3-5万元/月",
            "5-10万元/月",
            "10万元/月以上"
          ]
        }
      ],

      currentRegion: '全部',
      currentSubway: '全部',
      currentType: '全部',
      currentArea: '全部',
      currentPrice: '全部',
    };
  },
  components: {
    LoupanItem,
    MapComponent
  },
  methods: {
    onSelectTab(index) {
      if (index === 1 && this.activeTab === 1) {
        this.sortType = this.sortType === 0 ? 1 : 0
      } else if (index === 1 && this.activeTab === 0) {
        this.sortType = 0
      }
      this.activeTab = index;
      if (index === 0) {
        this.sortType = 0
      }
    },
    toggleSortType(type) {
      if (this.activeTab === 0) {
        this.sortType = type
        this.activeTab = 1
      } else if (this.activeTab === 1) {
        this.sortType = this.sortType === 0 ? 1 : 0
      }
    },
    toggleSlide() {
      console.log("toggleSlide");
      this.leftAreaVisible = !this.leftAreaVisible;
    },
    selectCurrentRegion(region) {
      this.currentRegion = region
    },
    selectCurrentSubway(subway, station) {
      this,currentSubway = subway
    },
    selectCurrenType(type) {
      this.currentType = type
    },
    selectCurrenArea(area) {
      this.currentArea = area
    },
    selectCurrenPrice(price, priceType) {
      this.currentPrice = price
    }
  }
};
</script>

