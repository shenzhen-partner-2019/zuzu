<template>
  <div class="we-swiper" :style="{width: width + 'px'}">
    <div class="img-wrap" :style="{width: width + 'px', height: height + 'px'}">
      <div class="img-list">
        <div class="img-item current"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
        <div class="img-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
        <div class="img-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
      </div>
      <span></span>
    </div>
    <!-- 缩略图 -->
    <div class="thumbnail">
      <div class="btn prev"></div>
      <div class="thumb-list">
        <div class="thumb-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
        <div class="thumb-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
        <div class="thumb-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
        <div class="thumb-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
        <div class="thumb-item"><img src="../../public/img/swiper_01jpg.jpg" alt=""></div>
      </div>
      <div class="btn next"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.we-swiper {
  .img-wrap {
    .img-list {
      position: relative;
      overflow: hidden;
      .img-item {
        position: absolute;
        width: 100%;
        left: 100%;
        top: 0;
        &.current {
          position: static;
        }
        img {
          max-width: 100%;
          width: 100%;
          vertical-align: bottom;
        }
      }
    }
  }

  .thumbnail {
    position: relative;
    height: 120px;
    .btn {
      display: inline-block;
      position: absolute;
      width: 30px;
      height: 120px;
      background: #232836;
      top: 0;
      color: #fff;
      cursor: pointer;
      text-align: center;
      line-height: 120px;
      z-index: 1000;
      &.prev {
        left: 0;
      }
      &.next {
        right: 0;
      }
    }
    .thumb-list {
      padding: 0 40px;
      white-space: nowrap;
      .thumb-item {
        display: inline-block;
        width: 120px;
        height: 120px;
        margin-right: 9px;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    width: {
      type: Number,
      default: 710
    },
    height: {
      type: Number,
      default: 500
    }
  }
};
</script>


