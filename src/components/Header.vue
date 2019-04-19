<template>
<mt-header fixed title="乐淘购物商场">
  <a
    slot="left"
    onclick="javascript:history.back()"
    v-show="$route.path !=='/home'"
    >
    <mt-button icon="back">返回</mt-button>
  </a>

  <mt-button
  slot="right"
  @click="$router.push({name:'search'})"
  >搜索</mt-button>

</mt-header>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.mint-header.is-fixed {
    z-index: 10000;
}
</style>
