<template>
    <div id="login">
        <div class='popContainer'></div>
        <div class="popContent">
                <div @click="closeBtn" class="close-text">×</div> 
                <div class="mt15 font-size-26px">手机快速登录</div> 
                <div class="font-size-12px textDescript">没有帐号，手机快速登录后将为你自动注册帐号</div> 
                <div class="error-message">&nbsp;</div> 

                <div class="ivu-input-wrapper">
                    <input autocomplete="off" type="text" placeholder="请输入手机号" maxlength="11" class="ivu-input" v-model="form.phone"> 
                </div> 
                
                <div class="form_input_item mb20">
                    <input placeholder="请输入验证码" type="text" v-model="form.imgVerifycode" autocomplete="off">
                    <img style="height:40px;width:120px;" src="https://upassport.ke.com/freshCaptch?t=1573028837812">
                </div>

                <div class="form_input_item messageverifycode" style="">
                    <input placeholder="请输入短信验证码" type="text" v-model="form.phoneVerifycode" autocomplete="off">
                    <span class="send_messageverifycode">
                        <em @click="getVerifycode">获取验证码</em>
                    </span>
                </div>

                <label class="ivu-checkbox-wrapper ivu-checkbox-wrapper-checked ivu-checkbox-default" style="margin-top: 25px;">
                    <span class="ivu-checkbox">
                      <span class="ivu-checkbox-inner"> 
                      </span> 
                      <input type="checkbox" v-model="form.isCheckbox" class="ivu-checkbox-input">
                    </span> 
                    7天内免登录
                </label> 

                <div class="login_btn">
                  <button type="button" class="button" @click="loginBtn"> 
                    登录
                  </button>
                </div>
               
        </div>
    </div>
</template>


<script>
export default {
    name:'login',
    data(){
      return{
        //表单数据
        form: {
            phone: '',
            imgVerifycode:'',
            phoneVerifycode: '',
            isCheckbox:true,
        },
      }
    },
    methods:{
      closeBtn(){
        this.$emit("close_login",false)
      },
      //获取验证码
      getVerifycode(){
        console.log('获取验证码')
      },
      //登陆
      loginBtn(){
        console.log('登陆')
      }
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
    //请输入手机号
    .ivu-input-wrapper {
      display: inline-block;
      width: 100%;
      position: relative;
      vertical-align: middle;
      line-height: normal;
      .ivu-input {
        border-radius: 0!important;
        padding: 20px;
        height: 52px;
        display: inline-block;
        width: 100%;
        line-height: 1.5;
        /* padding: 4px 7px; */
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