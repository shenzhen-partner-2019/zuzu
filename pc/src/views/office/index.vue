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
          <HouseResouce></HouseResouce>
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
            <p class="head">
              委托找房
            </p>
            <p class="text">10分钟内响应，全程免佣，专业顾问带您看房</p>
            <p>
              <a href="/zuzu/weituo" class="btn" target="_blank">
                免费委托
              </a>
            </p>
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
import SelectFiller from './selectFiller'
import HouseResouce from "../../components/houseResource"
import QualityItem from '../share/qulity-item/index'
import Paginator from '../../components/paginator'
export default {
  data() {
    return {
      sharelist: new Array(3),
      qualitylist: new Array(3),
      pager: {
        pageIndex: 1,
        total: 318,
        pageSize: 20
      }
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
      background: linear-gradient(to bottom, #f4fafd 0%, #edf6fc 100%);
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
        margin-top: 33px;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
        overflow: hidden;
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
</style>