<template>
  <div class="share wrap">
    <div class="select-area">
      <!-- 位置 -->
      <dl class="dl">
        <dt>位置：</dt>
        <dd>
          <div class="list">
            <span :class="{'filter': locationType === 1}" @click="toggleLocationType(1)">区域</span>
            <span :class="{'filter': locationType === 2}" @click="toggleLocationType(2)">地铁</span>
          </div>
          <template v-if="locationType===1">
            <div class="list" >
              <span :class="{'filter': currentAreaIndex === -1}" @click="selectArea(-1)">全部</span>
              <span :class="{'filter': currentAreaIndex === i}" v-for="(item, i) in areas" :key="i" @click="selectArea(i)">{{item.name}}</span>
            </div>
            <div class="list" v-if="currentAreaIndex!== -1">
              <span :class="{'filter': currentSubAreaIndex === -1}" @click="selectSubArea(-1)" >全部</span>
              <span :class="{'filter': currentSubAreaIndex === i}" v-for="(item, i) in subAreas" :key="i" @click="selectSubArea(i)">{{item}}</span>
            </div>
          </template>
          <template v-if="locationType===2">
            <div class="list" >
              <span :class="{'filter': currentSubwayIndex === -1}" @click="selecSubway(-1)">全部</span>
              <span :class="{'filter': currentSubwayIndex === i}" v-for="(item, i) in subways" :key="i" @click="selecSubway(i)">{{item.name}}</span>
            </div>
            <div class="list" v-if="currentSubwayIndex!==-1">
              <span :class="{'filter': currentStationIndex === -1}" @click="selecSubwayStation(-1)" >全部</span>
              <span :class="{'filter': currentStationIndex === i}" v-for="(item, i) in stations" :key="i" @click="selecSubwayStation(i)">{{item}}</span>
            </div>
          </template>
        </dd>
      </dl>

      <!-- 人数 -->
      <dl class="dl">
        <dt>人数:</dt>
        <dd>
          <div class="list">
            <span @click="selectStaffNum(-1)" :class="{'filter': currentNumIndex === -1}">全部</span>
            <span :class="{'filter': currentNumIndex === i}" v-for="(item, i) in numOfStafflist" @click="selectStaffNum(i)" :key="i">{{item}}</span>
            <span class="self">
              <div class="input-range">
                <input v-model="selfNumRange.start" type="text">
                <i>--</i>
                <input v-model="selfNumRange.end" type="text">
              </div>
              <div class="input-unit">人</div>
              <div class="self-filter-btn">筛选</div>
            </span>
          </div>
        </dd>
      </dl>

       <!-- 单价 -->
      <dl class="dl">
        <dt>单价:</dt>
        <dd>
          <div class="list">
            <span @click="selectPrice(-1)" :class="{'filter': currentPriceIndex === -1}">全部</span>
            <span :class="{'filter': currentPriceIndex === i}" v-for="(item, i) in pricelist" @click="selectPrice(i)" :key="i">{{item}}</span>
             <span class="self">
              <div class="input-range">
                <input v-model="selfPriceRange.start" type="text">
                <i>--</i>
                <input v-model="selfPriceRange.end" type="text">
              </div>
              <div class="input-unit">元</div>
              <div class="self-filter-btn">筛选</div>
            </span>
          </div>
        </dd>
      </dl>

      <!-- 装修 -->
      <dl class="dl">
        <dt>装修:</dt>
        <dd>
          <div class="list">
            <span @click="selectDecorateStatus(-1)" :class="{'filter': currentdecorateIndex === -1}">全部</span>
            <span :class="{'filter': currentdecorateIndex === i}" v-for="(item, i) in decorateStatuslist" @click="selectDecorateStatus(i)" :key="i">{{item}}</span>
          </div>
        </dd>
      </dl>
      <!-- 已选 -->
      <div class="divider-area"></div>
      <dl class="dl dl-selected">
        <dt>已选:</dt>
        <dl>
          <div class="list list-selected">
            <div class="selected-item"><span class="text">南山</span><span class="delete-btn"></span></div>
            <div class="selected-item"><span class="text">南山中心区</span><span class="delete-btn"></span></div>
            <div class="selected-item"><span class="text">120-200元</span><span class="delete-btn"></span></div>

            <div class="clear"><span class="icon-delete"></span><span>清空</span></div>
          </div>
        </dl>
      </dl>
    </div>
  </div>
</template>
<script>
import { areas, subways } from "../../utils/location.js";
import {
  pricelist,
  numOfStafflist,
  decorateStatuslist,
  selectDecorateStatus
} from "./data/searchFilter.js";
export default {
  data() {
    return {
      // 位置相关
      locationType: 1, // 1/2
      areas,
      subways,
      subAreas: [],
      stations: [],
      currentAreaIndex: -1,
      currentSubAreaIndex: -1,
      currentSubwayIndex: -1,
      currentStationIndex: -1,
      // 人数
      numOfStafflist,
      currentNumIndex: -1,
      selfNumRange: {
        start: "",
        end: ""
      },

      pricelist,
      currentPriceIndex: -1,
      selfPriceRange: {
        start: "",
        end: ""
      },

      decorateStatuslist,
      currentdecorateIndex: -1
    };
  },
  methods: {
    selectArea(i) {
      this.currentAreaIndex = i;
      if (i !== -1) {
        this.subAreas = areas[i].items;
      } else {
        this.subAreas = [];
      }
    },
    selectSubArea(i) {
      this.currentSubAreaIndex = i;
    },
    selecSubway(i) {
      this.currentSubwayIndex = i;
      if (i !== -1) {
        this.stations = subways[i].items;
      } else {
        this.stations = [];
      }
    },
    selecSubwayStation(i) {
      this.currentStationIndex = i;
    },
    toggleLocationType(i) {
      this.locationType = i;
    },

    selectStaffNum(i) {
      this.currentNumIndex = i;
    },
    selectPrice(i) {
      this.currentPriceIndex = i;
    },
    selectDecorateStatus(i) {
      this.currentdecorateIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
.share {
  .select-area {
    .dl {
      display: flex;
      font-size: 12px;
      line-height: 28px;
      padding: 6px 0;
      border-bottom: 1px #f0f0f0 dotted;
    }
    dt {
      color: #999;
      width: 36px;
    }
    dd {
      .list {
        padding-left: 20px;
        > span {
          margin-right: 20px;
          cursor: pointer;
          &.filter,
          &:hover {
            color: #fb3;
          }
        }
      }
      span.self {
        display: inline-block;
        cursor: default;
        &:hover {
          color: #333;
        }
      }
      .input-range {
        display: inline-flex;
        align-items: center;
        border: 1px solid #ddd;
        padding: 0 10px;
        width: 120px;
        height: 24px;
        border-radius: 4px;
        margin-right: 10px;
        i {
          color: #aaa;
          margin: 0 4px;
          height: 20px;
          line-height: 20px;
        }
        input {
          width: 40px;
          text-align: center;
        }
      }
      .input-unit {
        display: inline-block;
        margin-right: 10px;
      }
      .self-filter-btn {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        border: 1px solid #ddd;
        font-size: 12px;
        border-radius: 4px;
        padding: 0 10px;
        color: #aaa;
        cursor: pointer;
      }
    }

    .dl-selected {
      padding: 20px 0;
      .list-selected {
        padding-left: 20px;
        .selected-item {
          display: inline-block;
          border: 1px dashed #ddd;
          background: #edf1fa;
          padding: 0 10px;
          margin-right: 14px;
          .text {
            margin-right: 8px;
          }
          .delete-btn {
            display: inline-block;
            vertical-align: middle;
            width: 12px;
            height: 12px;
            background: url("../../../public/img/close.png") no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
          }
        }
        .clear {
          display: inline-block;
          padding-left: 10px;
          .icon-delete {
            display: inline-block;
            vertical-align: middle;
            width: 16px;
            height: 16px;
            background: url("../../../public/img/delete.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
