import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Helper from './views/Helperpage.vue';
import Theme from './views/Themepage.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Introduce from './components/Introduce.vue';
import InputDemo from './components/InputDemo.vue';
import Alert from './components/AlertDemo.vue';
// @ts-ignore
import Checkbox from './components/CheckboxDemo.vue';
import Radio from './components/RadioDemo.vue'
import Expandingcard from './components/expandingcardDemo.vue'
import Progresssteps from'./components/progressstepsDemo.vue'
import Hiddensearchwidget from './components/hiddensearchwidgetDemo.vue'


const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: '/',
      //重定向
      redirect: '/home',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/doc',
      component: Doc,
      redirect:'/doc/introduce',
      children: [
        {path: 'introduce', component: Introduce},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path:'alert',component:Alert},
        {path:'checkbox',component:Checkbox},
        {path:'radio',component:Radio},
        {path:'expandingcard',component:Expandingcard},
        {path:'progresssteps',component:Progresssteps},
        {path:'hiddensearchwidget',component:Hiddensearchwidget},
      ]
    },
    {
      path: '/helper',
      component: Helper,
    },
    {
      path: '/theme',
      component: Theme,
    },
  ]
});