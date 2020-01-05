<template>
  <div id="header-wrapper">
    <div class="header">
      <div class="wrapper">
        <!-- 头部导航 -->
        <div class="fl">
          <a href="#" title="贝壳找房" class="logo"></a>
          <a href="#" class="exchange">
            <i></i>佛山
          </a>
        </div>
        <div class="fr">
          <div class="nav typeUserInfo">
            <ul>
              <li>
                <router-link to="/zuzu/office">
                  找办公室
                 </router-link>
              </li>
              <li>
                <router-link to="/zuzu/weituo">
                  委托找房
                 </router-link>
              </li>
              <li>
                <router-link to="/zuzu/toufang">
                投放房源
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <i class="Collection"></i>
                  <span>收藏</span>
                 </router-link>
              </li>
              <li>
                <router-link to="#">
                  <i class="phone"></i>
                  4000-623-678
                 </router-link>
              </li>
            </ul>
            <div class="ti-hover">
              <div class="typeShowUser ">
                <i></i>
                <span v-if="mobile" style="cursor: pointer;" @click="goUser()">
                  {{mobile}}
                </span>
                <span v-else>
                  <a class="btn-login bounceIn actLoginBtn" href="javascript:;" @click="login_visible">
                    <span class="reg">登录</span>
                  </a>
                  <span>&nbsp;/&nbsp;</span>
                  <a class="btn-register" href="javascript:;" @click="register_visible">
                    <span class="log">注册</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="clear"></div>
        <!-- 页面上面部分的大标题及搜索框 -->
        <div class="headInput-wrap">
          <div class="wrap-ico">
            <div class="title_small">
                <ul>
                  <li>
                    <router-link to="/zuzu/office">
                      普通办公
                    </router-link>
                    <i class="line">/</i>
                  </li>
                  <li> 
                    <router-link to="/zuzu/loupan">
                      找楼盘
                    </router-link>
                    <i class="line">/</i>
                  </li>
                  <li>
                    <router-link to="/zuzu/share">
                      联合办公
                    </router-link>
                    <i class="line"></i>
                  </li>
                </ul>
            </div>
            <div class="title_big">办公选址就上租租网，商办全房源网</div>
          </div>
          <div class="search-box-wrap" log-mod="search">
            <div class="search-box-con">
              <div class="menu">
                <ul>
                    <li 
                    class="tab " 
                    v-for="(item,i) in addressList" 
                    :key="i" 
                    :class="searchStyle.defaultCheck == i? 'check' : ''" 
                    @click="searchRegon(item,i)">
                      <span>
                          {{item.region}}
                      </span>
                    </li>
                </ul>
                <i :style="{left: searchStyle.left}"></i>
              </div>
              <div class="search clear">
                  <div class="box">
                      <div class="clear searchBox">
                          <input 
                          v-model="searchVal"
                          class="text left" 
                          name="keyword" 
                          autocomplete="off" 
                          type="text" 
                          :placeholder="searchStyle.searchPlaceholder" 
                          id="keyword-box">
                          <input type="text" style="width: 0px;height: 0;border: 0;">                                                                                                                                                                                                                                                                             
                          <input class="btn left" id="findHouse" type="button" @click="searchBtn">
                          <i></i>
                          <div class="savesearch"></div>
                      </div>
                      <div id="suggest-cont" class="suggest-wrap" style="width: 514px;"></div>
                  </div>
              </div>
            </div>
          </div>
          <!-- 轮播展示的信息 -->
          <div class="header-bottom">
            <div class="house-num">
              <i></i>
              <ul>
                <li>佛山在售二手房 524 套</li>
                <li>佛山在售二手房 28524 套</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--弹窗-->
    <Login v-if="loginFlag" @close_login="getCloseVal"></Login>
    <Register v-if="registerFlag" @close_register="getCloseRegisterVal"></Register>

  </div>
</template>

<script>
import Login from "./login";
import Register from "./register"
import { setLocalStorage, getLocalStorage } from "@/utils/common";
export default {
    data(){
      return {
        mobile:'',
        loginFlag:false,
        registerFlag:false,
        searchStyle:{
          defaultCheck: 0,
          left:"15px",
          searchPlaceholder:'',//搜索输入框的placeholder
        },
        saveRegonId:'',//保存当前选中id
        searchVal:"",//搜索框中的val值
        addressList:[
          {id:'11',region:'南山'},
          {id:'111',region:'福田'},
          {id:'22',region:'坂田'},
          {id:'33',region:'罗湖'},
          {id:'44',region:'宝安'},
          {id:'55',region:'龙岗'},
          {id:'66',region:'龙华'}
        ],
        
      }
    },
    created(){
      this.getUserInfor()
    },
    methods:{
      getUserInfor(){
        let userInfor = getLocalStorage("userInfo");
        this.mobile = userInfor.mobile
        console.log(userInfor)
      },
      //区域搜索选择
      searchRegon(item,index){
        console.log(item,index)
        this.searchStyle.defaultCheck = index;
        this.saveRegonId = item.id
        if(index == 0){
          this.searchStyle.searchPlaceholder = ""
          this.searchStyle.left = "15px";//需要动态计算
        }else{
          if(item.region == "福田"  && index == 1){
            this.searchStyle.searchPlaceholder = "福田"
            this.searchStyle.left = "68px"
          }else if(item.region == "坂田" && index == 2){
            this.searchStyle.searchPlaceholder = "坂田"
            this.searchStyle.left = "118px"
          }else if(item.region == "罗湖"  && index == 3){
            this.searchStyle.searchPlaceholder = "罗湖"
            this.searchStyle.left = "170px"
          }else if(item.region == "宝安"  && index == 4){
            this.searchStyle.searchPlaceholder = "宝安"
            this.searchStyle.left = "225px"
          }else if(item.region == "龙岗"  && index == 5){
            this.searchStyle.searchPlaceholder = "龙岗"
            this.searchStyle.left = "275px"
          }else if(item.region == "龙华"  && index == 6){
            this.searchStyle.searchPlaceholder = "龙华"
            this.searchStyle.left = "330px"
          }
        }
      },
      //搜索功能
      searchBtn(){
        console.log(this.searchVal)
        console.log(this.searchStyle.searchPlaceholder)
        console.log(this.saveRegonId) 
      },
      //登陆
      login_visible(){
        console.log('login')
        this.loginFlag = true
        this.registerFlag = false
      },
      register_visible(){
        this.loginFlag = false
        this.registerFlag = true
      },
      //获取登陆弹窗关闭值
      getCloseVal(val){
        console.log(val)
        this.loginFlag = val;
      },
      getCloseRegisterVal(val){
        this.registerFlag = val;
      },
      //去用户页
      goUser(){
        this.$router.push({path:'/user'})
      }
    },
    components:{
      Login,
      Register
    }
}
</script>

<style lang="scss" scoped>
#header-wrapper{
  .header {
    background: #000 url(../../../public/img/bg_headBar.jpg) no-repeat;
    width: 100%;
    height: 600px;
    padding-top: 34px;
    background-position: center 0;
    display: block;
    position: relative;
    .wrapper {
      padding: 0 50px;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      margin: 0 auto;
      //左栏
      .logo {
          margin-right: 30px;
          margin-top: 5px;
          display: inline-block;
          float: left;
          background-image: url(../../../public/img/zuzu_logo.jpg);
          // background-position: -72px 0;
          width: 339px;
          height: 104px;
      }
      //城市
      .exchange {
          display: inline-block;
          height: 28px;
          padding: 0 8px;
          line-height: 26px;
          text-align: center;
          color: #fff;
          margin-top: 8px;
          cursor: pointer;
          border-radius: 14px;
          border: 2px solid #fff;
          font-size: 12px;
          i {
            background-image: url(../../../public/img/sprite.png);
            background-position: -133px -34px;
            width: 10px;
            height: 12px;
            display: inline-block;
            position: relative;
            margin-right: 5px;
            top: 1px;
          }
      }
      .fr .nav {
        line-height: 47px;
        ul{
          float: left;
          overflow: hidden;
          li {
            height: 47px;
            float: left;
            position: relative;
            a {
              font-size: 16px;
              margin-left: 20px;
              font-weight: 700;
              color: #fff;
              position: relative;
              .Collection{
                padding-top:2px;
                &:before {
                  // position: absolute;
                  // left: 0;
                  // top: 7px;
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background: url(../../../public/img/icon_v4.png) no-repeat -591px 0;
                  content: '';
                }
              }
              .phone{
                position: relative;
                display:inline-block;
                top: 5px;
                left: 0px;
                width: 15px;
                height: 20px;
                background: url(../../../public/img/home_phone.png) 0 0 no-repeat;
              }
              span{
                margin-left: 4px;
              }
            }
          }
        }
        .ti-hover {
          height: 47px;
          float: right;
          margin: 0 50px 0 55px;
          .typeShowUser {
            float: right;
            i {
              background-image: url(../../../public/img/sprite.png);
              background-position: -72px -34px;
              width: 26px;
              height: 26px;
              display: inline-block;
              position: relative;
              top: 5px;
              margin-right: 5px;
            }
            span {
              font-size: 16px;
              font-weight: 700;
              color:#fff;
              a {
                margin-left: 5px;
                font-size: 16px;
              }
            }
          }
        }
      }
      //输入框--文本
      .headInput-wrap{
        width: 1180px;
        margin: 0 auto;
        //文本
        .wrap-ico {
            margin-top: 116px;
            text-align: left;
            color: #fff;
            font-size: 40px;
            line-height: 68px;
            font-weight: 600;
            letter-spacing: -2.4px;
            .title_small {
              font-size: 18px;
              line-height: 28px;
              height: 28px;
              font-weight: 400;
              margin-bottom: 10px;
              ul{
                overflow: hidden;
                li{
                  float: left;
                  padding:2px 4px 0px 0px;
                  position: relative;
                  a{
                    color:#fff;
                    &:hover{
                      color:#f90;
                    }
                  }
                  .line{
                    margin:0px 8px;  
                  }
                }
              }
            }
        }
        //输入框
        .search-box-wrap {
            width: 590px;
            position: relative;
          .search-box-con {
            position: relative;
            margin-top: 36px;
            .menu {
              float: left;
              height: 41px;
              display: block;
              padding-left: 10px;
              ul{
                li {
                  float: left;
                  opacity: .5;
                  &.check {
                      opacity: 1;
                      filter: alpha(opacity=100);
                  }
                  span {
                      font-size: 16px;
                      color: #fff;
                      font-weight: 700;
                      padding: 0 20px 0 0;
                      height: 25px;
                      line-height: 25px;
                      display: inline-block;
                      cursor: pointer;
                  }
                }
              }
              //三角图标
              i {
                border-left: 9px solid transparent;
                border-right: 9px solid transparent;
                width: 0;
                height: 0;
                -webkit-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;
                position: absolute;
                top: 31px;
                left: 23px;
                border-bottom: 10px solid #fff;
                z-index: 9;
              }
            }
            .search {
                display:block;
                clear: both;
                position: relative;
                .box {
                  background: #fff;
                  border-radius: 4px;
                  clear: both;
                  height: 50px;
                  box-shadow: 1px 0 5px rgba(0,0,0,.2);
                  .searchBox {
                      position: relative;
                      display: block;
                    .text {
                        padding-left: 20px;
                        width: 494px;
                        border: 0;
                        height: 50px;
                        border-radius: 4px;
                        font-size: 16px;
                        float: left;
                    }
                    .btn {
                        background-color: #3072f6;
                        width: 76px;
                        height: 50px;
                        float: right;
                        border: 0;
                        display: block;
                        border-radius: 0 4px 4px 0;
                        cursor: pointer;
                        text-align: center;
                        color: #fff;
                        -webkit-transition: all .3s ease-in-out;
                        transition: all .3s ease-in-out;
                    }
                    //搜索图标
                    i{
                        background-image: url(../../../public/img/sprite.png);
                        background-position: -98px -34px;
                        width: 19px;
                        height: 19px;
                        position: absolute;
                        display: inline-block;
                        top: 15px;
                        right: 28px;
                        cursor: pointer;
                        pointer-events: none;
                    }
                  }
                  .suggest-wrap {
                    border: 1px solid #000;
                    border-top: 0;
                    left: -1px;
                    top: -1px;
                    display: none;
                  }
                }
            }
          }
        }
      }
      //轮播
      .header-bottom {
        position: absolute;
        color: #fff;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        bottom: 20px;
        .house-num {
          float: left;
          i {
            float: left;
            margin-top: 4px;
            vertical-align: middle;
            background-image: url(../../../public/img/sprite.png);
            background-position: -117px -34px;
            width: 16px;
            height: 13px;
          }
          ul {
            margin-left: 5px;
            position: relative;
            float: left;
            height: 20px;
            overflow: hidden;
          }
        }
      }
    }
  }
}

</style>