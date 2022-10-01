<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import { AgGridVue } from 'ag-grid-vue3';
import { GridOptions, CellClassParams, RowSpanParams, GridApi, ColumnApi, CellStyleFunc } from 'ag-grid-community';

import { reactive, ref } from 'vue';
import { getSalesIPS } from '/@/api/analyze';
import XEUtils from 'xe-utils';

const self = reactive({
  data: [],
  gridApi: null as GridApi,
  columnApi: null as ColumnApi
});

const gridOpts = reactive<GridOptions>({
  defaultColDef: {
    suppressMenu: true, // 不显示表头菜单
    sortable: false,
    filter: false,
    resizable: true,
    editable: true
  },
  rowHeight: 25,
  headerHeight: 20,

  suppressRowTransform: true,

  onGridReady: params => {
    self.gridApi = params.api;
    self.columnApi = params.columnApi;
    loadList();
  },

  columnDefs: [
    {
      field: '标签对应',
      headerName: '标签对应',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cellStyleByProductCode
    },
    {
      field: '商品编码',
      headerName: '商品编码',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cellStyleByProductCode
    },
    {
      field: '仕入地',
      headerName: '仕入地',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cellStyleByProductCode
    },
    {
      field: '类型1',
      headerName: '类型1',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cellStyleByProductCode
    },
    {
      field: '类型2',
      headerName: '类型2',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cellStyleByProductCode
    },
    {
      field: '中文名称',
      headerName: '中文名称',
      width: 200,
      headerClass: ['header-row-span-3'],
      cellStyle: mergeCellStyleFn(cellStyleByProductCode)
    },
    {
      field: '业务类别',
      headerName: '业务类别',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: mergeCellStyleFn(cellStyleMergeSameCell('业务类别'), params => {
        if (params.value === '在库') {
          return { 'background-color': '#ffff00' };
        }
        if (params.value === '销售') {
          return { 'background-color': '#fff2cc' };
        }
        if (params.value === '采购') {
          return { 'background-color': '#99ffcc' };
        }
        return null;
      })
    },
    {
      field: '类型',
      headerName: '类型',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cssStyleByStyle
    },
    {
      field: '部门',
      headerName: '部门',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellStyle: cssStyleByStyle
    },
    {
      field: '总数量',
      headerName: '总数量',
      width: 100,
      headerClass: ['header-row-span-3'],
      cellClass: ['align-right'],
      cellStyle: cssStyleByStyle
    },
    {
      headerName: '2021',
      children: [
        {
          headerName: '12',
          children: [
            {
              headerName: '数量',
              field: '2021-12_1',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        }
      ]
    },
    {
      headerName: '2022',
      children: [
        {
          headerName: '01',
          children: [
            {
              field: '2022-01_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '02',
          children: [
            {
              field: '2022-02_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '03',
          children: [
            {
              field: '2022-03_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '04',
          children: [
            {
              field: '2022-04_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '05',
          children: [
            {
              field: '2022-05_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '06',
          children: [
            {
              field: '2022-06_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '07',
          children: [
            {
              field: '2022-07_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '08',
          children: [
            {
              field: '2022-08_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '09',
          children: [
            {
              field: '2022-09_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '10',
          children: [
            {
              field: '2022-10_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '11',
          children: [
            {
              field: '2022-11_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '12',
          children: [
            {
              field: '2022-12_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        }
      ]
    },
    {
      headerName: '2023',
      children: [
        {
          headerName: '01',
          children: [
            {
              field: '2023-01_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '02',
          children: [
            {
              field: '2023-02_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '03',
          children: [
            {
              field: '2023-03_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '04',
          children: [
            {
              field: '2023-04_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '05',
          children: [
            {
              field: '2023-05_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '06',
          children: [
            {
              field: '2023-06_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '07',
          children: [
            {
              field: '2023-07_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '08',
          children: [
            {
              field: '2023-08_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '09',
          children: [
            {
              field: '2023-09_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '10',
          children: [
            {
              field: '2023-10_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '11',
          children: [
            {
              field: '2023-11_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        },
        {
          headerName: '12',
          children: [
            {
              field: '2023-12_1',
              headerName: '数量',
              width: 100,
              cellClass: ['align-right'],
              cellStyle: cssStyleByStyle
            }
          ]
        }
      ]
    }
  ]
});

const GridTableRef = ref();

async function loadList() {
  self.gridApi.showLoadingOverlay();

  return getSalesIPS()
    .then(res => {
      const data = res.data.data;
      let next = null;
      let rowspan = 1;
      // 逆序遍历数组
      for (let i = data.length - 1; i >= 0; i--) {
        let row = data[i];

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

        row['index'] = i;

        if (next?.商品编码 !== row.商品编码) {
          rowspan = 1;
        }

        row['_code_row_span'] = rowspan;
        80;
        rowspan++;
        next = row;
      }
      gridOpts.rowData = self.data = data;
    })
    .finally(() => {
      self.gridApi.hideOverlay();
    });
}

function formatNum(val) {
  const num = Number(val);
  return num ? XEUtils.commafy(num, { digits: 2 }) : '';
}

function getRowSpanStyle(span): Record<string, string | number> {
  return {
    height: span * gridOpts.rowHeight + 'px',
    'z-index': span,
    'background-color': '#fff',
    'border-bottom': 'var(--ag-borders-secondary) var(--ag-row-border-color)',
    display: 'flex',
    'align-items': 'center'
  };
}

function cellStyleByProductCode(params: CellClassParams): Record<string, string | number> {
  const rowIndex = params.rowIndex;

  const span: number = self.data[rowIndex]['_code_row_span'];

  return getRowSpanStyle(span);
}

function cellStyleMergeSameCell(field: string): CellStyleFunc {
  return function (params: CellClassParams): Record<string, string | number> {
    const rowIndex = params.node.rowIndex;
    const value = params.data[field];

    if (self.data[rowIndex - 1] && self.data[rowIndex - 1][field] === value) {
      return null;
    }

    let span = 1;

    while (self.data[rowIndex + span] && self.data[rowIndex + span][field] === value) {
      span++;
    }

    return getRowSpanStyle(span);
  };
}

function cssStyleByStyle(params: CellClassParams): Record<string, string | number> {
  switch (params.data.类型) {
    case '実行計画':
      return { 'background-color': '#fff2cc' };
    case '販売実績':
    case '入庫実績':
    case 'BO残':
      return { 'background-color': '#e0e0e0' };
    case '仕入計画':
      return { 'background-color': '#99ffcc' };
    case '在庫予測':
      return { 'background-color': '#ffff00' };
    default:
      return null;
  }
}

function mergeCellStyleFn(...args: CellStyleFunc[]): CellStyleFunc {
  return function (params: CellClassParams): Record<string, string | number> {
    let style = {};
    args.map(fn => {
      style = { ...style, ...fn(params) };
    });
    return style;
  };
}
</script>

<template>
  <ag-grid-vue
    style="width: 100%; height: 100%"
    id="grid_table"
    ref="GridTableRef"
    class="ag-grid ag-theme-balham"
    v-bind="gridOpts"
    rowSelection="multiple"
    animateRows="true"
  ></ag-grid-vue>
</template>

<style lang="scss" scoped>
.ag-theme-balham {
  --ag-cell-horizontal-border: var(--ag-borders-secondary) var(--ag-row-border-color);
  --ag-selected-row-background-color: none;

  & :deep(.ag-cell.ag-cell-focus::before) {
    content: '';
    background-color: var(--ag-range-selection-background-color);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & :deep(.header-row-span-3) {
    margin-top: -40px;
    z-index: 10;
    position: fixed;
    height: 60px;
    min-height: 60px;
    border-top: none;
  }

  & :deep(.align-right) {
    text-align: right !important;

    .ag-header-cell-label,
    .ag-header-group-cell-label {
      justify-content: flex-end;
    }
  }

  & :deep(.ag-header-cell) {
    text-align: center !important;
    .ag-header-cell-label {
      justify-content: center;
    }
  }

  & :deep(.ag-header-group-cell) {
    .ag-header-group-cell-label {
      justify-content: center;
    }
  }
}
</style>
