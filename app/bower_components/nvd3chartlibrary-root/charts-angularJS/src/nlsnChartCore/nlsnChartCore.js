(function () {
  'use strict';
  /**

   *
   * @module nlsn.chart.components.chartCore
   * @name nlsn-chart-core
   * @restrict E
   * @description
   * nlsn chart core
   *
   * * @usage
   <nlsn-chart-core chart-options=Different optional options   data=Data to display on charts  height= Height of the chart  xaxislabel= Label on X-axis  yaxislabel= Label on Y-axis>
   </nlsn-chart-core>
   @example
   <nlsn-chart-core  opt='options' data='data' height='chartHeight' xaxislabel='xaxislabel' yaxislabel='yaxislabel'>
   </nlsn-chart-core>

   <!-- opt-->
   Options of chart.

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
    .module('nlsn.chart.components.chartCore', [])
    .component('nlsnChartCore', {
      controller: ["$timeout", nlsnChartCoreCtrl],
      controllerAs: 'nlsnChartCore',
      bindings: {
        opt: "<",
        data: "=",
        type: "@",
        height: "=",
        xaxislabel: "=",
        yaxislabel: "=",
        axisoptions: "<",
        chartOptions: "=",
        charttitle: "=",
        tooltip: "<",
        metadata: "<"

      },
      template: `<nvd3 options="nlsnChartCore.options"
                       data="nlsnChartCore.data"
                       config="nlsnChartCore.config"
                       on-ready="nlsnChartCore.callback">
                </nvd3>`
    });

  /** @ngInject */
  function nlsnChartCoreCtrl($timeout) {
    var vm = this;
    this.$onChanges = function (changesObj) {
      if (changesObj.hasOwnProperty("opt")) {
        updateOptions();
      }
    };
    /*Code for rotaion of x axis*/
    if (vm.axisoptions) {
      if (vm.axisoptions.bound) {
        vm.tickLength = countTicks(vm.axisoptions, vm.opt);
        calculateRotateAfterPoints(vm.tickLength, vm.opt, vm.axisoptions.rotateAfterPoints, vm.axisoptions.tickLabelRotationAngle);
      } else {
        calculateRotateAfterPoints(vm.data.length, vm.opt, vm.axisoptions.rotateAfterPoints, vm.axisoptions.tickLabelRotationAngle);
      }
    }

    updateOptions();

    vm.type = vm.type || "pieChart"; // set 'pieChart' as default

    vm.config = {
      visible: true, // default: true
      extended: false, // default: false
      disabled: false, // default: false
      refreshDataOnly: true, // default: true
      deepWatchOptions: true, // default: true
      deepWatchData: true, // default: true
      deepWatchDataDepth: 10, // default: 2
      debounce: 10 // default: 10
    };

    function updateOptions() {
      vm.options = {
        chart: {
          type: vm.type,
          height: vm.height,
          useInteractiveGuideline: false,
          showLabels: false,
          //showValues:false,
          valueFormat: function valueFormat(d) {
            return d3.format(',.4f')(d);
          },
          showXAxis: vm.chartOptions.showXaxis ? vm.chartOptions.showXaxis : true,
          showYAxis: vm.chartOptions.showYaxis ? vm.chartOptions.showYaxis : true,
          legend: {
            align: vm.chartOptions.legend && vm.chartOptions.legend.align ? vm.chartOptions.legend.align : "TOP",
            rightAlign: false,
            justified: vm.chartOptions.legend && vm.chartOptions.legend.justified ? vm.chartOptions.legend.justified : "",
            margin: vm.chartOptions.legend && vm.chartOptions.legend.margin ? vm.chartOptions.legend.margin : {}
          },
          clipEdge: false,
          transitionDuration: 0,
          color: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C', '#FDBF6F', '#FF7F00', '#CAB2D6', '#6A3D9A', '#FFFF99', '#B15928']
        }
      };
      if (vm.tooltip && vm.tooltip.length > 0) {
        vm.options.chart.tooltip = {
          contentGenerator: function contentGenerator(e) {
            var series = e.series[0];
            var data = e.data;

            var titleHtml;
            var valueHtml
            var rows = "";
            var header = "";
            var metadata = vm.metadata;
            var title = "";
            var tooltip;
            for (var kk = 0; kk < vm.tooltip.length; kk++) {
              var tooltip = vm.tooltip[kk];
              if (metadata[tooltip.column] && metadata[tooltip.column].title) {
                title = metadata[tooltip.column].title;
              } else
                title = tooltip.column;

              var displayFormat = tooltip.displayFormat;
              if (displayFormat && displayFormat.length == 0) {
                displayFormat = ",.2f";
              }

              var value = data[tooltip.column];
              if (angular.isNumber(value)) {
                value = d3.format(displayFormat)(value);
                /* For display format as per current implementation*/
              }

              if (tooltip.showTitle) {
                titleHtml = "<td class='key tableDivision'>"
                  + title
                  + "</td>"
              }
              if (tooltip.showValue) {
                valueHtml = "<td class='key tableDivision'>"
                  + value
                  + "</td>"
              }
              rows += "<tr class='key table'>"
                + titleHtml
                + valueHtml
                + "</tr>"
            }


            header += "<thead class='key table '>"
              + "<tr>"
              + "<td class='key tableDivision'><strong>"
              + series.key
              + "</strong></td>"
              + "<td class='legend-color-guide tableDivision'><div style='background-color: "
              + series.color + ";'></div></td>"
              + "</tr>" + "</thead>";

            var html = "<table class='tableTooltip'>" + header + "<tbody>" + rows
              + "</tbody>" + "</table>";

            // html = "<table class='tableTooltip'><thead class='key table '><tr><td class='key tableDivision'><strong>Total Co-ops/GB</strong></td><td class='legend-color-guide tableDivision'><div style='background-color: rgb(0, 102, 153);'></div></td></tr></thead><tbody><tr class='key table'><td class='key tableDivision'   style='text-align:'LEFT;color:string;font-family:san-serif;font-size:0>Total Co-ops/GB</td><td class='key tableDivision' ng-hide='true' style='text-align:'LEFT;color:string;font-family:san-serif;font-size:0>7.7</td></tr></tbody></table>"
            return html;
          }
        };
      }
      /* custom legend icon*/
      vm.legendShapeMapper = {
        'circle': "\uF111",
        "square": "\uF0C8",
        'line': "\uF068",
        'diamond': "\uF219",
        "rectangle": "\uF0C8"
      };
      if (vm.chartOptions.legend && vm.chartOptions.legend.shape) {
        vm.legendShape = vm.chartOptions.legend && vm.chartOptions.legend.shape;
        vm.legendShape = vm.legendShape.toLocaleLowerCase();
        if (vm.legendShapeMapper[vm.legendShape]) {
          vm.options.chart.legend.legendIcon = vm.legendShapeMapper[vm.legendShape];
        } else {
          vm.options.chart.legend.legendIcon = null;
        }
      }
      /*custom legend icon*/

      if (vm.chartOptions) {
        if (vm.chartOptions.margin) {
          vm.options.chart.margin = vm.chartOptions.margin;
        }
        if (vm.chartOptions.showControls == true || vm.chartOptions.showControls == false) {
          vm.options.chart.showControls = vm.chartOptions.showControls;
        }
        if (vm.chartOptions.showLegend == true || vm.chartOptions.showLegend == false) {
          vm.options.chart.showLegend = vm.chartOptions.showLegend;
        }
        if (vm.chartOptions.showValues == true || vm.chartOptions.showValues == false) {
          vm.options.chart.showValues = vm.chartOptions.showValues;
        }

        if (vm.chartOptions.showTitle) {
          vm.options.title = {
            enable: true,
            text: vm.charttitle
          };
        }
        if (vm.chartOptions.gapWidth) {
          vm.options.chart.groupSpacing = vm.chartOptions.gapWidth / 100;
        }
        if (vm.chartOptions.colorPalette) {
          vm.options.chart.barColor = function (d, i) {
            return vm.chartOptions.colorPalette[i];
          };
        }
        //ToDo : Custom Legend
        vm.opt.chart.legend = vm.chartOptions.legend;
        if (vm.opt.chart.legend) {
          if (vm.opt.chart.legend.align == 'BOTTOM' || vm.opt.chart.legend.align == 'LEFT' || vm.opt.chart.legend.align == 'RIGHT') {
            vm.options.chart.legend.rightAlign = false;
          } else {
            // Top Position
            vm.options.chart.legend.rightAlign = true;
          }

          if (vm.chartOptions.legend.margin) {
            vm.options.chart.legend.margin = vm.chartOptions.legend.margin;
          }
        }
      }
      vm.callback = function (scope) {
        vm.api = scope.api;
        vm.chart = scope.chart;
        vm.svg = scope.svg;

        var _chartElem = scope.svg;

        var legendPositionCb = function (_svg) {
          return function () {
            $timeout(function () {
              var legends = d3.select($(_svg[0]).find("g.nv-legendWrap, .legendWrap")[0]);
              legends.attr('transform', function () {
                if (d3.select(_svg).length > 0 && d3.select(_svg).node()[0][0]) {
                  var containerWidth = d3.select(_svg).node()[0][0].getBBox().width;
                  var width = this.getBBox().width;
                  var center = containerWidth / 2 - width / 2;

                  return "translate(" + center + ", " + d3.transform(d3.select(this).attr("transform")).translate[1] + ")";
                } else {
                  return "translate(0,0)";
                }
              });
            }, 50);
          };
        }(_chartElem);

        // Added timer to avoid first time load issue.
        $timeout(function () {
          window.dispatchEvent(new Event('resize'));
        }, 1000);

        // ------------------------------------------
        //
        //  ******* CENTERING THE LEGEND ************
        //
        // ------------------------------------------
        // if (vm.opt.chart.legend && !!!(vm.opt.chart.legend.justified == "RIGHT" || vm.opt.chart.legend.align == "RIGHT")) {
        //
        //   var legendPositionCb = function (_svg) {
        //     return function () {
        //       $timeout(function () {
        //         var legends = d3.select($(_svg[0]).find("g.nv-legendWrap, .legendWrap")[0]);
        //         legends.attr('transform', function () {
        //           if (d3.select(_svg).length > 0 && d3.select(_svg).node()[0][0]) {
        //             var containerWidth = d3.select(_svg).node()[0][0].getBBox().width;
        //             var width = this.getBBox().width;
        //             var center = containerWidth / 2 - width / 2;
        //
        //             return "translate(" + center + ", " + d3.transform(d3.select(this).attr("transform")).translate[1] + ")";
        //           } else {
        //             return "translate(0,0)";
        //           }
        //         });
        //       }, 50);
        //     };
        //   }(_chartElem);
        //
        //   var $clone = null;
        //   var $element = null;
        //   var position = null;
        //   var legendWrap = $(_chartElem[0]).find("g.nv-legendWrap, .legendWrap");
        //
        //   var legendControlPreclickHandler = function legendControlPreclickHandler() {
        //     $element = $(this);
        //     var $parent = $element.parent();
        //     if($clone && $clone.size() > 0) {
        //       $clone.remove();
        //     }
        //     $clone = $element.clone();
        //     position = $element.offset();
        //     $clone.offset(position);
        //     $parent.append($clone);
        //     $element.css({ "display": "none" });
        //   };
        //
        //   var legendControlClickHandler = function legendControlClickHandler() {
        //     $timeout(function () {
        //       legendPositionCb();
        //       $timeout(function () {
        //         $element.offset(position);
        //         $clone.remove();
        //         $element.css({ "display": "" });
        //       }, 50);
        //     }, 50);
        //   };
        //
        //   legendWrap.off("mouseup", legendControlPreclickHandler).on("mouseup", legendControlPreclickHandler).off("click", legendControlClickHandler).on("click", legendControlClickHandler);
        //
        //   var legendOnWindowResizeCb = (function (_legendWrap) {
        //     return function() {
        //       legendPositionCb();
        //       legendControlPreclickHandler.apply(_legendWrap);
        //       legendControlClickHandler();
        //     }
        //   })(legendWrap);
        //
        //   window.addEventListener('resize', legendOnWindowResizeCb);
        //
        //   scope.$on('$destroy', function () {
        //     window.removeEventListener('resize', legendOnWindowResizeCb);
        //   });
        // }
      };

      if (vm.opt) {

        angular.merge(vm.options, vm.opt);
      }
    }

    function countTicks(xAxis, axisoptions) {
      var arr = [];
      vm.xmax = xAxis.bound.maxValue;
      vm.xmin = xAxis.bound.minValue;

      var i = 0;
      do {
        arr.push(i);
        i = i + xAxis.unit.major;
      } while (i < vm.xmax);
      i = 0;
      do {
        arr.push(i);
        i = i - xAxis.unit.major;
      } while (i > vm.xmin);
      // vm.ticklength = arr.length;
      axisoptions.chart.xAxis.tickValues = arr;
      return arr.length;
    }

    function calculateRotateAfterPoints(ticklength, axisoptions, rotateAfterPoints, tickLabelRotationAngle) {
      /*  if (rotateAfterPoints) {
       if (rotateAfterPoints < ticklength) {
       axisoptions.chart.xAxis.rotateLabels = 45;
       }
       }
       else {
       if (tickLabelRotationAngle) {
       axisoptions.chart.xAxis.rotateLabels = tickLabelRotationAngle;
       }
       else {
       axisoptions.chart.xAxis.rotateLabels = 0;
       }
       }*/

      if (rotateAfterPoints) {
        if (rotateAfterPoints < ticklength && tickLabelRotationAngle) {
          axisoptions.chart.xAxis.rotateLabels = tickLabelRotationAngle;
        }
      }
    }

    window.dispatchEvent(new Event('resize'));
  }
})();
