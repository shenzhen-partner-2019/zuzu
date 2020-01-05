<template>
    <div class="hotBusinessBox">
        <div class="titleBox">
            <h1>热门商圈</h1>
            <span class="s1">享优质配套 与大咖公司为邻</span>
        </div>
        <div class="businessBox mb20">
        <ul class="overflow-hidden">
            <li class="fl">
                <a href="#">
                    <img src="../../../public/img/businessBox1.jpg">
                    <div class="box-txt1">
                        <h1 class="h1-title">福田中心区</h1>
                        <p class="p1">福田中心区被誉为“深圳第一区”，集金融、商贸、信息、文化及行政于一体，城市整体功能的聚焦点。</p>
                    </div>
                </a>
            </li>
            <li class="fl">
                <a href="#">
                    <img src="../../../public/img/businessBox2.jpg">
                    <div class="box-txt1">
                        <h1 class="h1-title">坂田</h1>
                        <p class="p1">福田中心区被誉为“深圳第一区”，集金融、商贸、信息、文化及行政于一体，城市整体功能的聚焦点。</p>
                    </div>
                </a>
            </li>
            <li class="fl">
                <a href="#">
                    <img src="../../../public/img/businessBox3.jpg">
                    <div class="box-txt1">
                        <h1 class="h1-title">车公庙</h1>
                        <p class="p1">福田中心区被誉为“深圳第一区”，集金融、商贸、信息、文化及行政于一体，城市整体功能的聚焦点。</p>
                    </div>
                </a>
            </li>
            <li class="fl">
                <a href="#">
                    <img src="../../../public/img/businessBox4.jpg">
                    <div class="box-txt1">
                        <h1 class="h1-title">南山科技园</h1>
                        <p class="p1">福田中心区被誉为“深圳第一区”，集金融、商贸、信息、文化及行政于一体，城市整体功能的聚焦点。</p>
                    </div>
                </a>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    name:'loufan',
    data(){
        return{
            
        }
    },
    created(){
        this.getHotBusinessCircle()
        this.getofficeBuilding()
        this.gethotListings()
    },
    methods:{
        //查询数据接口-->热门商圈
        async getHotBusinessCircle(){
            let res = await this.hotBusinessCircle();
            console.log(res)
        },
        async getofficeBuilding(){
            let res = await this.officeBuilding();
            console.log(res)
        },
        async gethotListings(){
            let res = await this.hotListings();
            console.log(res)
        },
        ...mapActions([
            "hotBusinessCircle",
            "officeBuilding",
            "hotListings",
        ])
    }

}
</script>

<style lang="scss" scoped>
.hotBusinessBox{
    //热门商圈
    .titleBox {
        // height: 34px;
        padding: 34px 0 15px;
        font-size: 0;
        h1 {
        display: inline-block;
        font-size: 22px;
        font-weight: 700;
        line-height: 34px;
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
    }
    .businessBox {
    width: 1200px;
    font-size: 0;
    //热门商圈图片列表
        li {
        display: inline-block;
        width: 280px;
        height: 350px;
        overflow: hidden;
        position: relative;
        margin-right: 20px;
        border-radius: 4px;
        &:hover .box-txt1{
            top: 200px;
        }
        img {
            display: block;
            width: 280px;
            height: 350px;
            border-radius: 4px;
        }
        .box-txt1 {
            height: 65px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 285px;
            background: rgba(0, 0, 0, 0.1);
            transition: All .4s ease-in-out;
            -webkit-transition: All .4s ease-in-out;
            -moz-transition: All .4s ease-in-out;
            -o-transition: All .4s ease-in-out;
            .h1-title {
            padding: 28px 12px 0;
            line-height: 30px;
            // background: url(https://web-cdn.haozu.com/static/image/icon/headrpbg3.png) repeat-x;
            color: #fff;
            font-size: 18px;
            }
            .p1 {
            padding: 7px 12px 20px;
            font-size: 14px;
            line-height: 22px;
            background: rgba(0,0,0,.7);
            color: #fff;
            min-height: 66px;
            }
        }
        }
    }
}
</style>