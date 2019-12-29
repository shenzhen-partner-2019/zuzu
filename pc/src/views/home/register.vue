<template>
    <div id="login">
        <div class='popContainer'></div>
        <div class="popContent">
                <div @click="closeBtn" class="close-text">×</div> 
                <div class="register-title">
                    手机号码注册
                    <div style="float:right;position:relative;top:10px;font-size:14px;">
                        已有账号？<a class="color-blue curpor" @click="goLogin">去登录</a>
                    </div>
                </div> 

                <div class="error-message" v-if="errorText">&nbsp;{{errorText}}</div> 
                <div class="error-message" v-else>&nbsp;{{verifyText}}</div> 

                <div class="ivu-input-wrapper">
                    <input type="text" placeholder="请输入手机号" maxlength="11" class="ivu-input" v-model="form.phone"> 
                </div> 
                
                <div class="form_input_item mb20">
                    <input placeholder="请输入验证码" type="text" v-model="form.imgVerifycode">
                    <img style="height:40px;width:120px;" :src="imgUrl" @click="getImg()">
                </div>

                <div class="form_input_item messageverifycode mb20" >
                    <input placeholder="请输入短信验证码" type="text" v-model="form.phoneVerifycode">
                    <span class="send_messageverifycode" @click="getVerifycode">
                        <em>{{btnTitle}}</em>
                    </span>
                </div>

                <div class="ivu-input-wrapper password-wrapper">
                    <input type="text" placeholder="请输入密码" class="ivu-input password_input" v-model="form.password"> 
                    <em class="password-view"></em>
                </div> 

                <label class="ivu-checkbox-wrapper mt25">
                    <span class="ivu-checkbox">
                      <span class="ivu-checkbox-inner"> 
                      </span> 
                      <input type="checkbox" v-model="form.isCheckbox" class="ivu-checkbox-input">
                    </span> 
                    我已阅读并同意<a class="readTextColor" href="https://www.ke.com/zhuanti/protocol" target="_blank">《隐私政策》</a>
                </label> 

                <div class="login_btn">
                  <button type="button" class="button" @click="loginBtn"> 
                    注册
                  </button>
                </div>
               
        </div>
    </div>
</template>


<script>
import {mapActions} from "vuex"
import { debuglog } from 'util';
export default {
    name:'login',
    data(){
      return{
        //表单数据
        imgUrl:'',
        form: {
            phone: '',
            imgVerifycode:'',
            phoneVerifycode: '',
            password:'',
            isCheckbox:true,
        },
        error:"",
        verifyText:'',
        btnTitle:"获取验证码"
      }
    },
    mounted(){
        
    },
    computed:{
      errorText(){
        if(!this.form.phone){ return }
        if(/^1[345678]\d{9}$/.test(this.form.phone) == false){
            this.verifyText =""
           return this.error = "请填写正确的手机号码"
        }else{
          this.verifyText =""
           return this.error=""
        }
      }
    },
    created(){
      this.getverifyimg()
    },
    methods:{
      //获取验证码
      getVerifycode(){
        let flag = this.validatePhone();
        if(!flag){ return }
        console.log(flag)
        //倒计时
        this.validateCountDown()
        this.registersms({
          mobile: this.form.phone
        }).then(data =>{
           console.log(data)
        })
      },
      //校验方法---直接返回true/false
      validatePhone() {
          if(this.form.phone == ""){
              //显示提示信息
              console.log("手机号码不能为空")
              this.verifyText = "手机号码不能为空"
              this.error =""
              return false
          }else if(/^1[345678]\d{9}$/.test(this.form.phone) == false){
              console.log("请填写正确的手机号码")
              this.verifyText = "请填写正确的手机号码"
              this.error =""
              return false
          }else{
              console.log("222222222222正确")
              return true
          }
      },
             //倒计时
      validateCountDown(){
          let time = 60;
          let timer = setInterval(() => {
              //判断秒数
              if(time == 0){
                  //恢复初始状态的btnTitle
                  this.btnTitle = "获取验证码"
                  this.disabled = false;
                  //清除Interval的定时器,传入变量名(创建Interval定时器时定义的变量名)
                  clearInterval(timer);
              }else{
                  //更改btnTitle文本描述
                  this.btnTitle = time + "秒后重试";
                  this.disabled = true;
                  time--;
              }
          }, 1000);
      },
      //获取图片
      getverifyimg(){
        let v_this = this;
        this.verifyimg({}).then(data =>{
          v_this.imgUrl = data.data
        })
      },
      //点击图片获取
      getImg(){
        this.imgUrl = "https://baitai1688.com/verify?tockenId=QWERTYUISDFGHJEW+"+Math.random()
      },
      //登陆
      loginBtn(){
        console.log('登陆')
      },
      //去登陆页面
      goLogin(){
         this.$parent.login_visible()
      },
      closeBtn(){
        this.$emit("close_register",false)
      },
      ...mapActions([
          "register",
          "registersms",
          "verifyimg",
      ])
    }
}
</script>

<style lang="scss" scoped>
#login{
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9000000000;
  top: 0;
  left: 0;
  font-size: 14px;
  .popContainer{
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .7;
  }
  //登陆内容
  .popContent{
    position: fixed;
    width: 380px;
    padding: 20px 30px 40px;
    background: #fff;
    border-radius: 4px;
    left: 50%;
    top: 50%;
    margin-top: -230px;
    margin-left: -190px;
    box-sizing: border-box;
    .register-title{
        margin-top:15px;
        font-size: 26px;
        margin-bottom: 25px;
    }
    .close-text{
      text-align: right;
      cursor: pointer;
      font-size:16px;
      color:#666;
    }
    .textDescript{
      color: rgb(147, 153, 165);
      margin-top: 15px;
    }
    /*错误提示信息*/
    .error-message {
      color: red;
      margin-top: 12px;
      margin-bottom: 8px;
      font-size: 12px;
    }
    .password-wrapper.ivu-input-wrapper{

    }
    //请输入手机号
    .ivu-input-wrapper {
      display: inline-block;
      width: 100%;
      position: relative;
      vertical-align: middle;
      line-height: normal;
     
      //密码图片
    //  .password-view {
    //     cursor: pointer;
    //     display: inline-block;
    //     width: 18px;
    //     height: 12px;
    //     background-image: url("../../../public/img/lookPassword.png");
    //  }
      .ivu-input {
        border-radius: 0!important;
        padding: 20px;
        height: 52px;
        display: inline-block;
        width: 100%;
        line-height: 1.5;
        font-size: 12px;
        border: 1px solid #dcdee2;
        border-radius: 2px;
        color: #515a6e;
        background-color: #fff;
        background-image: none;
        position: relative;
        box-sizing: border-box;
        outline: none;
        margin-bottom: 20px;
      }
    }
    //请输入验证码
    .form_input_item{
      height: 52px;
      box-sizing: border-box;
      border: 1px solid #dcdee2;
      border-radius: 2px;
      img{
        cursor: pointer;
      }
      input {
        width: 198px;
        float: left;
        border: 0;
        padding: 0 0 0 16px;
        height: 50px;
        line-height: 50px;
        color: #101D37;
        font-size: 14px;
        outline: none;
      }
      //获取验证码文本
      .send_messageverifycode{
        line-height: 50px;
        color: #101D37;
        float: right;
        cursor: pointer;
        em{
          padding: 4px 16px;
          border-left: 1px solid #DBDBDB;
        }
      }
    }
    //选中
    .ivu-checkbox-wrapper {
      cursor: pointer;
      font-size: 12px;
      display: inline-block;
      margin-right: 8px;
      .ivu-checkbox {
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        line-height: 1;
        position: relative;
        //span--check
        .ivu-checkbox-inner {
            display: inline-block;
            width: 14px;
            height: 14px;
            position: relative;
            top: 0;
            left: 0;
            border: 1px solid #dcdee2;
            border-radius: 2px;
        }
        .ivu-checkbox-input {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1;
          cursor: pointer;
          // opacity: 0;
        }
      }
      .readTextColor {
        color: #3072F6;
      }
    }
    //按钮
    .login_btn{
      font-size: 14px;
      height: 50px;
      background-color: #3072F6;
      margin-top:30px;
      border-radius: 2px;
        .button {
          height: 50px;
          color:#fff;
          width:100%;
          text-align: center;
          border: none;
      }
    }
   
  }
}






 


</style>