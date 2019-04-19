import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Search from '@/views/Search.vue'
import SearchList from '@/views/SearchList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'default',
      path: '/',
      redirect: { name: 'home' }
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'category',
      path: '/category',
      component: Category
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: 'searchList',
      path: '/searchList/:key',
      component: SearchList
    }
  ],
  linkActiveClass: 'isActive'
})
