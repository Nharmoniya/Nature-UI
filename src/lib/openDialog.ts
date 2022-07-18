// 只通过一个值控制dialog
import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

//入参options
export const openDialog = (options) => {
  //声明options的类型
  const {title, content, ok, cancel} = options;
  //使用dom生成一个div
  const div = document.createElement('div');
  //将div append在body上
  document.body.appendChild(div);
  const close = () => {
    // @ts-ignore
    app.unmount(div);
    div.remove();
  };

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
        }
      );
    }
  });
  app.mount(div);
};