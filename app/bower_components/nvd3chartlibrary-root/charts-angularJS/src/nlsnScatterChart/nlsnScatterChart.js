(function () {

  'use strict';
  /**
   *
   * @module nlsn.chart.components.scatterChart
   * @name nlsn-pie-chart
   * @restrict E
   * @description
   * nlsn pie chart
   *
   * * @usage
   <nlsn-scatter-chart chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis tool-tip-label-one= label one for tooltip  tool-tip-label-two=label two for tooltip >
   </nlsn-scatter-chart>
   @example
   <nlsn-scatter-chart chart-options='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel' tool-tip-label-one="labelOne" tool-tip-label-two="labelTwo"></nlsn-scatter-chart>
   </nlsn-scatter-chart>

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

   <!--label one for tooltip-->
   Label one for tooltip.

   <!--label two for tooltip-->
   Label two for tooltip.
   **/
  angular
    .module('nlsn.chart.components.scatterChart', ['nlsn.chart.components.util.colors'])
    .component('nlsnScatterChart', {
      controller: ["$scope", "$nlsnColors", nlsnScatterChartCtrl],
      controllerAs: 'nlsnScatterChart',
      bindings: {
        chartSubtype: "@",
        chartOptions: "<",
        data: "=",
        height: "=",
        xaxislabel: "=",
        yaxislabel: "=",
        toolTipLabelOne: "=",
        toolTipLabelTwo: "=",
        parameterData: "=",
        livechart: "=",
        chartId: "=",
        charttitle: "=",
        chartconfigs: "=",
        charttype: "=",
        metadata: "<"
      },
      template: `<nlsn-chart-core metadata="nlsnScatterChart.metadata" 
                                  tooltip="nlsnScatterChart.tooltip" 
                                  id="card-{{nlsnScatterChart.chartId}}" 
                                  axisoptions="nlsnScatterChart.xAxis" 
                                  chartconfigs="chartconfigs" 
                                  opt="nlsnScatterChart.options" 
                                  data="nlsnScatterChart.data" 
                                  type="{{nlsnScatterChart.chartType}}" 
                                  height="nlsnScatterChart.height" 
                                  xaxislabel="nlsnScatterChart.xaxislabel" 
                                  yaxislabel="nlsnScatterChart.yaxislabel" 
                                  chart-options="nlsnScatterChart.chartOptions"
                                  charttitle="nlsnScatterChart.charttitle">
                  </nlsn-chart-core>`
    });

  /** @ngInject */
  function nlsnScatterChartCtrl($scope, $nlsnColors) {
    var vm = this;
    vm.exHeight = 0;
    if (!vm.parameterData) {
      vm.exHeight = 25;
    }

    vm.createCrossover = function (chart) {
      if (chart) {
        d3.select('#horLine').remove();
        d3.select('#verLine').remove();
        d3.select('#quad1').remove();
        d3.select('#quad2').remove();
        d3.select('#quad3').remove();
        d3.select('#quad4').remove();

        var horLine = d3.select('.nv-scatterChart').select('.nv-y')
          .append('g').attr('id', 'horLine');
        horLine.selectAll('line').data(vm.xgrid).enter().append(
          'line').attr({
          x1: function (d) {
            return chart.xAxis.scale()(vm.xmin)
          },
          y1: function (d) {
            return chart.yAxis.scale()(d)
          },
          x2: function (d) {
            return chart.xAxis.scale()(vm.xmax)
          },
          y2: function (d) {
            return chart.yAxis.scale()(d)
          }
        }).style("stroke", "#000000");
        var verLine = d3.select('.nv-scatterChart').select('.nv-y')
          .append('g').attr('id', 'verLine');
        verLine.selectAll('line').data(vm.ygrid).enter().append(
          'line').attr({
          x1: function (d) {
            return chart.xAxis.scale()(d)
          },
          y1: function (d) {
            return chart.yAxis.scale()(vm.ymin)
          },
          x2: function (d) {
            return chart.xAxis.scale()(d)
          },
          y2: function (d) {
            return chart.yAxis.scale()(vm.ymax)
          }
        }).style("stroke", "#000000");
      }
    };
    vm.labelGenerator = function (chart) {

      angular.forEach(vm.data, function (val, key) {
        d3.select("#labelWrap" + key).remove();
        var pointlabel = d3.select(".nv-scatterChart").select(
          ".nv-y").append('g').attr("id", "labelWrap" + key);

        pointlabel.selectAll('text').data(val.values).enter()
          .append('text').text(function (d) {
          return d.label;
        }).attr({
          x: function (d) {
            return chart.xAxis.scale()(d.xvalue)
          },
          y: function (d) {
            return chart.yAxis.scale()(d.yvalue)
          },
          dx: "2em",
          dy: "0.5em"
        })

      })

    }
    vm.createQuadrant = function (chart, obj) {
      d3.select('#quad1').remove();
      d3.select('#quad2').remove();
      d3.select('#quad3').remove();
      d3.select('#quad4').remove();
      var quad = d3.select('.nv-scatterChart').select('.nv-y');

      quad.append('text').attr({
        id: 'quad1',
        x: function () {
          return chart.xAxis.scale()(vm.xmin)
        },
        y: function () {
          return chart.yAxis.scale()(vm.ymax)
        },
        dy: '0.5em',
        dx: '0.5em'
      }).text(obj.quadrant1).style({
        'font-size': '1em',
        'fill': '#000000'
      })
      quad.append('text').attr({
        id: 'quad2',
        x: function () {
          return chart.xAxis.scale()(vm.xmax)
        },
        y: function () {
          return chart.yAxis.scale()(vm.ymax)
        },
        'text-anchor': 'end',
        dy: '0.5em',
        dx: '-0.5em'
      }).text(obj.quadrant2).style({
        'font-size': '1em',
        'fill': '#000000'
      })
      quad.append('text').attr({
        id: 'quad3',
        x: function () {
          return chart.xAxis.scale()(vm.xmax)
        },
        y: function () {
          return chart.yAxis.scale()(vm.ymin)
        },
        'text-anchor': 'end',
        dy: '-0.5em',
        dx: '-0.5em'
      }).text(obj.quadrant3).style({
        'font-size': '1em',
        'fill': '#000000'
      })
      quad.append('text').attr({
        id: 'quad4',
        x: function () {
          return chart.xAxis.scale()(vm.xmin)
        },
        y: function () {
          return chart.yAxis.scale()(vm.ymin)
        },
        dy: '-0.5em',
        dx: '0.5em'
      }).text(obj.quadrant4).style({
        'font-size': '1em',
        'fill': '#000000'
      })
    };
    vm.colorBubbles = function (chart, colorPallete) {
      var points = d3.selectAll(".nv-point")[0];
      angular.forEach(points, function (val, key) {
        d3.select(val).attr("fill", colorPallete[key]).attr(
          "stroke", colorPallete[key])
      })
    }
    if ('SIMPLE' == vm.charttype) {

      if (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.series[0].value) {
        // manipulate data
        var existingData = angular.copy(vm.data);
        var newData = [];
        var uniqueNames = [];
        for (var i = 0; i < existingData.length; i++) {
          var currentSeriesName = existingData[i][vm.chartconfigs[0].dataDefinition.series[0].value];
          if (uniqueNames.indexOf(currentSeriesName) === -1) {
            var recs = existingData
              .filter(function (rec) {
                return rec[vm.chartconfigs[0].dataDefinition.series[0].value] == currentSeriesName;
              });
            var currConfig = vm.chartconfigs[0].seriesConfigs[currentSeriesName];
            newData
              .push({
                "key": currentSeriesName,
                "values": recs,
                "color": currConfig && currConfig.color ? currConfig.color
                  : (vm.chartconfigs[0].colorPalette ? vm.chartconfigs[0].colorPalette[newData.length]
                    : $nlsnColors.stdcolors[newData.length % 10])
              });
            uniqueNames.push(currentSeriesName);
          }
        }
        vm.data = newData;
      }

      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function (d) {
              return vm.chartconfigs
              && vm.chartconfigs[0].dataDefinition.xaxis[0].value ? Number(d[vm.chartconfigs[0].dataDefinition.xaxis[0].value])
                : Number(d.xvalue);
            },
            y: function (d) {
              return (vm.chartconfigs && vm.chartconfigs[0].dataDefinition.yaxis.value) ? Number(d[vm.chartconfigs[0].dataDefinition.yaxis.value])
                : Number(d.yvalue);
            },
            pointSize: function (d) {
              if (vm.chartconfigs[0].dataDefinition.size) {
                return d[vm.chartconfigs[0].dataDefinition.size.value];
              }
              return d.size || 1;
            },
            xAxis: {
              axisLabel: vm.chartconfigs[0].axisConfig.xAxis.showAxisLabel ? vm.chartconfigs[0].axisConfig.xAxis.axisLabel
                : "",
              showMaxMin: vm.chartconfigs[0].axisConfig.xAxis.showMaxMin ? vm.chartconfigs[0].axisConfig.xAxis.showMaxMin
                : false
            },
            yAxis: {
              axisLabel: vm.chartconfigs[0].axisConfig.yAxis.showAxisLabel ? vm.chartconfigs[0].axisConfig.yAxis.axisLabel
                : "",
              showMaxMin: vm.chartconfigs[0].axisConfig.yAxis.showMaxMin ? vm.chartconfigs[0].axisConfig.yAxis.showMaxMin
                : false
            },
            pointRange: [500, 1600]

          }
        };

        /* Tooltip */
        if (vm.chartconfigs[0] && vm.chartconfigs[0].tooltip) {
          vm.tooltip = vm.chartconfigs[0].tooltip;
        }
        if (vm.chartOptions) {


          if (vm.chartconfigs[0].axisConfig.xAxis) {
            vm.xAxis = vm.chartconfigs[0].axisConfig.xAxis;
            /*changed scatter***/
            if (vm.chartconfigs[0].axisConfig.xAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.xAxis.bound) {
                vm.xmin = vm.chartconfigs[0].axisConfig.xAxis.bound.minValue;
                vm.xmax = vm.chartconfigs[0].axisConfig.xAxis.bound.maxValue;
                vm.options.chart.xDomain = [vm.xmin, vm.xmax];
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.displayFormat) {
                var displayFormat = vm.chartconfigs[0].axisConfig.xAxis.displayFormat
                  .replace(/"/gi, '');
                vm.options.chart.xAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartconfigs[0].axisConfig.xAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.xAxis.unit.major) {
                  vm.options.chart.xAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i
                        + vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i < vm.xmax)
                    i = 0;
                    do {
                      arr.push(i);
                      i = i
                        - vm.chartconfigs[0].axisConfig.xAxis.unit.major;
                    } while (i > vm.xmin)
                    return arr;
                  }
                }
              }

            }
          }

          if (vm.chartconfigs[0].axisConfig.yAxis) {
            if (vm.chartconfigs[0].axisConfig.yAxis.axisLabel) {
              if (vm.chartconfigs[0].axisConfig.yAxis.bound) {
                vm.ymin = vm.chartconfigs[0].axisConfig.yAxis.bound.minValue;
                vm.ymax = vm.chartconfigs[0].axisConfig.yAxis.bound.maxValue;
                vm.options.chart.yDomain = [vm.ymin, vm.ymax];
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.displayFormat) {
                var displayFormat = vm.chartconfigs[0].axisConfig.yAxis.displayFormat
                  .replace(/"/gi, '');
                vm.options.chart.yAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              }
              if (vm.chartconfigs[0].axisConfig.yAxis.unit) {
                if (vm.chartconfigs[0].axisConfig.yAxis.unit.major) {
                  vm.options.chart.yAxis.tickValues = function () {
                    var arr = [];
                    var i = 0;
                    do {
                      arr.push(i);
                      i = i
                        + vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i < vm.ymax)
                    i = 0;
                    do {
                      arr.push(i);
                      i = i
                        - vm.chartconfigs[0].axisConfig.yAxis.unit.major;
                    } while (i > vm.ymin)
                    return arr;
                  }
                }
              }
            }
          }
          vm.options.chart.callback = function (chart) {
            vm.chart = chart;
            if (vm.chartconfigs[0].axisConfig.xAxis
              && vm.chartconfigs[0].axisConfig.yAxis) {
              vm.ygrid = [vm.chartconfigs[0].axisConfig.xAxis.crossAt];
              vm.xgrid = [vm.chartconfigs[0].axisConfig.yAxis.crossAt];
            }
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart,
                vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
            if (vm.chartOptions.colorPalette) {
              vm.colorBubbles(vm.chart,
                vm.chartOptions.colorPalette);
            }
            if (!vm.chartconfigs[0].axisConfig.yAxis.showMajorGridLines) {
              d3.select('.nv-scatterChart').append("style").text(
                ".nv-y .tick line { display: none; }");
            }
            if (!vm.chartconfigs[0].axisConfig.xAxis.showMajorGridLines) {
              d3.select('.nv-scatterChart').append("style").text(
                ".nv-x .tick line { display: none; }");
            }
          }
          window.dispatchEvent(new Event('resize'));
        }
        nv.utils.windowResize(function () {
          if (vm.chart) {
            vm.chart.update();
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart,
                vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
          }
        })
      }
      vm.updateOptions();
      vm.chartType = "scatterChart";


    }

    else {
      vm.updateOptions = function () {
        vm.options = {
          chart: {
            x: function (d) {
              return Number(d.xvalue);
            },
            y: function (d) {
              return Number(d.yvalue);
            },
            pointSize: function (d) {
              return Number(d.size);
            },
            pointRange: [500, 1600]

          }
        };
        if (vm.chartOptions) {

          var chartoptions = {
            chart: {
              xAxis: {},
              yAxis: {},
              legend: {}
            }
          }


          if (vm.chartOptions.legend) {
            if (vm.chartOptions.legend.align == 'BOTTOM') {
              chartoptions.chart.legendPosition = "bottom";
            }
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
              if (vm.chartOptions.xAxis[0].displayFormat) {
                var displayFormat = vm.chartOptions.xAxis[0].displayFormat.replace(/"/gi, '');
                chartoptions.chart.xAxis.tickFormat = function (d) {
                  return d.numberFormat(displayFormat);
                };
              } else {
                chartoptions.chart.xAxis.tickFormat = function (d) {
                  return d;
                }
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
              } else {
                chartoptions.chart.yAxis.tickFormat = function (d) {
                  return d;
                }
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
          if (vm.chartOptions.xAxis.length == 1 && vm.chartOptions.yAxis.length == 1) {
            vm.ygrid = [vm.chartOptions.xAxis[0].crossAt];
            vm.xgrid = [vm.chartOptions.yAxis[0].crossAt];
            chartoptions.chart.callback = function (chart) {
              vm.chart = chart;
              vm.createCrossover(vm.chart);
              if (vm.chartOptions.quadrant) {
                vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
              }
              if (vm.chartOptions.showValues) {
                vm.labelGenerator(vm.chart);
              }
              if (vm.chartOptions.colorPalette) {
                vm.colorBubbles(vm.chart, vm.chartOptions.colorPalette);
              }
              if (!vm.chartOptions.yAxis[0].showMajorGridLines) {
                d3.select('.nv-scatterChart').append("style").text(".nv-y .tick line { display: none; }");
              }
              if (!vm.chartOptions.xAxis[0].showMajorGridLines) {
                d3.select('.nv-scatterChart').append("style").text(".nv-x .tick line { display: none; }");
              }
            }
          }
          vm.xAxis = vm.chartOptions.xAxis[0];
          angular.merge(vm.options, chartoptions);
          window.dispatchEvent(new Event('resize'));
        }
        nv.utils.windowResize(function () {
          if (vm.chart) {
            vm.chart.update();
            vm.createCrossover(vm.chart);
            if (vm.chartOptions.quadrant) {
              vm.createQuadrant(vm.chart, vm.chartOptions.quadrant);
            }
            if (vm.chartOptions.showValues) {
              vm.labelGenerator(vm.chart);
            }
          }
        })

      }
      vm.updateOptions();
      vm.chartType = "scatterChart";

    }
    this.$onChanges = function (changesObj) {
      console.log("in here");
      console.log(vm);
      if (changesObj.hasOwnProperty("chartOptions")) {
        vm.updateOptions();
      }
    };

    $scope.$on(function () {
      return vm.chartOptions
    }, function () {
      vm.updateOptions();
    });
  }
})();
