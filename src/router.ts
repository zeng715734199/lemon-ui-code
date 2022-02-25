import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import Intro from  './views/Intro.vue'
import Install from './views/Install.vue'
import GetStart from './views/GetStart.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: Intro},
        {path: 'get-start', component: GetStart},
        {path: 'install', component: Install},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'Tabs', component: Tabs}
      ]
    }
  ]
});
