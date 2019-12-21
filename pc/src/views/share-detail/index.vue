<template>
  <div class="share-detail wrap">
    <div class="share-title">
      <h2>{{houseDetail.shangwu}}{{'(' + houseDetail.suoshu + ')'}}</h2>
      <span class="save-btn">关注房源</span>
    </div>
    <div class="house-preview">
      <swiper class="swiper-custom" ref="swiper" :list="swiperlist"></swiper>
      <div class="house-info" id="house-info">
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
            <span class="name">物&nbsp;业&nbsp;费</span>
            <span class="value ellipsis">3-22 元/平方*月含空调</span>
          </p>
          <p class="info-p">
            <span class="name"> 开&nbsp;发&nbsp;商</span>
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
            <span>400-733-2233</span>
          </div>
          <p>租租网承诺保护您的隐私安全</p>
        </div>
      </div>
    </div>
    <!-- 房源表格信息 -->
    <div class="detail-info" id="share-detail-info">
       <!-- <div class="house-table-wrapper">
        <div class="tab">
          <a 
            v-for="(item, i) in tableTablist"
            :key="i"
            :class="{'active': activeTableTabIndex === i}"
            @click="onTableTabClick(i)"
            href="javascript:;">
            {{item}}
            </a>
        </div>
        <house-table :tableData="tableData"></house-table>
      </div> -->
      <center-intro class="center-info-custom"></center-intro>
      <div class="building-info-wrapper" id="building-info-wrapper">
         <building-intro class="building-info-custom"></building-intro>
         <fixed-book class="fixed-book-custom" :class="fixedBookStyle"></fixed-book>
      </div>
    </div>
     <div class="around">
        <h4 class="title">周边信息</h4>
        <div :style="{border: '1px solid #ccc'}">
          <baidu-map :height="510" address="深圳南山海上世界太子路工业3路1号"></baidu-map>
        </div>
      </div>
    <div class="book">
      <h4 class="title">预约看房</h4>
      <div class="book-area">
        <div class="left">
          <p class="">委托租租网，省心找办公室</p>
          <p><span class="icon-tel"></span>400-733-2233</p>
        </div>
        <div class="right">
          <div class="right-inner">
            <input class="input input-tel" type="text" placeholder="请输入手机号码">
            <textarea rows="2" class="input input-text" ></textarea>
            <div class="btn">立即预约</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.share-detail {
  .share-title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 20px;
    .save-btn {
      height: 44px;
      line-height: 44px;
      width: 120px;
      text-align: center;
      background: #399ede;
      border-radius: 2px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }
    h2 {
      font-size: 26px;
      font-weight: bold;
    }
  }
  .title {
    font-size: 20px;
    color: #222;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .house-preview {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
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
          margin-bottom: 6px;
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
  .detail-info {
    // width: 716px;
  }
  .house-table-wrapper {
    margin-bottom: 50px;
    .tab {
      margin-bottom: 20px;
      a {
        position: relative;
        margin-right: 30px;
        font-size: 14px;
        color: #9399a5;
        line-height: 40px;
        &.active {
          color: #399ede;
          &::after {
            display: block;
          }
        }
        &::after {
          content: "";
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
  .center-info-custom {
    margin-bottom: 50px;
    width: 716px;
  }
  .around {
    margin-bottom: 50px;
  }
  .book {
    margin-bottom: 40px;
    .book-area {
      display: flex;
      height: 232px;
      background: url("../../../public/img/concat-us.png") no-repeat;
      background-size: 100% 100%;
      .left {
        width: 50%;
        padding-left: 40px;
        padding-top: 72px;
        font-size: 32px;
        color: #fff;
        font-weight: bold;
        p {
          margin-bottom: 16px;
          .icon-tel {
            display: inline-block;
            width: 28px;
            height: 28px;
            background: url("../../../public/img/tel_white.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 6px;
          }
        }
      }
      .right {
        width: 50%;
        padding-top: 30px;
        padding-left: 84px;
        .right-inner {
          width: 368px;
        }
        .input {
          display: block;
          width: 100%;
          background: none;
          border: 1px solid #fff;
          margin-bottom: 12px;
          font-size: 14px;
          color: #fff;
          border-radius: 2px;
          &::placeholder {
            color: #fff;
          }
        }
        .input-tel {
          height: 40px;
          padding: 14px;
        }
        .input-text {
          padding: 14px;
          line-height: 20px;
          outline: none;
        }
        .btn {
          background: #f5f5f6;
          height: 40px;
          line-height: 40px;
          text-align: center;
          border-radius: 2px;
          cursor: pointer;
        }
      }
    }
  }
  .building-info-wrapper {
    position: relative;
  }
  .building-info-custom {
    width: 716px;
  }
  .fixed-book-custom {
     display: none;
     position: fixed;
     top: 70px;
     z-index: 100;
   
    // right: -436px;
    &.pos-fixed {
      position: fixed;
      top: 70px;
      z-index: 10000;
      display: block;
    }
    &.pos-absolute {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 10000;
      display: block;
    }
  }
}
</style>


<script>
import Swiper from "../../components/swiper";
import HouseTable from "./component/house-table";
import CenterIntro from "./component/center-intro";
import BuildingIntro from "./component/building-intro";
import FixedBook from "./component/fixed-book";
import BaiduMap from '../../components/baidu-map';
import HttpRequest from '../../http/axios.js'
export default {
  data() {
    return {
      houseDetail: {},
      swiperlist: [
        "https://blueprint1453.github.io/zu/img/swiper_01.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_02.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_03.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_04.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_05.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_06.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_07.jpg",
        "https://blueprint1453.github.io/zu/img/swiper_08.jpg"
      ],
      tableData: [
        {
          img_url: "https://blueprint1453.github.io/zu/img/swiper_01.jpg",
          area: 112,
          people_num: "14-25",
          decoration: "精装修",
          orientaion: "东",
          price: 2581,
          total_price: 4.13
        },
        {
          img_url: "https://blueprint1453.github.io/zu/img/swiper_02.jpg",
          area: 178,
          people_num: "25-50",
          decoration: "精装修",
          orientaion: "东",
          price: 2281,
          total_price: 5.5
        },
        {
          img_url: "https://blueprint1453.github.io/zu/img/swiper_03.jpg",
          area: 140,
          people_num: "28-45",
          decoration: "精装修",
          orientaion: "东",
          price: 2381,
          total_price: 5.12
        },
        {
          img_url: "https://blueprint1453.github.io/zu/img/swiper_04.jpg",
          area: 152,
          people_num: "30-48",
          decoration: "精装修",
          orientaion: "东",
          price: 2641,
          total_price: 5.3
        }
      ],
      tableTablist: [
        "全部房源",
        "1人",
        "2-3人",
        "4-10人",
        "10-15人",
        "16-25人",
        "25人以上"
      ],
      activeTableTabIndex: 0,
      fixedBookStyle: 'fixed-book-custom'
    };
  },
  components: {
    Swiper,
    HouseTable,
    CenterIntro,
    BuildingIntro,
    FixedBook,
    BaiduMap
  },
  computed: {
    searchInputText(){
      return this.$store.state.searchText
    }
  },
  watch: {
    searchInputText(value) {
      console.log('watch searchInputText', value)
    }
  },
  created() {
    this.getHouseDetail()
  },

  mounted() {
    let targetDom = document.querySelector('.fixed-book-custom')

    let dom1 = document.querySelector('#share-detail-info')
    let dom2 = document.querySelector('#building-info-wrapper')

    let dom3 = document.querySelector('#house-info')
    let x3 = dom3.getBoundingClientRect().x
    
    document.querySelector('.zuzu').addEventListener('scroll', (e) => {
      let y1 = dom1.getBoundingClientRect().y
      let y2 = dom2.getBoundingClientRect().y
      console.log(y1, y2)
      if (y1 <= 0 && y2 >= 0) {
        this.fixedBookStyle = 'pos-fixed'
        targetDom.style.left = x3 + 'px'
      } else if (y1 <= 0 && y2 < 0) {
        this.fixedBookStyle = 'pos-absolute'
        targetDom.style.left = ''
      } else {
        this.fixedBookStyle = ''
        targetDom.style.left = ''
      }
    })
  },
  methods: {
    onTableTabClick(i) {
      this.activeTableTabIndex = i;
    },
    getHouseDetail(){
      let id = this.$route.query.id
      HttpRequest.get('/admin/api/share', {id}).then(res => {
        let data = res.data.data[0]
        let swiperlist = []
        for (let key in data) {
          if (key.includes('zhaopian')) {
            swiperlist.push(data[key])
          }
        }
        this.swiperlist = swiperlist
        this.houseDetail = data
      }).catch(error => {
        console.log(error)
      })
    },
  }
};
</script>  
