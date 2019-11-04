<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    console.log(this.$router)
  },
  methods: {
    linkto(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('./style/test.scss');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav {
  text-align: center;
  span {
    display: inline-block;
    color: #3a86f8;
    width: 100px;
    cursor: pointer;
    font-size: 16px;
  }
}
</style>
