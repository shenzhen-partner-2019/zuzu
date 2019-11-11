<template>
  <div class="office-page">
    <!--面包组件-->
    <CrumbsCompent></CrumbsCompent>
    <!--选择过滤-->
    <SelectFiller></SelectFiller>
  </div>
</template>

<script>
import CrumbsCompent from '../../components/crumbsCompent'
import SelectFiller from './selectFiller'
export default {
  data() {
    return {
     
    };
  },
  components:{
    CrumbsCompent,
    SelectFiller
  },
  mounted() {
   
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
  .office-page {
    width:1180px;
    margin:0 auto;
  }
</style>