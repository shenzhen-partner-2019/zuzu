<template>
  <div class="share-detail wrap">
    <div class="house-preview">
      <swiper class="swiper-custom" :list="swiperlist"></swiper>
      <div class="house-info">
        <div class="price">
          <span>2250-2885</span>
          元/工位/月
        </div>
        <div class="info">
          <p class="info-p">
            <span class="name">在租房源</span>
            <span class="value ellipsis">6套</span>
          </p>
           <p class="info-p">
            <span class="name">在租面积</span>
            <span class="value ellipsis">52-175平米</span>
          </p>
           <p class="info-p">
            <span class="name">物业公司</span>
            <span class="value ellipsis">世邦魏理仕物业</span>
          </p>
           <p class="info-p">
            <span class="name">物业费</span>
            <span class="value ellipsis">3-22 元/平方*月含空调</span>
          </p>
          <p class="info-p">
            <span class="name"> 开发商</span>
            <span class="value ellipsis">深圳市城市建设投资发展有限公司</span>
          </p>
        </div>
        <div class="adress">
          <p>
            <span class="icon icon-house"></span>
            <span>【罗湖 地王】</span>
            <span>滨河大道南侧</span>
          </p>
          <p>
            <span class="icon icon-map"></span>
            <span>&nbsp;&nbsp;深城投中心</span>
          </p>
        </div>
        <div class="tel-book">
          <p class="strong">免费预约</p>
          <p>专业客服，实时在线高效服务</p>
          <div class="btn-tel">
            <span class="icon-tel"></span>
            <span>400-048-1818</span>
          </div>
          <p>租租网承诺保护您的隐私安全</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.share-detail {
  .house-preview {
    display: flex;
    justify-content: space-between;
    .swiper-custom {
      width: 716px;
    }
    .house-info {
      width: 380px;
      .price {
        color: #fe615a;
        border-bottom: 1px solid #f5f5f6;
        padding-bottom: 12px;
        margin-bottom: 20px;
        font-size: 14px;
        span {
          font-size: 40px;
          font-weight: bold;
        }
      }
      .info {
        border-bottom: 1px solid #f5f5f6;
        padding-bottom: 12px;
        margin-bottom: 20px;
        .info-p {
          font-size: 14px;
          color: #333;
          margin-bottom: 10px;
          span {
            display: inline-block;
          }
          .name {
            width: 50px;
            height: 24px;
            line-height: 24px;
            color: #9399a5;
            font-size: 12px;
            text-align: justify;
            margin-right: 30px;
            overflow: hidden;
          }
          .value {
            width: 250px;
            height: 24px;
            line-height: 24px;
            color: #333;
            font-size: 14px;
          }
        }
      }

      .adress {
        border-bottom: 1px solid #f5f5f6;
        padding-bottom: 12px;
        margin-bottom: 20px;
        p {
          color: #394043;
          font-size: 14px;
          padding-bottom: 10px;
        }
        .icon {
          display: inline-block;
          height: 16px;
          width: 16px;
        }
        .icon-house {
          background: url("../../../public/img/icon_house.png") no-repeat;
          background-size: 100% 100%;
        }
        .icon-map {
          background: url("../../../public/img/icon_map.png") no-repeat;
          background-size: 100% 100%;
        }
      }

      .tel-book {
        p {
          color: #999;
          font-size: 12px;
          line-height: 28px;
        }
        .strong {
          font-size: 24px;
          line-height: 24px;
          color: #333;
        }
        .btn-tel {
          height: 54px;
          border-radius: 2px;
          border: 1px solid #399ede;
          color: #399ede;
          font-weight: bold;
          font-size: 28px;
          text-align: center;
          line-height: 50px;
          margin-top: 10px;
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .icon-tel {
            width: 24px;
            height: 24px;
            background: url("../../../public/img/icon_tel.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>


<script>
import Swiper from "../../components/swiper";
export default {
  data() {
    return {
      swiperlist: [
        "https://blueprint1453.github.io/zu/img/swiper_01.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_02.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_03.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_04.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_05.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_06.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_07.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_08.jpg"
      ]
    };
  },
  components: {
    Swiper
  }
};
</script>
