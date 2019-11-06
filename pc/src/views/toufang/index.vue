<template>
  <div class="toufang">
    <div class="bg-toufang"></div>
    <div class="form-wrapper">
      <div class="form">
        <div class="form-title">
          <p class="text">免费投放房源</p>
        </div>
        <div class="process">
          <img src="../../../public/img/tf_process.png" alt="">
        </div>
        <div class="flag-code">
          <img src="../../../public/img/tf_code.jpg" alt="">
        </div>
        <div class="form-item identity">
          <div>
            <span class="radio-wrapper">
              <input type="radio" name="identity">
              <label @click="selectIdentity(1)"><span :class="{circle: identity === 1}"></span></label>
              <span class="radio-text">我是业主</span>
            </span>
            <span class="radio-wrapper">
              <input type="radio" name="identity">
              <label @click="selectIdentity(2)"><span :class="{circle: identity === 2}"></span></label>
              <span class="radio-text">我是转租</span>
              <span class="icon-tip" @click.stop="toggleTipVisible"></span>
              <div class="tip-content" v-show="tipVisible">
                <div class="tip-text">在转租前，请先和业主沟通，确认其同意转租。</div>
                <span></span>
              </div>
            </span>
          </div>
        </div>
        <div class="form-item form-item-bg form-item-blur">
          <div class="input-wrapper">
            <div class="input-box"><input type="text" placeholder="楼盘名称"></div>
          </div>
        </div>
        <div class="form-item form-item-bg form-item-blur">
          <div class="input-wrapper">
            <select class="select-district" name="district" id="district">
              <option value="0">区域</option>
              <option value="1">南山</option>
            </select>
            <span class="split-line"></span>
            <div class="input-box input-box-district"><input type="text" placeholder="详细地址"></div>
          </div>
        </div>
         <div class="form-item form-item-bg form-item-blur">
          <div class="input-wrapper">
            <div class="input-box"><input type="text" placeholder="出租面积"></div>
            <span class="rent-unit">m²</span>
          </div>
        </div>
         <div class="form-item form-item-bg form-item-blur">
          <div class="input-wrapper">
            <div class="input-box input-box-rent"><input type="text" placeholder="租金"></div>
            <span class="split-line"></span>
           <select class="select-rent" name="rent" id="rent">
              <option value="1">元/工位/月</option>
              <option value="2">元/m²/月</option>
              <option value="3">元/月</option>
            </select>
          </div>
          
        </div>
        <div class="pay-info">
          <p class="pay-title">佣金</p>
          <p class="pay-desc">悬赏一定比例佣金会更快促进成交，成交后支付。</p>
        </div>
        <div class="pay-types">
          <div v-for="(item, i) in payTypelist" :key="i" :class="{'pay-type-check': checkedPayType === i}" class="pay-type-item" @click="selectPayType(i)">
            <span>{{item}}</span>
          </div>
        </div>
        <p class="user-title">联系人信息</p>
        <div class="form-item form-item-bg form-item-blur">
          <div class="input-wrapper">
            <div class="input-box"><input type="text" placeholder="手机号"></div>
          </div>
        </div>
        <div class="form-item form-item-bg form-item-blur">
          <div class="input-wrapper">
            <div class="input-box-code"><input type="text" placeholder="验证码"></div>
            <span class="btn-code">获取短信验证码</span>
          </div>
        </div>
        <div class="form-item form-item-submit">
          <span>提交房源</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      identity: -1,
      tipVisible: false,
      checkedPayType: -1,
      payTypelist: ["无", "0.5个月", "1个月", "1.5个月", "2个月"]
    };
  },
  mounted() {
    window.addEventListener('click', () => {
      this.tipVisible = false
    })
  },
  methods: {
    selectPayType(i) {
      this.checkedPayType = i;
    },
    selectIdentity(i) {
      console.log("se", i);
      this.identity = i;
    },
    toggleTipVisible() {
      this.tipVisible = !this.tipVisible
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";

.toufang {
  position: relative;
  height: 1138px;
  .bg-toufang {
    height: 260px;
    background: url("../../../public/img/bg_toufang.jpg") no-repeat;
    background-size: 100% 100%;
  }
  .form-wrapper {
    width: 460px;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    border: solid 1px #ececec;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    margin: auto;
    .form {
      padding: 0 30px 30px;
    }
    .form-title {
      text-align: center;
      line-height: 32px;
      margin-top: 46px;
      margin-bottom: 37px;
      .text {
        height: 31px;
        font-size: 24px;
        text-align: center;
        color: #000;
      }
    }
    .process {
      margin-bottom: 30px;
    }
    .flag-code {
      margin-bottom: 16px;
    }
    .user-title {
      height: 30px;
      line-height: 30px;
    }
    .pay-info {
      margin-bottom: 10px;
      padding-top: 20px;
      .pay-title {
        font-size: 14px;
        line-height: 18px;
      }
      .pay-desc {
        color: #777;
        font-size: 12px;
      }
    }
    .pay-types {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .pay-type-item {
        width: 72px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        border-radius: 4px;
        color: #666;
        background-color: #fff;
        border: solid 1px #e2e2e2;
        cursor: pointer;
        &.pay-type-check {
          border: solid 1px $form-focus-color;
          color: $form-focus-color;
        }
      }
    }

    .radio-wrapper {
      margin-right: 20px;
      position: relative;
      [type="radio"] {
        display: none;
      }
      label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: #f5f5f5;
        margin-right: 6px;
        cursor: pointer;
        .circle {
          position: absolute;
          display: inline-block;
          width: 8px;
          height: 8px;
          top: 6px;
          left: 6px;
          border-radius: 4px;
          background: $form-focus-color;
        }
      }
      .radio-text {
        display: inline-block;
        vertical-align: middle;
      }
      .icon-tip {
        display: inline-block;
        height: 15px;
        width: 15px;
        background: url("../../../public/img/wenhao.png") no-repeat;
        background-size: 100%;
        vertical-align: middle;
        margin-left: 4px;
        cursor: pointer;
      }
      .tip-content {
        position: absolute;
        top: -14px;
        right: -286px;
        width: 276px;
        background: #fffbe3;
        border: solid 1px #ece7c8;
        height: 36px;
        line-height: 36px;
        font-size: 12px;
        padding: 0 10px;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
        margin-top: 3px;
        border-radius: 4px;
        span {
          position: absolute;
          display: block;
          width: 10px;
          height: 12px;
          background: url('../../../public/img/tip_arrow.png') no-repeat 0 0;
          font-size: 0;
          background-size: 60%;
          left: -6px;
          top: 50%;
          margin-top: -6px;
        }
      }
    }
    .form-item {
      height: 48px;
      line-height: 48px;
      margin-bottom: 10px;
      padding: 0 20px;
      font-size: 14px;
      border-radius: 4px;

      &:focus-within {
        border: 1px solid $form-focus-color;
      }

      .input-wrapper {
        display: block;
        position: relative;
      }
      .rent-unit {
        position: absolute;
        right: 0px;
        top: 0;
        display: block;
        height: 14px;
        line-height: 14px;
        top: 16px;
        color: #aaa;
      }
      .input-box {
        width: 100%;
        &.input-box-district {
          display: inline-block;
          width: 72%;
          padding-left: 20px;
        }
        &.input-box-rent {
          display: inline-block;
          width: 72%;
        }
      }
      .select-district {
        width: 28%;
        display: inline-block;
        height: 48px;
        border: none;
        background: none;
        text-align: center;
        color: #666;
        &:focus {
          outline: none;
        }
        &:optional {
          margin-left: -20px;
          margin-right: 10px;
          line-height: 24px;
          padding-left: 20px;
        }
      }
      .select-rent {
        width: 28%;
        display: inline-block;
        height: 48px;
        border: none;
        background: none;
        text-align: center;
        color: #666;
        &:focus {
          outline: none;
        }
        &:optional {
          margin-right: -20px;
          line-height: 24px;
          padding-left: 20px;
        }
      }
      .split-line {
        display: inline-block;
        width: 1px;
        height: 14px;
        background: #bbb;
        margin-top: 4px;
        transform: translateY(2px);
      }

      input {
        background: #f5f5f5;
        width: 100%;
        &:focus {
          &::placeholder {
            color: #666;
          }
        }
      }
    }
    .form-item-bg {
      background-color: #f5f5f5;
    }
    .input-box-code {
      padding-right: 100px;
    }
    .btn-code {
      position: absolute;
      display: inline-block;
      right: 0;
      font-size: 12px;
      color: #aaa;
      height: 18px;
      line-height: 18px;
      top: 16px;
      cursor: pointer;
    }
    .form-item-submit {
      text-align: center;
      color: #fff;
      background: $form-focus-color;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      margin-top: 20px;
      &:hover {
        background: #18aaf2;
      }
    }
  }
}
</style>
