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
          <p class="text">办公清洁</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">微波炉</p>
        </div>
         <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">卫生间配套</p>
        </div>
         <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">免物业费</p>
        </div>
         <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">传真</p>
        </div>
         <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">茶水间</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">打印复印</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">冰箱</p>
        </div>
      </div>
    </div>
     <div class="item base-service">
      <span class="label">企业服务</span>
      <div class="content">
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">工商注册</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">税务</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">公司年检</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">行政前台</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">财务服务</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">人力招聘</p>
        </div>
         <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">投资资源</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">商务聚会</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">知识讲座</p>
        </div>
        <div class="item">
          <img src="../../../../public/img/wifi.png" alt="">
          <p class="text">宣传设计</p>
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

