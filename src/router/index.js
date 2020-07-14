import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Request from '@/components/request'
Vue.use(Router)
export default new Router({
  'mode':'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/request',
      name:'Request',
      component:Request
    }
  ]
})
