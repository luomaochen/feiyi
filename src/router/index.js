import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home_index from '@/components/Front/Home/index'
import Map from '@/components/Front/Frontcomponents/map'
import Other from '@/components/Front/Other/other'
import Feiyi from '@/components/Front/Other/feiyi'
import Next from '@/components/Front/Other/next'
import Message from '@/components/Front/Other/message'
import Abroad from '@/components/Front/Other/abroad'
import Myself from '@/components/Front/Other/myself'

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
      name: 'Map',
      component: Map
    },
    {
      path:'/other',
      name:'Other',
      component:Other,
      children: [
        {
          path: 'feiyi',
          name: 'Feiyi',
          component: Feiyi
        },
        {
          path: 'next',
          name: 'Next',
          component: Next
        },
        {
          path: 'message',
          name: 'Message',
          component: Message
        },
        {
          path: 'abroad',
          name: 'Abroad',
          component: Abroad
        },
        {
          path: 'myself',
          name: 'Myself',
          component: Myself
        }
      ]
    }
  ]
})
