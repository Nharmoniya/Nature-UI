import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Helper from './views/Helperpage.vue'
import Theme from './views/Themepage.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/SwitchDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import NotFound from './views/NotFound.vue'


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
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ]
    },
    {
      path:'/helper',
      component:Helper,
    },
    {
      path:'/theme',
      component:Theme,
    },
  ]
})