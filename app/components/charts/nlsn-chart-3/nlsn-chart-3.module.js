'use strict';

'use strict';

angular.module('nlsnChart.3.module', [])
    .directive('nlsnChart3', [
      'nlsnDataSvc',
      function (nlsnDataSvc) {
        var containerElement;
        var svgElement;
        var theController = function ($scope) {
          $scope.chartData = nlsnDataSvc.getChartDataNvd3Donut();
        };

        return {
          bindToController: true,
          controller: theController,
          restrict: 'E',
          scope: {},
          link: function (scope, element) {
            containerElement = d3.select(element[0]).append('div');
            svgElement = containerElement.append('svg');
            scope.$watch('chartData', renderChart, true);
          }
        };

        function renderChart(newValue, oldValue, scope) {
          if (!(newValue && newValue.data && newValue.data.length)) {
            return;
          }

          var chartData = newValue;
          var chart;

          nv.utils.windowResize(onResize);

          function onResize() {
            chart.update();
          }

          nv.addGraph(function () {
            chart = nv.models.pieChart()
                .x(function (d) {
                  return d.label
                })
                .y(function (d) {
                  return d.value
                })
                .showLabels(true)     //Display pie labels
                .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
                .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
                .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
                .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
            ;

            d3.select("svg")
                .datum(chartData.data)
                .transition().duration(350)
                .call(chart);

            return chart;
          });
        }

      }])
;
