<template>
  <div class="quality-item">
    <div class="left">
      <a href="/zuzu/office-detail">
        <img src="../../../../public/img/share_quality.png" alt="">
      </a>
    </div>
    <div class="right">
      <div class="house-details">
        <p class="title ellipsis"><a title="荣德国际城市综合体" href="/zuzu/office-detail">荣德国际城市综合体</a>
        </p>
         <p class="price ellipsis">
          <i>100.0</i>
          <span style="color:#999">元/m²⋅月</span>
        </p>
        <p class="ellipsis" title="宝安 宝安中心区">
          <span>宝安</span><span> 宝安中心区</span>
        </p>
       
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quality-item {
  display: flex;
  cursor: pointer;
  .left {
    margin-right: 10px;
    a {
      display: block;
      height: 70px;
      width: 70px;
      img {
        height: 100%;
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

