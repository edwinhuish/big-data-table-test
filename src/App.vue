<script setup lang="ts">
import VxeTableVue from './views/vxe-table.vue';
import WijmojsVue from './views/wijmojs.vue';
import AgGrid from './views/ag-grid.vue';
import { ref } from 'vue';

const comp = ref(AgGrid);
</script>

<template>
  <div class="header">
    <button @click="comp = WijmojsVue">wijimojs</button>
    <button @click="comp = VxeTableVue">vxe-table</button>
    <button @click="comp = AgGrid">AG Grid</button>
  </div>
  <component class="content" :is="comp" />
</template>
<style>
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

#app .header {
  height: 50px;
}
#app .content {
  height: calc(100vh - 50px);
  max-height: calc(100vh - 50px);
}
#app .header button {
  padding: 5px 10px;
  margin: 8px;
}
</style>
