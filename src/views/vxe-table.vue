<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import { getSalesIPS } from '/@/api/analyze';
import { VxeGridProps, VxeTablePropTypes } from 'vxe-table';
import XEUtils from 'xe-utils';

const grid = reactive<VxeGridProps>({
  // scrollX: { enabled: false },
  // scrollY: { enabled: false },
  data: [],
  scrollY: { mode: 'wheel', oSize: 300, gt: 100 },
  loading: false,
  border: true,
  height: '100%',
  align: null,
  columnConfig: {
    resizable: true
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: '标签对应', title: '标签对应', width: 80, headerAlign: 'center' },
    { field: '商品编码', title: '商品编码', width: 100, headerAlign: 'center' },
    { field: '仕入地', title: '仕入地', width: 80, headerAlign: 'center' },
    { field: '类型1', title: '类型1', width: 80, headerAlign: 'center' },
    { field: '类型2', title: '类型2', width: 80, headerAlign: 'center' },
    { field: '中文名称', title: '中文名称', width: 300, headerAlign: 'center' },
    { field: '业务类别', title: '业务类别', width: 80, headerAlign: 'center' },
    { field: '类型', title: '类型', width: 80, headerAlign: 'center' },
    { field: '部门', title: '部门', width: 80, headerAlign: 'center' },
    {
      field: '总数量',
      title: '总数量',
      width: 100,
      align: 'right',
      headerAlign: 'center'
    },
    {
      title: '2021',
      headerAlign: 'center',
      children: [
        {
          title: '12',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              field: '2021-12_1',
              width: 100,
              align: 'right',
              headerAlign: 'center'
            }
          ]
        }
      ]
    },
    {
      title: '2022',
      headerAlign: 'center',
      children: [
        {
          title: '01',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-01_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '02',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-02_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '03',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-03_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '04',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-04_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '05',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-05_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '06',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-06_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '07',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-07_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '08',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-08_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '09',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-09_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '10',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-10_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '11',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-11_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '12',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2022-12_1',
              width: 100,
              align: 'right'
            }
          ]
        }
      ]
    },
    {
      title: '2023',
      headerAlign: 'center',
      children: [
        {
          title: '01',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-01_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '02',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-02_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '03',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-03_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '04',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-04_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '05',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-05_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '06',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-06_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '07',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-07_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '08',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-08_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '09',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-09_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '10',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-10_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '11',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-11_1',
              width: 100,
              align: 'right'
            }
          ]
        },
        {
          title: '12',
          headerAlign: 'center',
          children: [
            {
              title: '数量',
              headerAlign: 'center',
              field: '2023-12_1',
              width: 100,
              align: 'right'
            }
          ]
        }
      ]
    }
  ],
  toolbarConfig: {
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  showOverflow: true,
  mergeCells: [] as VxeTablePropTypes.MergeCells
});

onMounted(async () => {
  await loadList();
  await parseMergeCellsConfig();
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

function getRowSpan(rowData, rowIndex, list, field) {
  const rowPrev = list[rowIndex - 1] ?? undefined;

  const cellValue = rowData[field];

  if (rowPrev && rowPrev[field] === cellValue) {
    return 1;
  }

  let span = 1;

  let rowNext = list[rowIndex + span] ?? undefined;

  while (rowNext && rowNext[field] === cellValue) {
    rowNext = list[rowIndex + span++];
  }

  return span > 1 ? span - 1 : 1;
}

function parseMergeCellsConfig() {
  grid.mergeCells = [];

  grid.data.map((rowData, rowIndex) => {
    const rowspan = getRowSpan(rowData, rowIndex, grid.data, '商品编码');
    if (rowspan > 1) {
      grid.mergeCells.push({ row: rowIndex, rowspan, colspan: 1, col: 1 }); // 标签对应
      grid.mergeCells.push({ row: rowIndex, rowspan, colspan: 1, col: 2 }); // 商品编码
      grid.mergeCells.push({ row: rowIndex, rowspan, colspan: 1, col: 3 }); // 仕入地
      grid.mergeCells.push({ row: rowIndex, rowspan, colspan: 1, col: 4 }); // 类型1
      grid.mergeCells.push({ row: rowIndex, rowspan, colspan: 1, col: 5 }); // 类型2
      grid.mergeCells.push({ row: rowIndex, rowspan, colspan: 1, col: 6 }); // 中文名称
    }
  });
}

function formatNum(val) {
  const num = Number(val);
  return num ? XEUtils.commafy(num, { digits: 2 }) : '';
}
</script>

<template>
  <vxe-grid v-bind="grid" ref="xTable">
    <template #toolbar_buttons>
      <vxe-button @click="grid.align = 'left'">居左</vxe-button>
      <vxe-button @click="grid.align = 'center'">居中</vxe-button>
      <vxe-button @click="grid.align = 'right'">居右</vxe-button>
    </template>
  </vxe-grid>
</template>
