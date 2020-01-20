<template>
  <div class="houseResource-warpper">
    <div class="listBox fl">
        <div class="listCon">
            <ul style="overflow:hidden;">
                <li class="clearfix">
                    <a v-for="(item,index) in houseResourceData" :key="index" >
                        <div class="imgbox">
                            <a  @click="goHouseResourceDetail(item.path,item.id)">
                                <img :src="item.imgUrl" :alt="item.title" :title="item.title" v-if="item.img0">
                                <img src="../../public/img/houseResoure1.jpg" alt="" v-else>
                                <em class="video">video</em>                    
                            </a>
                        </div>
                        <div class="list-content fl">
                            <h1 class="h1-title">
                                <a  href="javascript:;" :alt="item.title" :title="item.title">
                                    {{`${item.qu}${item.yu} ${item.loupan}${item.mianji}平米 ${item.zhuangxiu} ${item.chaoxiang}`}}
                                </a>
                            </h1>
                            <p class="p1">
                                <a href="javascript:;">{{item.loupan}}</a>
                                    <i>/</i>
                            <span class="SLHEMKsUVrdkTz">{{item.mianji}}</span>m²
                                <i>/</i>{{item.zhuangxiu}}             
                            </p>
                            <p class="p1">
                                <a href="javascript:;">{{item.quyu}}</a>
                                <i>/</i>{{`${item.dong}${item.ceng}层${item.fanghao}`}}                    
                                <i>/</i>{{item.jl}}                  
                            </p>
                            <p class="p2" v-if="item.renshu">有{{item.renshu}}位用户正在浏览该写字楼房源</p>
                            <div class="list-price">
                                <p class="p1" v-if="item.yuan">   
                                    <i class="i1"><span class="SLHEMKsUVrdkTz">{{item.yuan}}</span></i>万元/月                                                                                        
                                </p>
                                <p class="p2">单价:<span class="SLHEMKsUVrdkTz">{{item.danjia}}</span>元/m²⋅月</p>
                                <div class="TagCollection" v-if="item.shoucang">
                                    <div class="Collection">
                                        <i></i>
                                        <span>收藏</span>
                                    </div>
                                </div>
                            </div>
                            <p class="p-tag" v-if="item.pTag && item.pTag.length > 0"> 
                                <i class="offerTips" :style="{background:item.background,color:item.color}" v-for="(item,index) in item.pTag" :key="index">
                                    {{item.text}} 
                                </i>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>


<script>

export default {
    name:'loufan',
    data(){
        return{
            
        }
    },
    props:{
        houseResourceData:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods:{
        goHouseResourceDetail(path,id){
            console.log(id)
            this.$router.push({path:path,query: {id:id}})
        }
    },

}
</script>

<style lang="scss" scoped>
.houseResource-warpper{
    overflow: hidden;
    .navList{
        width: 900px;
        display: inline-block;
        height: 44px;
        position: relative;
        margin-top: 13px;
        font-size: 0;
        margin-bottom: 40px;
        .a1{
            &.cur {
                border-bottom: 2px #f90 solid;
                color: #f90;
                line-height: 42px;
            }
        }
        .a1 {
            display: inline-block;
            line-height: 44px;
            font-size: 12px;
            color: #3f454b;
            margin-right: 30px;
            vertical-align: top;
            position: relative;
            z-index: 2;
            &.price {
                padding-right: 10px;
                .em1 {
                   background-position: -560px 0;
                    top: 16px;
                    width: 8px;
                    height: 5px;
                    position: absolute;
                    right: 0;
                }
                .em2 {
                    background-position: -560px -11px;
                    top: 22px;
                    width: 8px;
                    height: 5px;
                    position: absolute;
                    right: 0;
                }
                .icon {
                    display: inline-block;
                    vertical-align: top;
                    background: url(../../public/img/icon_v4.png) no-repeat;
                    font-size: 0;
                   
                   
                }
            }
        }
        .s1 {
            padding-top: 4px;
            line-height: 40px;
            font-size: 12px;
            color: #979fa8;
            .i1 {
                display: inline-block;
                font-size: 16px;
                color: #333;
                font-weight: 400;
                font-family: Arial;
                padding: 0 3px;
            }
        }
        &:after {
            border-bottom: 1px #f2f2f2 solid;
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
        }
    }
    .listBox{
        width: 900px;
        display: inline-block;
        .listCon{
            li.clearfix{
                padding-bottom: 40px;
                overflow:hidden;
                a{
                    margin-bottom: 20px;
                    .imgbox {
                        position: relative;
                        width: 246px;
                        height: 178px;
                        float: left;
                        overflow: hidden;
                        img {
                            display: inline-block;
                            width: 246px;
                            height: 178px;
                            border-radius: 4px;
                            transition: all 0.6s;
                            &:hover{
                                cursor: pointer;
                                border-radius: 4px;
                                transform: scale(1.1);
                            }
                        }
                        .video {
                            position: absolute;
                            right: 8px;
                            bottom: 0;
                            display: inline-block;
                            width: 40px;
                            height: 26px;
                            background: url(../../public/img/video.png) no-repeat right bottom;
                            font-size: 0;
                        }
                    }
                    .list-content {
                        display: inline-block;
                        width: 624px;
                        position: relative;
                        padding-left: 30px;
                        .h1-title {
                            height: 24px;
                            line-height: 24px;
                            font-size: 0;
                            display: block;
                            font-weight: 700;
                            margin-bottom: 20px;
                            a {
                                color: #333;
                                font-size: 20px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                display: inline-block;
                                overflow: hidden;
                                max-width: 485px;
                                height: 24px;
                            }
                            &:visited {
                                color: #999;
                            }
                        }
                        .p1 {
                            display: block;
                            color: #3f454b;
                            height: 26px;
                            line-height: 26px;
                            width: 470px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            padding-bottom: 6px;
                            .i1{
                                font-size: 26px;
                                font-weight: 700;
                                color: #ec203d;
                                .SLHEMKsUVrdkTz {
                                    font-family: 'HmnEIcLWutBTRKy';
                                }
                            }
                            a {
                                color: #3f454b;
                            }
                            i{
                                display: inline-block;
                                color: #ddd;
                                vertical-align: middle;
                                margin: 0 8px;
                            }
                        
                        }
                        .p2 {
                            display: block;
                            height: 26px;
                            line-height: 26px;
                            width: 470px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            padding-bottom: 6px;
                            color: #979fa8;
                        }
                        .list-price {
                            position: absolute;
                            right: 0;
                            top: 40px;
                            text-align: right;
                            z-index: 2;
                            .p1 {
                                line-height: 32px;
                                font-size: 14px;
                                width: auto;
                                display: block;
                                color: #3f454b;
                                height: 30px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                padding-bottom: 6px;
                            }
                        .p2 {
                                line-height: 24px;
                                width: auto;
                                padding-top: 0;
                                display: block;
                            
                                height: 26px;

                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                padding-bottom: 6px;
                            }
                            .TagCollection {
                                position: relative;
                                top: initial;
                                right: inherit;
                                padding-bottom: 5px;
                                text-align: right;
                                .Collection {
                                    display: inline-block;
                                    text-align: right;
                                    font-size: 12px;
                                    color: #3f454b;
                                    padding-left: 15px;
                                    line-height: 24px;
                                    position: relative;
                                    margin-top: 0;
                                    cursor: pointer;
                                    &:before {
                                        position: absolute;
                                        left: 0;
                                        top: 7px;
                                        width: 12px;
                                        height: 12px;
                                        background: url(../../public/img/icon_v4.png) no-repeat -591px 0;
                                        content: '';
                                    }
                                }
                            }
                        }
                        .p-tag {
                            width: 100%;
                            font-size: 0;
                            .offerTips {
                                display: inline-block;
                                height: 24px;
                                line-height: 24px;
                                padding: 0 5px;
                                border-radius: 4px;
                                font-size: 14px;
                                margin-top: 10px;
                                margin-right: 10px;
                                &.t1 {
                                    background: #eff6f5;
                                    color: #a6c5c1;
                                }
                                &.t2 {
                                    background: #f5f2e9;
                                    color: #e4d19e;
                                }
                                &.t3 {
                                    background: #eef2f8;
                                    color: #a2afc8;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
