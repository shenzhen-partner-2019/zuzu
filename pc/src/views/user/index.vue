<template>
  <div class="user-page">
    <!-- 头部区域 -->
    <header-bar class="g-header"></header-bar>
    <div class="User-page">
      <div class="center-container" style="padding-bottom:80px;">
        <div class="w1180">
          <div class="left-container fl">
            <img src="../../../public/img/infor.png" class="avatar"> 
            <div class="text-align-center f-12">欢迎你，135****41</div> 
            <div class="button button__selected mrt-50">我的关注</div> 
          </div> 
          <div class="right-container fr">
            <div>
              <div class="navigate clearfix">
                <div class="menu-container fl" data-v-283f952c="">
                  <span class="menu-item menu-item__selected">办公室出租</span> 
                  <span class="menu-item">写字楼出租</span> 
                  <span class="menu-item">共享办公出租</span> 
                </div> 
              </div> 
              <!--列表数据-->
              <ListDataCompent :listTransferData ="listTransferData"></ListDataCompent>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from "../../components/headbar";
import FooterBar from "../../components/footerbar";
import ListDataCompent from './listCompent'
export default {
    data(){
        return{
          flag:false,
          listTransferData: [
            {title:'京地大厦',qu:'福田中心区',price:168,danwei:'元/平米/月'},
            {title:'京地大厦',qu:'福田中心区',price:168,danwei:'元/平米/月'},
            {title:'京地大厦',qu:'福田中心区',price:168,danwei:'元/平米/月'},
            {title:'京地大厦',qu:'福田中心区',price:168,danwei:'元/平米/月'}
          ],
        }
    },
    created(){
     
    },
    methods:{

    },
    components:{
      HeaderBar,
      FooterBar,
      ListDataCompent
    }
}
</script>

<style lang="scss" scoped>
.User-page{
    .center-container {
        background: #f5f5f6;
        padding-top: 25px;
        .w1180 {
            width:1180px;
            margin:0 auto;
            overflow: hidden;
          .left-container {
            position: relative;
            width: 150px;
            height: 515px;
            background: #fff;
            .avatar {
              margin: 40px 35px 20px;
              border-style: none;
            }
            .text-align-center {
                text-align: center;
            }
            .button {
                background: #009bda;
                color: #fff;
                height: 40px;
                line-height: 40px;
                padding-left: 20px;
                cursor: pointer;
                margin-top:50px;
            }
          }
          .right-container{
            box-sizing: border-box;
            width: 980px;
            min-height: 515px;
            background: #fff;
            padding: 20px 30px;
            .navigate{
              .menu-container{
                .menu-item{
                  font-size: 16px;
                  line-height: 40px;
                  background: transparent;
                  padding: 9.5px 15px;
                  border-radius: 20px;
                  cursor: pointer;
                  &.menu-item__selected {
                    color: #fff;
                    background: #399ede;
                  }
                }
              }
            }  
          }
        }
    }
}
</style>