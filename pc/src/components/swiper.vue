<template>
  <div class="we-swiper" :style="{width: width + 'px'}">
    <div class="img-wrap" :style="{width: width + 'px'}">
      <div class="img-list">
        <div class="img-item" :class="{'current': activeIndex === i}" v-for="(item, i) in list" :key="i">
          <img :src="item" alt="">
        </div>
      </div>
      <span></span>
    </div>
    <!-- 缩略图 -->
    <div class="thumbnail">
      <div :class="{'disabled': activeIndex === 0}" class="btn prev" @click="preImg()">
        <span class="icon icon-prev"></span>
      </div>
      <div class="thumb-list-wrap">
        <div class="thumb-list" :style="{...transformStyle}">
          <div class="thumb-item" @click="selectImg(i)" :class="{'active': activeIndex === i}" v-for="(item, i) in list" :key="i" >
            <img :src="item" alt="">
          </div>
        </div>
      </div>
      <div :class="{'disabled': activeIndex === list.length - 1}" class="btn next" @click="nextImg()">
        <span class="icon icon-next"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.we-swiper {
  .img-wrap {
    margin-bottom: 14px;
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
      &.disabled {
        cursor: no-drop;
      }
      .icon {
          display: inline-block;
        height: 16px;
        width: 16px;
      }
      .icon-prev {
        background: url('../../public/img/left_arrow.png') no-repeat;
        background-size: 100% 100%;
      }

      .icon-next {
        background: url('../../public/img/right_arrow.png') no-repeat;
        background-size: 100% 100%;
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
      translateValue: 0,
      transformStyle: {
        transform: 'translateX(0)',
        transition: 'all 1s'
      }
    };
  },
  props: {
    width: {
      type: Number,
      default: 716
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
        let step = 0
        let length = this.list.length
        if (length <= 5) {
          return
        } else {
          let step = 0  
          if (value >= length - 5) {
            step = length - 5
          } else {
            step = value
          }
          console.log(step)
          this.translateValue = 
          this.transformStyle = {
            transform: `translateX(${-step * 129}px)`,
            transition: 'all 1s'
          }
        }
        // this.translateValue = -value * 129;
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


