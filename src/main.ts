import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {router} from './router';
import 'github-markdown-css'
import 'animate.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
