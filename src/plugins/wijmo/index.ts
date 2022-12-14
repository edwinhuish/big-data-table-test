import './license';
// import "bootstrap/dist/css/bootstrap.css";
import '@grapecity/wijmo.styles/wijmo.css';
import './index.scss';

import { registerChart } from '@grapecity/wijmo.vue2.chart';
import { registerChartAnalytics } from '@grapecity/wijmo.vue2.chart.analytics';
import { registerChartAnimation } from '@grapecity/wijmo.vue2.chart.animation';
import { registerChartAnnotation } from '@grapecity/wijmo.vue2.chart.annotation';
import { registerChartFinance } from '@grapecity/wijmo.vue2.chart.finance';
import { registerChartHierarchical } from '@grapecity/wijmo.vue2.chart.hierarchical';
import { registerChartInteraction } from '@grapecity/wijmo.vue2.chart.interaction';
import { registerChartRadar } from '@grapecity/wijmo.vue2.chart.radar';
import { registerCore } from '@grapecity/wijmo.vue2.core';
import { registerGauge } from '@grapecity/wijmo.vue2.gauge';
import { registerGrid } from '@grapecity/wijmo.vue2.grid';
import { registerGridDetail } from '@grapecity/wijmo.vue2.grid.detail';
import { registerGridFilter } from '@grapecity/wijmo.vue2.grid.filter';
import { registerGridGrouppanel } from '@grapecity/wijmo.vue2.grid.grouppanel';
import { registerGridMultirow } from '@grapecity/wijmo.vue2.grid.multirow';
import { registerGridSearch } from '@grapecity/wijmo.vue2.grid.search';
import { registerGridSheet } from '@grapecity/wijmo.vue2.grid.sheet';
import { registerGridTransposed } from '@grapecity/wijmo.vue2.grid.transposed';
import { registerGridTransposedMultirow } from '@grapecity/wijmo.vue2.grid.transposedmultirow';
import { registerInput } from '@grapecity/wijmo.vue2.input';
import { registerNav } from '@grapecity/wijmo.vue2.nav';
import { registerOlap } from '@grapecity/wijmo.vue2.olap';
import { registerViewer } from '@grapecity/wijmo.vue2.viewer';

import { App } from 'vue';

export function useWijmo(app: App) {
  registerChart(app);
  registerChartAnalytics(app);
  registerChartAnimation(app);
  registerChartAnnotation(app);
  registerChartFinance(app);
  registerChartHierarchical(app);
  registerChartInteraction(app);
  registerChartRadar(app);
  registerCore(app);
  registerGauge(app);
  registerGrid(app);
  registerGridDetail(app);
  registerGridFilter(app);
  registerGridGrouppanel(app);
  registerGridMultirow(app);
  registerGridSearch(app);
  registerGridSheet(app);
  registerGridTransposed(app);
  registerGridTransposedMultirow(app);
  registerInput(app);
  registerNav(app);
  registerOlap(app);
  registerViewer(app);
}
