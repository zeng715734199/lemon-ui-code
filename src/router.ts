import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';
// @ts-ignore
import intro from './markdown/intro.md';
// @ts-ignore
import install from './markdown/install.md';
// @ts-ignore
import getStarted from './markdown/get-started.md';

import Markdown from './components/Markdown.vue';
import {h} from 'vue';


const history = createWebHashHistory();
const md = string => h(Markdown, {content: string, key: string});
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'Tabs', component: Tabs}
      ]
    }
  ]
});
