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
      <div class="likeMore" @click="goHouseResourceDetail">
        <a href="#">更多深圳办公房源</a>
      </div>
    </div>
    <!--底部-->
    <Footerbar></Footerbar>
    <customerCall></customerCall>
  </div>
</template>

<script>
import HouseResoure from '../../../public/img/houseResoure1.jpg'
import Header from './header'
import Nav from './nav'
import HotBusinessBox from './hotBusinessBox'
import Footerbar from '../../components/footerbar'
import Loufan from '../../components/loupanCompent'
import HouseResouce from "../../components/houseResource"
import customerCall from '../customer-call/index'
import {mapActions} from "vuex"
import { delimiter } from 'path';
export default {
    name:'home',
    data(){
      return {
        //共享办公
          sharedOffice:{
            title:"共享办公",
            discount:"免佣金",
            descriptContent:"节省开支 提供全方位服务",
            otherChannel:"开启共享办公之旅",
            leaseListData:[]
          },
          officeBuild:{
            title:"精选写字楼",
            descriptContent:"高性价 高格调 超精致",
            otherChannel:"查看更多",
            leaseListData:[]
          },
          houseResourceData:[]
      }
    },
    components:{
      Header,
      Nav,
      HotBusinessBox,
      Footerbar,
      Loufan,
      HouseResouce,
      customerCall
    },
    created(){
      this.getShareData()
      this.getofficeBuilding()
      this.gethotListings()
    },
    computed:{
    },
    methods:{
      //精选写字楼
      async getofficeBuilding(){
        try {
            let officeBuilding = await this.officeBuilding();
            if(officeBuilding.data.length > 8){
              this.officeBuild['leaseListData'] = officeBuilding.data.slice(0,8)
            }else{
              this.officeBuild['leaseListData'] = officeBuilding.data
            }

            let pushPath = {...this.officeBuild}
            for(var i=0; i<pushPath.leaseListData.length; i++){
              pushPath.leaseListData[i]['path'] = '/zuzu/loupan-detail'
            }
            // console.log('officeBuild',this.officeBuild)
        } catch (error) {
          //  console.log(error)
        }
      },
      //共享办公
      getShareData(){
        let v_this = this;
        this.getShare().then(res =>{
          let shareData = res.data;
          if(shareData.length > 8){
            v_this.sharedOffice['leaseListData'] = shareData.slice(0,8)
          }else{
             v_this.sharedOffice['leaseListData'] = res.data
          }
          let pushPath = {...v_this.sharedOffice}
          for(var i=0; i<pushPath.leaseListData.length; i++){
            pushPath.leaseListData[i]['path'] = '/zuzu/office-detail'
          }
        }).then(res=>{
          // console.log(res)
        });
      },
      //热门房源
      async gethotListings(){
        try {
            let hotListings = await this.hotListings();
            if(hotListings.data.length > 5){
              this.houseResourceData = hotListings.data.slice(0,5)
            }else{
              this.houseResourceData = hotListings.data
            }

            for(var i=0; i<this.houseResourceData.length; i++){
              this.houseResourceData[i]['path'] = '/zuzu/office-detail'
            }
            // console.log('houseResourceData',this.houseResourceData)
        } catch (error) {
          //  console.log(error)
        }
      },
      //更多
      //详情页
     goHouseResourceDetail(){
        this.$router.push({path:'/zuzu/office'})
      },
      ...mapActions([
          "getShare",
          "officeBuilding",
          "hotListings"
      ])
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