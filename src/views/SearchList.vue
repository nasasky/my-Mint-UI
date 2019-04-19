<template>
     <div class="searchList">
      <!-- 搜索框 -->
      <mt-search
        v-model="userKey"
        placeholder="搜索">
      </mt-search>
      <!-- 搜索按钮 -->
      <mt-button
        size="normal"
        type="primary"
      >搜索</mt-button>
      <!-- 排序 -->
     <div class="lt_order">
       <a href="javascript:;">
         <span>上架时间</span>
         <i  class="fa fa-angle-down"></i>
       </a>
       <a href="javascript:;">
         <span>价格</span>
         <i  class="fa fa-angle-down"></i>
       </a>
       <a href="javascript:;">
         <span>销量</span>
         <i  class="fa fa-angle-down"></i>
       </a>
       <a href="javascript:;">
         <span>折扣</span>
         <i  class="fa fa-angle-down"></i>
       </a>
     </div>
     <!-- 产品列表 -->
    <mt-loadmore
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      :autoFill='false'
      bottomPullText='上拉加载更多数据'
    >
        <ul class="productList">
          <li class="proBox" v-for="(item,index) in proList" :key="index">
              <router-link to="">
                  <img :src="'http://127.0.0.1:3000/'+item.pic[0].picAddr" alt="">
                  <h5>{{item.proName}}</h5>
                  <div class="price">
                      <span>￥{{item.price}}</span>
                      <del>￥{{item.oldPrice}}</del>
                  </div>

              </router-link>
              <mt-button type="primary">立即购买</mt-button>
          </li>
        </ul>
    </mt-loadmore>

    </div>
</template>
<script>
import { getProductList } from '@/api'
export default{
  data () {
    return {
      userKey: '',

      allLoaded: false,
      userObj: {
        proName: '',
        page: 1,
        pageSize: 2
      },
      proList: []
    }
  },
  mounted () {
    this.userObj.proName = this.$route.params.key
    getProductList(this.userObj)
      .then(res => {
        // console.log(res)
        this.proList = res.data.data
      })
  },
  methods: {
    loadBottom () {
      // 加载更多数据
      // this.allLoaded = true// 若数据已全部获取完毕
      setTimeout(() => {
        this.$refs.loadmore.onBottomLoaded()
      }, 1000)
    }

  }
}
</script>

<style lang="scss" scoped>
.searchList {
  position: relative;
  height: 100vh;
  .mint-search {
    height: auto;
  }
  >.mint-button {
    height: 28px;
    position: absolute;
    top: 8px;
    right: 10px;
    z-index: 998;
    font-size: 14px;
    border-radius: 0 4px 4px 0;
  }
  .lt_order{
    display: flex;
    >a{
      flex:1;
      border-right: 1px solid #ccc;
      background-color: #eeeeee;
      font-size: 14px;
      padding: 10px 5px;
      text-align: center;
      &:nth-of-type(4){
        border-right:none;
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
}

</style>
