<template>
  <div class="share-item">
    <div class="item-left">
      <a href="/zuzu/share-detail">
        <img v-if="info.zhaopian0" :src="info.zhaopian0" alt="">
        <div v-if="!info.zhaopian0" class="no-pic">
          <img src="../../../../public/img/paishezhong.png" alt="">
          <span class="text">拍摄中...</span>
        </div>
      </a>
    </div>
    <div class="item-right">
      <h4><a href="/zuzu/share-detail">{{info.shangwu}}（{{info.suoshu}}）</a></h4>
      <!-- <p class="p1">
        <span class="icon"></span>
        <span>12种户型在租</span>
        <span>|</span>
        <span>2012年建</span>
      </p> -->
      <p class="p2">
        <span class="icon"></span>
        <span>{{codeMap[info.qu_code]}}-{{info.yu}}</span>
        <!-- <span>距离【2号线-海上世界】约456米</span> -->
      </p>
      <!-- 人数分类 -->
      <!-- <div class="area-list">
        <div class="area-list-item">
          <span>12人</span>
          <div class="pop">
            <span class="arrow" :style="{left: '30px'}"></span>
            <div class="pop-content">
              <p class="name">
                <span>面积</span>
                <span>装修</span>
                <span class="">朝向</span>
                <span class="total">租金(元/间/月)</span>
                <span class="unit">单价(元/工位/月)</span>
              </p>
              <p class="val-unit bold">
                <span>50㎡ </span>
                <span>精装修</span>
                <span>东</span>
                <span class="total">3000</span>
                <span class="unit">250</span>
              </p>
            </div>
          </div>
        </div>

        <div class="area-list-item">
          <span>12人</span>
          <div></div>
        </div>
        <div class="area-list-item">
          <span>12人</span>
          <div></div>
        </div>
        <div class="area-list-item">
          <span>12人</span>
          <div></div>
        </div>
        <div class="area-list-item">
          <span>12人</span>
          <div></div>
        </div>
        <div class="area-list-item">
          <span>...</span>
          <div></div>
        </div>
      </div>
      
      <div class="price">
        <span class="value">1425</span>
        <span class="unit">元/工位/月起</span>
      </div> -->

    </div>
  </div>
</template>
<script>
import codeMap from '../../../utils/quCodeMap.js'
export default {
  data() {
    return {
      codeMap
    }
  },
  props: {
    info: {
      type: Object,
    }
  },
  created(){
    setTimeout(() => {
      console.log(this.info)
    }, 1000)
  }
}
</script>


<style lang="scss" scoped>
.share-item {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  .item-left {
    margin-right: 30px;
    a {
      display: block;
      height: 180px;
      width: 240px;
    }
    img {
      height: 100%;
      vertical-align: top;
    }
    .no-pic {
      height: 100%;
      position: relative;
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
      }
    }
  }

  .item-right {
    flex: 1;
    font-size: 14px;
    position: relative;
    h4 {
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      font-size: 18px;
      color: #333;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .p1,
    .p2 {
      color: #666;
      height: 20px;
      line-height: 20px;
      margin-bottom: 12px;

      span {
        margin-right: 10px;
      }
    }
    .area-list {
      position: relative;
      .area-list-item {
        display: inline-block;
        width: 76px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #f2f2f2;
        font-size: 14px;
        color: #394043;
        font-weight: normal;
        border-right: 0;
        cursor: pointer;

        &:last-child {
          border-right: 1px solid #f2f2f2;
        }

        &:hover {
          .pop {
            display: block;
          }
        }

        .pop {
          display: none;
          position: absolute;
          width: 460px;
          border: 1px solid #f2f2f2;
          background: #fff;
          box-shadow: 0px 1px 3px 0px rgba(144, 144, 144, 0.1);
          z-index: 11;
          padding: 10px 20px;
          top: 60px;
          left: 0;

          .name, .val-unit {
            display: flex;
            span {
              width: 60px;
              color: #9399a5;
              font-size: 12px;
              text-align: center;
              margin-right: 10px;
              &.total {
                width: 80px;
                margin-right: 20px;
              }
              &.unit {
                width: 90px;
              }
            }
          }
          .bold {
            span {
              color: #1d1b1b;
              font-weight: bold;
              font-size: 14px;
            }
          }

          .arrow {
            position: absolute;
            top: 0;
            left: 30px;
            display: block;
            height: 14px;
            width: 14px;
            border-top: 1px solid #eee;
            border-left: 1px solid #eee;
            background: #fff;
            transform: translateY(-6px) rotate(45deg);
            
          }
        }
      }
    }

    .price {
      position: absolute;
      right: 0;
      top: 30px;
      color: #fe615a;
      .value {
        font-size: 28px;
        font-weight: bold;
      }
      .unit {
      }
    }
  }
}
</style>

