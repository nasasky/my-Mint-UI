<template>
  <div id="app">
    <!-- 使用 -->
    <lt-header></lt-header>
    <lt-content></lt-content>
    <lt-footer></lt-footer>
  </div>
</template>

<script>
// 引入
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Content from '@/components/Content.vue'
export default {
  // 注册
  components: {
    'lt-header': Header,
    'lt-footer': Footer,
    'lt-content': Content
  },
  name: 'App'
}
</script>

<style scoped>
</style>
