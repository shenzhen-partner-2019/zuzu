<template>
  <div class="quality-item">
    <div class="left">
      <a href="/zuzu/share-detail">
        <img src="../../../../public/img/share_quality.png" alt="">
      </a>
    </div>
    <div class="right">
      <div class="house-details">
        <p class="title ellipsis"><a title="卓越宝中时代广场" href="/zuzu/share-detail">卓越宝中时代广场</a>
        </p>
        <p class="ellipsis" title="宝安 宝安中心区">
          <span>宝安</span><span> 宝安中心区</span>
        </p>
        <p class="price ellipsis"> 248元/平米/月</p>
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
      }
    }
     .price{
      color: #fe615a;
      font-size: 14px;
    }
  }
}
</style>

