<template>
  <div class="search-bar">
    <div class="input-box">
      <input type="text" v-model="text"  placeholder="输入区域/商圈/楼盘名" />
    </div>
    <div class="search-btn" @click="onSearchBtnClick">
      <img src="../../public/img/icon_search.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search-bar {
      width: 329px;
      .input-box {
        display: inline-block;
        vertical-align: top;
        width: 280px;
        input {
          width: 100%;
          height: 30px;
          line-height: 30px;
          padding: 0 20px;
          border: 1px solid #efefef;
          border-right: 0;
          border-radius: 4px 0 0 4px;
        }
      }
      .search-btn {
         display: inline-block;
         width: 48px;
         height: 30px;
         background: orange;
         border-radius: 0 4px 4px 0;
         text-align: center;
         cursor: pointer;
         img {
           height: 24px;
           width:24px;
           margin-top: 4px;
         }
      }
    }
</style>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  watch: {
   
  },
  methods: {
     onSearchBtnClick() {
      this.$emit('search-house', this.text)
    }
  }
}
</script>


