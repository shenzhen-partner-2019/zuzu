<template>
  <div class="nav-wrapper">
   <nav class="nav wrap">
    <div class="logo">
      <img src="../../public/img/logo.png" alt="">
    </div>
    <div class="nav-list">
      <a v-for="item in navlist" :href="item.link" :class="{'active': activePath === item.link}" :key="item.name">{{item.text}}</a>
    </div>
    <search-bar class="fr"></search-bar>
   </nav>
  </div>
</template>

<script>
import SearchBar from "./searchbar";

export default {
  name: "navbar",
  components: {
    SearchBar
  },
  created() {
    // console.log(this.activePath)
  },
  data() {
    return {
      activePath: '/zuzu/office',
      navlist: [
        {
          link: "/zuzu/office",
          text: "出租"
        },
        {
          link: "/zuzu/loupan",
          text: "找楼盘"
        },
        {
          link: "/zuzu/share",
          text: "共享办公"
        },
        {
          link: "/zuzu/map",
          text: "地图找房"
        },
        {
          link: "/zuzu/weituo",
          text: "委托找房"
        }
      ]
    };
  },
   watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function(route) {
        // console.log('route', route)
        // 获取当前菜单项
        this.activePath = route.path
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../style/mixin.scss";

.nav-wrapper {
  margin-top: 24px;
  // margin-bottom: 5px;
  .nav {
    height: 30px;
    overflow: hidden;
  }
  .logo {
    height: 30px;
    display: inline-block;
    margin-right: 30px;
    vertical-align: top;
    img {
      height: 100%;
    }
  }
  .nav-list {
    display: inline-block;
    height: 30px;
    vertical-align: top;
    padding-top: 10px;
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      margin-right: 30px;
      &.active {
        color: $btn-color;
      }
    }
  }
}
</style>