(function () {
  'use strict';

  angular
    .module('nlsn.chart.components.dpMultiBarChart', [])
    .component('nlsnDpMultiBarChart', {
      controller: [
        'chartHelpers',
        NlsnDpMultiBarChartCtrl
      ],
      controllerAs: 'NlsnDpMultiBarChart',
      bindings: {
        externalData: "=data",
        properties: "=",
        configs: "=",
        metadata: "=",
        height: "=",
        xaxislabel: "=",
        yaxislabel: "=",
        charttitle: "="
      },
      template: `<nlsn-chart-core type="multiBarChartExt"
                                  data="NlsnDpMultiBarChart.data"
                                  opt="NlsnDpMultiBarChart.options"
                                  chart-options="NlsnDpMultiBarChart.properties"
                                  metadata="NlsnDpMultiBarChart.metadata"
                                  charttitle="NlsnDpMultiBarChart.charttitle"
                                  height="NlsnDpMultiBarChart.height"
                                  axisoptions="NlsnDpMultiBarChart.config.axisConfig.xAxis"
                                  tooltip="NlsnDpMultiBarChart.config.tooltip"
                                  xaxislabel="NlsnDpMultiBarChart.xaxislabel"
                                  yaxislabel="NlsnDpMultiBarChart.yaxislabel"
                                  ng-class="{ \'hide-x-label\': !NlsnDpMultiBarChart.config.axisConfig.xAxis.showAxisLabel, \'hide-x-line\': !NlsnDpMultiBarChart.config.axisConfig.xAxis.showAxisLine, \'hide-y-label\': !NlsnDpMultiBarChart.config.axisConfig.yAxis.showAxisLabel, \'hide-y-line\': !NlsnDpMultiBarChart.config.axisConfig.yAxis.showAxisLine }">
               </nlsn-chart-core>`
    });

  /** @ngInject */
  function NlsnDpMultiBarChartCtrl(chartHelpers) {
    var vm = this

    chartHelpers.convert({
      target: vm,
      configTypes: ['MULTIBAR_VERTICAL', 'STACKED_VERTICAL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      title: vm.charttitle,
      height: vm.height
    })

    //chart options adjustment
    Object.mergeDeep(vm.options.chart, {
      stacked: vm.config.chartType === 'STACKED_VERTICAL',
      xAxis: {
        axisLabelDistance: -10,
        tickPadding: 3
      }
    })
  }
})();
