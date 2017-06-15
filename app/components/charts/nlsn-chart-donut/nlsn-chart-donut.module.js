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
        //drawTestPanels(chart);
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
        chart.config.centerDividerMargin = 2;
        chart.config.centerDividerWidth = 2;
        chart.config.metricsPanelMargin = 1;
      }

      // Panels are virtual objects for grouping or positioning things.
      function createPanels(chart) {
        // Create a panel for the center divider
        chart.centerDividerPanel = {};
        // Create a panel for the horizontal and vertical lines.
        chart.centerDividerPanel.horizontalPanel = {};
        chart.centerDividerPanel.verticlePanel = {};

        // The dataPanel is the box containing the data graph area, includes record labels.
        chart.dataPanel = {};

        // Create a panel for the pie chart.
        chart.piePanel = {};

        // Create a metrics panel for each metric.
        chart.metricsPanel = [];
        chart.metricsPanel[0] = {};
        chart.metricsPanel[1] = {};
        chart.metricsPanel[2] = {};

        // Create an axis panel for each metric.
        chart.metricsPanel[0].axisPanel = {};
        chart.metricsPanel[1].axisPanel = {};
        chart.metricsPanel[2].axisPanel = {};

        // Create a panel for the record labels
        chart.recordLabelPanel = {};
      }

      function calculateSettings(chart) {
        // The dataPanel is the chart area bounded by margins.
        chart.dataPanel.width = chart.options.width - (chart.options.margin.left + chart.options.margin.right);
        chart.dataPanel.height = chart.options.height - (chart.options.margin.top + chart.options.margin.bottom);
        chart.dataPanel.x = chart.options.margin.left;
        chart.dataPanel.y = chart.options.margin.top;

        chart.piePanel.diameter = Math.min(chart.dataPanel.width, chart.dataPanel.height);
        chart.piePanel.radius = chart.piePanel.diameter / 2;
        chart.piePanel.innerRadius = chart.piePanel.radius * chart.options.donutRatio;
        chart.piePanel.innerDiameter = chart.piePanel.innerRadius * 2;
        chart.piePanel.arcWidth = chart.piePanel.radius - chart.piePanel.innerRadius;
        chart.piePanel.height = chart.piePanel.diameter;
        chart.piePanel.width = chart.piePanel.diameter;
        chart.piePanel.x = chart.dataPanel.x + ((chart.dataPanel.width - chart.piePanel.width) / 2) + (chart.piePanel.width / 2);
        chart.piePanel.y = chart.dataPanel.y + ((chart.dataPanel.height - chart.piePanel.height) / 2) + (chart.piePanel.height / 2);

        chart.piePanel.arc = d3.svg.arc()
          .outerRadius(chart.piePanel.radius)
          .innerRadius(chart.piePanel.innerRadius);

        // Get the arc colors from the options.
        var colors = [];
        for (var i = 0; i < chart.options.metrics.length; i++) {
          colors.push(chart.options.metrics[i].metricColor);
        }
        chart.piePanel.color = d3.scale.ordinal()
          .range(colors);

        // Position the metrics panels
        chart.metricsPanel[0].height = chart.piePanel.innerRadius - (chart.config.metricsPanelMargin * 2);
        chart.metricsPanel[0].width = chart.piePanel.innerDiameter - (chart.config.metricsPanelMargin * 2);
        chart.metricsPanel[0].x = chart.dataPanel.x + (chart.piePanel.radius - chart.piePanel.innerRadius) + chart.config.metricsPanelMargin;
        chart.metricsPanel[0].y = chart.dataPanel.y + (chart.piePanel.radius - chart.piePanel.innerRadius) + chart.config.metricsPanelMargin;

        chart.metricsPanel[1].height = chart.piePanel.innerRadius - (chart.config.metricsPanelMargin * 2);
        chart.metricsPanel[1].width = chart.piePanel.innerRadius - (chart.config.metricsPanelMargin * 2);
        chart.metricsPanel[1].x = chart.dataPanel.x + (chart.piePanel.radius - chart.piePanel.innerRadius) + chart.config.metricsPanelMargin;
        chart.metricsPanel[1].y = chart.dataPanel.y + (chart.piePanel.radius - chart.piePanel.innerRadius) + (chart.config.metricsPanelMargin * 3) + chart.metricsPanel[1].height;

        chart.metricsPanel[2].height = chart.piePanel.innerRadius - (chart.config.metricsPanelMargin * 2);
        chart.metricsPanel[2].width = chart.piePanel.innerRadius - (chart.config.metricsPanelMargin * 2);
        chart.metricsPanel[2].x = chart.dataPanel.x + chart.piePanel.arcWidth + (chart.config.metricsPanelMargin * 3) + chart.metricsPanel[1].width;
        chart.metricsPanel[2].y = chart.dataPanel.y + chart.piePanel.arcWidth + (chart.config.metricsPanelMargin * 3) + chart.metricsPanel[1].height;

        // Position the center dividers.
        chart.centerDividerPanel.horizontalPanel.width = chart.piePanel.innerDiameter - (chart.config.centerDividerMargin * 2);
        chart.centerDividerPanel.verticlePanel.height = chart.piePanel.innerRadius - (chart.config.centerDividerMargin * 2);

        chart.centerDividerPanel.horizontalPanel.x1 = chart.piePanel.x - ( chart.piePanel.innerRadius - chart.config.centerDividerMargin);
        chart.centerDividerPanel.horizontalPanel.x2 = chart.centerDividerPanel.horizontalPanel.x1 + chart.centerDividerPanel.horizontalPanel.width;
        chart.centerDividerPanel.horizontalPanel.y1 = chart.piePanel.y;
        chart.centerDividerPanel.horizontalPanel.y2 = chart.piePanel.y;

        chart.centerDividerPanel.verticlePanel.x1 = chart.piePanel.x;
        chart.centerDividerPanel.verticlePanel.x2 = chart.piePanel.x;
        chart.centerDividerPanel.verticlePanel.y1 = chart.piePanel.y;
        chart.centerDividerPanel.verticlePanel.y2 = chart.piePanel.y + chart.centerDividerPanel.verticlePanel.height;
      }

      function drawTestPanels(chart) {
        chart.svgElement.append('rect')
          .attr('x', chart.dataPanel.x)
          .attr('y', chart.dataPanel.y)
          .attr('width', chart.dataPanel.width)
          .attr('height', chart.dataPanel.height)
          .attr('fill', 'gray');

        chart.svgElement.append('rect')
          .attr('x', chart.metricsPanel[0].x)
          .attr('y', chart.metricsPanel[0].y)
          .attr('width', chart.metricsPanel[0].width)
          .attr('height', chart.metricsPanel[0].height)
          .attr('fill', 'yellow');

        chart.svgElement.append('rect')
          .attr('x', chart.metricsPanel[1].x)
          .attr('y', chart.metricsPanel[1].y)
          .attr('width', chart.metricsPanel[1].width)
          .attr('height', chart.metricsPanel[1].height)
          .attr('fill', 'green');

        chart.svgElement.append('rect')
          .attr('x', chart.metricsPanel[2].x)
          .attr('y', chart.metricsPanel[2].y)
          .attr('width', chart.metricsPanel[2].width)
          .attr('height', chart.metricsPanel[2].height)
          .attr('fill', 'pink');
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
        chart.svgElement.append('line')
          .attr(
            {
              'class': 'nlsn-chart-divider',
              'x1': chart.centerDividerPanel.horizontalPanel.x1,
              'x2': chart.centerDividerPanel.horizontalPanel.x2,
              'y1': chart.centerDividerPanel.horizontalPanel.y1,
              'y2': chart.centerDividerPanel.horizontalPanel.y2,
              'fill': 'none',
              'shape-rendering': 'crispEdges',
              'stroke': chart.options.gridColor,
              'stroke-width': chart.options.gridStrokeWidth
            });

        chart.svgElement.append('line')
          .attr(
            {
              'class': 'nlsn-chart-divider',
              'x1': chart.centerDividerPanel.verticlePanel.x1,
              'x2': chart.centerDividerPanel.verticlePanel.x2,
              'y1': chart.centerDividerPanel.verticlePanel.y1,
              'y2': chart.centerDividerPanel.verticlePanel.y2,
              'fill': 'none',
              'shape-rendering': 'crispEdges',
              'stroke': chart.options.gridColor,
              'stroke-width': chart.options.gridStrokeWidth
            });

      }

      function drawLabels(chart) {
        // Iterate options metrics, draw label.
        var metric;
        for (var i = 0; i < chart.metrics.length; i++) {
          chart.svgElement.append('text')
            .attr('x', ((chart.metricsPanel[i].x + (chart.metricsPanel[i].width / 2)) + chart.options.metrics[i].marginLabel.left) - chart.options.metrics[i].marginLabel.right)
            .attr('y', ((chart.metricsPanel[i].y + chart.metricsPanel[i].height) + chart.options.metrics[i].marginLabel.top) - chart.options.metrics[i].marginLabel.bottom)
            .attr('text-anchor', 'middle')
            .attr('font-size', chart.options.metrics[i].labelFontSize)
            .attr('fill', chart.options.metrics[i].labelColor)
            .text(chart.metrics[i].label);
        }
      }

      function drawMetrics(chart) {
        var metricColor;
        for (var i = 0; i < chart.metrics.length; i++) {
          if (chart.metrics[i].value < 0) {
            metricColor = chart.options.metrics[i].negativeValueColor;
          }
          else {
            metricColor = chart.options.metrics[i].valueColor;
          }
          chart.svgElement.append('text')
            .attr('x', ((chart.metricsPanel[i].x + (chart.metricsPanel[i].width / 2)) + chart.options.metrics[i].marginValue.left) - chart.options.metrics[i].marginValue.right)
            .attr('y', ((chart.metricsPanel[i].y + chart.metricsPanel[i].height) + chart.options.metrics[i].marginValue.top) - chart.options.metrics[i].marginValue.bottom)
            .attr('text-anchor', 'middle')
            .attr('font-size', chart.options.metrics[i].valueFontSize)
            .attr('fill', metricColor)
            .text(d3.format(chart.options.metrics[i].valueFormat)(chart.metrics[i].value / 100));
        }
      }

    }])
;
