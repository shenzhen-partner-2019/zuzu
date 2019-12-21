<template>
  <div class="quality-item">
    <div class="left">
      <a href="javascript:;">
        <img v-if="info.zhaopian0" :src="info.zhaopian0" alt="">
         <div v-if="!info.zhaopian0" class="no-pic">
          <img src="../../../../public/img/paishezhong.png" alt="">
          <span class="text">拍摄中...</span>
        </div>
      </a>
    </div>
    <div class="right">
      <div class="house-details">
        <p class="title ellipsis"><a href="javascript:;" :title="info.suoshu + info.shangwu" >{{info.suoshu + info.shangwu}}</a>
        </p>
        <p class="ellipsis" title="宝安 宝安中心区">
          <span>{{quyu}}</span><span> {{info.yu}}</span>
        </p>
        <!-- <p class="price ellipsis"> 248元/平米/月</p> -->
      </div>
    </div>
  </div>
</template>
<script>
import codeMap from '../../../utils/quCodeMap.js'
export default {
  data() {
    return {}
  },
  props: {
    info: {
      type: Object
    }
  },
  computed: {
    quyu() {
      return codeMap[this.info.qu_code]
    }
  },
}
</script>


<style lang="scss" scoped>
.quality-item {
  display: flex;
  cursor: pointer;
  .left {
    margin-right: 10px;
    a {
      position: relative;
      display: block;
      height: 70px;
      width: 70px;
      img {
        height: 100%;
      }
    }
    .no-pic {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 100%;
        text-align: center;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 12px;
      }
    }
  }
  .right {
    // flex: 1;
    .house-details {
      width: 95px;
    }
    p {
      margin-bottom: 8px;
      height: 20px;
    }
    span {
      color: #666;
      display: inline-block;
      margin-right: 5px;
      font-size: 12px;
    }
    .title {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      a {
        color: #2e2e2e;
        display: inline;
        cursor: pointer;
      }
    }
     .price{
      color: #fe615a;
      font-size: 14px;
    }
  }
}
</style>

