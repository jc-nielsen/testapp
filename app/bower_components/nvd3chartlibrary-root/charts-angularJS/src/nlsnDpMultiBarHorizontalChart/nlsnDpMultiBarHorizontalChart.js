(function () {
  'use strict';

  angular
    .module('nlsn.chart.components.dpMultiBarHorizontalChart', [])
    .component('nlsnDpMultiBarHorizontalChart', {
      controller: [
        'chartHelpers',
        NlsnDpMultiBarHorizontalChartCtrl
      ],
      controllerAs: 'NlsnDpMultiBarHorizontalChart',
      bindings: {
        externalData: "=data",
        properties: "=",
        configs: "=",
        metadata: "=",
        height: "=",
        xaxislabel: "=",
        yaxislabel: "=",
        charttitle: "=",
        componentId:"=",
        heightAttr:"="
      },
      template: `<nlsn-chart-core type="multiBarHorizontalChartExt"
                                  data="NlsnDpMultiBarHorizontalChart.data"
                                  opt="NlsnDpMultiBarHorizontalChart.options"
                                  chart-options="NlsnDpMultiBarHorizontalChart.properties"
                                  metadata="NlsnDpMultiBarHorizontalChart.metadata"
                                  charttitle="NlsnDpMultiBarHorizontalChart.charttitle"
                                  height="NlsnDpMultiBarHorizontalChart.height"
                                  axisoptions="NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis"
                                  tooltip="NlsnDpMultiBarHorizontalChart.config.tooltip"
                                  xaxislabel="NlsnDpMultiBarHorizontalChart.xaxislabel"
                                  yaxislabel="NlsnDpMultiBarHorizontalChart.yaxislabel"
                                  ng-class="{\'hide-x-label\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis.showAxisLabel,   \'hide-x-line\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.xAxis.showAxisLine,   \'hide-y-label\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.yAxis.showAxisLabel,   \'hide-y-line\': !NlsnDpMultiBarHorizontalChart.config.axisConfig.yAxis.showAxisLine }" >
                </nlsn-chart-core>`
    });


  /** @ngInject */
  function NlsnDpMultiBarHorizontalChartCtrl(chartHelpers) {
    var vm = this

    chartHelpers.convert({
      target: vm,
      configTypes: ['MULTIBAR_HORIZONTAL', 'STACKED_HORIZONTAL'],
      configs: vm.configs,
      properties: vm.properties,
      externalData: vm.externalData,
      metadata: vm.metadata,
      title: vm.charttitle,
      height: vm.height
    })

    //chart options adjustment
    Object.mergeDeep(vm.options.chart, {
      stacked: vm.config.chartType === 'STACKED_HORIZONTAL'
    })

    //nesting module adjustment
    if (vm.options.chart.modulesObj.nesting != null) {
      Object.mergeDeep(vm.options.chart.modulesObj.nesting, {
        options: {
          groupLabel: {
            borderWhitespaceYOffset: 10,
            height: 50,
            text: {
              width: 100
            }
          }
        }
      })
      vm.options.chart.xAxis.axisLabelDistance = -40
    }

    //labels module adjustment
    if (vm.options.chart.modulesObj.labels != null) {
      Object.mergeDeep(vm.options.chart.modulesObj.labels, {
        options: {
          header: {
            height: 40,
            fontSize: 12
          }
        }
      })
    }

    //Height calculator in case of Show More
    if(vm.heightAttr && vm.data[0].values.length>13){
      vm.options.chart.height=vm.data[0].values.length*50;
    }

    vm.options.chart.callback=function(chart){
      var container=d3.selectAll("#axis-"+vm.componentId);
      //added condition because container is usually empty and further code throws an error breaking updates on resize
      if(container[0].length) {
        var ele=d3.select("#chart-"+vm.componentId).selectAll(".nv-multiBarHorizontalChart");
        var translate=ele[0][0].attributes.transform.value;
        var req_translate=translate.substring(0,translate.indexOf(","))+",0)";
        var axis=d3.select("#chart-"+vm.componentId).selectAll(".nv-y.nv-axis");
        var myAxis=angular.copy(axis);
        d3.select(myAxis[0][0]).attr("transform",req_translate);
        container.selectAll("g").remove();
        container[0][0].append(myAxis[0][0]);
      }
    }
  }
})();
