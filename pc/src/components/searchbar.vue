<template>
  <div class="search-bar">
    <div class="input-box">
      <input type="text" placeholder="输入区域/商圈/楼盘名" />
    </div>
    <div class="search-btn">
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
        width: 281px;
        input {
          width:100%;
          height: 40px;
          line-height: 40px;
          padding: 0 20px;
          border: 1px solid #efefef;
          border-radius: 4px 0 0 4px;
        }
      }
      .search-btn {
         display: inline-block;
         width: 48px;
         height: 40px;
         background: orange;
         border-radius: 0 4px 4px 0;
         text-align: center;
         img {
           height: 32px;
           width: 32px;
           margin-top: 4px;
         }
      }
    }
</style>

