'use strict';

angular.module('nlsnChart.donut.module', [])
    .directive('nlsnChartDonut', [
      'nlsnChartHelperSvc',
      'nlsnDataSvc',
      function (nlsnChartHelperSvc, nlsnDataSvc) {
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
          var chart = {};
          var chartData;

          if (!(newValue && newValue.data && newValue.data.length)) {
            return;
          }

          chartData = newValue;
          chart.containerElement = containerElement;

          //nv.utils.windowResize(onResize);

          //function onResize() {
          //  chart.update();
          //}

          getOptions(chart, chartData);
          getData(chart, chartData);
          getConfig(chart);
          calculateSettings(chart);
          nlsnChartHelperSvc.drawBaseElement(chart);
          drawPie(chart);
          drawCenterDivider(chart);
          drawLabels(chart);
          drawMetrics(chart);
        }

        function getOptions(chart, chartData) {
          chart.options = chartData.options;
        }

        function getData(chart, chartData) {
          chart.data = chartData.data;
        }

        // Configurable Settings - internal to component - not avail from any inputs.
        function getConfig(chart) {
          chart.config = {};
        }

        function calculateSettings(chart) {
          chart.settings = {};
          chart.settings.radius = Math.min(chart.options.width, chart.options.height) / 2;
        }

        function drawPie(chart) {

        }

        function drawCenterDivider(chart) {

        }

        function drawLabels(chart) {

        }

        function drawMetrics(chart) {

        }

      }])
;
