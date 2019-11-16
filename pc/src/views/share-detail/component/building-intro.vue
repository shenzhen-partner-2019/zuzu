<template>
  <div class="building-intro">
    <h4 class="title">所属大厦-深城投中心简介</h4>
    <div class="info-preview">
      <div class="left">
        <p><span class="name">建造年代</span><span class="value">2016年建</span></p>
        <p><span class="name">物业公司 </span><span  class="value">世邦魏理仕物业</span></p>
        <p><span class="name">车位数</span><span  class="value">地上96个，地下54个</span></p>
        <p><span class="name">楼盘地址</span><span  class="value">滨河大道南侧</span></p>
      </div>
      <div class="right">
        <p><span class="name">开发商</span><span class="value">深圳市城市建设投资发展有限公司</span></p>
        <p><span class="name">物 业 费</span><span class="value">3-22 元/平方*月含空调</span></p>
        <p class="park"><span class="name">停 车 费</span><span class="value">普通月卡：1100元/月、固定月卡：1800元/月、临时停车：15分钟内免费，第一小时15元/小时，第二个小时起5元/小时，最高60元</span></p>
      </div>
    </div>
    <div class="unit-info">
      <div class="tab">
        <a href="javascript:;" class="active">
          A栋
        </a>
        <a href="javascript:;">
          B栋
        </a>
      </div>
      <div class="info-preview">
         <div class="left">
        <p><span class="name">总层数</span><span class="value">33层</span></p>
        <p><span class="name">标准面积 </span><span  class="value">1200平米</span></p>
        <p><span class="name">空调</span><span  class="value">集中式中央空调</span></p>
        <p><span class="name">空调费</span><span  class="value">物业费已含</span></p>
        <p><span class="name">电梯数量</span><span  class="value">B3到7层2部，9到20层5部。22到33层5部</span></p>
        <p><span class="name">入驻企业</span><span  class="value">-------</span></p>
      </div>
      <div class="right">
        <p><span class="name">层高</span><span class="value">--</span></p>
        <p><span class="name">网络</span><span class="value">3信、移动、联通、长城、铁通</span></p>
        <p class="park"><span class="name">空调时间</span><span class="value">24小时</span></p>
        <p class="park"><span class="name">加班空调</span><span class="value">无</span></p>
        <p class="park"><span class="name">电梯品牌</span><span class="value">三菱</span></p>
      </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.building-intro {
  .title {
    font-size: 20px;
    color: #222;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .info-preview {
    .left, .right {
      display: inline-block;
      width: 50%;
      vertical-align: top;
    }
    p {
      margin-bottom: 10px;
      .name {
        display: inline-block;
        color: #999;
        width: 58px;
        margin-right: 24px;
      }
      .value {
        display: inline-block;
      }
      &.park {
        display: flex;
        justify-content: flex-start;
        .value {
          flex: 1;
        }
      }
    }
  }
  .unit-info {
    margin-bottom: 50px;
    .tab {
      margin-bottom: 30px;
      border-bottom: 1px solid #e9e9e9;
      a {
        position: relative;
        width: 60px;
        margin-right: 30px;
        font-size: 14px;
        color: #9399a5;
        line-height: 48px;
        text-align: center;
        &.active {
          color: #399ede;
          &::after {
            display: block;
          }
        }
        &::after {
          content: '';
          position: absolute;
          display: none;
          width: 100%;
          bottom: 0;
          height: 2px;
          background: #399ede;
        }
      }
    }
  }
}
</style>

