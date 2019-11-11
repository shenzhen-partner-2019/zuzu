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
                        <a title="全深圳写字楼/办公室出租" href="/sz/house-list/" class="cur">全部</a>
                        <a title="全南山写字楼/办公室出租" href="/sz/house-nanshan/" class="">南山</a>
                        <a title="全福田写字楼/办公室出租" href="/sz/house-futian/" class="">福田</a>
                        <a title="全罗湖写字楼/办公室出租" href="/sz/house-luohu/" class="">罗湖</a>
                        <a title="全宝安写字楼/办公室出租" href="/sz/house-baoan/" class="">宝安</a>
                        <a title="全龙岗写字楼/办公室出租" href="/sz/house-longgang/" class="">龙岗</a>
                        <a title="全龙华写字楼/办公室出租" href="/sz/house-longhuaxinqu/" class="">龙华</a>
                    </div>
                </div>
                <div class="secsel menu_sub" style="display:none">
                    <div class="area clearfix">
                        <a href="/sz/house-list/" class="cur" rel="nofollow">全部</a>
                        <a href="/sz/house-list-subway2058/" class="" rel="nofollow">7号线</a>
                        <a href="/sz/house-list-subway2059/" class="" rel="nofollow">9号线</a>
                        <a href="/sz/house-list-subway6/" class="" rel="nofollow">罗宝线</a>
                        <a href="/sz/house-list-subway7/" class="" rel="nofollow">龙岗线</a>
                        <a href="/sz/house-list-subway8/" class="" rel="nofollow">龙华线</a>
                        <a href="/sz/house-list-subway635/" class="" rel="nofollow">蛇口线</a>
                        <a href="/sz/house-list-subway1079/" class="" rel="nofollow">环中线</a>
                    </div>
                </div>
            </dd>
        </dl>
        <dl class="clearfix">
            <dt>类型：</dt>
            <dd>
                <div class="clearfix">
                    <a href="/sz/house-list/" class="cur">全部</a>
                    <a href="/sz/house-list/a1/" class="">普通办公</a>
                    <a href="#" class="">共享办公</a>
                    <a href="#" class="">创意园区</a>
                </div>
            </dd>
        </dl>
        <dl class="clearfix">
            <dt>面积：</dt>
            <dd>
                <div class="clearfix">
                    <a href="#" class="cur">全部</a><a href="#" class="">0-100m²</a>
                    <a href="/sz/house-list/b2/" class="">100-300m²</a>
                    <a href="/sz/house-list/b3/" class="">300-500m²</a>
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
        </dl>
        <dl class="clearfix">
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
        </dl>
        <!-- <div class="business-circle">
            <a href="#" class="business-circle-btn">街道直达<em class="icon"></em></a>
            <div class="business-circle-cont">
                <div class="hotarea-line"></div>
                <div class="hotarea-letter clearfix">
                    <a class="cur" href="javascript:void(0);">A</a>
                    <a href="javascript:void(0);">B</a>
                    <a href="javascript:void(0);">C</a>
                    <a href="javascript:void(0);">D</a>
                    <a href="javascript:void(0);">E</a>
                    <a href="javascript:void(0);">F</a>
                    <a href="javascript:void(0);">G</a>
                    <a href="javascript:void(0);">H</a>
                    <a href="javascript:void(0);">I</a>
                    <a href="javascript:void(0);">J</a>
                    <a href="javascript:void(0);">K</a>
                    <a href="javascript:void(0);">L</a>
                    <a href="javascript:void(0);">M</a>
                    <a href="javascript:void(0);">N</a>
                    <a href="javascript:void(0);">O</a>
                    <a href="javascript:void(0);">P</a>
                    <a href="javascript:void(0);">Q</a>
                    <a href="javascript:void(0);">R</a>
                    <a href="javascript:void(0);">S</a>
                    <a href="javascript:void(0);">T</a>
                    <a href="javascript:void(0);">U</a>
                    <a href="javascript:void(0);">V</a>
                    <a href="javascript:void(0);">W</a>
                    <a href="javascript:void(0);">X</a>
                    <a href="javascript:void(0);">Y</a>
                    <a href="javascript:void(0);">Z</a>               
                </div>
                <div class="hotarea-cont clearfix">
                    <a style="display:none;" href="#">白石洲</a>
                    <a style="display:none;" href="#">布心</a>
                    <a style="display:none;" href="#" >八卦岭</a>
                    <a style="display:none;" href="#">白沙岭</a>
                    <a style="display:none;" href="#">保税区</a>
                    <a style="display:none;" href="/sz/house-futian--bijiashan/" data-flag="B">笔架山</a>
                    <a style="display:none;" href="/sz/house-baoan--baoandadao/" data-flag="B">宝安大道</a>
                    <a style="display:none;" href="/sz/house-longgang--bantian/" data-flag="B">坂田</a>
                    <a style="display:none;" href="/sz/house-longgang--bujiguan/" data-flag="B">布吉关</a>
                    <a style="display:none;" href="/sz/house-longgang--buji/" data-flag="B">布吉</a>
                    <a style="display:none;" href="/sz/house-luohu--caiwuwei/" data-flag="C">蔡屋围</a>
                    <a style="display:none;" href="/sz/house-luohu--caobu/" data-flag="C">草埔</a>
                    <a style="display:none;" href="/sz/house-luohu--cuizhu/" data-flag="C">翠竹</a>
                    <a style="display:none;" href="/sz/house-futian--caitiancun/" data-flag="C">彩田村</a>
                    <a style="display:none;" href="/sz/house-futian--chegongmiao/" data-flag="C">车公庙</a>
                    <a style="display:none;" href="/sz/house-futian--chiwei/" data-flag="C">赤尾</a>
                    <a style="display:none;" href="/sz/house-nanshan--dachong/" data-flag="D">大冲</a>
                    <a style="display:none;" href="/sz/house-luohu--donghu/" data-flag="D">东湖</a>
                    <a style="display:none;" href="/sz/house-luohu--dongmen/" data-flag="D">东门</a>
                    <a style="display:none;" href="/sz/house-luohu--dongxiao/" data-flag="D">东晓</a>
                    <a style="display:none;" href="/sz/house-luohu--dushucun/" data-flag="D">独树村</a>
                    <a style="display:none;" href="/sz/house-yantian--dameisha/" data-flag="D">大梅沙</a>
                    <a style="display:none;" href="/sz/house-longgang--dafencun/" data-flag="D">大芬村</a>
                    <a style="display:none;" href="/sz/house-dapengxinqu--dapeng/" data-flag="D">大鹏</a>
                    <a style="display:none;" href="#" data-flag="D">大鹏新区周边</a>
                    <a style="display:none;" href="/sz/house-longhuaxinqu--dalang/" data-flag="D">大浪</a>
                    <a style="display:none;" href="/sz/house-futian--fuhuaxincun/" data-flag="F">福华新村</a>
                    <a style="display:none;" href="/sz/house-futian--fuminxincun/" data-flag="F">福民新村</a>
                    <a style="display:none;" href="/sz/house-futian--futiankouan/" data-flag="F">福田口岸</a>
                    <a style="display:none;" href="/sz/house-futian--futianquwei/" data-flag="F">福田区委</a>
                    <a style="display:none;" href="/sz/house-baoan--fanshenlu/" data-flag="F">翻身路</a>
                    <a style="display:none;" href="/sz/house-baoan--fuyong/" data-flag="F">福永</a>
                    <a style="display:none;" href="/sz/house-nanshan--guimiaolukou/" data-flag="G">桂庙路口</a>
                    <a style="display:none;" href="/sz/house-luohu--guomao/" data-flag="G">国贸</a>
                    <a style="display:none;" href="/sz/house-futian--gangsha/" data-flag="G">岗厦</a>
                    <a style="display:none;" href="/sz/house-futian--gouwugongyuan/" data-flag="G">购物公园</a>
                    <a style="display:none;" href="/sz/house-baoan--gushuyilu/" data-flag="G">固戍一路</a>
                    <a style="display:none;" href="/sz/house-baoan--gongming/" data-flag="G">公明</a>
                    <a style="display:none;" href="/sz/house-baoan--guanlan/" data-flag="G">观澜</a>
                    <a style="display:none;" href="#" data-flag="G">固戍二路</a>
                    <a style="display:none;" href="#" data-flag="G">固戍顺昌路</a>
                    <a style="display:none;" href="/sz/house-longgang--guifangyuan/" data-flag="G">桂芳园</a>
                    <a style="display:none;" href="#">光明新区</a>
                    <a style="display:none;" href="#">观澜</a>
                    <a style="display:none;" href="#">海上世界</a>
                    <a style="display:none;" href="#" data-flag="H">海王大厦</a>
                    <a style="display:none;" href="/sz/house-nanshan--houhai/" data-flag="H">后海</a>
                    <a style="display:none;" href="/sz/house-nanshan--huaqiaocheng/" data-flag="H">华侨城</a>
                    <a style="display:none;" href="/sz/house-luohu--hongganghuayuan/" data-flag="H">红岗花园</a>
                    <a style="display:none;" href="/sz/house-luohu--honghu/" data-flag="H">洪湖</a>
                    <a style="display:none;" href="/sz/house-luohu--huagangxincun/" data-flag="H">华港新村</a>
                    <a style="display:none;" href="/sz/house-luohu--huangbeiling/" data-flag="H">黄贝岭</a>
                    <a style="display:none;" href="/sz/house-luohu--huochezhan/" data-flag="H">火车站</a>
                    <a style="display:none;" href="/sz/house-futian--huaqiangnan/" data-flag="H">华强南</a>
                    <a style="display:none;" href="/sz/house-futian--huanggang/" data-flag="H">皇岗</a>
                    <a style="display:none;" href="/sz/house-futian--huangmugang/" data-flag="H">黄木岗</a>
                    <a style="display:none;" href="/sz/house-futian--huaqiangbei/" data-flag="H">华强北</a>
                    <a style="display:none;" href="/sz/house-baoan--hangkonglu/" data-flag="H">航空路</a>
                    <a style="display:none;" href="/sz/house-longgang--henggang/" data-flag="H">横岗</a>
                    <a style="display:none;" href="/sz/house-luohu--jindaotian/" data-flag="J">金稻田</a>
                    <a style="display:none;" href="/sz/house-futian--jingtian/" data-flag="J">景田</a>
                    <a style="display:none;" href="#" data-flag="J">锦绣江南</a>
                    <a style="display:none;" href="/sz/house-nanshan--kejiyuan/" data-flag="K">科技园</a>
                    <a style="display:none;" href="/sz/house-longgang--kuichong/" data-flag="K">葵涌</a>
                    <a style="display:none;" href="/sz/house-longgang--keyuan/" data-flag="K">可园</a>
                    <a style="display:none;" href="/sz/house-longgang--kangqiao/" data-flag="K">康桥</a>
                    <a style="display:none;" href="/sz/house-dapengxinqu--kuiyong/" data-flag="K">葵涌</a>
                    <a style="display:none;" href="/sz/house-luohu--lixiangxincheng/" data-flag="L">理想新城</a>
                    <a style="display:none;" href="/sz/house-luohu--luohuquwei/" data-flag="L">罗湖区委</a>
                    <a style="display:none;" href="/sz/house-luohu--liuyibu/" data-flag="L">留医部</a>
                    <a style="display:none;" href="/sz/house-luohu--liantang/" data-flag="L">莲塘</a>
                    <a style="display:none;" href="/sz/house-futian--lianhuabeicun/" data-flag="L">莲花北村</a>
                    <a style="display:none;" href="/sz/house-futian--lianhuaercun/" data-flag="L">莲花二村</a>
                    <a style="display:none;" href="/sz/house-futian--lianhuasancun/" data-flag="L">莲花三村</a>
                    <a style="display:none;" href="/sz/house-futian--lianhuayicun/" data-flag="L">莲花一村</a>
                    <a style="display:none;" href="/sz/house-futian--lizhigongyuan/" data-flag="L">荔枝公园</a>
                    <a style="display:none;" href="/sz/house-longgang--longzhuhuayuan/" data-flag="L">龙珠花园</a>
                    <a style="display:none;" href="#" data-flag="L">龙岗中心城</a>
                    <a style="display:none;" href="#" data-flag="L">龙华</a>
                    <a style="display:none;" href="#" data-flag="M">美丽365花园</a>
                    <a style="display:none;" href="#" data-flag="M">梅林关口</a>
                    <a style="display:none;" href="#" data-flag="M">民治</a>
                    <a style="display:none;" href="/sz/house-nanshan--nanyou/" data-flag="N">南油</a>
                    <a style="display:none;" href="/sz/house-nanshan--nanxinlukou/" data-flag="N">南新路口</a>
                    <a style="display:none;" href="/sz/house-nanshan--nantou/" data-flag="N">南头</a>
                    <a style="display:none;" href="/sz/house-nanshan--nanshanyiyuan/" data-flag="N">南山医院</a>
                    <a style="display:none;" href="/sz/house-luohu--nigang/" data-flag="N">泥岗</a>
                    <a style="display:none;" href="/sz/house-longgang--longgangnanao/" data-flag="N">南澳</a>
                    <a style="display:none;" href="/sz/house-dapengxinqu--nanao/" data-flag="N">南澳</a>
                    <a style="display:none;" href="/sz/house-longgang--pinghu/" data-flag="P">平湖</a>
                    <a style="display:none;" href="/sz/house-longgang--pingdi/" data-flag="P">坪地</a>
                    <a style="display:none;" href="/sz/house-longgang--pingshanxinqu/" data-flag="P">坪山新区</a>
                    <a style="display:none;" href="/sz/house-nanshan--qianhai/" data-flag="Q">前海</a>
                    <a style="display:none;" href="/sz/house-nanshan--quzhengfu/" data-flag="Q">区政府</a>
                    <a style="display:none;" href="/sz/house-luohu--qingshuihe/" data-flag="Q">清水河</a>
                    <a style="display:none;" href="#" data-flag="Q">潜龙花园</a>
                    <a style="display:none;" href="/sz/house-luohu--renminnan/" data-flag="R">人民南</a>
                    <a style="display:none;" href="/sz/house-nanshan--shekou/" data-flag="S">蛇口</a>
                    <a style="display:none;" href="/sz/house-nanshan--shendabeimen/" data-flag="S">深大北门</a>
                    <a style="display:none;" href="/sz/house-nanshan--shenzhenwan/" data-flag="S">深圳湾</a>
                    <a style="display:none;" href="/sz/house-luohu--shuibei/" data-flag="S">水贝</a>
                    <a style="display:none;" href="/sz/house-luohu--shuiku/" data-flag="S">水库</a>
                    <a style="display:none;" href="/sz/house-luohu--sungang/" data-flag="S">笋岗</a>
                    <a style="display:none;" href="/sz/house-futian--shangbu/" data-flag="S">上步</a>
                    <a style="display:none;" href="/sz/house-futian--shangmeilin/" data-flag="S">上梅林</a>
                    <a style="display:none;" href="/sz/house-futian--shangsha/" data-flag="S">上沙</a>
                    <a style="display:none;" href="/sz/house-futian--shawei/" data-flag="S">沙尾</a>
                    <a style="display:none;" href="/sz/house-futian--shazui/" data-flag="S">沙嘴</a>
                    <a style="display:none;" href="/sz/house-futian--shisha/" data-flag="S">石厦</a>
                    <a style="display:none;" href="/sz/house-yantian--shatoujiao/" data-flag="S">沙头角</a>
                    <a style="display:none;" href="/sz/house-baoan--shiyan/" data-flag="S">石岩</a>
                    <a style="display:none;" href="/sz/house-baoan--songgang/" data-flag="S">松岗</a>
                    <a style="display:none;" href="/sz/house-baoan--shajing/" data-flag="S">沙井</a>
                    <a style="display:none;" href="/sz/house-nanshan--taoyuancun/" data-flag="T">桃源村</a>
                    <a style="display:none;" href="/sz/house-luohu--tianbei/">田贝</a>
                    <a style="display:none;" href="/sz/house-luohu--tianxincun/">田心村</a>
                    <a style="display:none;" href="/sz/house-baoan--taoyuanju/">桃源居</a>
                    <a style="display:none;" href="/sz/house-luohu--wenjin/">文锦</a>
                    <a style="display:none;" href="/sz/house-luohu--wenjindu/">文锦渡</a>
                    <a style="display:none;" href="/sz/house-baoan--wankecheng/">万科城</a>
                    <a style="display:none;" href="/sz/house-nanshan--xili/">西丽</a>
                    <a style="display:none;" href="/sz/house-futian--xiameilin/">下梅林</a>
                    <a style="display:none;" href="/sz/house-futian--xiangmihu/">香蜜湖</a>
                    <a style="display:none;" href="/sz/house-futian--xiasha/">下沙</a>
                    <a style="display:none;" href="/sz/house-futian--xinzhou/">新洲</a>
                    <a style="display:none;" href="/sz/house-yantian--xiaomeisha/">小梅沙</a>
                    <a style="display:none;" href="/sz/house-baoan--xinan/">新安</a>
                    <a style="display:none;" href="/sz/house-baoan--xinruilu/">新瑞路</a>
                    <a style="display:none;" href="/sz/house-baoan--xinzhongxinqu/">新中心区</a>
                    <a style="display:none;" href="#">西乡</a>
                    <a style="display:none;" href="#" data-flag="Y">银湖</a>
                    <a style="display:none;" href="#" data-flag="Y">益田村</a>
                    <a style="display:none;" href="#" data-flag="Y">园岭</a>
                    <a style="display:none;" href="#" data-flag="Y">盐田</a>
                    <a style="display:none;" href="#" data-flag="Y">滢水山庄</a>
                    <a style="display:none;" href="#" data-flag="Z">招商大厦</a>
                    <a style="display:none;" href="#" data-flag="Z">中心区</a>
                    <a style="display:none;" href="#" data-flag="Z">中心区</a>
                    <a style="display:none;" href="#" data-flag="Z">竹子林</a>
                    <a style="display:none;" href="#" data-flag="Z">中心区</a>                
                </div>
            </div>
        </div> -->
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
    }
  }
</style>