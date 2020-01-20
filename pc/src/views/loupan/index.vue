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
          <a href="javascript:;">
           <span>推荐热度</span>
          </a>
          <span class="total">共有<strong>{{neckwork}}</strong>个网点满足您的需求</span>
        </div>
        <div class="list">
          <div class="houseResource-warpper">
            <div class="listBox fl">
                <div class="listCon">
                    <ul style="overflow:hidden;">
                        <li class="clearfix">
                            <a v-for="(item,index) in houseResourceData" :key="index" >
                                <div class="imgbox">
                                    <a  @click="goHouseResourceDetail(item.id)">
                                        <img :src="item.img0" :alt="item.title" :title="item.title" v-if="item.img0">
                                        <img src="../../../public/img/houseResoure1.jpg" alt="" v-else>
                                        <em class="video">video</em>                    
                                    </a>
                                </div>
                                <div class="list-content fl">
                                    <h1 class="h1-title">
                                        <a  href="javascript:;" :alt="item.title" :title="item.title">
                                            {{`${item.yu} ${item.name}`}}
                                        </a>
                                    </h1>
                                    <!-- <p class="p1">
                                        <a href="javascript:;">{{item.name}}</a>
                                          <i v-if="item.mianji">/</i>
                                          <span class="SLHEMKsUVrdkTz" v-if="item.mianji">{{item.mianji}}m²</span>
                                          <i  v-if="item.zhuangxiu">/</i>{{item.zhuangxiu}}             
                                    </p> -->
                                    <p class="p1">
                                        <a href="javascript:;">{{item.quyu}}</a>
                                        <i v-if="item.quyu">/</i>{{item.dizhi}}                    
                                        <i v-if="item.jl">/</i>{{item.jl}}                  
                                    </p>
                                    <p class="p2" v-if="item.renshu">有{{item.renshu}}位用户正在浏览该写字楼房源</p>
                                    <div class="list-price">
                                        <p class="p1" v-if="item.yuan">   
                                            <i class="i1"><span class="SLHEMKsUVrdkTz">{{item.yuan}}</span></i>万元/月                                                                                        
                                        </p>
                                        <p class="p2" v-if="item.danjia">单价:<span class="SLHEMKsUVrdkTz">{{item.danjia}}</span>元/m²⋅月</p>
                                        <div class="TagCollection" v-if="item.shoucang">
                                            <div class="Collection">
                                                <i></i>
                                                <span>收藏</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="p-tag" v-if="item.pTag && item.pTag.length > 0"> 
                                        <i class="offerTips" :style="{background:item.background,color:item.color}" v-for="(item,index) in item.pTag" :key="index">
                                            {{item.text}} 
                                        </i>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <Paginator
          class="page-custom"
          :current.sync="pager.pageIndex"
          :total="pager.total"
          @current-change="onPageIndexChange"
        ></Paginator>
      </div>
      <div class="list-right">
        <div class="entrust">
            <p class="p1">深圳<i class="i1">25823</i>套</p>
            <span class="s1"><em class="icon em1"></em>前往地图找房</span>
        </div>
        <!-- <div class="high-quality">
          <h4>好租手机端</h4>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import CrumbsCompent from '../../components/crumbsCompent'
import SelectFiller from '../../components/selectFiller'
import HouseResouce from "../../components/houseResource"
import QualityItem from '../share/qulity-item/index'
import Paginator from '../../components/paginator'
import HouseResoure from '../../../public/img/houseResoure1.jpg'
import {mapActions} from "vuex"
export default {
  data() {
    return {
      pager: {
        pageIndex: 1,
        total: 318,
        pageSize: 10
      },
        houseResourceData:[
                {  id:'loupan2121212',
                  path:'/zuzu/loupan-detail',
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
                  id:'loupan3121212',
                  path:'/zuzu/loupan-detail',
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
  computed:{
    neckwork(){
      return this.houseResourceData.length >0?this.pager.total:0
    }
  },
  created() {
    this.getAllLoupanData()
  },
  methods: {
    //所有楼盘
    async getAllLoupanData(){
      try {
          let allLoupan = await this.getAllLoupan();
          this.pager.total = allLoupan.total
          this.houseResourceData = allLoupan.data
          this.houseResourceData
          console.log('allLoupan',allLoupan)
      } catch (error) {
        //  console.log(error)
      }
    },
    //详情页
     goHouseResourceDetail(id){
          console.log(id)
          this.$router.push({path:'/zuzu/loupan-detail',query: {id:id}})
      },
    //分页
    async onPageIndexChange(index) {
      console.log('分页',index)
      let params = {
        page: this.pager.pageIndex
      }
      let allLoupan = await this.getAllLoupan(params);
      this.pager.total = allLoupan.total
      this.houseResourceData = allLoupan.data
    },
    ...mapActions([
        "getAllLoupan",
    ])
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
      margin-bottom: 15px;
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
    .high-quality{
      h4{
        line-height: 35px;
        border-bottom: 1px solid #ccc;
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
.houseResource-warpper{
    overflow: hidden;
    .navList{
        width: 900px;
        display: inline-block;
        height: 44px;
        position: relative;
        margin-top: 13px;
        font-size: 0;
        margin-bottom: 40px;
        .a1{
            &.cur {
                border-bottom: 2px #f90 solid;
                color: #f90;
                line-height: 42px;
            }
        }
        .a1 {
            display: inline-block;
            line-height: 44px;
            font-size: 12px;
            color: #3f454b;
            margin-right: 30px;
            vertical-align: top;
            position: relative;
            z-index: 2;
            &.price {
                padding-right: 10px;
                .em1 {
                   background-position: -560px 0;
                    top: 16px;
                    width: 8px;
                    height: 5px;
                    position: absolute;
                    right: 0;
                }
                .em2 {
                    background-position: -560px -11px;
                    top: 22px;
                    width: 8px;
                    height: 5px;
                    position: absolute;
                    right: 0;
                }
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    background: url(../../../public/img/icon_v4.png) no-repeat;
                    font-size: 0;
                   
                   
                }
            }
        }
        .s1 {
            padding-top: 4px;
            line-height: 40px;
            font-size: 12px;
            color: #979fa8;
            .i1 {
                display: inline-block;
                font-size: 16px;
                color: #333;
                font-weight: 400;
                font-family: Arial;
                padding: 0 3px;
            }
        }
        &:after {
            border-bottom: 1px #f2f2f2 solid;
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
        }
    }
    .listBox{
        width: 900px;
        display: inline-block;
        .listCon{
            li.clearfix{
                padding-bottom: 40px;
                overflow:hidden;
                a{
                    margin-bottom: 20px;
                    .imgbox {
                        position: relative;
                        width: 246px;
                        height: 178px;
                        float: left;
                        overflow: hidden;
                        img {
                            display: inline-block;
                            width: 246px;
                            height: 178px;
                            border-radius: 4px;
                            transition: all 0.6s;
                            &:hover{
                                cursor: pointer;
                                border-radius: 4px;
                                transform: scale(1.1);
                            }
                        }
                        .video {
                            position: absolute;
                            right: 8px;
                            bottom: 0;
                            display: inline-block;
                            width: 40px;
                            height: 26px;
                            background: url(../../../public/img/video.png) no-repeat right bottom;
                            font-size: 0;
                        }
                    }
                    .list-content {
                        display: inline-block;
                        width: 624px;
                        position: relative;
                        padding-left: 30px;
                        .h1-title {
                            height: 24px;
                            line-height: 24px;
                            font-size: 0;
                            display: block;
                            font-weight: 700;
                            margin-bottom: 10px;
                            a {
                                color: #333;
                                font-size: 20px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                display: inline-block;
                                overflow: hidden;
                                max-width: 485px;
                                height: 24px;
                            }
                            &:visited {
                                color: #999;
                            }
                        }
                        .p1 {
                            display: block;
                            color: #3f454b;
                            height: 26px;
                            line-height: 26px;
                            width: 470px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            padding-bottom: 6px;
                            .i1{
                                font-size: 26px;
                                font-weight: 700;
                                color: #ec203d;
                                .SLHEMKsUVrdkTz {
                                    font-family: 'HmnEIcLWutBTRKy';
                                }
                            }
                            a {
                                color: #3f454b;
                            }
                            i{
                                display: inline-block;
                                color: #ddd;
                                vertical-align: middle;
                                margin: 0 8px;
                            }
                        
                        }
                        .p2 {
                            display: block;
                            height: 26px;
                            line-height: 26px;
                            width: 470px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            padding-bottom: 6px;
                            color: #979fa8;
                        }
                        .list-price {
                            position: absolute;
                            right: 0;
                            top: 40px;
                            text-align: right;
                            z-index: 2;
                            .p1 {
                                line-height: 32px;
                                font-size: 14px;
                                width: auto;
                                display: block;
                                color: #3f454b;
                                height: 30px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                padding-bottom: 6px;
                            }
                        .p2 {
                                line-height: 24px;
                                width: auto;
                                padding-top: 0;
                                display: block;
                            
                                height: 26px;

                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                padding-bottom: 6px;
                            }
                            .TagCollection {
                                position: relative;
                                top: initial;
                                right: inherit;
                                padding-bottom: 5px;
                                text-align: right;
                                .Collection {
                                    display: inline-block;
                                    text-align: right;
                                    font-size: 12px;
                                    color: #3f454b;
                                    padding-left: 15px;
                                    line-height: 24px;
                                    position: relative;
                                    margin-top: 0;
                                    cursor: pointer;
                                    &:before {
                                        position: absolute;
                                        left: 0;
                                        top: 7px;
                                        width: 12px;
                                        height: 12px;
                                        background: url(../../../public/img/icon_v4.png) no-repeat -591px 0;
                                        content: '';
                                    }
                                }
                            }
                        }
                        .p-tag {
                            width: 100%;
                            font-size: 0;
                            .offerTips {
                                display: inline-block;
                                height: 24px;
                                line-height: 24px;
                                padding: 0 5px;
                                border-radius: 4px;
                                font-size: 14px;
                                margin-top: 10px;
                                margin-right: 10px;
                                &.t1 {
                                    background: #eff6f5;
                                    color: #a6c5c1;
                                }
                                &.t2 {
                                    background: #f5f2e9;
                                    color: #e4d19e;
                                }
                                &.t3 {
                                    background: #eef2f8;
                                    color: #a2afc8;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>