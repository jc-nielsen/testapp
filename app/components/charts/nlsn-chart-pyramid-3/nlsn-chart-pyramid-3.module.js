'use strict';

angular.module('nlsnChart.Pyramid3.module', [])
  .directive('nlsnChartPyramid3', [
    'nlsnDataSvc',
    function (nlsnDataSvc) {
      var baseElement;
      var theController = function ($scope) {
        $scope.chartData = nlsnDataSvc.getChartDataPyramid();
      };

      return {
        bindToController: true,
        controller: theController,
        restrict: 'E',
        scope: {},
        link: function (scope, element) {
          baseElement = d3.select(element[0]).append('svg');
          scope.$watch('chartData', renderChart, true);
        }
      };

      function renderChart(newValue, oldValue, scope) {
        if (!(newValue && newValue.data && newValue.data.length)) {
          return;
        }

        // var chart = {};
        // chart.baseElement = baseElement;
        // chart.data = newValue.data;
        // chart.heading = newValue.heading;
        nv.addGraph(function() {
          var chart = nv.models.multiBarHorizontalChart()
            .x(function(d) { return d.sharedLabel })
            .y(function(d) { return d.metric1 })
            .margin({top: 30, right: 30, bottom: 50, left: 175})
            .showValues(true)           //Show bar value next to each bar.
            .tooltips(true)             //Show tooltips on hover.
            .transitionDuration(350)
            .showControls(true);        //Allow user to switch between "Grouped" and "Stacked" mode.

          chart.yAxis
            .tickFormat(d3.format(',.3f'));

          d3.select('#chart1 svg')
            .datum(newValue.data)
            .call(chart);

          nv.utils.windowResize(chart.update);

          return chart;
        });
      }

    }])
;
