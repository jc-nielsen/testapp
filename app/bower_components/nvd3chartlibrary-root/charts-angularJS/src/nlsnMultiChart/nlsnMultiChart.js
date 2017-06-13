(function () {
  'use strict';
  /**
   *
   * @module nlsn.chart.components.multiChart
   * @name nlsn-multi-chart
   * @restrict E
   * @description
   * nlsn multi chart
   *
   * * @usage
   <nlsn-multi-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-multi-chart>
   @example
   <nlsn-multi-chart  chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-multi-chart>

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
    .module('nlsn.chart.components.multiChart', ['nlsn.chart.components.util.colors'])
    .component('nlsnMultiChart', {
      controller: ["$scope", "$nlsnColors", "$timeout", nlsnMultiChartCtrl],
      controllerAs: 'nlsnMultiChart',
      bindings: {
        chartOptions: "<",
        chartconfigs: "<",
        data: "=",
        height: "=",
        xaxislabel: "=",
        y1axislabel: "=",
        y2axislabel: "=",
        parameterData: "=",
        extended: "=",
        chartSubtype: "=",
        charttype: "=",
        metadata: "<",
        charttitle: '='
      },
      template: `<nlsn-chart-core axisoptions="nlsnMultiChart.xAxis" 
                                  tooltip="nlsnMultiChart.tooltips" 
                                  chart-options="nlsnMultiChart.chartOptions" 
                                  opt="nlsnMultiChart.options" 
                                  data="nlsnMultiChart.data" 
                                  metadata="nlsnMultiChart.metadata" 
                                  charttitle="nlsnMultiChart.charttitle" 
                                  type="{{nlsnMultiChart.chartType}}" 
                                  height="nlsnMultiChart.height" 
                                  xaxislabel="nlsnMultiChart.xaxislabel" 
                                  yaxislabel="nlsnMultiChart.yaxislabel">
                </nlsn-chart-core>`
    });

  /** @ngInject */
  function nlsnMultiChartCtrl($scope, $nlsnColors, $timeout) {
    var vm = this;
    var existingData = angular.copy(vm.data);
    var newData = [];

    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
          dy = 0,
          start = 0,
          limit = width,
          words = [];
        if (text.text()) {
          // for(var i=0;i<=text.text().length/limit;i++){
          // start = i * limit;
          // words.push(text.text().substr(start, limit));
          // }
          // words = words.reverse();
          var prevItem = '';
          text.text().split(/\s+/).map(function (item, index, array) {
            return item + " ";
          }).forEach(function (item) {
            if ((item + prevItem).length <= limit) {
              prevItem = prevItem + item;
            }
            else {
              words.push(prevItem);
              prevItem = item;
            }
          });
          words.push(prevItem);
          words.reverse();
          var word,
            line = [],
            lineNumber = 0,
            lineHeight = 1, // ems
            y = text.attr("y") - ((words.length + 1) * 4),
            dy = parseFloat(text.attr("dy")) != "NaN" ? parseFloat(text.attr("dy")) : 0,
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
          var cnt = 0;
          while (word = words.pop()) {

            if (cnt == 4)
              break;
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y + 10).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
            cnt++;

          }
        }
      });
    }

    vm.labelWrapper = function () {

      $timeout(function () {
        var chart = d3.selectAll('.multiChart .nv-x .nv-axis');
        chart.selectAll('text').call(wrap, 15);
      }, 500);
    }
    vm.originalType = angular.copy(vm.charttype);
    var chartoptions = {
      chart: {
        xAxis: {},
        yAxis1: {},
        yAxis2: {},
        legend: {},
        bars1: {},
        bars2: {}
      }
    }
    if ('SIMPLE' == vm.charttype) {
      if (vm.chartconfigs) {
        // no yaxis present use series as y
        var existingData = angular.copy(vm.data);
        var newData = [];
        vm.tooltips = [];
        angular.forEach(vm.chartconfigs, function (config) {
          /*Tooltips*/
          if (config.tooltip) {
            if (config.tooltip.length == 1) {
              vm.tooltips.push(config.tooltip[0]);
            }
            else {
              angular.forEach(config.tooltip, function (tooltip) {
                vm.tooltips.push(tooltip);
              });
            }
          }
          /*Tooltips*/
          angular.forEach(config.dataDefinition.series, function (seriesItem) {
            var currSeriesItem = seriesItem.value;
            var displayName = currSeriesItem;
            var uniqueNames = [];
            if (vm.metadata && vm.metadata[currSeriesItem]) {
              displayName = vm.metadata[currSeriesItem].title
            }
            if (!config.dataDefinition.yaxis) {
              var filterData = angular.copy(existingData);
              var records = filterData.filter(function (rec) {
                return rec[currSeriesItem] != null;
              })
              if (!config.dataDefinition.yAxis) {
                angular.forEach(filterData, function (rec) {
                  rec.seriesDisplay = currSeriesItem;
                });
              }
              var obj = {
                "key": displayName,
                "values": records,
                "type": ("MULTIBAR_VERTICAL" || "STACKED_VERTICAL") == config.chartType ? "bar" : "line",
                "stacked": "STACKED_VERTICAL" == config.chartType,
                "color": (config.seriesConfigs &&
                config.seriesConfigs[currSeriesItem] &&
                config.seriesConfigs[currSeriesItem].color) ? config.seriesConfigs[currSeriesItem].color :
                  (config.colorPalette ? config.colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10])
              };
              if (config.plotOnSecondaryAxis) {
                obj.yAxis = 2;
                vm.yAxis2 = config.axisConfig.yAxis;
                if ("STACKED_VERTICAL" == config.chartType)
                  chartoptions.chart.bars2.stacked = true;
              } else {
                obj.yAxis = 1;
                vm.xAxis = config.axisConfig.xAxis;
                vm.yAxis1 = config.axisConfig.yAxis;
                if ("STACKED_VERTICAL" == config.chartType)
                  chartoptions.chart.bars1.stacked = true;
              }
              newData.push(obj);
            } else {
              for (var i = 0; i < existingData.length; i++) {
                var currentSeriesName = existingData[i][config.dataDefinition.series[0].value];
                if (uniqueNames.indexOf(currentSeriesName) === -1) {
                  var recs = existingData.filter(function (rec) {
                    return rec[currSeriesItem] == currentSeriesName;
                  });
                  var obj = {
                    "key": currentSeriesName,
                    "values": recs,
                    "stacked": "STACKED_VERTICAL" == config.chartType,
                    "color": (config.seriesConfigs &&
                    config.seriesConfigs[currSeriesItem] &&
                    config.seriesConfigs[currSeriesItem].color) ? config.seriesConfigs[currSeriesItem].color :
                      (config.colorPalette ? config.colorPalette[newData.length] : $nlsnColors.stdcolors[newData.length % 10])

                  };
                  if (config.plotOnSecondaryAxis) {
                    obj.yAxis = 2;
                    vm.yAxis2 = config.axisConfig.yAxis;
                    if ("STACKED_VERTICAL" == config.chartType)
                      chartoptions.chart.bars2.stacked = true;
                  } else {
                    obj.yAxis = 1;
                    vm.xAxis = config.axisConfig.xAxis;
                    vm.yAxis1 = config.axisConfig.yAxis;
                    if ("STACKED_VERTICAL" == config.chartType)
                      chartoptions.chart.bars1.stacked = true;
                  }
                  newData.push(obj);
                  uniqueNames.push(currentSeriesName);
                }
              }
            }
          });
        });

        vm.data = newData;
        console.log(JSON.stringify(vm.data));

      }
    }
    if (vm.data) {
      angular.forEach(vm.data, function (value, key) {
        if (value.chartType == 'MULTIBAR_VERTICAL' || value.chartType == 'STACKED_VERTICAL') {
          value.type = 'bar';
        }
        if (value.chartType == 'LINE') {
          value.type = 'line';
        }
      })
    }
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("chartOptions")) {
        updateOptions();
      }
    };


    $scope.$on(function () {
      return vm.chartOptions
    }, function () {
      updateOptions();
    });

    updateOptions();
    vm.chartType = "multiChart";

    function updateOptions() {

      vm.options = {
        chart: {
          x: function (d, i, series) {
            if (series == undefined)
              series = d.series;
            if (vm.chartconfigs && vm.chartconfigs[series].dataDefinition) {
              return Number(d[vm.chartconfigs[series].dataDefinition.xaxis[0].value]);
            }
            return Number(d.id);
          },
          y: function (d, i, series) {
            if (series == undefined)
              series = d.series;
            if (vm.chartconfigs && vm.chartconfigs[series].dataDefinition && vm.chartconfigs[series].dataDefinition) {
              var def = vm.chartconfigs[series].dataDefinition;
              if (def.yaxis) {
                return Number(d[vm.chartconfigs[series].dataDefinition.yaxis.value])
              } else {
                var yCol = d['seriesDisplay'];
                return Number(d[yCol]);
              }
            }
            return Number(d.value);
          },
          xAxis: {
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[0].axisConfig.xAxis.axisLabel : vm.xaxislabel,
            axisLabelDistance: 0,
            showMaxMin: false,
            tickFormat: function tickFormat(d) {
              if (!vm.chartOptions.showXaxis)
                return;
              else if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition) {
                var retValue = "";
                angular.forEach(vm.data[0].values, function (val, key) {
                  if (d == Number(val[vm.chartconfigs[0].dataDefinition.xaxis[0].value])) {
                    var dispValue = vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue ? vm.chartconfigs[0].dataDefinition.xaxis[0].displayValue : vm.chartconfigs[0].dataDefinition.xaxis[0].value;
                    if (vm.xAxis.displayFormat === "Date") {
                      var date = new Date(val[dispValue]);
                      var locale = "en-us";
                      retValue = "WE" + ' ' + date.getDate() + '-' + date.toLocaleString(locale, {month: "short"}) + '-' + date.getFullYear();
                    } else {
                      retValue = val[dispValue];
                    }
                  }
                })
                if (retValue != "") {
                  return retValue;
                }
              }
              return d;
            }


          },
          legendRightAxisHint: '',
          yAxis1: {
            tickFormat: function tickFormat(d) {
              if (vm.yAxis1 && vm.yAxis1.displayFormat) {
                if (vm.yAxis1.displayFormat.indexOf("%") !== -1) {
                  return d3.format(vm.yAxis1.displayFormat)(d);
                }else {
                  var displayFormat = vm.yAxis1.displayFormat.replace(/"/gi, '');
                  return d.numberFormat(displayFormat);
                }
              }
              return d3.format(',.1f')(d);
            },
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[0].axisConfig.yAxis.axisLabel : vm.y1axislabel,

          },
          yAxis2: {
            tickFormat: function (d) {
              if (vm.yAxis2 && vm.yAxis2.displayFormat) {
                if (vm.yAxis2.displayFormat.indexOf("%") !== -1) {
                  return d3.format(vm.yAxis2.displayFormat)(d);
                } else
                {
                  var displayFormat = vm.yAxis2.displayFormat.replace(/"/gi, '');
                  return d.numberFormat(displayFormat);
                }
              }
              return d3.format(',.1f')(d);
            },
            axisLabel: vm.originalType == 'SIMPLE' ? vm.chartconfigs[1].axisConfig.yAxis.axisLabel : vm.y1axislabel
          },
          callback: function () {
            vm.labelWrapper();
          }
        }
      };
      if (vm.chartOptions) {

        if (vm.chartOptions.showControls == false || vm.chartOptions.showControls == true) {
          chartoptions.chart.showControls = vm.chartOptions.showControls;
        }
        if (vm.chartOptions.showLegend == false || vm.chartOptions.showLegend == true) {
          chartoptions.chart.showLegend = vm.chartOptions.showLegend;
        }
        if (vm.chartOptions.showTitle == false || vm.chartOptions.showTitle == true) {
          chartoptions.chart.showTitle = vm.chartOptions.showTitle;
        }
        if (vm.chartOptions.showValues == false || vm.chartOptions.showValues == true) {
          chartoptions.chart.showValues = vm.chartOptions.showValues;
        }

        if (vm.chartOptions.margin) {
          chartoptions.chart.margin = vm.chartOptions.margin;
        }
        if (vm.chartOptions.legend) {
          if (vm.chartOptions.legend.justified) {
            if (vm.chartOptions.legend.justified == 'LEFT') {
              chartoptions.chart.legend.rightAlign = false;
            } else {
              chartoptions.chart.legend.rightAlign = true;
            }
          }
          if (vm.chartOptions.legend.margin) {
            chartoptions.chart.legend.margin = vm.chartOptions.legend.margin;
          }
        }

        angular.forEach(vm.chartconfigs, function (config, k1) {
          angular.forEach(config.series, function (val, k2) {
            angular.forEach(vm.data, function (data, k3) {
              if (val == data.key) {
                if (config.chartType == "MULTIBAR_VERTICAL" || config.chartType == "STACKED_VERTICAL") {
                  data.type = "bar";
                } else if (config.chartType == "LINE") {
                  data.type = "line";
                }
                if (config.plotOnSecondaryAxis) {
                  data.yAxis = 2;
                  vm.yAxis2 = config.axisConfig.yAxis;
                  if (config.chartType == "STACKED_VERTICAL") {
                    chartoptions.chart.bars2.stacked = true;
                  }
                  if (vm.yAxis2.bound) {
                    vm.ymin = vm.yAxis2.bound.minValue;
                    vm.ymax = vm.yAxis2.bound.maxValue;
                    chartoptions.chart.yDomain2 = [vm.ymin, vm.ymax];
                  }

                } else {
                  data.yAxis = 1;
                  vm.xAxis = config.axisConfig.xAxis;
                  vm.yAxis1 = config.axisConfig.yAxis;
                  if (config.chartType == "STACKED_VERTICAL") {
                    chartoptions.chart.bars1.stacked = true;
                  }
                  if (vm.yAxis1.bound) {
                    vm.ymin = vm.yAxis1.bound.minValue;
                    vm.ymax = vm.yAxis1.bound.maxValue;
                    chartoptions.chart.yDomain1 = [vm.ymin, vm.ymax];
                  }

                }
              }
            })
          })
        })
        if (vm.yAxis2) {
          chartoptions.chart.yAxis2.axisLabel = vm.yAxis2.axisLabel;
          if (vm.yAxis2.bound) {
            vm.ymin = vm.yAxis2.bound.minValue;
            vm.ymax = vm.yAxis2.bound.maxValue;
            chartoptions.chart.yDomain2 = [vm.ymin, vm.ymax];
          }
          if (vm.yAxis2.axisLabelDistance) {
            chartoptions.chart.yAxis2.axisLabelDistance = vm.yAxis2.axisLabelDistance;
          }
        }

        chartoptions.chart.xAxis.axisLabel = vm.xAxis.axisLabel;
        if (vm.yAxis1) {
          chartoptions.chart.yAxis1.axisLabel = vm.yAxis1.axisLabel;
          if (vm.yAxis1.bound) {
            vm.ymin = vm.yAxis1.bound.minValue;
            vm.ymax = vm.yAxis1.bound.maxValue;
            chartoptions.chart.yDomain1 = [vm.ymin, vm.ymax];
          }
          if (vm.yAxis1.axisLabelDistance) {
            chartoptions.chart.yAxis1.axisLabelDistance = vm.yAxis1.axisLabelDistance;
          }
        }
        angular.merge(vm.options, chartoptions);
        window.dispatchEvent(new Event('resize'));

      }
      nv.utils.windowResize(function () {
        vm.labelWrapper();
      });
    }


  }
})();
