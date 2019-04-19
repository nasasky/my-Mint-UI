<template>
<div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <router-link to="">
                <img src="../assets/images/banner1.png" alt="">
            </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
            <router-link to="">
                <img src="../assets/images/banner2.png" alt="">
            </router-link>
        </mt-swipe-item>
        <mt-swipe-item>
            <router-link to="">
                <img src="../assets/images/banner3.png" alt="">
            </router-link>
        </mt-swipe-item>
    </mt-swipe>
    <!-- 导航块 -->
    <ul class="nav clearfix">
        <li>
            <router-link to="">
                <img src="../assets/images/nav1.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="">
                <img src="../assets/images/nav2.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="">
                <img src="../assets/images/nav3.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="">
                <img src="../assets/images/nav4.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="">
                <img src="../assets/images/nav5.png" alt="">
            </router-link>
        </li>
        <li>
            <router-link to="">
                <img src="../assets/images/nav2.png" alt="">
            </router-link>
        </li>
    </ul>
    <!-- 产品块 -->
       <ul class="productList">
           <li class="proBox">
               <router-link to="">
                   <img src="../assets/images/product.jpg" alt="">
                   <h5>del删除线标签告诉浏览器把其加s标签的文本文字加删除划线样式（文字中间一道横线）呈现显示给浏览者。</h5>
                   <div class="price">
                       <span>￥200</span>
                       <del>￥300</del>
                   </div>

               </router-link>
               <mt-button type="primary">立即购买</mt-button>
           </li>
           <li class="proBox">
               <router-link to="">
                   <img src="../assets/images/product.jpg" alt="">
                   <h5>del删除线标签告诉浏览器把其加s标签的文本文字加删除划线样式（文字中间一道横线）呈现显示给浏览者。</h5>
                   <div class="price">
                       <span>￥200</span>
                       <del>￥300</del>
                   </div>
               </router-link>
               <mt-button type="primary">立即购买</mt-button>
           </li>
           <li class="proBox">
               <router-link to="">
                   <img src="../assets/images/product.jpg" alt="">
                   <h5>del删除线标签告诉浏览器把其加s标签的文本文字加删除划线样式（文字中间一道横线）呈现显示给浏览者。</h5>
                   <div class="price">
                       <span>￥200</span>
                       <del>￥300</del>
                   </div>
               </router-link>
               <mt-button type="primary">立即购买</mt-button>
           </li>
           <li class="proBox">
               <router-link to="">
                   <img src="../assets/images/product.jpg" alt="">
                   <h5>del删除线标签告诉浏览器把其加s标签的文本文字加删除划线样式（文字中间一道横线）呈现显示给浏览者。</h5>
                   <div class="price">
                       <span>￥200</span>
                       <del>￥300</del>
                   </div>
               </router-link>
               <mt-button type="primary">立即购买</mt-button>
           </li>
       </ul>

</div>

</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.home {
  overflow: scroll;
}
.mint-swipe {
  height: 230px;
  background-color: #ff0;
  img {
    width: 100%;
    display: block;
  }
}
.nav{
    list-style: none;
    padding: 10px;
    li{
        float: left;
        width: 33.33%;
        img{
            width: 100%;
            display: block;
        }
    }
}
.productList{
    padding: 5px;
    .proBox{
        float: left;
        padding: 5px;
        width: 49%;
        border:1px solid #ccc;
        margin-top: 10px;
        img{
            width: 100%;
            display: block;
        }
        h5{
            padding: 0 10px;
            line-height: 1.5;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .price{
            span{
                color:#f00;
                font-size: 20px;
                margin:0 10px;
            }
        }
        .mint-button{
            display: block;
            margin: 5px auto;
            padding: 5px 20px;
            height: auto;
            font-size: 18px;

        }
         &:nth-of-type(even){
        margin-left: 2%;

    }

    }

}
</style>
