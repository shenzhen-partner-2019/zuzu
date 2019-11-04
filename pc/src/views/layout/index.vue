<template>
  <div class="zuzu">
    <!-- 头部区域 -->
    <header-bar></header-bar>
    <nav-bar v-show="navbarVisible"></nav-bar>
    <!-- 主体内容 路由切换-->
    <router-view></router-view>
    <!-- 底部区域 -->
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import HeaderBar from "../../components/headbar";
import FooterBar from "../../components/footerbar";
import NavBar from "../../components/navbar";
import { truncate } from "fs";

export default {
  name: "zuzu",
  components: {
    HeaderBar,
    FooterBar,
    NavBar
  },
  data() {
    return {
      navbarVisible: true,
      activePath: ''
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
        }
      }
    }
  }
};
</script>

<style lang="scss">
.zuzu {
  width: 100%;
}
</style>


