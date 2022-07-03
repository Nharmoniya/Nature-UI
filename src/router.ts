import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Helper from './views/Helperpage.vue'
import Theme from './views/Themepage.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history:history,
  routes:[
    {
      path:'/',
      //重定向
      redirect:'/home',
      component:Home,
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/doc',
      component:Doc,
      children:[

      ]
    },
    {
      path:'/helper',
      component:Helper,
    },
    {
      path:'/theme',
      component:Theme,
    }
  ]
})