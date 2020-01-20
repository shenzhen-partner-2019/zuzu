<template>
  <div class="select-filler">
    <div class="filter">
    <input type="hidden" id="current_price_unit" data-type="menu_area" value="2">
    <input type="hidden" id="current_house_type" data-type="menu_sub" value="">
    <div class="warp">
        <dl class="clearfix">
            <dt>位置：</dt>
            <dd>
                <div class="area place clearfix">
                    <a href="javascript:;" class="menu_pos_filter cur">区域</a>
                    <a href="javascript:;">地铁</a>
                </div>
                <div class="secsel menu_area">
                    <div class="area overflow-hidden">
                        <a title="全深圳写字楼/办公室出租" href="#" class="cur">全部</a>
                        <a title="全南山写字楼/办公室出租" href="#" class="">南山</a>
                        <a title="全福田写字楼/办公室出租" href="#" class="">福田</a>
                        <a title="全罗湖写字楼/办公室出租" href="#" class="">罗湖</a>
                        <a title="全宝安写字楼/办公室出租" href="#" class="">宝安</a>
                        <a title="全龙岗写字楼/办公室出租" href="#" class="">龙岗</a>
                        <a title="全龙华写字楼/办公室出租" href="#" class="">龙华</a>
                    </div>
                </div>
                <div class="secsel menu_sub" style="display:none">
                    <div class="area clearfix">
                        <a href="#" class="cur" rel="nofollow">全部</a>
                        <a href="#" class="" rel="nofollow">7号线</a>
                        <a href="#" class="" rel="nofollow">9号线</a>
                        <a href="#" class="" rel="nofollow">罗宝线</a>
                        <a href="#" class="" rel="nofollow">龙岗线</a>
                        <a href="#" class="" rel="nofollow">龙华线</a>
                        <a href="#" class="" rel="nofollow">蛇口线</a>
                        <a href="#" class="" rel="nofollow">环中线</a>
                    </div>
                </div>
            </dd>
        </dl>
        <!-- <dl class="clearfix">
            <dt>类型：</dt>
            <dd>
                <div class="clearfix">
                    <a href="#" class="cur">全部</a>
                    <a href="#" class="">普通办公</a>
                    <a href="#" class="">共享办公</a>
                </div>
            </dd>
        </dl>
        <dl class="clearfix">
            <dt>面积：</dt>
            <dd>
                <div class="clearfix">
                    <a href="#" class="cur">全部</a><a href="#" class="">0-100m²</a>
                    <a href="#" class="">100-300m²</a>
                    <a href="#" class="">300-500m²</a>
                    <a href="#" class="">500-1000m²</a>
                    <a href="#" class="">1000m² 以上</a>
                    <span class="input-box clearfix">
                        <label>
                            <input data-widget="static/js/index/list_select.js#showAreaBtn" id="barea" name="" type="text" maxlength="6" size="4" value="" class="">
                            <i class="input-line">--</i>
                            <input data-widget="static/js/index/list_select.js#showAreaBtn" id="earea" name="earea" type="text" maxlength="6" size="4" value="" class="">
                        </label>
                        <i class="input-unit">m²</i>
                        <a id="showAreaBtn" href="javascript:void(0);" class="input-btn" style="display: none">筛选</a>
                    </span>
                </div>
            </dd>
        </dl>

        <dl class="clearfix">
            <dt>价格：</dt>
            <dd>
                <div class="clearfix">
                    <a href="#" class="cur">全部</a>
                    <a href="#" class="">0-40元/m²⋅月</a>
                    <a href="#" class="">40-60元/m²⋅月</a>
                    <a href="#" class="">60-80元/m²⋅月</a>
                    <a href="#" class="">80-120元/m²⋅月</a>
                    <a href="#" class="">120-140元/m²⋅月</a>
                    <a href="#" class="">140元/m²⋅月以上</a>
                    <span class="input-box clearfix">
                        <label>
                            <input maxlength="6" id="bavg_price" type="text" size="4" value="" class="">
                            <i class="input-line">--</i>
                            <input maxlength="6" id="eavg_price" type="text" size="4" value="" class="">
                        </label>
                        <i class="input-unit">元/m²⋅月</i>
                        <a href="#" class="input-btn" id="showPriceBtn" style="display: none">筛选</a>
                    </span>
                    <div class="filter-sort">
                        <a class="cur" href="#">单价</a>
                        <a class="" href="#">总价</a>
                    </div>
                </div>
            </dd>
        </dl>
        <dl class="clearfix">
            <dt>装修：</dt>
            <dd>
                <div class="clearfix">
                    <a href="#" class="cur">全部</a>
                    <a href="#" class="">豪华装修</a>
                    <a href="#" class="">精装修</a>
                    <a href="#" class="">中等装修</a>
                    <a href="#" class="">简装修</a>
                    <a href="#" class="">毛坯</a>                
                </div>
            </dd>
        </dl> -->
        <!-- <dl class="clearfix">
            <dt>特色：</dt>
            <dd>
                <div class="clearfix">
                    <label class="label-box">
                        <input type="checkbox" class="checkboxClass">可注册
                    </label>
                    <label name="tag" id="tag1001" class="label-box">
                        <input type="checkbox" class="checkboxClass">
                        地铁10分钟 
                    </label>
                    <label name="tag" id="tag4002" class="label-box">
                        <input type="checkbox" class="checkboxClass">带办公家具 </label>
                    <label name="tag" id="tag1004" class="label-box">
                       <input type="checkbox" class="checkboxClass">热门楼盘 </label>
                    <label name="tag" id="tag4003" class="label-box">
                        <input type="checkbox" class="checkboxClass">户型方正 </label>                        
                    <label name="tag" id="tag4004" class="label-box">
                        <input type="checkbox" class="checkboxClass">免费车位 </label>                     
                    <label name="tag" id="tag1005" class="label-box">
                        <input type="checkbox" class="checkboxClass">知名开发商 </label>                              
                    <label name="houseType" id="housetype3" class="label-box">
                        <input type="checkbox" class="checkboxClass">整栋</label>
                </div>
            </dd>
        </dl> -->
        <!-- <div class="divider-area"></div>
        <dl class="dl dl-selected">
        <dt>已选:</dt>
        <dl>
          <div class="list list-selected">
            <div class="selected-item"><span class="text">南山</span><span class="delete-btn"></span></div>
            <div class="selected-item"><span class="text">南山中心区</span><span class="delete-btn"></span></div>
            <div class="selected-item"><span class="text">120-200元</span><span class="delete-btn"></span></div>

            <div class="clear"><span class="icon-delete"></span><span>清空</span></div>
          </div>
        </dl>
      </dl> -->
    </div>
</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
     
    };
  },
  components:{
    
  },
  mounted() {
   
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
  .select-filler {
    .filter {
        padding: 34px 0 0;
        .warp {
            position: relative;
            padding-bottom: 8px;
            dl {
                padding-bottom: 20px;
                dt {
                    font-size: 12px;
                    color: #979fa8;
                    width: 58px;
                    float: left;
                    line-height: 24px;
                }
                dd {
                    float: left;
                    width: 1120px;
                   
                }
                &.clearfix:after {
                    content: "\0020";
                    display: block;
                    clear: both;
                    height: 0;
                    visibility: hidden;
                }
            }
        }
        a {
            position: relative;
            margin-right: 30px;
            text-decoration: none;
            word-break: break-all;
            word-wrap: break-word;
            line-height: 24px;
            float: left;
            color: #333;
            font-size: 12px;
            &.cur, &:hover {
                color: #f90;
                text-decoration: none;
            }
        }
        .input-box {
            float: left;
            margin-right: 20px;
            padding-top: 2px;
            label {
                float: left;
                border: 1px solid #ccc;
                border-radius: 3px;
                height: 20px;
                padding: 0 3px;
            }
        }
        .input-unit {
            float: left;
            line-height: 22px;
            padding-left: 5px;
            color: #3f454b;
        }
        .input-btn {
            background: #fff;
            border-radius: 3px;
            color: #979fa8;
            cursor: pointer;
            float: left;
            margin: 0 0 0 5px;
            padding: 0 10px;
        }
        //单价
        .filter-sort {
            float: left;
            font-size: 12px;
            color: #979fa8;
            margin-top: 2px;
            position: relative;
            a {
                font-size: 12px;
                padding: 0 10px;
                z-index: 1;
                border-radius: 3px;
                color: #979fa8;
                margin: 0;
                height: 20px;
                border: 1px solid #ccc;
                line-height: 20px;
                background: #fff;
                &:last-child {
                    margin-left: -4px;
                }
            }
            a.cur {
                position: relative;
                z-index: 2;
                border-color: #f90;
                color: #f90;
            }
        }
        //特色
        .label-box {
            margin-right: 30px;
            display: inline-block;
            color: #3f454b;
            cursor: pointer;
            line-height: 24px;
            font-size: 12px;
            vertical-align: middle;
            .checkboxClass{
                vertical-align: middle;
            }
          
        }
         .dl-selected {
      padding: 20px 0;
      .list-selected {
        padding-left: 20px;
        .selected-item {
          display: inline-block;
          border: 1px dashed #ddd;
          background: #edf1fa;
          padding: 0 10px;
          margin-right: 14px;
          .text {
            margin-right: 8px;
          }
          .delete-btn {
            display: inline-block;
            vertical-align: middle;
            width: 12px;
            height: 12px;
            background: url("../../public/img/close.png") no-repeat;
            background-size: 100% 100%;
            cursor: pointer;
          }
        }
        .clear {
          display: inline-block;
          padding-left: 10px;
          .icon-delete {
            display: inline-block;
            vertical-align: middle;
            width: 16px;
            height: 16px;
            background: url("../../public/img/delete.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 6px;
          }
        }
      }
    }
    }
  }
</style>