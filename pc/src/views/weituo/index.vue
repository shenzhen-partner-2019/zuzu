<template>
  <div class="weituo" >
    <div class="wrap">
      <div class="logo ">
        <img src="../../../public/img/logo.png" alt="">
      </div>
      <div class="our-slogan">
        <p class="text1">委托好租找办公室</p>
        <p class="text2">海量真实房源，全套专业办公选址方案</p>
      </div>
      <div class="form-wrapper">
        <p class="p1">提交申请，免费委托找房</p>
        <div class="input-wrapper">
          <div class="input-inner">
            <input type="text" placeholder="请输入您的手机号码" v-model="mobile">
          </div>
          <span class="btn-book" @click="book()">预约带看</span>
          <span class="valid-tip" v-show="errorTipVisible">请输入正确的手机号</span>
        </div>
        <div class="num-list" data-num="494886">
          <span class="s1">已有</span>
            <i class="i-1">4</i>
            <i class="i-1">9</i>
            <i class="i-1">4</i>
            <i class="i-1">8</i>
            <i class="i-1">8</i>
            <i class="i-1">6</i>
          <span class="s2">人提交了委托申请</span>
        </div>
      </div>
      <div class="process-wrapper">
        <p class="p1">找房流程</p>
        <div class="process-list">
          <div class="process-item">
            <span class="icon">
              <img src="../../../public/img/edit.png" alt="">
            </span>
            <p class="process-item-text">填写手机号码</p>
          </div>
          <div class="arrow-right">
            <span></span>
          </div>
          <div class="process-item">
            <span class="icon">
              <img src="../../../public/img/kefu.png" alt="">
            </span>
            <p class="process-item-text">10分钟内客服回访</p>
          </div>
          <div class="arrow-right">
            <span></span>
          </div>
          <div class="process-item">
            <span class="icon">
              <img src="../../../public/img/doc.png" alt="">
            </span>
            <p class="process-item-text pt-20">专业顾问<br />量身制定选址方案</p>
          </div>
          <div class="arrow-right">
            <span></span>
          </div>
          <div class="process-item">
            <span class="icon">
              <img src="../../../public/img/dingwei.png" alt="">
            </span>
            <p class="process-item-text">实地带看</p>
          </div>
        </div>
      </div>
      <div class="tel-book">
        <p class="p2">您可以拨打：<i>400-733-2233</i>直接预约带看</p>
      </div>
    </div>
  </div>
</template>

<script>
import {REG_MOBILE} from '../../utils/regexp.js'
export default {
  name: 'weituo',
  data() {
    return {
      mobile: '',
      errorTipVisible: false 
    }
  },
  methods: {
    book() {
      let mobile = this.mobile
      if (!REG_MOBILE.test(mobile)) {
        this.errorTipVisible = true
        return
      }
      this.errorTipVisible = false
      // 提交
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";
.weituo {
  padding: 20px 0 30px;
  background: url("../../../public/img/bg_weituo.jpg") no-repeat;
  .logo {
    margin-bottom: 45px;
    img {
      height: 40px;
    }
  }
  .our-slogan {
    text-align: center;
    color: #fff;
    margin-bottom: 35px;
    .text1 {
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
      padding-bottom: 5px;
    }
    .text2 {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .form-wrapper {
    width: 700px;
    margin: 0 auto 45px;
    padding: 40px 0 20px;
    background: #fff;
    border-radius: 10px;
    border: 1px #e5e5e5 solid;
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.07);
    .p1 {
      text-align: center;
      margin-bottom: 34px;
      font-size: 18px;
    }
    .input-wrapper {
      width: 450px;
      margin: 0 auto 35px;
      position: relative;
      .input-inner {
        display: inline-block;
        vertical-align: top;
        height: 46px;
        width: 310px;
        input {
          width: 100%;
          padding: 14px;
          border: 1px solid $btn-color;
          text-align: center;
        }
      }
      .btn-book {
        display: inline-block;
        vertical-align: top;
        height: 46px;
        width: 140px;
        text-align: center;
        line-height: 46px;
        background: $btn-color;
        border-radius: 0 3px 3px 0;
        cursor: pointer;
      }
      .valid-tip {
        position: absolute;
        left: 0;
        bottom: -20px;
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        color: #ff7b86;
      }
    }
    .num-list {
      text-align: center;
    }
  }

  .process-wrapper {
    width: 700px;
    margin: 0 auto 50px;
    .p1 {
      text-align: center;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 30px;
    }
    .process-list {
      display: flex;
      justify-content: center;
      .process-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 160px;
        height: 118px;
        .icon {
          width: 54px;
          height: 54px;
          text-align: center;
          border-radius: 27px;
          background: #fff;
          img {
            height: 28px;
            width: 28px;
            margin-top: 13px;
          }
        }
        .process-item-text {
          height: 64px;
          text-align: center;
          font-size: 18px;
          color: #fff;
          text-shadow: 0 2px 1px #000;
          padding-top: 30px;

          &.pt-20 {
            padding-top: 20px;
          }
        }
      }

      .arrow-right {
        height: 54px;
        width: 8px;
        position: relative;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 30px;
          transform: translate(-50%, -50%);
          background: url("../../../public/img/arrow-right.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }

  .tel-book {
    width: 700px;
    margin: 0 auto;
    text-align: center;
    font-style: italic;
    color: #fff;
    height: 30px;
    line-height: 30px;
    i {
      display: inline-block;
      vertical-align: -2px;
      margin-right: 4px;
      font-size: 20px;
      color: $btn-color;
    }
  }
}
</style>
