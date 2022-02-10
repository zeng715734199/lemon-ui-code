import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import cool from './components/cool.vue'
import cool2 from './components/cool2.vue'
const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: cool},
    {path: '/xxx', component: cool2}
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
