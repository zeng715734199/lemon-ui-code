import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';
import DocDemo from './components/DocDemo.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';


const history = createWebHashHistory();
const md = fileName => h(Markdown, {path: `../markdown/${fileName}.md`, key: fileName});
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'Tabs', component: Tabs}
      ]
    }
  ]
});
