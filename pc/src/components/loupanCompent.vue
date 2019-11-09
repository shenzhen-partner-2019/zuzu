<template>
  <div class="home-warpper">
        <div class="titleBox">
            <h1>{{leaseData.title}}</h1>
            <span class="titleTag" v-if="leaseData.discount"><em class="icon em1"></em>{{leaseData.discount}}</span>
            <span class="s1">{{leaseData.descriptContent}}</span>
            <a class="a1 fr">{{leaseData.otherChannel}}</a>
        </div>
        <ul class="shareBox" style="overflow:hidden;">
            <li v-for="(item,i) in leaseData.leaseListData" :key="i">
                <a>
                    <div class="shareBox-img">
                        <img :src="item.imgUrl" :title="item.title">
                    </div>
                    <div class="houseBox-about">
                        <p class="houseName">{{item.houseName}}</p>
                        <div class="address_price">
                            <span class="houseAddress fl">
                                <em class="icon em1">地址</em>{{item.houseAddress}}
                            </span>
                            <span class="housePrice fr">
                                <i class="price">{{item.housePrice}}</i>
                                    {{item.unitPrice}}                                
                            </span>
                        </div>
                    </div>
                </a>
            </li>      
        </ul>
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
        leaseData:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    methods:{

    },

}
</script>

<style lang="scss" scoped>
.icon {
    display: inline-block;
    vertical-align: top;
    background: url(../../public/img/icon_v4.png) no-repeat;
    font-size: 0;
}
 .home-warpper{
    .titleBox {
        padding: 34px 0 15px;
        font-size: 0;
        h1 {
            display: inline-block;
            font-size: 22px;
            font-weight: 700;
            line-height: 34px;
        }
        .titleTag {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            border-radius: 20px;
            padding: 0 12px 0 2px;
            font-size: 14px;
            color: #fff;
            margin: 7px 0 0 10px;
            background: #fd6976;
            vertical-align: top;
            .em1 {
                width: 16px;
                height: 16px;
                background-position: -447px -26px;
                margin: 2px 8px 0 0;
            }
        }
        .s1 {
            display: inline-block;
            padding-left: 10px;
            height: 24px;
            line-height: 24px;
            color: #979fa8;
            font-size: 14px;
            padding-top: 8px;
        }
        .a1 {
            display: inline-block;
            height: 26px;
            line-height: 26px;
            border: 1px #f2f2f2 solid;
            border-radius: 4px;
            padding: 0 14px;
            color: #979fa8;
            margin-top: 3px;
            font-size: 14px;
            letter-spacing: 2px;
            text-decoration:none;
            cursor: pointer;
            &.a1:hover {
                border-color: #f90;
                color: #f90;
            }
        }
    }
    .shareBox {
        width: 1200px;
        li {
            display: inline-block;
            width: 280px;
            height: 275px;
            overflow: hidden;
            position: relative;
            margin-right: 20px;
            border-radius: 4px;
            cursor: pointer;
            .shareBox-img {
                display: block;
                width: 280px;
                height: 210px;
                border-radius: 4px;
                overflow: hidden;
                img {
                    width: 280px;
                    height: 210px;
                }
                &:hover img{
                    width: 330px;
                    height: 230px;
                    border-radius: 4px;
                    transform: scale(1);
                    -webkit-transform: scale(1);
                    -webkit-transition: opacity .35s,-webkit-transform .35s;
                    transition: opacity .35s,transform .35s;
                }
            }
            //文本
            .houseBox-about {
                padding-top: 7px;
                .houseName {
                    display: block;
                    height: 24px;
                    line-height: 24px;
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 16px;
                    font-weight: 700;
                    color: #333;
                }
                .address_price{
                    .houseAddress {
                        display: inline-block;
                        height: 24px;
                        line-height: 24px;
                        color: #8c8fa7;
                        font-size: 12px;
                        margin-top: 10px;
                        .em1.icon {
                            width: 12px;
                            height: 14px;
                            background-position: -394px 0;
                            margin: 5px 5px 0 0;
                        }
                    }
                    .housePrice {
                        display: inline-block;
                        height: 24px;
                        line-height: 24px;
                        font-size: 14px;
                        color: #3f454b;
                        margin-top: 10px;
                        .price {
                            font-size: 24px;
                            color: #ec203d;
                            display: inline-block;
                            margin-right: 5px;
                            vertical-align: top;
                            position: relative;
                            margin-top: -2px;
                        }
                    }
                }
            }

        }
    }
}
</style>

