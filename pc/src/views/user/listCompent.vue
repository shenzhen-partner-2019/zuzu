<template>
  <div class="User-data-compent">
    <div class="list-container clearfix">
        <a href="#" class="garden-container fl" v-for="(item,index) in listTransferData" :key="index">
            <div class="image-view-container photo" style="width: 285px; height: 230px;">
            <img src="https://yun100.qfangimg.com/group1/1080x800/M00/F5/DD/CvtcMVp7vmyAXgyPAAFErQieCFM796.jpg?signature=HxIplsM6psaPjEyKHcHyk9Di597Kc_K3dGzq0DHNBW8pqCH6kMJ-Ew9t-Nd3pZldpT29EHM6LGx_k4OdT-h1nQ&amp;tailor=true">
            </div> 
            <div class="name">{{item.title}}</div> 
            <div class="desc">
            <span class="f-12" style="color: rgb(147, 153, 165);">{{item.qu}}</span> 
            <span style="color: rgb(0, 155, 218); font-size: 18px;">
            {{item.price}}
            <span class="f-12">{{item.danwei}}</span>
            </span>
            </div> 
        </a>
    </div>
    <!-- <div class="text-align-center empty">暂无数据</div> -->
  </div>
</template>


<script>

export default {
    data(){
        return{
          
        }
    },
    props:{
        listTransferData:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    created(){
     
    },
    methods:{

    },
    components:{
      
    }
}
</script>

<style lang="scss" scoped>
.User-data-compent{
     //数据
    .list-container {
        position: relative;
        min-height: 300px;
        .garden-container {
        position: relative;
        width: 285px;
        height: 310px;
        margin-top: 25px;
        margin-right: 20px;
        .photo {
            overflow: hidden;
            position: relative;
            width: 285px;
            height: 230px;
            object-fit: cover;
            border-radius: 4px;
            img {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }
        .name {
            margin-top: 14px;
            font-size: 16px;
            font-weight: 700;
            line-height: 22px;
            max-height: 44px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            overflow: hidden;
            word-wrap: break-word;
            word-break: break-all;
            color:#333;
        }
        .desc{
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: end;
            align-items: flex-end;
            margin-top: 3px;
        }
        }
    }
    //暂无数据
    .empty {
        margin-top: -80px;
        font-size: 18px;
        color: #9399a5;
        text-align: center;   
    }
}
</style>
