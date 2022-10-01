import { createApp } from 'vue';
import App from './App.vue';

import { useTable } from './plugins/vxe-table';
import { useWijmo } from './plugins/wijmo';

createApp(App).use(useTable).use(useWijmo).mount('#app');
