<template>
  <div class="fixed-book">
    <div class="title">
      <h4>预约看房</h4>
      <p>5分钟响应，帮你找最合适的办公室</p>
    </div>
    <div class="form">
      <input class="tel" type="text" placeholder="请输入手机号">
      <textarea class="desc" name="" id=""  rows="3"></textarea>
      <div class="btn">立即预约</div>
    </div>
    <div class="title title2">
      <h4>免费预约</h4>
      <p>专业客服，实时在线高效服务</p>
    </div>
    <div class="book-tel">
      <span class="icon-tel"></span>
      <span class="tel-num">400-048-1818</span>
    </div>
    <div class="our-promise">*租租网承诺仅将你的联系方式用于找房服务</div>
  </div>
</template>

<style lang="scss" scoped>
.fixed-book {
  width: 380px;
  background: #fff;
  .title {
    margin-bottom: 30px;
    h4 {
      font-size: 24px;
      margin-bottom: 4px;
    }
    p {
      color: #999;
      font-size: 12px;
    }
  }
  .title2 {
    margin-bottom: 20px;
  }
  .form {
    margin-bottom: 20px;
    .tel {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border: 1px solid #f2f2f2;
      border-radius: 3px;
      text-indent: 1em;
      margin-bottom: 20px;
    }
    .desc {
      width: 100%;
      display: block;
      padding: 10px;
      line-height: 20px;
      color: #222;
      border: 1px solid #f2f2f2;
      border-radius: 3px;
      outline: none;
      margin-bottom: 20px;
      resize: none;
    }
    .btn {
      background: #399ede;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 3px;
    }
  }
  .book-tel {
    height: 64px;
    line-height: 64px;
    text-align: center;
    border: 1px solid #399edf;
    margin-bottom: 8px;
    .tel-num {
      font-size: 32px;
      color: #399ede;
      font-weight: bold;
    }
    .icon-tel {
      display: inline-block;
      width: 28px;
      height: 28px;
      background: url("../../../../public/img/icon_tel_blue.png") no-repeat;
      background-size: 100% 100%;
      margin-right: 4px;
    }
  }
  .our-promise {
    color: #999;
    font-size: 12px;
  }
}
</style>

