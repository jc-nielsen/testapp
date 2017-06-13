(function () {
  'use strict';
  /**

   *
   * @module nlsn.chart.components.lineChart
   * @name nlsn-line-chart
   * @restrict E
   * @description
   * nlsn line chart
   *
   * * @usage
   <nlsn-line-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-line-chart>
   @example
   <nlsn-line-chart  chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-line-chart>

   <!-- chart-options-->
   Additional options for chart.

   <!-- data -->
   Data to display on charts.

   <!-- height-->
   Height of the chart.

   <!-- xaxislabel -->
   Label on X-axis.

   <!-- yaxislabel-->
   Label on Y-axis.
   **/
  angular
    .module('nlsn.chart.components.lineChart', ['nlsn.chart.components.util.colors'])
    .component('nlsnLineChart', {
      controller: ["$scope", "$nlsnColors", "chartHelpers", nlsnLineChartCtrl],
      controllerAs: 'nlsnLineChart',
      bindings: {
        chartOptions: "<",
        chartSubtype: "=",
        data: "=",
        height: "=",
        xaxislabel: "=",
        yaxislabel: "=",
        parameterData: "=",
        chartconfigs: "=",
        charttype: "=",
        charttitle: "=",
        metadata: "<"
      },
      template: `<nlsn-chart-core axisoptions="nlsnLineChart.xAxis" 
                                  tooltip="nlsnLineChart.tooltip" 
                                  metadata="nlsnLineChart.metadata" 
                                  chartoptions="nlsnLineChart.xAxis"
                                  chart-options="nlsnLineChart.chartOptions" 
                                  charttitle="nlsnLineChart.charttitle" 
                                  opt="nlsnLineChart.options" 
                                  data="nlsnLineChart.data" 
                                  type="{{nlsnLineChart.chartType}}" 
                                  height="nlsnLineChart.height" 
                                  xaxislabel="nlsnLineChart.xaxislabel" 
                                  yaxislabel="nlsnLineChart.yaxislabel"> 
                  </nlsn-chart-core>`

    });

  /** @ngInject */
  function nlsnLineChartCtrl($scope, $nlsnColors, chartHelpers) {
    var vm = this;
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("chartOptions")) {
        vm.updateOptions();
      }
    };


    $scope.$on(function () {
      return vm.chartOptions
    }, function () {
      vm.updateOptions();
    });

    if ('SIMPLE' == vm.charttype) {
      vm.exHeight = 0;
      if (vm.chartconfigs && !vm.chartconfigs[0].dataDefinition.yaxis) {
        // no yaxis present use series as y
        var existingData = angular.copy(vm.data);
        var newData = [];
        angular.forEach(vm.chartconfigs[0].dataDefinition.series, function (seriesItem) {
          var currSeriesItem = seriesItem.value;
          var displayName = currSeriesItem;
          if (vm.metadata && vm.metadata[currSeriesItem]) {
            displayName = vm.metadata[currSeriesItem].title
          }
          var filterData = angular.copy(existingData);
          angular
            .forEach(filterData, function (rec) {
              rec.seriesDisplay = currSeriesItem;
            });
          newData
            .push({
              "key": displayName,
              "values": filterData,
              "color": (vm.chartconfigs[0].seriesConfigs &&
              vm.chartconfigs[0].seriesConfigs[currSeriesItem] && vm.chartconfigs[0].seriesConfigs[currSeriesItem].color) ? vm.chartconfigs[0].seriesConfigs[currSeriesItem].color :
                (vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] :
                  $nlsnColors.stdcolors[newData.length % 10])
            });
        });
        vm.data = newData;
      } else if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.series) {
        //manipulate data
        var existingData = angular.copy(vm.data);
        var newData = [];
        var uniqueNames = [];
        for (var i = 0; i < existingData.length; i++) {
          var currentSeriesName = existingData[i][vm.chartconfigs[0].dataDefinition.series[0].value];
          if (uniqueNames.indexOf(currentSeriesName) === -1) {
            var recs = existingData.filter(function (rec) {
              return rec[vm.chartconfigs[0].dataDefinition.series[0].value] == currentSeriesName;
            });
            if (existingData[i].is_parent == "true") {
              angular.forEach(recs, function (val, key) {
                val.shape = "diamond";
              })
            }
            newData.push({
              "key": currentSeriesName,
              "values": recs,
              "color": (vm.chartconfigs[0].seriesConfigs && vm.chartconfigs[0].seriesConfigs[currentSeriesName] && vm.chartconfigs[0].seriesConfigs[currentSeriesName].color) ? vm.chartconfigs[0].seriesConfigs[currentSeriesName].color
                : (vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10]),
              "classed": (existingData[i].is_parent == "true" ? "dashed" : "")
            });
            uniqueNames.push(currentSeriesName);
          }
        }
        vm.data = newData;
      }
      vm.data = chartHelpers.xMetricSort(vm.data);
      vm.data = chartHelpers.seriesSort(vm.data);

      angular.forEach(vm.data, function (value, key) {
        value.area = vm.chartSubtype == 'AREA';
      });
      if (!vm.parameterData) {
        vm.exHeight = 25;
      }


      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function (d, i) {
              if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.xaxis[0].value)
                return Number(d[vm.chartconfigs[0].dataDefinition.xaxis[0].value]);
              if (d.id) {
                return Number(d.id);
              } else
                return i;
            },
            pointSize: function (d) {
              if (d.is_parent == "true") {
                return 50;
              }
              return 30;
            },
            y: function (d) {
              if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition) {
                var def = vm.chartconfigs[0].dataDefinition;
                if (def.yaxis) {
                  return Number(d[vm.chartconfigs[0].dataDefinition.yaxis.value])
                } else {
                  var yCol = d['seriesDisplay'];
                  return Number(d[yCol]);
                }
              }
              return Number(d.value);
            }
          }
        };
        if (vm.chartOptions) {
          var chartoptions = {
            chart: {
              xAxis: {
                tickFormat: function (d, i, series) {
                  if (vm.chartconfigs[0].dataDefinition) {
                    if (vm.data[0].values[d]) {
                      if (vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue) {
                        return vm.data[0].values[d][vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue];
                      } else
                        return vm.data[0].values[d][vm.chartconfigs[0].dataDefinition.xaxis[0].value];
                    } else
                      return d;

                  }
                  var label = vm.data[0].values[d].id;
                  return label;
                }
              },
              yAxis: {}
            }
          }

          /* Tooltip */
          if (vm.chartconfigs[0].tooltip) {
            vm.tooltip = vm.chartconfigs[0].tooltip;
          }

          if (vm.chartconfigs[0].axisConfig && vm.chartconfigs[0].axisConfig.xAxis) {
            vm.xAxis = vm.chartconfigs[0].axisConfig.xAxis;
            if (vm.chartconfigs[0].axisConfig.xAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.xAxis.showAxisLabel) {
                chartoptions.chart.xAxis = {
                  axisLabel: vm.chartconfigs[0].axisConfig.xAxis.axisLabel
                };
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.bound) {
                vm.xmin = vm.chartconfigs[0].axisConfig.xAxis.bound.minValue;
                vm.xmax = vm.chartconfigs[0].axisConfig.xAxis.bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.xAxis.unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i < vm.xmax)
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i > vm.xmin)
                    return arr;
                  }
                }
              }

            }
          }

          if (vm.chartconfigs[0].axisConfig && vm.chartconfigs[0].axisConfig.yAxis) {
            if (vm.chartconfigs[0].axisConfig.yAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.yAxis.showAxisLabel) {
                chartoptions.chart.yAxis = {
                  axisLabel: vm.chartconfigs[0].axisConfig.yAxis.axisLabel
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.bound) {
                vm.ymin = vm.chartconfigs[0].axisConfig.yAxis.bound.minValue;
                vm.ymax = vm.chartconfigs[0].axisConfig.yAxis.bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat) {
                  chartoptions.chart.yAxis.tickFormat = function (d) {
                    if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat.indexOf("%") !== -1) {
                      return d3.format(vm.chartconfigs[0].axisConfig.yAxis.displayFormat)(d);
                    }
                    else
                    {
                      var displayFormat = vm.chartconfigs[0].axisConfig.yAxis.displayFormat.replace(/"/gi, '');
                      return d.numberFormat(displayFormat);
                    }
                  };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.yAxis.unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i < vm.ymax)
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i > vm.ymin)
                    return arr;
                  }
                }
              }
            }
          }

          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
      }

      vm.updateOptions();
      vm.chartType = "lineChart";
    } else { // for folks who are using old
      angular.forEach(vm.data, function (value, key) {
        value.area = vm.chartSubtype == 'AREA' || vm.chartSubtype == 'DASHBOARD-AREA';
      });
      vm.exHeight = 0;
      if (!vm.parameterData) {
        vm.exHeight = 25;
      }


      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function (d, i) {
              if (d.id) {
                return Number(d.id);
              } else
                return i;
            },
            y: function (d) {
              return Number(d.value);
            }
          }
        };
        if (vm.chartOptions && vm.chartSubtype == 'AREA') {
          var chartoptions = {
            chart: {
              xAxis: {},
              yAxis: {}
            }
          }


          if (vm.chartOptions.xAxis) {
            if (vm.chartOptions.xAxis.length == 1) {
              if (vm.chartOptions.xAxis[0].axisLabel) {
                if (vm.chartOptions.xAxis[0].showAxisLabel) {
                  chartoptions.chart.xAxis = {
                    axisLabel: vm.chartOptions.xAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.xAxis[0].bound) {
                vm.xmin = vm.chartOptions.xAxis[0].bound.minValue;
                vm.xmax = vm.chartOptions.xAxis[0].bound.maxValue;
                chartoptions.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartOptions.xAxis[0].unit) {
                if (vm.chartOptions.xAxis[0].unit.major) {
                  chartoptions.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.xAxis[0].unit.major;
                    } while (i < vm.xmax)
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.xAxis[0].unit.major;
                    } while (i > vm.xmin)
                    return arr;
                  }
                }
              }

            }
          }

          if (vm.chartOptions.yAxis) {
            if (vm.chartOptions.yAxis.length == 1) {
              if (vm.chartOptions.yAxis[0].axisLabel) {
                if (vm.chartOptions.yAxis[0].showAxisLabel) {
                  chartoptions.chart.yAxis = {
                    axisLabel: vm.chartOptions.yAxis[0].axisLabel
                  };
                }
              }
              if (vm.chartOptions.yAxis[0].bound) {
                vm.ymin = vm.chartOptions.yAxis[0].bound.minValue;
                vm.ymax = vm.chartOptions.yAxis[0].bound.maxValue;
                chartoptions.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartOptions.yAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.yAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartOptions.yAxis[0].unit) {
                if (vm.chartOptions.yAxis[0].unit.major) {
                  chartoptions.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i + vm.chartOptions.yAxis[0].unit.major;
                    } while (i < vm.ymax)
                    i = 0;
                    do {
                      arr.push(i);
                      i = i - vm.chartOptions.yAxis[0].unit.major;
                    } while (i > vm.ymin)
                    return arr;
                  }
                }
              }
            }
          }
          /*if(vm.chartOptions.showXaxis){
           if(vm.chartOptions.xAxis){
           if(vm.chartOptions.xAxis.tickMarkLabelPosition=='NEXT'){
           vm.showXLabel=true;
           }
           if(vm.chartOptions.xAxis.showAxisLine){
           vm.showXLine=true;
           }
           }
           }
           if(vm.chartOptions.showYaxis){
           if(vm.chartOptions.yAxis){
           if(vm.chartOptions.yAxis.tickMarkLabelPosition=='NEXT'){
           vm.showYLabel=true;
           }
           if(vm.chartOptions.yAxis.showAxisLine){
           vm.showYLine=true;
           }
           }
           }*/
          vm.xAxis = vm.chartOptions.xAxis[0];
          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
        //Temporary fix for Dahboard chart- To be removed completely
        else if (vm.chartOptions && vm.chartSubtype == 'DASHBOARD-AREA') {
          angular.merge(vm.options, vm.chartOptions);

          var height = vm.chartOptions.customHeight || 0;
          if (height > 300) {
            vm.options.chart.height = 380 + vm.exHeight;
            vm.options.chart.legend.margin = {
              top: 170 + vm.exHeight,
              bottom: -150
            }
          } else if (height > 0) {
            vm.options.chart.height = 180;
            vm.options.chart.legend.margin = {
              top: 80,
              bottom: -75
            }
          }
        }

        //vm.options = angular.copy(vm.options);
      }
      vm.updateOptions();
      vm.chartType = "lineChart";

    }
  }
})();
