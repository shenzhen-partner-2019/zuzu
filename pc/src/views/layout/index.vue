<template>
  <div class="zuzu">
    <!-- 头部区域 -->
    <header-bar class="g-header"></header-bar>
    <nav-bar v-show="navbarVisible" class="g-navbar" ></nav-bar>
    <!-- 主体内容 路由切换-->
    <router-view></router-view>
    <!-- 底部区域 -->\
    <footer-bar v-show="footerVisible"></footer-bar>
    <customerCall></customerCall>
  </div>
</template>
<script>
import customerCall from '../customer-call/index'
import HeaderBar from "../../components/headbar";
import FooterBar from "../../components/footerbar";
import NavBar from "../../components/navbar";
import { truncate } from "fs";
import HttpRequest from '../../http/axios.js'
export default {
  name: "zuzu",
  components: {
    HeaderBar,
    FooterBar,
    NavBar,
    customerCall
  },
  data() {
    return {
      navbarVisible: true,
      activePath: '',
      footerVisible: true,
      imgUrl: ''
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function(route) {
        // 委托找房页面不显示导航栏
        let path = route.path
        if (path === "/zuzu/weituo") {
          this.navbarVisible = false
        } else {
          this.navbarVisible = true
        }
        if (path === '/zuzu/map') {
          this.footerVisible = false
        } else {
          this.footerVisible = true
        }
        this.$store.commit('updateSearchText', '')
      }
    }
  },
};
</script>

<style lang="scss">
.zuzu {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.g-navbar {
  // margin-bottom: 24px;
  padding: 24px 0;
}
</style>


