(function () {
  'use strict';

  angular
    .module('nlsn.chart.components.dpWaterfallChart', [])
    .component('nlsnDpWaterfallChart', {
      controller: ["chartHelpers", '$element', NlsnDpWaterfallChartCtrl],
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
      controllerAs: 'NlsnDpWaterfallChart',
      template: `<nlsn-chart-core type="waterfall"
                                  data="NlsnDpWaterfallChart.data"
                                  opt="NlsnDpWaterfallChart.options"
                                  chart-options="NlsnDpWaterfallChart.properties"
                                  metadata="NlsnDpWaterfallChart.metadata"
                                  charttitle="NlsnDpWaterfallChart.charttitle"
                                  height="NlsnDpWaterfallChart.height"
                                  axisoptions="NlsnDpWaterfallChart.config.axisConfig.xAxis"
                                  tooltip="NlsnDpWaterfallChart.config.tooltip"
                                  xaxislabel="NlsnDpWaterfallChart.xaxislabel"
                                  yaxislabel="NlsnDpWaterfallChart.yaxislabel"
                                  ng-class="{   \'hide-x-label\': !NlsnDpWaterfallChart.config.axisConfig.xAxis.showAxisLabel,   \'hide-x-line\': !NlsnDpWaterfallChart.config.axisConfig.xAxis.showAxisLine,   \'hide-y-label\': !NlsnDpWaterfallChart.config.axisConfig.yAxis.showAxisLabel,   \'hide-y-line\': !NlsnDpWaterfallChart.config.axisConfig.yAxis.showAxisLine }" >
                 </nlsn-chart-core>`
    });

  /** @ngInject */
  function NlsnDpWaterfallChartCtrl(chartHelpers, $element) {
    var vm = this

    var height, element = $element
    do {
      if(element.height() > 0) {
        break
      } else {
        element = element.parent()
        if(!element.length) {
          break
        }
      }
    } while(true)

    chartHelpers.convert({
      target: vm,
      configTypes: ['WATERFALL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      title: vm.charttitle,
      height: vm.height,
      tableContainer: element[0]
    })

    //options adjustment
    if (vm.options.chart.height == null) {
      // Object.mergeDeep(vm.options.chart, {
      //   height: 450
      // })
    }
  }
})();
