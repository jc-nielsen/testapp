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
        createPanels(chart);
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
        // Convert single metric to two metrics for pie chart data
        chart.data = [chartData.data[0].value, 100 - chartData.data[0].value];

        chart.metrics = chartData.data;
      }

      // Configurable Settings - internal to component - not avail from any inputs.
      function getConfig(chart) {
        chart.config = {};
      }

      // Panels are virtual objects that need to move or transform.
      function createPanels(chart) {
        // Create a panel for the center divider
        chart.centerDividerPanel = {};

        // The dataPanel is the box containing the data graph area, includes record labels.
        chart.dataPanel = {};

        // Create a panel for the pie chart.
        chart.piePanel = {};

        // Create a metrics panel for each metric.
        chart.metricsPanel = [];
        chart.metricsPanel[0] = {};
        chart.metricsPanel[1] = {};
        chart.metricsPanel[1] = {};

        // Create an axis panel for each metric.
        chart.metricsPanel[0].axisPanel = {};
        chart.metricsPanel[1].axisPanel = {};

        // Create a panel for the record labels
        chart.recordLabelPanel = {};
      }

      function calculateSettings(chart) {

        // The dataPanel is the chart area bounded by margins.
        chart.dataPanel.width = chart.options.width - (chart.options.margin.left + chart.options.margin.right);
        chart.dataPanel.height = chart.options.height - (chart.options.margin.top + chart.options.margin.bottom);
        chart.dataPanel.x = chart.options.margin.left;
        chart.dataPanel.y = chart.options.margin.top;

        chart.piePanel.radius = Math.min(chart.dataPanel.width, chart.dataPanel.height) / 2;
        chart.piePanel.height = chart.piePanel.radius;
        chart.piePanel.width = chart.piePanel.radius;
        chart.piePanel.x = chart.dataPanel.x + chart.piePanel.width;
        chart.piePanel.y = chart.dataPanel.y + chart.piePanel.height - chart.options.margin.bottom;

        chart.piePanel.arc = d3.svg.arc()
          .outerRadius(chart.piePanel.radius)
          .innerRadius(chart.piePanel.radius * chart.options.donutRatio);

        // Get the arc colors from the options.
        var colors = [];
        for (var i = 0; i < chart.options.metrics.length; i++) {
          colors.push(chart.options.metrics[i].metricColor);
        }
        chart.piePanel.color = d3.scale.ordinal()
          .range(colors);
      }

      function drawPie(chart) {
        chart.piePanel.baseElement = chart.svgElement.append('g')
          .attr('class', 'nlsn-chart-pie')
          .attr('transform', 'translate(' + chart.piePanel.x + ',' + chart.piePanel.y + ')');

        // Data values are d for an array of values.
        chart.piePanel.pie = d3.layout.pie()
          .sort(null)
          .value(function (d) {
            return d;
          });

        chart.piePanel.arcs = chart.piePanel.baseElement.append('arc')
          .attr('class', 'nlsn-chart-arc')
          .data(chart.piePanel.pie(chart.data));

        var g = chart.piePanel.baseElement.selectAll('.arc')
          .data(chart.piePanel.pie(chart.data))
          .enter().append('g')
          .attr('class', 'arc');

        g.append('path')
          .attr('d', chart.piePanel.arc)
          .style('fill', function (d) {
            return chart.piePanel.color(d.data);
          });

      }

      function drawCenterDivider(chart) {

      }

      function drawLabels(chart) {

      }

      function drawMetrics(chart) {

      }

    }])
;
