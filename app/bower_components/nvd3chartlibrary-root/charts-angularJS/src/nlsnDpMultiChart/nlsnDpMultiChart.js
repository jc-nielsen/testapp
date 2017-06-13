(function () {
  'use strict';

  angular
    .module('nlsn.chart.components.dpMultiChart', [])
    .component('nlsnDpMultiChart', {
      controller: NlsnDpMultiChartCtrl,
      controllerAs: 'NlsnDpMultiChart',
      bindings: {
        externalData: "=data",
        properties: "=",
        configs: "=",
        metadata: "=",
        tableProperties: "=",
        height: "=",
        xaxislabel: "=",
        yaxislabel: "=",
        charttitle: "="
      },
      template: `<nlsn-chart-core type="multiChartExt" 
                                  data="NlsnDpMultiChart.data" 
                                  opt="NlsnDpMultiChart.options" 
                                  chart-options="NlsnDpMultiChart.properties" 
                                  metadata="NlsnDpMultiChart.metadata" 
                                  charttitle="NlsnDpMultiChart.charttitle" 
                                  height="NlsnDpMultiChart.height" 
                                  axisoptions="NlsnDpMultiChart.config.axisConfig.xAxis" 
                                  tooltip="NlsnDpMultiChart.config.tooltip" 
                                  xaxislabel="NlsnDpMultiChart.xaxislabel" 
                                  yaxislabel="NlsnDpMultiChart.yaxislabel" 
                                  ng-class="{ \'hide-x-label\': !NlsnDpMultiChart.config.axisConfig.xAxis.showAxisLabel, \'hide-x-line\': !NlsnDpMultiChart.config.axisConfig.xAxis.showAxisLine, \'hide-y-label\': !NlsnDpMultiChart.config.axisConfig.yAxis.showAxisLabel, \'hide-y-line\': !NlsnDpMultiChart.config.axisConfig.yAxis.showAxisLine }">
                 </nlsn-chart-core>`
    });

  /** @ngInject */
  function NlsnDpMultiChartCtrl() {
    var vm = this;

    // vm.configs.forEach((config) => {
    //   Object.defaultsDeep(config, chartHelpers.defaults.config)
    //   switch(config.chartType) {
    //     case 'MULTIBAR_VERTICAL':
    //       break
    //     case 'STACKED_VERTICAL':
    //       break
    //   }
    // })
    // //config
    // vm.config = chartHelpers.findConfig('MULTIBAR_VERTICAL', vm.configs) || chartHelpers.findConfig('STACKED_VERTICAL', vm.configs)
    // Object.defaultsDeep(vm.config, chartHelpers.defaults.config)

    // //properties
    // Object.defaultsDeep(vm.properties, chartHelpers.defaults.properties)
    // // vm.properties.colorPalette = vm.properties.colorPalette || vm.config.colorPalette

    // //data
    // var externalData = angular.copy(vm.externalData)

    // //options
    // vm.options = chartHelpers.buildOptions(vm.config, vm.properties)
    // angular.merge(vm.options.chart, {
    //   stacked: vm.config.chartType === 'STACKED_VERTICAL',
    //   xAxis: {
    //     axisLabelDistance: -10,
    //     tickPadding: 3
    //   }
    // })

    // //-- nesting module
    // if(vm.config.dataDefinition.xaxis.length > 1) {
    //   var xGroupField = chartHelpers.getXMetricByGroupingLevel(vm.config, 1).value
    //   var groups = [], groupName, group, d
    //   externalData.forEach(function (d) {
    //     groupName = d[xGroupField]
    //     group = null
    //     groups.forEach(function (g) {
    //       if(g.name === groupName) {
    //         group = g
    //       }
    //     })
    //     if(group == null) {
    //       group = {
    //         name: groupName,
    //         data: []
    //       }
    //       groups.push(group)
    //     }
    //     group.data.push(d)
    //   })
    //   externalData = []
    //   groups.forEach(function (group) {
    //     group.data.forEach(function (d) {
    //       externalData.push(d)
    //     })
    //   })
    //   var nestingModule = {
    //     name: 'nesting',
    //     options: {
    //       barsInGroup: groups[0].data.length,
    //       groupName: function (n) {
    //         return groups[n].name
    //       },
    //       minBottomMargin: 80,
    //       groupLabel: {
    //         height: 55,
    //         borderWhitespaceYOffset: 20,
    //         text: {
    //           width: 120,
    //           height: 50,
    //           fontSize: parseFloat(vm.config.axisConfig.xAxis.font.fontSize),
    //           nMaxLineCount: 2
    //         },
    //         colors: {
    //           border: '#CCCCCC',
    //           text: '#999999'
    //         }
    //       },
    //     }
    //   }

    //   vm.options.chart.modules.push(nestingModule)
    // }

    // //-- labels module
    // if(vm.properties.enableLabels) {
    //   var labelsConfig = chartHelpers.findConfig('LABELS', vm.configs)
    //   Object.defaultsDeep(labelsConfig, chartHelpers.defaults.config)
    //   if (labelsConfig != null) {

    //     var labelsData = chartHelpers.buildData(labelsConfig.dataDefinition.series, vm.externalData, vm.metadata, vm.config);

    //     vm.options.chart.modules.push({
    //       name: 'top-labels',
    //       options: {
    //         data: labelsData,
    //         isAvg: false,
    //         labels: {
    //           offsetY: 20,
    //           fontSize: parseFloat(labelsConfig.axisConfig.xAxis.font.fontSize),
    //           minFontSize: 1,
    //           borderWidth: 1,
    //           rectPaddingX: 5,
    //           rectPaddingY: 2,
    //         },
    //         header: {
    //           enabled: labelsConfig.axisConfig.xAxis.showTitle,
    //           // text: function(serie) {
    //           //   return serie
    //           // },
    //           // text: 'Point Change',
    //           textField: 'key',
    //           height: 80,
    //           width: 100,
    //           fontSize: 15,
    //           nMaxLineCount: 3
    //         },
    //         colors: {
    //           header: '#999999',
    //           labelBorder: '#CCCCCC',
    //           labelFont: 'black'
    //         },
    //         formatString: labelsConfig.axisConfig.xAxis.displayFormat
    //       }
    //     });
    //   }
    // }

    // //data
    // vm.data = chartHelpers.buildData(vm.config.dataDefinition.series, externalData, vm.metadata, vm.config)

  }
})();
