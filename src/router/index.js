import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Template from '@/pages/Template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/template",
      name:'Template',
      component:Template
    }
  ]
})
