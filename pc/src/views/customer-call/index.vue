<template>
    <div class="customer-call">
        <div>
        <a style="display: block; position: fixed; box-sizing: border-box; font-size: 13px; color: rgb(255, 255, 255); text-align: center; cursor: pointer; text-decoration: none; z-index: 1000000000; right: 0px; bottom: 0px; width: 120px; height: 48px; margin-right: 140px; margin-bottom: 37px;">
            <img class="buttonImg" src="https://dn-udeskpub.qbox.me/客服_1545300098_785.png" style="max-width:200px;width: 120px;height: 48px;">
        </a>
        </div>
        <div class="side-contact">
            <span class="inline-block item-contact item-wx fr"><i class="iconfont"></i></span>
            <span class="inline-block item-contact item-phone fr"><i class="iconfont"></i></span>
            <div class="clear"></div>
            <!-- <div class="item-phone-detail" style="display: none;">
                <span class="title inline-block">电话咨询</span>
                <p><strong class="phone">4000-623-678</strong><br><i class="service-time">( 早9:00-晚8:00 )</i></p>
                <i class="inline-block sprites bottom-arrow"></i>
            </div>
            <div class="item-wx-detail">
                <span class="title inline-block">微信扫码咨询</span>
                <p><img src="https://images.diandianzu.com/Public/Home/v5/images/new/qr_code.jpg" width="96" height="96" alt="点点租"></p>
                <i class="inline-block sprites bottom-arrow"></i>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.side-contact {
    position: fixed;
    width: 101px;
    height: 85px;
    right: 30px;
    bottom: 0;
    z-index: 100;
    .item-phone {
      margin-right: 5px;
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      border-radius: 4px;
      background-color: #e3e3e3;
      cursor: pointer;
      .iconfont {
        font-size: 48px;
        color: #a5b9c2;
      }
    }
    .item-wx{
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      border-radius: 4px;
      background-color: #e3e3e3;
      cursor: pointer;
      .iconfont {
        font-size: 48px;
        color: #a5b9c2;
      }
  }
}
</style>
