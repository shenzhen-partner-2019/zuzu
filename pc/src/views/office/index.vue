<template>
  <div class="office-page">
    <!--面包组件-->
    <CrumbsCompent></CrumbsCompent>
    <!--选择过滤-->
    <SelectFiller></SelectFiller>
    <div class="wrap share-list clear">
      <div class="list-left">
        <div class="tab-nav">
          <a href="javascript:;">
           <span>默认排序</span>
          </a>
           <a href="javascript:;">
            <span>价格</span>
            <span></span>
            <span></span>
          </a>
          <span class="total">共有<strong>24858</strong>个网点满足您的需求</span>
        </div>
        <div class="list">
          <!--热门房源数据列表/组件-->
          <HouseResouce :houseResourceData="houseResourceData"></HouseResouce>
        </div>
        <!-- 分页 -->
        <Paginator
          class="page-custom"
          :current.sync="pager.pageIndex"
          :total="pager.total"
        ></Paginator>
      </div>
      <div class="list-right">
        <div class="entrust">
            <p class="p1">深圳<i class="i1">25823</i>套</p>
            <span class="s1"><em class="icon em1"></em>前往地图找房</span>
        </div>
        <div class="high-quality">
          <h4>热门写字楼推荐</h4>
          <div class="list">
            <quality-item class="list-item" v-for="(item, i) in qualitylist" :key="i"></quality-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CrumbsCompent from '../../components/crumbsCompent'
import SelectFiller from '../../components/selectFiller'
import HouseResouce from "../../components/houseResource"
import QualityItem from './qulity-item/index'
import Paginator from '../../components/paginator'
import HouseResoure from '../../../public/img/houseResoure1.jpg'
export default {
  data() {
    return {
      sharelist: new Array(3),
      qualitylist: new Array(3),
      pager: {
        pageIndex: 1,
        total: 318,
        pageSize: 20
      },
       houseResourceData:[
                { id:'office2121212',
                  path:'/zuzu/office-detail',
                  imgUrl:HouseResoure,
                  title:'南山科技园 大冲商务中心 720平米 精装修 朝东南',
                  loupan:'大冲商务中心',
                  square:'720',
                  style:'精装修',
                  qu:'南山',
                  xian:"南山科技园",
                  street:'铜鼓路39号',
                  jl:'距离罗宝线高新园站约102米',
                  renshu:69,
                  yuan:'9.7',
                  danjia:'135',
                  shoucang:'red',
                  pTag:[  
                      {background: '#eff6f5',color: '#a6c5c1',text:'可注册'},
                      {background: '#f5f2e9',color: '#e4d19e',text:'地铁10分钟'},
                      {background: '#eef2f8',color: '#a2afc8',text:'热门楼盘'}
                  ]
                },
                { 
                  id:'office3121212',
                  path:'/zuzu/office-detail',
                  imgUrl:HouseResoure,
                  title:'南山科技园 大冲商务中心 720平米 精装修 朝东南',
                  loupan:'大冲商务中心',
                  square:'720',
                  style:'精装修',
                  qu:'南山',
                  xian:"南山科技园",
                  street:'铜鼓路39号',
                  jl:'距离罗宝线高新园站约102米',
                  renshu:69,
                  yuan:'9.7',
                  danjia:'135',
                  shoucang:'red',
                  pTag:[  
                      {background: '#eff6f5',color: '#a6c5c1',text:'可注册'},
                      {background: '#f5f2e9',color: '#e4d19e',text:'地铁10分钟'},
                      {background: '#eef2f8',color: '#a2afc8',text:'热门楼盘'}
                  ]
                },
            ]
    };
  },
  components:{
    CrumbsCompent,
    SelectFiller,
    HouseResouce,
    QualityItem,
    Paginator
  },
  mounted() {
   
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";
$blue-theme: #399EDE;
  .office-page {
    width:1180px;
    margin:0 auto;
    .share-list {
    padding-top: 30px;
  }
  .list-left {
    float: left;
    width: 910px;
    .tab-nav {
      height: 32px;
      line-height: 32px;
      border-bottom: 4px solid #f5f8ff;
      a {
        margin-right: 10px;
        padding: 0 10px;
        background: #f5f8ff;
        color: #999;
        font-size: 12px;
        &:hover {
          color: #fb3;
        }
        &.selected {
          background: #f5f8ff;
          color: #999;
        }
      }
      .total {
        float: right;
        color: #999;
        font-size: 12px;
        strong {
          display: inline-block;
          font-size: 16px;
          padding: 0 8px;
          color: #666;
          vertical-align: -1px;
          font-weight: normal;
        }
      }
    }
  }
  .page-custom {
    padding-top:30px;
    margin-bottom: 30px;
  }
  .list-right {
    float: right;
    width: 210px;
    overflow: hidden;
    min-height: 100px;
  }
  .list {
    padding-top:30px;
  }
  .list-item-wrap {
    padding: 34px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .list-right {
    .entrust {
      width: 210px;
      height: 183px;
      padding: 20px 20px;
      margin-bottom: 20px;
      // background: #f4fafd;
      // background: #edf6fc;
      // background: linear-gradient('#f4fafd','#edf6fc');
      background: linear-gradient(to bottom, #f9f9f9 0%, #edf6fc 100%);
      .head {
        color: #333333;
        font-size: 20px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .text {
        color: #666;
        font-size: 12px;
      }
      .btn {
        display: inline-block;
        width: 172px;
        height: 40px;
        font-size: 12px;
        border: 0;
        background: $blue-theme;
        color: #fff;
        border-radius: 2px;
        margin-top: 15px;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        overflow: hidden;
      }
      .p1 {
        margin-top:85px;
        line-height: 24px;
        text-align: center;
        color: #979fa8;
        .i1 {
          padding: 0 5px;
          font-size: 16px;
          color: #f90;
          vertical-align: top;
          display: inline-block;
        }
      }
      .s1 {
        width: 168px;
        height: 28px;
        margin: 0 auto;
        margin-top:10px;
        border: 1px solid #ececec;
        color: #979fa8;
        font-size: 14px;
        letter-spacing: 2px;
        border-radius: 3px;
        line-height: 28px;
        text-align: center;
        background: #fff;
        display: block;
        .em1 {
            width: 19px;
            height: 19px;
            background-position: -396px -26px;
            margin: 4px 5px 0 0;
        }
      }
    }
    .high-quality {
      border: 1px solid #F2F2F2;
      border-top: 2px solid $blue-theme;
      h4 {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        border-bottom: 1px solid #F2F2F2;
      }
      .list {
        padding: 20px 10px;
      }
      .list-item {
        margin-bottom: 30px;
      }
    }
  }
  }
.icon {
    display: inline-block;
    vertical-align: top;
    background: url(../../../public/img/icon_v4.png) no-repeat;
    font-size: 0;
}
</style>