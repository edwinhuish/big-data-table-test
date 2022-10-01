// 引入样式
import 'vue-easytable/libs/theme-default/index.css';
// 引入组件库
import VueEasytable from 'vue-easytable';

import { App } from 'vue';

export function useEasyTable(app: App) {
  app.use(VueEasytable);
}
