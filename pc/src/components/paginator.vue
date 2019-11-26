<template>
  <div class="paginator" :class="[alignType, {'hide': totalPages === 1 && hideOnSinglePage}]" v-show="total > 0">
    <ul class="paginator-list">
      <li
        class="paginator-item paginator-item-prev"
        :class="[sizeStyle, {'disabled': current <= 1}]"
        @click="prePage()"
      >
        <a class="icon-wrapper"><span class="icon icon-lt"></span></a>
      </li>

      <li
        class="paginator-item"
        :class="[sizeStyle, {'current':item === Number(current)}]"
        v-for="(item, i) in pagelist"
        :key="i"
        @click="onItemClick(item)"
      >
        <a>{{item === JUMPER_PREV || item === JUMPER_NEXT ? '...' : item}}</a>
      </li>

      <li
        class="paginator-item paginator-item-next"
        :class="[sizeStyle, {'disabled': current >= totalPages}]"
        @click="nextPage()"
      >
        <a class="icon-wrapper"><span class="icon icon-gt"></span></a>
      </li>
      <li class="paginator-options" :class="[jumperSize]">
        <div class="quick-jumper">
          跳至
          <input type="text" @blur="jump($event)" />
          页
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.paginator {
  .icon {
    display: inline-block;
    height: 16px;
    width: 16px;
  }
  .icon-lt {
    background: url('../../public/img/lt.png') no-repeat;
    background-size: 100% 100%;
  }
  .icon-gt {
    background: url('../../public/img/gt.png') no-repeat;
    background-size: 100% 100%;
  }
  &.paginator-align-left {
    text-align: left;
  }
  &.paginator-align-center {
    text-align: center;
  }
  &.paginator-align-right {
    text-align: right;
  }
  .total {
    display: inline-block;
  }
  .paginator-list {
    display: inline-block;
    .paginator-item-prev {
      margin-right: 14px;
    }
    .paginator-item-next {
      margin-right: 14px;
    }

    .paginator-item {
      display: inline-block;
      text-align: center;
      border: 1px solid #f2f2f2;
      border-radius: 2px;
      margin-right: 14px;
      cursor: pointer;

      &.disabled {
        cursor: no-drop;
      }

      &.current {
        background: #eee;
      }

      &.paginator-item-mediumn {
        width: 34px;
        height: 34px;
        line-height: 34px;
      }

      &.paginator-item-large {
        width: 40px;
        height: 40px;
        line-height: 40px;
      }

      &.paginator-item-small {
        width: 24px;
        height: 24px;
        line-height: 24px;
      }

      &:hover {
        a {
          color: orange;
        }
      }
      a {
        color: #666;
      }
    }
  }

  .paginator-options {
    display: inline-block;

    &.paginator-options-large {
      height: 40px;
      line-height: 40px;
      input {
        width: 60px;
      }
    }
    &.paginator-options-mediumn {
      height: 34px;
      line-height: 34px;
      input {
        width: 48px;
      }
    }
    &.paginator-options-small {
      height: 24px;
      line-height: 24px;
      input {
        width: 40px;
      }
    }
    .quick-jumper {
      display: inline-block;
      height: 100%;
      input {
        height: 100%;
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        margin: 0 6px;
        text-align: center;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>

<script>
// 当页数较多时会采用显示控制策略
// 超过10页时，除了第一页和最后一页外，只显示当前页的左右两边两个数字，其他页数省略
// 点击省略号跳转到与当前页间隔为5的页面，定义两个标识常量标识方向
const JUMPER_PREV = "prev";
const JUMPER_NEXT = "next";

const SIZE_LIST = ["mediumn", "large", "small"];
const ALIGN_TYPES = ["center", "left", "right"];

export default {
  data() {
    return {
      JUMPER_PREV,
      JUMPER_NEXT,
      pagelist: []
    };
  },
  props: {
    total: {
      type: [Number, String],
      default: 0
    },
    current: {
      type: [Number, String],
      default: 1
    },
    pageSize: {
      type: [Number, String],
      default: 20
    },
    align: {
      validator: function(value) {
        return ALIGN_TYPES.indexOf(value) !== -1;
      },
      default: ALIGN_TYPES[0]
    },
    size: {
      validator: function(value) {
        return SIZE_LIST.indexOf(value) !== -1;
      },
      default: SIZE_LIST[0]
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    }
  },

  created() {
    this.setPagelist();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    alignType() {
      let type = "";
      if (ALIGN_TYPES.indexOf(this.align) === -1) {
        type = ALIGN_TYPES[0];
      } else {
        type = this.align;
      }
      return "paginator-align-" + type;
    },
    sizeStyle() {
      let size = "";
      if (SIZE_LIST.indexOf(this.size) === -1) {
        size = SIZE_LIST[0];
      } else {
        size = this.size;
      }
      return "paginator-item-" + size;
    },
    jumperSize() {
      let size = "";
      if (SIZE_LIST.indexOf(this.size) === -1) {
        size = SIZE_LIST[0];
      } else {
        size = this.size;
      }
      return "paginator-options-" + size;
    }
  },
  watch: {
    current(value) {
      this.setPagelist();
    },
    total() {
      this.setPagelist();
    }
  },
  methods: {
    setPagelist() {
      let pageArr = [];
      let totalPages = this.totalPages;
      if (totalPages > 10) {
        let current = this.current;
        let startPage = 1;
        let lastPage = totalPages;
        if (current <= 4) {
          this.pagelist = [startPage, 2, 3, 4, 5, 6, JUMPER_NEXT, lastPage];
        } else if (current <= lastPage - 4) {
          this.pagelist = [
            startPage,
            JUMPER_PREV,
            current - 2,
            current - 1,
            current,
            current + 1,
            current + 2,
            JUMPER_NEXT,
            lastPage
          ];
        } else {
          this.pagelist = [
            startPage,
            JUMPER_PREV,
            lastPage - 5,
            lastPage - 4,
            lastPage - 3,
            lastPage - 2,
            lastPage - 1,
            lastPage
          ];
        }
      } else if (totalPages >= 1) {
        let count = totalPages;
        let i = 1;
        let pagelist = [];
        while (i <= count) {
          pagelist.push(i);
          i++;
        }
        this.pagelist = pagelist;
      }
    },
    prevPage() {
      if (this.current === 1) {
        return;
      }
      let value = this.current - 1;
      this.updateCurrent(value);
    },
    nextPage() {
      if (this.current === this.totalPageCount) {
        return;
      }
      let value = this.current + 1;
      this.updateCurrent(value);
    },
    onItemClick(index) {
      console.log('onItemClick')
      let value = index;
      if (value === "prev") {
        value = this.current - 5 > 0 ? this.current - 5 : 1;
      }
      if (value === "next") {
        value =
          this.current + 5 < this.totalPages
            ? this.current + 5
            : this.totalPages;
      }
      console.log(value)
      this.updateCurrent(value);
    },
    jump(e) {
      let value = Number(e.target.value);
      if (value) {
        this.updateCurrent(value);
      }
    },
    updateCurrent(value) {
      this.$emit("update:current", value);
      this.$emit("current-change", value);
    }
  }
};
</script>