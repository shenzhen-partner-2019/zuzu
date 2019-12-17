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
      <!-- <dl class="dl">
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
      </dl> -->

       <!-- 单价 -->
      <!-- <dl class="dl">
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
      </dl> -->

      <!-- 装修 -->
      <!-- <dl class="dl">
        <dt>装修:</dt>
        <dd>
          <div class="list">
            <span @click="selectDecorateStatus(-1)" :class="{'filter': currentdecorateIndex === -1}">全部</span>
            <span :class="{'filter': currentdecorateIndex === i}" v-for="(item, i) in decorateStatuslist" @click="selectDecorateStatus(i)" :key="i">{{item}}</span>
          </div>
        </dd>
      </dl> -->
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
    <div class="wrap share-list clear">
      <div class="list-left">
        <div class="tab-nav">
          <a href="javascript:;" :class="{selected: activeTab === 0}" @click="onSelectTab(0)">
           <span>默认排序</span>
          </a>
           <a href="javascript:;" :class="{selected: activeTab === 1}" @click="onSelectTab(1)">
            <span class="text">价格</span>
            <span class="icon-up" v-show="activeTab === 0 || sortType === 1" @click.stop="toggleSortType(1)"></span>
            <span class="icon-down" v-show="activeTab === 0 || sortType === 0" @click.stop="toggleSortType(0)"></span>
          </a>
          <span class="total">共有<strong>{{this.pager.total}}</strong>个网点满足您的需求</span>
        </div>
        <div class="list">
          <div class="list-item-wrap" v-for="(item, i) in sharelist" :key="i">
            <Item :info="item"></Item>
          </div>
        </div>
        <!-- 分页 -->
        <Paginator
          class="page-custom"
          :current.sync="pager.pageIndex"
          :total="pager.total"
          @current-change="onPageIndexChange"
        ></Paginator>
      </div>
      <div class="list-right">
        <div class="entrust">
            <p class="head">
              委托找房
            </p>
            <p class="text">10分钟内响应，全程免佣，专业顾问带您看房</p>
            <p>
              <a href="/zuzu/weituo" class="btn" target="_blank">
                免费委托
              </a>
            </p>
        </div>
        <div class="high-quality">
          <h4>热门共享办公</h4>
          <div class="list">
            <quality-item class="list-item" v-for="(item, i) in qualitylist" :key="i"></quality-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { areas, subways } from "../../utils/location.js";
import Item from "./item/index";
import QualityItem from './qulity-item/index'
import Paginator from '../../components/paginator'
import HttpRequest from '../../http/axios.js'
import {
  pricelist,
  numOfStafflist,
  decorateStatuslist,
  selectDecorateStatus
} from "./data/searchFilter.js";
export default {
  components: {
    Item,
    QualityItem,
    Paginator,
  },
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
      currentdecorateIndex: -1,

      sharelist: new Array(10),
      qualitylist: new Array(10),
       
      //  tab切换
      activeTab: 0, // 0 1
      sortType: 0, // 0-降序 1-升序

      pager: {
        pageIndex: 1,
        total: 0,
        pageSize: 10
      },
    };
  },
  created() {
    this.getSharelist()
  },
  methods: {
    getRequestParams(){
      let params = {
        qu_code: 2,
        yu: this.subAreas[this.currentNumIndex],
        page: this.pager.pageIndex
      }
      return params
    },
    getSharelist() {
      let params = this.getRequestParams()
      HttpRequest.get('/admin/api/share', params).then(res => {
        if (res.data && Array.isArray(res.data.data)) {
          this.sharelist = res.data.data
          this.pager.total = res.data.total
          this.pager.pageIndex = res.data.current_page
        } else {
          //
        }
      }).catch(error => {
        console.log(error)
      })
    },
    onPageIndexChange(index) {
      console.log(this.pager)
      this.getSharelist()
    },
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
    },
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

$blue-theme: #399EDE;

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

  .share-list {
    padding-top: 30px;
  }
  .list-left {
    float: left;
    width: 910px;
    .tab-nav {
      height: 32px;
      line-height: 32px;
      border-bottom: 4px solid #f5f8ff;
      a {
        margin-right: 10px;
        padding: 0 10px;
        color: #999;
        font-size: 12px;
        &:hover {
          color: #fb3;
          background: #f5f8ff;
        }
        &.selected {
          background: #f5f8ff;
          color: #fb3;
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
      .total {
        float: right;
        color: #999;
        font-size: 12px;
        strong {
          display: inline-block;
          font-size: 16px;
          padding: 0 8px;
          color: #666;
          vertical-align: -1px;
          font-weight: normal;
        }
      }
    }
  }
  .page-custom {
    padding-top:30px;
    margin-bottom: 30px;
  }
  .list-right {
    float: right;
    width: 210px;
    overflow: hidden;
    min-height: 100px;
  }
  .list {
    // padding: 20px 0;
  }
  .list-item-wrap {
    padding: 34px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .list-right {
    .entrust {
      width: 210px;
      height: 183px;
      padding: 20px 20px;
      margin-bottom: 20px;
      // background: #f4fafd;
      // background: #edf6fc;
      // background: linear-gradient('#f4fafd','#edf6fc');
      background: linear-gradient(to bottom, #f4fafd 0%, #edf6fc 100%);
      .head {
        color: #333333;
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .text {
        color: #666;
        font-size: 12px;
      }
      .btn {
        display: inline-block;
        width: 172px;
        height: 40px;
        font-size: 12px;
        border: 0;
        background: $blue-theme;
        color: #fff;
        border-radius: 2px;
        margin-top: 33px;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        overflow: hidden;
      }
    }
    .high-quality {
      border: 1px solid #F2F2F2;
      border-top: 2px solid $blue-theme;
      h4 {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        border-bottom: 1px solid #F2F2F2;
      }
      .list {
        padding: 20px 10px;
      }
      .list-item {
        margin-bottom: 30px;
      }
    }
  }
}
</style>