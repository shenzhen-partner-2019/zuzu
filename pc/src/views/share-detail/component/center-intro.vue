<template>
  <div class="center-intro">
    <h4 class="title">迈思商务中心简介</h4>
    <div class="item base-info">
      <span class="label">基本信息</span>
      <div class="content">
        <p><span class="name">装修风格</span><span class="value">暂无信息</span></p>
        <p><span class="name">前   台</span ><span class="value">2</span></p>
        <p><span class="name">会 议 室</span><span class="value">4个</span></p>
        <p><span class="name">入住企业</span><span class="value">--</span></p>
      </div>
    </div>
    <div class="item base-service">
      <span class="label">基础服务</span>
      <div class="content">
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公家具</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">中央空调</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公宽带</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">WIFI</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公家具</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公家具</p>
        </div>
      </div>
    </div>
     <div class="item base-service">
      <span class="label">企业服务</span>
      <div class="content">
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公家具</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">中央空调</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公宽带</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">WIFI</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公家具</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">办公家具</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center-intro {
  .title {
    font-size: 20px;
    color: #222;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .item {
    display: flex;
    margin-bottom: 10px;
    .label {
      width: 125px;
    }
    .content {
      width: 500px;
      p {
        margin-bottom: 14px;
      }
      .name {
        display: inline-block;
        width: 58px;
        margin-right: 24px;
        color: #999;
      }
    }
  }

  .base-service {
    .item {
      display: inline-block;
      text-align: center;
      margin-right: 30px;
      font-size: 14px;
      img {
        width: 24px;
      }
      .text {
        color: #999;
      }
    }
  }
}
</style>

