<template>
  <div>
    <h2 style="height:600px;background-color:red;">
       <p>
        <span class="font-size-16px curpor" @click="login_visible">登陆</span>
        <span  class="font-size-16px curpor" style="margin:0px 4px;">/</span>
        <span  class="font-size-16px curpor" @click="register_visible">注册</span>
      </p>
    </h2>

    <!--弹窗-->
    <Login v-if="loginFlag" @close_login="getCloseVal"></Login>
    <Register v-if="registerFlag" @close_register="getCloseRegisterVal"></Register>

  </div>
</template>

<script>
import Login from "./login";
import Register from "./register"
export default {
    data(){
      return {
        loginFlag:false,
        registerFlag:false,
      }
    },
    components:{
      Login,
      Register
    },
    methods:{
        //登陆
      login_visible(){
        console.log('login')
        this.loginFlag = true
      },
      register_visible(){
        console.log('register')
        this.registerFlag = true
      },
      //获取登陆弹窗关闭值
      getCloseVal(val){
        console.log(val)
        this.loginFlag = val;
      },
      getCloseRegisterVal(val){
        this.registerFlag = val;
      }
    }
}
</script>

<style lang="scss" scoped>

</style>