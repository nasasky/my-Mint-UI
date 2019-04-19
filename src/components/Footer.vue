<template>
    <mt-tabbar :selected.sync="selected" fixed>
        <mt-tab-item >
            <router-link to="/home">
                <i class="myicon myicon-key"></i>
                <p>首页</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item >
            <router-link to="/category">
                <i class="myicon myicon-user"></i>
                <p>分类</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item >
            <router-link to="cart">
                <i class="myicon myicon-user"></i>
                <p>购物车</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item >
            <router-link to="user">
                <i class="myicon myicon-user"></i>
                <p>用户中心</p>
            </router-link>
        </mt-tab-item>

</mt-tabbar>

</template>

<script>
export default {
  data () {
    return {
      selected: '' // selected:返回当前选中的 tab-item 的 id
    }
  }
}

</script>
<style scoped>
.isActive{
    color:red;
}
</style>
