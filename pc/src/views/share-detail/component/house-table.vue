<template>
  <div class="house-table">
    <table>
      <thead>
        <tr>
          <th width="116"></th>
            <th width="102">
                <p class="sort-js" data-type="coveredArea">
                  面积
                  <span class="arrow-icon">
                    <span class="iconfont iconxiala" data-type="coveredArea"></span>
                    <span class="iconfont iconxialashang-copy" data-type="coveredArea"></span>
                  </span>
                </p>
            </th>
            <th width="80">人数</th>
            <th width="80">装修</th>
            <th width="80">朝向</th>
            <th width="130">
                <p class="sort-js" data-type="unitPrice">
                  单价
                  <span class="arrow-icon">
                    <span class="iconfont iconxiala" data-type="unitPrice"></span>
                    <span class="iconfont iconxialashang-copy" data-type="unitPrice"></span>
                  </span>
                </p>
            </th>
            <th width="130">
              <p class="sort-js" data-type="roomPrice">
                总价
                <span class="arrow-icon">
                  <span class="iconfont iconxiala" data-type="roomPrice"></span>
                  <span class="iconfont iconxialashang-copy cur" data-type="roomPrice"></span>
                </span>
              </p>
            </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in tableData" :key="i">
          <td width="116">
            <img :src="item.img_url" alt="">
          </td>
          <td>
           <span class="strong">{{item.area}}</span>平米
          </td>
          <td>
           {{item.people_num}}人
          </td>
          <td>{{item.decoration}}</td>
          <td>{{item.orientaion}}</td>
          <td width="130">{{item.price}}元/工位/月</td>
          <td width="130"><span class="strong">{{item.total_price}}</span>万元/月</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.house-table {
  font-size: 14px;
  thead{}
  tr {
    text-align: center;
    img {
      display: inline-block;
      width: 100px;
      height: 70px;
      margin-bottom: 10px;
    }
    .strong {
      font-weight: bold;
      color: #222;
      font-size: 16px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {}
  },
  props: {
    tableData: {
      type: Array,
      default: []
    }
  },
  computed: {
    //
  },
  watch: {}
}
</script>




