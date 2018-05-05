import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home_index from '@/components/Front/Home/index'
import Hr from '@/components/Front/Frontcomponents/hr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home_index',
      component: Home_index
    },
    {
      path: '/test',
      name: 'Hr',
      component: Hr
    }
  ]
})
