'use strict';

angular.module('nlsnChart.donut.module', [])
    .directive('nlsnChartDonut', [
      'nlsnDataSvc',
      function (nlsnDataSvc) {
        var containerElement;
        var svgElement;
        var theController = function ($scope) {
          $scope.chartData = nlsnDataSvc.getChartDataDonut();
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
                .showLabels(false)
                .donut(true)
                .donutRatio(0.6)
            ;

            d3.select("svg")
                .datum(chartData.data)
                .call(chart);

            return chart;
          });
        }

      }])
;
