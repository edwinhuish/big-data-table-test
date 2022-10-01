<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { getSalesIPS } from '/@/api/analyze';
import XEUtils from 'xe-utils';

const grid = reactive({
  data: [],
  loading: false,
  virtualScrollOption: {
    // 是否开启
    enable: true
  },

  columns: [
    {
      field: '标签对应',
      title: '标签对应',
      key: '标签对应',
      width: 100,
      align: 'left'
    },
    {
      field: '商品编码',
      title: '商品编码',
      key: '商品编码',
      width: 100,
      align: 'left'
    },
    {
      field: '仕入地',
      title: '仕入地',
      key: '仕入地',
      width: 100,
      align: 'left'
    },
    { field: '类型1', title: '类型1', key: '类型1', width: 100, align: 'left' },
    { field: '类型2', title: '类型2', key: '类型2', width: 100, align: 'left' },
    {
      field: '中文名称',
      title: '中文名称',
      key: '中文名称',
      width: 100,
      align: 'left'
    },
    {
      field: '业务类别',
      title: '业务类别',
      key: '业务类别',
      width: 100,
      align: 'left'
    },
    { field: '类型', title: '类型', key: '类型', width: 100, align: 'left' },
    { field: '部门', title: '部门', key: '部门', width: 100, align: 'left' },
    {
      field: '总数量',
      title: '总数量',
      key: '总数量',
      width: 100,
      align: 'left'
    },
    {
      field: '2021-12_1',
      title: '2021-12_1',
      key: '2021-12_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-01_1',
      title: '2022-01_1',
      key: '2022-01_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-02_1',
      title: '2022-02_1',
      key: '2022-02_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-03_1',
      title: '2022-03_1',
      key: '2022-03_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-04_1',
      title: '2022-04_1',
      key: '2022-04_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-05_1',
      title: '2022-05_1',
      key: '2022-05_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-06_1',
      title: '2022-06_1',
      key: '2022-06_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-07_1',
      title: '2022-07_1',
      key: '2022-07_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-08_1',
      title: '2022-08_1',
      key: '2022-08_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-09_1',
      title: '2022-09_1',
      key: '2022-09_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-10_1',
      title: '2022-10_1',
      key: '2022-10_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-11_1',
      title: '2022-11_1',
      key: '2022-11_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2022-12_1',
      title: '2022-12_1',
      key: '2022-12_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-01_1',
      title: '2023-01_1',
      key: '2023-01_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-02_1',
      title: '2023-02_1',
      key: '2023-02_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-03_1',
      title: '2023-03_1',
      key: '2023-03_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-04_1',
      title: '2023-04_1',
      key: '2023-04_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-05_1',
      title: '2023-05_1',
      key: '2023-05_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-06_1',
      title: '2023-06_1',
      key: '2023-06_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-07_1',
      title: '2023-07_1',
      key: '2023-07_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-08_1',
      title: '2023-08_1',
      key: '2023-08_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-09_1',
      title: '2023-09_1',
      key: '2023-09_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-10_1',
      title: '2023-10_1',
      key: '2023-10_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-11_1',
      title: '2023-11_1',
      key: '2023-11_1',
      width: 100,
      align: 'left'
    },
    {
      field: '2023-12_1',
      title: '2023-12_1',
      key: '2023-12_1',
      width: 100,
      align: 'left'
    }
  ]
});

onMounted(async () => {
  await loadList();
});

async function loadList() {
  grid.loading = true;

  return getSalesIPS()
    .then(res => {
      grid.data = res.data.data.map(row => {
        row['总数量'] = formatNum(row['总数量']);
        row['2021-12_1'] = formatNum(row['2021-12_1']);
        row['2022-01_1'] = formatNum(row['2022-01_1']);
        row['2022-02_1'] = formatNum(row['2022-02_1']);
        row['2022-03_1'] = formatNum(row['2022-03_1']);
        row['2022-04_1'] = formatNum(row['2022-04_1']);
        row['2022-05_1'] = formatNum(row['2022-05_1']);
        row['2022-06_1'] = formatNum(row['2022-06_1']);
        row['2022-07_1'] = formatNum(row['2022-07_1']);
        row['2022-08_1'] = formatNum(row['2022-08_1']);
        row['2022-09_1'] = formatNum(row['2022-09_1']);
        row['2022-10_1'] = formatNum(row['2022-10_1']);
        row['2022-11_1'] = formatNum(row['2022-11_1']);
        row['2022-12_1'] = formatNum(row['2022-12_1']);
        row['2023-01_1'] = formatNum(row['2023-01_1']);
        row['2023-02_1'] = formatNum(row['2023-02_1']);
        row['2023-03_1'] = formatNum(row['2023-03_1']);
        row['2023-04_1'] = formatNum(row['2023-04_1']);
        row['2023-05_1'] = formatNum(row['2023-05_1']);
        row['2023-06_1'] = formatNum(row['2023-06_1']);
        row['2023-07_1'] = formatNum(row['2023-07_1']);
        row['2023-08_1'] = formatNum(row['2023-08_1']);
        row['2023-09_1'] = formatNum(row['2023-09_1']);
        row['2023-10_1'] = formatNum(row['2023-10_1']);
        row['2023-11_1'] = formatNum(row['2023-11_1']);
        row['2023-12_1'] = formatNum(row['2023-12_1']);

        return row;
      });
    })
    .finally(() => {
      grid.loading = false;
    });
}

function formatNum(val) {
  const num = Number(val);
  return num ? XEUtils.commafy(num, { digits: 2 }) : '';
}
</script>

<template>
  <div>
    <ve-table
      :virtual-scroll-option="grid.virtualScrollOption"
      :columns="grid.columns"
      :table-data="grid.data"
      :style="{
        height: '100%',
        width: '100%'
      }"
    />
  </div>
</template>

<style></style>
