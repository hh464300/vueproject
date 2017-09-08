import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import News from '@/components/news'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/news/:type',
    	name:'news',
    	component:News
    },
    {
    	path:'/detail/:id',
    	component:Detail
    }
  ]
})
