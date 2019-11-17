<template>
  <div class="loupan-item">
    <div class="item-left">
      <a href="/zuzu/loupan-detail">
        <img src="../../../../public/img/share_item_01.jpg" alt="">
      </a>
    </div>
    <div class="item-right">
      <h4><a href="/zuzu/loupan-detail">寰图（航天科技广场）</a></h4>
      <div class="price">
        <span class="value">1425</span>
        <span class="unit">元/工位/月起</span>
      </div>
      <p class="p1">
        <span class="icon"></span>
        <span>地址：</span>
        <span>[宝安 - 福永]宝安大道6099号（福永地铁站B出口30米处）</span>
      </p>
      <p class="p2">
        <span class="icon"></span>
        <span>可租面积:</span>
        <span>93.6 - 980 m²</span>
      </p>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.loupan-item {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  .item-left {
    margin-right: 16px;
    a {
      display: block;
      height: 108px;
      width: 108px;
      background: #f5f8ff;
    }
    img {
      height: 100%;
    }
  }

  .item-right {
    flex: 1;
    font-size: 14px;
    position: relative;
    h4 {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      a {
         color: #222;
      }
    }
    .p1,
    .p2 {
      color: #666;
      line-height: 22px;
      font-size: 12px;
      span {
        margin-right: 2px;
      }
    }

    .price {
      color: #f60;
      line-height: 20px;
      .value {
        font-size: 14px;
      }
    }
  }
}
</style>

