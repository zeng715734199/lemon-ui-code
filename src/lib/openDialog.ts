import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content, closeOnclickOverlay, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = ()=>{
    App.unmount();
    div.remove();
  }
  const App = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if(newVisible === false){
            close()
          }
        },
        ok,cancel,closeOnclickOverlay
      }, {title, content});
    }
  });
  App.mount(div);
};