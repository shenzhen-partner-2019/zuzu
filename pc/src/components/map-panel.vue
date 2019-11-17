<template>
  <div class="map-panel">
    <div class="panel-top">
      <ul class="tab-list">
        <li :class="{active: activeIndex === i}" @click="selectTabItem(i)" v-for="(item,i) in tablist" :key="i">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <div class="static-info">
        <p>当前房源附近共有{{staticInfo}}</p>
      </div>
    </div>
    <div class="panel-content">
      <template v-if="data.length >= 2"  >
        <div v-for="(item, i) in data" :key="i">
          <div class="title">
            <span></span>
            <span>{{item.keyword}}</span>
            <span>{{item.total}}个</span>
          </div>
          <div class="list">
            <div class="item" @click="selectResultItem(resultItem)" v-for="(resultItem, j) in item.list" :key="j">
              <p class="p1">
                <span>{{resultItem.title}}</span>
                <span>距离555米</span>
              </p>
              <p class="p2 ellipsis"><span>{{resultItem.address}}</span></p>
            </div>
          </div>
        </div>
      </template>
      <template v-if="data.length === 1">
         <div v-for="(item, i) in data" :key="i">
          <div class="list">
            <div class="item" @click="selectResultItem(resultItem)" v-for="(resultItem, j) in item.list" :key="j">
              <p class="p1">
                <span>{{resultItem.title}}</span>
                <span>距离555米</span>
              </p>
              <p class="p2 ellipsis"><span>{{resultItem.address}}</span></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-panel {
  width: 386px;
  height: 464px;
  background: #fff;
  border-radius: 2px;
  position: absolute;
  right: 20px;
  top: 50%;
  padding-top: 80px;
  transform: translateY(-50%);
  transition: all 0.2s linear;
  box-shadow: -1px 3px 5px 0px rgba(158, 158, 158, 0.3);
  overflow: hidden;

  .panel-top {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    color: #999;
    .tab-list {
      display: flex;
      padding: 0 10px;
      border-bottom: 1px solid #f2f2f2;
      li {
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        span {
          position: relative;
          display: inline-block;
          height: 100%;
          cursor: pointer;
        }
        &.active {
          color: #399ede;
          span {
            border-bottom: 2px solid #399ede;
          }
        }
      }
    }
    .static-info {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      font-size: 12px;
    }
  }

  .panel-content {
    position: absolute;
    top: 80px;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: auto;
    padding: 0 30px;
    .title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: 10px;
    }
    .list {
      .item {
        padding: 4px 0;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
        .p1 {
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          color: #3f454b;
          display: flex;
          justify-content: space-between;
        }
        .p2 {
          // height: 24px;
          // line-height: 24px;
          color: #999;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

<script>
const defaultTablist = [
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
];
export default {
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: []
    },
    tablist: {
      type: Array,
      default: []
    },
    activeIndex: {
      type: Number
    }
  },
  computed: {
    staticInfo() {
      let temp = [];
      for (let item of this.data) {
        temp.push(item.keyword + item.total + "个");
      }
      return temp.join(",");
    }
  },
  methods: {
    selectTabItem(index) {
      this.$emit("on-selct-item", index);
    },
    selectResultItem(item) {
      this.$emit('on-select-result-item', item)
    }
  }
};
</script>


