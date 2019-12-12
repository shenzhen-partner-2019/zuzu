<template>
  <div class="Index">
    <Header></Header>
    <div class="wrap">
      <!--导航列表-->
      <Nav></Nav>
      <!--热门商圈-->
      <HotBusinessBox></HotBusinessBox>
      <!--共享办公/组件-->
      <Loufan :leaseData="sharedOffice"></Loufan>
      <!--精选写字楼/组件-->
      <Loufan :leaseData="officeBuild"></Loufan>
      <!--热门房源-->
      <div class="titleHotBox">
        <h1>热门房源</h1>
        <span class="s1">依托好租大数据 精选热门房源</span>
      </div>
      <!--热门房源数据列表/组件-->
      <HouseResouce :houseResourceData="houseResourceData"></HouseResouce>
      <!--查看更多-->
      <div class="likeMore">
        <a href="#">更多深圳办公房源</a>
      </div>
    </div>
    <!--底部-->
    <Footerbar></Footerbar>
  </div>
</template>

<script>
import img1 from "../../../public/img/jbyHzZa7if.jpg"
import img2 from "../../../public/img/HTTFbecaxx.jpg"
import img3 from "../../../public/img/ihjkc5sGPe.jpg"
import img4 from "../../../public/img/BFM77c4RRd.jpg"
import officeBuild1 from "../../../public/img/officeBuild1jpg.jpg"
import officeBuild2 from "../../../public/img/officeBuild2.jpg"
import officeBuild3 from "../../../public/img/officeBuild3.jpg"
import officeBuild4 from "../../../public/img/officeBuild4.jpg"
import officeBuild5 from "../../../public/img/officeBuild5.jpg"
import officeBuild6 from "../../../public/img/officeBuild6.jpg"
import officeBuild7 from "../../../public/img/officeBuild7.jpg"
import officeBuild8 from "../../../public/img/officeBuild8.jpg"
import HouseResoure from '../../../public/img/houseResoure1.jpg'
import Header from './header'
import Nav from './nav'
import HotBusinessBox from './hotBusinessBox'
import Footerbar from '../../components/footerbar'
import Loufan from '../../components/loupanCompent'
import HouseResouce from "../../components/houseResource"
export default {
    name:'home',
    data(){
      return {
          sharedOffice:{
            title:"共享办公",
            discount:"免佣金",
            descriptContent:"节省开支 提供全方位服务",
            otherChannel:"开启共享办公之旅",
            leaseListData:[
                {id:"1223132332",path:'/zuzu/office-detail',imgUrl:img1,title:"深圳yeswedo福保国际·优客工场",houseName:"深圳yeswedo福保国际·优客工场",houseAddress:"福田-保税区",housePrice:"800",unitPrice:" 元/工位/月 "},
                {id:"2223132332",path:'/zuzu/office-detail',imgUrl:img2,title:"深圳yeswedo蛇口国际·优客工场",houseName:"深圳yeswedo蛇口国际·优客工场",houseAddress:"南山-蛇口",housePrice:"1250",unitPrice:" 元/工位/月 "},
                {id:"3223132332",path:'/zuzu/office-detail',imgUrl:img3,title:"WeWork（华润置地大厦）",houseName:"WeWork（华润置地大厦）",houseAddress:"南山-科技园",housePrice:"2100",unitPrice:" 元/工位/月 "},
                {id:"4223132332",path:'/zuzu/office-detail',imgUrl:img4,title:"雷格斯（A8音乐大厦）",houseName:"雷格斯（A8音乐大厦）",houseAddress:"南山-科技园",housePrice:"1220",unitPrice:" 元/工位/月 "}
            ]
          },
          officeBuild:{
            title:"精选写字楼",
            descriptContent:"高性价 高格调 超精致",
            otherChannel:"查看更多",
            leaseListData:[
                {id:"1223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild1,title:"汇海广场",houseName:"汇海广场",houseAddress:"龙华-龙华",housePrice:"80.0",unitPrice:"元/m²⋅月"},
                {id:"2223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild2,title:"航盛科技大厦",houseName:"航盛科技大厦",houseAddress:"南山-大冲",housePrice:"68.0",unitPrice:"元/m²⋅月"},
                {id:"3223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild3,title:"京地大厦",houseName:"京地大厦",houseAddress:"福田-中心区",housePrice:"168.0",unitPrice:"元/m²⋅月"},
                {id:"4223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild4,title:"卓越时代广场",houseName:"卓越时代广场",houseAddress:"福田-中心区",housePrice:"158.0",unitPrice:"元/m²⋅月"},
                {id:"5223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild5,title:"中洲大厦",houseName:"中洲大厦",houseAddress:"福田-中心区",housePrice:"185.0",unitPrice:"元/m²⋅月"},
                {id:"6223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild6,title:"迈科龙大厦",houseName:"迈科龙大厦",houseAddress:"南山-科技园",housePrice:"58.0",unitPrice:"元/m²⋅月"},
                {id:"7223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild7,title:"中海信科技园",houseName:"中海信科技园",houseAddress:"龙岗-布吉",housePrice:"50.0",unitPrice:"元/m²⋅月"},
                {id:"8223132332",path:'/zuzu/loupan-detail',imgUrl:officeBuild8,title:"中洲控股中心",houseName:"中洲控股中心",houseAddress:"南山-中心区",housePrice:"128.0",unitPrice:"元/m²⋅月"}
            ]
          },
          houseResourceData:[
                { id:'2121212',
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
                  pTag:[  
                      {background: '#eff6f5',color: '#a6c5c1',text:'可注册'},
                      {background: '#f5f2e9',color: '#e4d19e',text:'地铁10分钟'},
                      {background: '#eef2f8',color: '#a2afc8',text:'热门楼盘'}
                  ]
                },
                { 
                  id:'3121212',
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
                  pTag:[  
                      {background: '#eff6f5',color: '#a6c5c1',text:'可注册'},
                      {background: '#f5f2e9',color: '#e4d19e',text:'地铁10分钟'},
                      {background: '#eef2f8',color: '#a2afc8',text:'热门楼盘'}
                  ]
                },
            ]
      }
    },
    components:{
      Header,
      Nav,
      HotBusinessBox,
      Footerbar,
      Loufan,
      HouseResouce
    }
}
</script>

<style lang="scss" scoped>
//热门房源
.titleHotBox {
    padding: 34px 0 15px;
    font-size: 0;
    h1 {
        display: inline-block;
        font-size: 22px;
        font-weight: 700;
        line-height: 34px;
    }
    .s1 {
        display: inline-block;
        padding-left: 10px;
        height: 24px;
        line-height: 24px;
        color: #979fa8;
        font-size: 14px;
        padding-top: 8px;
    }
}
//更多房源
.likeMore {
  margin:34px 0px;
  text-align: center;
  a {
    line-height: 38px;
    height: 38px;
    width: 218px;
    margin-top: 0;
    display: inline-block;
    border: 1px #f2f2f2 solid;
    border-radius: 4px;
    padding: 0 14px;
    color: #979fa8;
    font-size: 14px;
    letter-spacing: 2px;
  }
  a:hover {
    border-color: #f90;
    color: #f90;
  }
}

</style>