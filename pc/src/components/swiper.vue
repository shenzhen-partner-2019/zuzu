<template>
  <div class="we-swiper" :style="{width: width + 'px'}">
    <div class="img-wrap" :style="{width: width + 'px', height: height + 'px'}">
      <div class="img-list">
        <div class="img-item" :class="{'current': activeIndex === i}" v-for="(item, i) in list" :key="i">
          <img :src="item" alt="">
        </div>
      </div>
      <span></span>
    </div>
    <!-- 缩略图 -->
    <div class="thumbnail">
      <div class="btn prev" @click="preImg()"></div>
      <div class="thumb-list-wrap">
        <div class="thumb-list" :style="{transform: 'translateX('+translateValue+'px)'}">
          <div class="thumb-item" @click="selectImg(i)" :class="{'active': activeIndex === i}" v-for="(item, i) in list" :key="i" >
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div class="btn next" @click="nextImg()"></div>
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
    .thumb-list-wrap {
      overflow: hidden;
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

        &.active {
          img {
            opacity: 1;
          }
        }

        img {
          width: 100%;
          height: 100%;
          opacity: 0.4;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      translateValue: 0
    };
  },
  props: {
    width: {
      type: Number,
      default: 710
    },
    height: {
      type: Number,
      default: 500
    },
    list: {
      type: Array,
      default: []
    }
  },
  watch: {
    activeIndex: {
      immediate: true,
      handler: function(value) {
        //
        this.translateValue = -value * 129;
      }
    }
  },
  methods: {
    preImg() {
      if (this.activeIndex === 0) {
        return;
      }
      this.activeIndex = this.activeIndex - 1;
    },
    nextImg() {
      if (this.activeIndex === this.list.length - 1) {
        return;
      }
      this.activeIndex = this.activeIndex + 1;
    },
    selectImg(i) {
      this.activeIndex = i;
    }
  }
};
</script>


