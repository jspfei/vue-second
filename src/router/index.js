import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Template from '@/pages/template/Template'
import Interpolation from "@/pages/template/children/interpolation"
import Instructions from "@/pages/template/children/instructions"
import CPAL from "@/pages/cpal/CPAL"
import Attribute from "@/pages/cpal/children/attribute"
import Listener from "@/pages/cpal/children/listener"

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
      component:Template,
      children:[
        {
          path:"interpolation",
          name:"interpolation",
          component:Interpolation
        },
        {
          path:"instructions",
          name:"instructions",
          component:Instructions
        }
      ]
    },
    {
      path:"/cpal",
      name:"cpal",
      component:CPAL,
      children: [
        {
          path:"attribute",
          name:"attribute",
          component:Attribute
        },
        {
          path:"listener",
          name:"listener",
          component:Listener
        },
      ]
    }
  ]
})
