<template>
    <div class="search">
      <mt-search
        v-model="userKey"
        placeholder="搜索">
      </mt-search>
      <mt-button
        size="normal"
        type="primary"
        @click="doSearch"
      >搜索</mt-button>
      <div class="searchHistory">
        <mt-cell
          :title="item"
          :to="'/searchList/'+item"
          v-for="(item,index) in historyData"
          :key="index"
        >
        <span @click="handleDel(index)">x</span>
       </mt-cell>
      </div>

    </div>
</template>
<script>
export default{
  data () {
    return {
      userKey: '',
      historyData: []
    }
  },
  mounted () {
    // 页面一打开，就自动加载搜索历史
    this.historyData = this.getHistoryData()
  },
  methods: {
    getHistoryData () {
      // 获取本地存储的搜索历史，是字符串
      var dataStr = localStorage.getItem('lt_historyData')
      // 返回数据，进行数据转化
      // 因为有可能一开始的时候并没有这个本地存储数据，为了避免后期的错误，返回一个空值数组
      return JSON.parse(dataStr || '[]')
    },
    doSearch () {
      // 将当前搜索的值，写入搜索历史
      if (this.userKey.trim().length !== 0) {
        // 先获取历史数据
        var dataArr = this.getHistoryData()
        // 写入当前搜索的值
        dataArr.push(this.userKey)
        // 将数据进行本地存储
        localStorage.setItem('lt_historyData', JSON.stringify(dataArr))
      }
      // 实现路由跳转
      this.$router.push({name: 'searchList', params: {key: this.userKey}})
    },
    handleDel (index) {
      var dataArr = this.getHistoryData()
      dataArr.splice(index, 1)
      localStorage.setItem('lt_historyData', JSON.stringify(dataArr))
      this.historyData = this.getHistoryData()
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  position: relative;
  .mint-search {
    height: auto;
  }
  .mint-button {
    height: 28px;
    position: absolute;
    top: 8px;
    right: 10px;
    z-index: 998;
    font-size: 14px;
    border-radius: 0 4px 4px 0;
  }
}

</style>
