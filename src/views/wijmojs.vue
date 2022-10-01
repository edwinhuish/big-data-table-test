<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import * as apiAnalyze from '/@/api/analyze';
import '@grapecity/wijmo.vue2.grid';
import XEUtils from 'xe-utils';
import { MergeManager, CellRange } from '@grapecity/wijmo.grid';
import type { GridPanel, FlexGrid } from '@grapecity/wijmo.grid';

const grid = reactive({
  loading: false,
  data: []
});

onMounted(async () => {
  await loadList();
});

function loadList() {
  grid.loading = true;
  return apiAnalyze
    .getSalesIPS()
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

// function onInitGrid(flexGrid: FlexGrid) {
//   flexGrid.mergeManager = new CustommergeManager(flexGrid);
// }

class CustommergeManager extends MergeManager {
  flexGrid: FlexGrid;
  constructor(flexGrid: FlexGrid) {
    super(flexGrid);
    this.flexGrid = flexGrid;
  }
  getMergedRange(
    panel: GridPanel,
    r: number,
    c: number,
    clip = true
  ): CellRange | null {
    // create basic cell range
    const range = new CellRange(r, c);
    if (r < 1) {
      return range;
    }
    if (c > 5) {
      return range;
    }

    const codeCol = 1; // 商品编码的列

    for (let i = range.row; i > 0; i--) {
      if (
        panel.getCellData(i - 1, codeCol, true) !=
        panel.getCellData(i, codeCol, true)
      ) {
        break;
      }
      range.row = i - 1;
    }

    for (let i = range.row; i < panel.rows.length - 1; i++) {
      if (
        panel.getCellData(i + 1, codeCol, true) !=
        panel.getCellData(i, codeCol, true)
      ) {
        break;
      }
      range.row2 = i + 1;
    }

    console.log('range: ', range);
    // done
    return range;
  }
}
</script>

<template>
  <wj-flex-grid
    :itemsSource="grid.data"
    :isReadOnly="true"
    :alternatingRowStep="0"
    :style="{
      width: '100%',
      height: '100%'
    }"
  >
    <wj-flex-grid-column binding="标签对应" header="标签对应" />
    <wj-flex-grid-column binding="商品编码" header="商品编码" />
    <wj-flex-grid-column binding="仕入地" header="仕入地" />
    <wj-flex-grid-column binding="类型1" header="类型1" />
    <wj-flex-grid-column binding="类型2" header="类型2" />
    <wj-flex-grid-column binding="中文名称" header="中文名称" />
    <wj-flex-grid-column binding="业务类别" header="业务类别" />
    <wj-flex-grid-column binding="类型" header="类型" />
    <wj-flex-grid-column binding="部门" header="部门" />
    <wj-flex-grid-column binding="总数量" header="总数量" />
    <wj-flex-grid-column binding="2021-12_1" header="2021-12_1" />
    <wj-flex-grid-column binding="2022-01_1" header="2022-01_1" />
    <wj-flex-grid-column binding="2022-02_1" header="2022-02_1" />
    <wj-flex-grid-column binding="2022-03_1" header="2022-03_1" />
    <wj-flex-grid-column binding="2022-04_1" header="2022-04_1" />
    <wj-flex-grid-column binding="2022-05_1" header="2022-05_1" />
    <wj-flex-grid-column binding="2022-06_1" header="2022-06_1" />
    <wj-flex-grid-column binding="2022-07_1" header="2022-07_1" />
    <wj-flex-grid-column binding="2022-08_1" header="2022-08_1" />
    <wj-flex-grid-column binding="2022-09_1" header="2022-09_1" />
    <wj-flex-grid-column binding="2022-10_1" header="2022-10_1" />
    <wj-flex-grid-column binding="2022-11_1" header="2022-11_1" />
    <wj-flex-grid-column binding="2022-12_1" header="2022-12_1" />
    <wj-flex-grid-column binding="2023-01_1" header="2023-01_1" />
    <wj-flex-grid-column binding="2023-02_1" header="2023-02_1" />
    <wj-flex-grid-column binding="2023-03_1" header="2023-03_1" />
    <wj-flex-grid-column binding="2023-04_1" header="2023-04_1" />
    <wj-flex-grid-column binding="2023-05_1" header="2023-05_1" />
    <wj-flex-grid-column binding="2023-06_1" header="2023-06_1" />
    <wj-flex-grid-column binding="2023-07_1" header="2023-07_1" />
    <wj-flex-grid-column binding="2023-08_1" header="2023-08_1" />
    <wj-flex-grid-column binding="2023-09_1" header="2023-09_1" />
    <wj-flex-grid-column binding="2023-10_1" header="2023-10_1" />
    <wj-flex-grid-column binding="2023-11_1" header="2023-11_1" />
    <wj-flex-grid-column binding="2023-12_1" header="2023-12_1" />
  </wj-flex-grid>
</template>
