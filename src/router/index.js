import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home_index from '@/components/Front/Home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home_index',
      component: Home_index
    }
  ]
})
