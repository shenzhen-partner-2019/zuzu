<template>
    <div class="nav-wrapper">
        <ul>
            <li class="entrances-item entrance-entrust">
                <router-link to="/zuzu/weituo">
                    <p>
                    <em class="entrance-entrust"></em>
                    </p>
                    <div class="text fl">
                    <span>委托找房</span>
                    </div>
                </router-link>
            </li>
            <li class="entrances-item entrance-rent">
                <router-link to="/zuzu/toufang">
                    <p>
                    <em class="icons-entrances"></em>
                    </p>
                    <div class="text fl">
                    <span>投放房源</span>
                    </div>
                </router-link>
            </li>
            <li class="entrances-item entrance-rent">
                <router-link to="/zuzu/office">
                    <p>
                    <em class="entrance-sale"></em>
                    </p>
                    <div class="text fl">
                    <span>找办公室</span>
                    </div>
                </router-link>
            </li>
      </ul>
    </div>
</template>

<style lang="scss" scoped>
  .nav-wrapper {
    width: 1180px;
    height: 150px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    ul{
        overflow: hidden;
        height: 150px;
        li {
            display: block;
            float: left;
            width: 393px;
            height: 150px;
            padding: 50px 0 0 50px;
            overflow: hidden;
            a {
                position: relative;
                display: block;
                width: 100%;
                height: 100px;
                padding: 25px 0;
                text-align: left;
                p {
                    float: left;
                    width: 48px;
                    height: 49px;
                    margin-left: 10px;
                    position: relative;
                    overflow: hidden;
                    em {
                        display: block;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                        top: 0;
                        cursor: pointer;
                        overflow: hidden;
                        font-size: 0;
                        background-repeat: no-repeat;
                         background-image: url(../../../public/img/icons-entrances.png);
                    }
                    .icons-entrances {    
                        background-position:-268px -418px; 
                    }
                    .entrance-entrust{   
                        background-position: -322px -418px;  
                    }
                    .entrance-sale{
                        background-position: -207px -418px;
                    }
                }
                .text {
                    width: 159px;
                    height: 49px;
                    font-size: 20px;
                    font-weight: 600;
                    color:#333;
                    line-height: 49px;
                    overflow: hidden;
                    padding-left: 20px;
                }
            }
        }
    }
  }
</style>