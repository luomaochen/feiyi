import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home_index from '@/components/Front/Home/index'
import Map from '@/components/Front/Frontcomponents/map'
import Other from '@/components/Front/Other/other'
import Feiyi from '@/components/Front/Other/feiyi'
import Feiyicategory from '@/components/Front/Other/feiyicategory'
import Feiyiarea from '@/components/Front/Other/feiyiarea'
import Feiyidetail from '@/components/Front/Other/feiyidetail'
import Next from '@/components/Front/Other/next'
import Message from '@/components/Front/Other/message'
import Search from '@/components/Front/Other/search'
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
      path:'category',
      name:'Category',
      component:Feiyicategory
    },
    {
      path:'area',
      name:'Area',
      component:Feiyiarea
    },
    {
      path:'detail',
      name:'Detail',
      component: Feiyidetail

    },
    {
      path:'search',
      name:'Search',
      component: Search

    },
    {
      path:'/other',
      name:'Other',
      component:Other,
      redirect:'/other/feiyi',
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
