<template>
    <div class="category">
      <div class="left">
        <mt-navbar v-model="selected">
          <mt-tab-item :id="firstItem.id" v-for="(firstItem,index) in firstCategoryList" :key="index">{{firstItem.categoryName}}</mt-tab-item>

        </mt-navbar>
      </div>
      <div class="right">
        <mt-tab-container v-model="selected">
          <mt-tab-container-item :id="firstItem.id" v-for="(firstItem,index) in firstCategoryList" :key="index">
            <ul class="brands clearfix">
              <li v-for="(secondItem,index1) in secondCategoryList" :key="index1">
                <router-link to="">
                  <img :src="'http://127.0.0.1:3000'+secondItem.brandLogo" alt="">
                  <p>{{secondItem.brandName}}</p>
                </router-link>
              </li>
              <span v-show='secondCategoryList.length === 0'>没有二级分类数据</span>
            </ul>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

    </div>
</template>
<script>
import {getFirstCategory, getSecondCategory} from '@/api'
export default{
  data () {
    return {
      selected: '',
      firstCategoryList: [],
      secondCategoryList: []
    }
  },
  // 监听selected
  watch: {
    //   watch是监听属性，它里面的函数的名称必须和你想监听的属性名称一致
    selected (value) {
      // console.log(value)
      getSecondCategory(value)
        .then(res => {
          // console.log(res)
          this.secondCategoryList = res.data.rows
        })
    }

  },
  mounted () {
    getFirstCategory()
      .then(res => {
        // console.log(res)
        this.firstCategoryList = res.rows
        this.selected = this.firstCategoryList[0].id
      })
  }
}
</script>
<style lang="scss" scoped>
.category{
  display: flex;
  height: 100vh;
  .left{
    width: 100px;
    background-color: #f7f7f7;
    .mint-navbar{
      flex-direction: column;
      background-color: #f7f7f7;
    }
  }
  .right{
    flex:1;
    .brands{
      // list-style: none;

      li{
        width: 33.33%;
        float: left;
        text-align: center;
        margin-top: 10px;
        img{
          display: block;
          width: 100%;
        }

      }
    }
  }
}

</style>
