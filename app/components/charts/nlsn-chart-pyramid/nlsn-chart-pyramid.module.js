'use strict';

angular.module('nlsnChart.pyramid.module', [])
  .directive('nlsnOpposingBarsChart', [
      'nlsnChartHelperSvc',
      'nlsnDataSvc',
      function (nlsnChartHelperSvc, nlsnDataSvc) {
        var containerElement;
        var theController = function ($element, $scope) {
          var vm = this;
          $scope.chartData = nlsnDataSvc.getChartDataPyramid();
        };

        return {
          bindToController: true,
          controller: theController,
          controllerAs: 'nlsnOpposingBarsChart',
          link: function (scope, element) {
            containerElement = d3.select(element[0]).append('div');
            scope.$watch('chartData', watchData, true);
          },
          restrict: 'E',
          scope: {},
          templateUrl: 'components/charts/nlsn-chart-pyramid/nlsn-chart-pyramid.html'
        };

        function watchData(newValue, oldValue, scope) {
          if (!(newValue && newValue.data && newValue.data.length)) {
            return;
          }
          renderChart();
        }

        function renderChart() {
          console.log('nlsnOpposingBarsChartCtrl.renderChart started');
          var chart = {};
          chart.containerElement = containerElement;
          chart.data = vm.data;
          chart.options = vm.chartOptions;
          chart.configs = vm.chartconfigs;
          configureChart(chart);
          createPanels(chart);
          calculateSettings(chart);
          drawBaseElement(chart);
          drawHeadings(chart);
          drawAxis(chart);
          drawGrid(chart);
          drawCenterDivider(chart);
          drawDataPanel(chart);
          drawMetricsPanels(chart);
          drawRecordLabels(chart);
          drawMetricsData(chart);
          drawTooltips(chart);
        }

        // Add or overwrite configurable properties. These are the hard-coded internal config settings.
        function configureChart(chart) {
          chart.config = {};

          chart.config.width = 800;
          chart.config.height = 800;
          chart.config.metric1BarColor = '#006699';
          chart.config.metric2BarColor = '#44aaaa';
          chart.config.rowSpacerHeight = chart.options.gapWidth || 4;
          chart.config.headingMarginBottom = 8;
          // Position of label for each row, left/middle/right
          chart.config.recordLabelPosition = 'left';
          // Alignment of label for each row, left/middle/right
          chart.config.recordLabelAlign = 'right';
          chart.config.centerDividerWidth = 4;
          chart.config.centerDividerColor = '#000000';
          chart.config.recordLabelWidth = 80;
          chart.config.recordLabelMargin = 4;
          chart.config.defaultColor1 = '#999999';
          chart.config.defaultColor2 = 'lightgray';
          chart.config.recordLabelColor = chart.config.defaultColor1;
          chart.config.headingLabelColor = chart.config.defaultColor1;
          chart.config.axisColor = chart.config.defaultColor1;
          chart.config.gridColor = chart.config.defaultColor2;
          chart.config.gridStrokeWidth = 1.5;
          chart.config.axisTopMargin = 4;
        }

        // Panels are virtual objects that need to move or transform.
        function createPanels(chart) {
          // Create a panel for the center divider
          chart.centerDividerPanel = {};

          // The dataPanel is the box containing the data graph area, includes record labels.
          chart.dataPanel = {};

          // Create a metrics panel for each metric.
          chart.metricsPanel = [];
          chart.metricsPanel[0] = {};
          chart.metricsPanel[1] = {};

          //Create an axis panel for each metric.
          chart.metricsPanel[0].axisPanel = {};
          chart.metricsPanel[1].axisPanel = {};

          // Create a panel for the record labels
          chart.recordLabelPanel = {};
        }

        function calculateSettings(chart) {
          chart.dataPanel.width = chart.config.width - (chart.options.margin.left + chart.options.margin.right);
          chart.dataPanel.height = chart.config.height - (chart.options.margin.top + chart.options.margin.bottom);
          chart.dataPanel.x = 0 + chart.options.margin.left;
          chart.dataPanel.y = 0 + chart.options.margin.top;
          chart.dataPanel.rowHeight = chart.dataPanel.height / chart.data.length;

          chart.dataPanel.yScale = d3.scale.linear()
            .domain([0, chart.data.length])
            .range([0, chart.dataPanel.height]);

          // Maximum data value is used for scale. Needed for each of the metrics.
          chart.metricsPanel[0].max = d3.max(chart.data, function (d) {
            return d.metric1;
          });
          chart.metricsPanel[1].max = d3.max(chart.data, function (d) {
            return d.metric2;
          });

          chart.metricsPanel[0].y = chart.dataPanel.y;
          chart.metricsPanel[1].y = chart.dataPanel.y;

          // Do the config conditional calculations
          switch (chart.config.recordLabelPosition) {
            case 'left':
              chart.metricsPanel[0].width = ((chart.dataPanel.width - (chart.config.recordLabelWidth + chart.config.recordLabelMargin)) - chart.config.centerDividerWidth) / 2;
              chart.metricsPanel[1].width = ((chart.dataPanel.width - (chart.config.recordLabelWidth + chart.config.recordLabelMargin)) - chart.config.centerDividerWidth) / 2;
              chart.metricsPanel[0].x = chart.dataPanel.x + chart.config.recordLabelWidth + chart.config.recordLabelMargin;
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.config.recordLabelWidth + chart.config.recordLabelMargin + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x;
              chart.metricsPanel[0].isHideTickZero = true;
              chart.isCenterDivider = true;
              break;
            case 'middle':
              chart.metricsPanel[0].width = ((chart.dataPanel.width - (chart.config.recordLabelWidth + (chart.config.recordLabelMargin * 2))) - chart.config.centerDividerWidth) / 2;
              chart.metricsPanel[1].width = ((chart.dataPanel.width - (chart.config.recordLabelWidth + (chart.config.recordLabelMargin * 2))) - chart.config.centerDividerWidth) / 2;
              chart.metricsPanel[0].x = chart.dataPanel.x;
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.recordLabelWidth + (chart.config.recordLabelMargin * 2);
              chart.recordLabelPanel.x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.recordLabelMargin;
              chart.metricsPanel[0].isHideTickZero = false;
              chart.isCenterDivider = false;
              break;
            case 'right':
              chart.metricsPanel[0].width = ((chart.dataPanel.width - (chart.config.recordLabelWidth + chart.config.recordLabelMargin)) - chart.config.centerDividerWidth) / 2;
              chart.metricsPanel[1].width = ((chart.dataPanel.width - (chart.config.recordLabelWidth + chart.config.recordLabelMargin)) - chart.config.centerDividerWidth) / 2;
              chart.metricsPanel[0].x = chart.dataPanel.x;
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.centerDividerWidth + chart.metricsPanel[1].width + chart.config.recordLabelMargin;
              chart.metricsPanel[0].isHideTickZero = true;
              chart.isCenterDivider = true;
              break;
          }

          chart.metricsPanel[0].xScale = d3.scale.linear()
            .domain([(chart.metricsPanel[0].max), 0])
            .range([0, chart.metricsPanel[0].width])
            .nice(6);

          chart.metricsPanel[1].xScale = d3.scale.linear()
            .domain([0, chart.metricsPanel[1].max])
            .range([0, chart.metricsPanel[1].width])
            .nice(6);

          switch (chart.config.recordLabelAlign) {
            case 'left':
              chart.recordLabelPanel.textAnchor = 'start';
              break;
            case 'middle':
              chart.recordLabelPanel.textAnchor = 'middle';
              chart.recordLabelPanel.x += chart.config.recordLabelWidth / 2;
              break;
            case 'right':
              chart.recordLabelPanel.textAnchor = 'end';
              chart.recordLabelPanel.x += chart.config.recordLabelWidth;
              break;
          }

          // Position the axis panels for each metric.
          chart.metricsPanel[0].axisPanel.y = chart.metricsPanel[0].y + chart.dataPanel.height;
          chart.metricsPanel[1].axisPanel.y = chart.metricsPanel[1].y + chart.dataPanel.height;
          chart.metricsPanel[0].axisPanel.x = chart.metricsPanel[0].x + chart.dataPanel.x;
          chart.metricsPanel[1].axisPanel.x = chart.metricsPanel[1].x + chart.dataPanel.x;

          // Position the center divider.
          chart.centerDividerPanel.x = chart.metricsPanel[0].x + chart.metricsPanel[0].width + chart.dataPanel.x;
          chart.centerDividerPanel.y = chart.dataPanel.y;
          chart.centerDividerPanel.height = chart.dataPanel.height;
        }

        function drawBaseElement(chart) {
          // Remove any existing chart elements.
          chart.containerElement.selectAll('*').remove();

          chart.svgElement = chart.containerElement.append('svg');

          chart.svgElement
            .attr('class', 'nlsn-chart-svg-content-responsive')
            .attr("viewBox", "0 0 " + chart.config.width + " " + chart.config.height)
            .attr('width', "100%")
            .attr('height', "100%")
            .attr("preserveAspectRatio", "xMinYMin meet");
        }

        function drawAxis(chart) {
          // Create a virtual axis group.
          chart.axisGroup = {};

          // Method axis() for metric 0
          chart.metricsPanel[0].axisPanel.xAxis = d3.svg.axis()
            .scale(chart.metricsPanel[0].xScale)
            .orient('bottom')
            .ticks(6)
            .tickSize(chart.config.axisTopMargin)
            .tickFormat(d3.format('s'));

          // Method axis() for metric 1
          chart.metricsPanel[1].axisPanel.xAxis = d3.svg.axis()
            .scale(chart.metricsPanel[1].xScale)
            .orient('bottom')
            .ticks(6)
            .tickSize(chart.config.axisTopMargin)
            .tickFormat(d3.format('s'));

          chart.axisGroup.baseElement = chart.svgElement.append('g')
            .attr('class', 'nlsn-chart-axis');

          chart.axisGroup.xBaseElement = chart.axisGroup.baseElement.append('g')
            .attr('class', 'nlsn-chart-axis-x');

          chart.axisGroup.xBaseElement.append('g')
            .attr('class', 'nlsn-chart-axis-0')
            .attr('transform', 'translate(' + chart.metricsPanel[0].axisPanel.x + ',' + chart.metricsPanel[0].axisPanel.y + ')')
            .attr('fill', chart.config.axisColor)
            .call(chart.metricsPanel[0].axisPanel.xAxis);

          chart.axisGroup.xBaseElement.append('g')
            .attr('class', 'nlsn-chart-axis-1')
            .attr('transform', 'translate(' + chart.metricsPanel[1].axisPanel.x + ',' + chart.metricsPanel[1].axisPanel.y + ')')
            .attr('fill', chart.config.axisColor)
            .call(chart.metricsPanel[1].axisPanel.xAxis);

          if (chart.metricsPanel[0].isHideTickZero) {
            chart.axisGroup.xBaseElement.selectAll('.nlsn-chart-axis-0 .tick')
              .filter(function (d) {
                return d === 0;
              })
              .remove();
          }

          // Y axis
          chart.axisGroup.yBaseElement = chart.axisGroup.baseElement.append('g')
            .attr('class', 'nlsn-chart-axis-y');

          chart.metricsPanel[0].axisPanel.yAxis = d3.svg.axis()
            .scale(chart.dataPanel.yScale)
            .orient('left')
            .ticks(3)
            .tickSize(0)
            .tickFormat('')
            .tickValues([0, chart.data.length]);

          chart.metricsPanel[1].axisPanel.yAxis = d3.svg.axis()
            .scale(chart.dataPanel.yScale)
            .orient('left')
            .ticks(3)
            .tickSize(0)
            .tickFormat('')
            .tickValues([0, chart.data.length]);

          chart.axisGroup.yBaseElement.append('g')
            .attr('class', 'nlsn-chart-axis-0')
            .attr('transform', 'translate(' + chart.metricsPanel[0].axisPanel.x + ',' + (chart.metricsPanel[0].axisPanel.y - chart.dataPanel.height) + ')')
            .call(chart.metricsPanel[0].axisPanel.yAxis);

          chart.axisGroup.yBaseElement.append('g')
            .attr('class', 'nlsn-chart-axis-1')
            .attr('transform', 'translate(' + chart.metricsPanel[1].axisPanel.x + ',' + (chart.metricsPanel[1].axisPanel.y - chart.dataPanel.height) + ')')
            .call(chart.metricsPanel[1].axisPanel.yAxis);
        }

        function drawGrid(chart) {
          // Grid lines - based on X axis
          chart.axisGroup.xBaseElement.selectAll('.tick').append('line')
            .attr(
              {
                'class': 'nlsn-chart-grid',
                'y1': 0 - chart.dataPanel.height,
                'y2': 0,
                'x1': 0,
                'x2': 0,
                'fill': 'none',
                'shape-rendering': 'crispEdges',
                'stroke': chart.config.gridColor,
                'stroke-width': chart.config.gridStrokeWidth
              });

          // Grid lines - based on Y axis - metric panel 0
          chart.axisGroup.yBaseElement.selectAll('.nlsn-chart-axis-0 .tick').append('line')
            .attr(
              {
                'class': 'nlsn-chart-grid',
                'y1': 0,
                'y2': 0,
                'x1': 0,
                'x2': chart.metricsPanel[0].width,
                'fill': 'none',
                'shape-rendering': 'crispEdges',
                'stroke': chart.config.gridColor,
                'stroke-width': chart.config.gridStrokeWidth
              });

          // Grid lines - based on Y axis - metric panel 1
          chart.axisGroup.yBaseElement.selectAll('.nlsn-chart-axis-1 .tick').append('line')
            .attr(
              {
                'class': 'nlsn-chart-grid',
                'y1': 0,
                'y2': 0,
                'x1': 0,
                'x2': chart.metricsPanel[1].width,
                'fill': 'none',
                'shape-rendering': 'crispEdges',
                'stroke': chart.config.gridColor,
                'stroke-width': chart.config.gridStrokeWidth
              });

          if (chart.metricsPanel[0].isHideTickZero) {
            chart.axisGroup.xBaseElement.selectAll('.nlsn-chart-axis-1 line')
              .filter(function (d) {
                return d === 0;
              })
              .remove();
          }
        }

        function drawCenterDivider(chart) {
          if (!chart.isCenterDivider) {
            return;
          }

          chart.axisGroup.baseElement.append('rect')
            .attr('class', 'nlsn-chart-center-divider')
            .attr('x', chart.centerDividerPanel.x)
            .attr('y', chart.centerDividerPanel.y)
            .attr('height', chart.centerDividerPanel.height)
            .attr('width', chart.config.centerDividerWidth)
            .attr('fill', chart.config.centerDividerColor)
            .attr('shape-rendering', 'crispEdges');
        }

        function drawHeadings(chart) {
          // Create a virtual group.
          chart.headingGroup = {};

          chart.headingGroup.baseElement = chart.svgElement.append('g')
            .attr('class', 'nlsn-chart-heading');

          // Heading metric1 labe1
          // X is set to middle of column to use with text anchor middle
          chart.headingGroup.baseElement.append('text')
            .attr('class', 'nlsn-chart-metric-label')
            .text(chart.options.metric1Label)
            .attr('x', chart.metricsPanel[0].x + (chart.metricsPanel[0].width / 2) + chart.options.margin.left)
            .attr('y', chart.options.margin.top - chart.config.headingMarginBottom)
            .attr('text-anchor', 'middle')
            .attr('fill', chart.config.headingLabelColor);

          // Heading metric1 label
          // X is set to middle of column to use with text anchor middle
          chart.headingGroup.baseElement.append('text')
            .attr('class', 'nlsn-chart-metric-label')
            .text(chart.options.metric2Label)
            .attr('x', chart.metricsPanel[1].x + (chart.metricsPanel[1].width / 2) + chart.options.margin.left)
            .attr('y', chart.options.margin.top - chart.config.headingMarginBottom)
            .attr('text-anchor', 'middle')
            .attr('fill', chart.config.headingLabelColor);
        }

        function drawDataPanel(chart) {
          chart.dataPanel.baseElement = chart.svgElement.append('g')
            .attr('class', 'nlsn-chart-data-panel');

          chart.dataPanel.records = chart.dataPanel.baseElement.selectAll('g.nlsn-chart-data-panel-record')
            .data(chart.data)
            .enter().append('g')
            .attr('class', 'nlsn-chart-data-panel-record')
            .attr('transform', function (d, i) {
              return 'translate(' + chart.dataPanel.x + ',' + (chart.dataPanel.y + chart.dataPanel.yScale(i)) + ')';
            });
        }

        function drawMetricsPanels(chart) {
          // Left bar for metric1
          chart.dataPanel.records.append('rect')
            .attr('class', 'nlsn-chart-metric-0-bar')
            .attr('height', chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
            .attr('x', chart.metricsPanel[0].x)
            .attr('fill', chart.config.metric1BarColor)
            .attr('shape-rendering', 'crispEdges');

          // Right bar for metric2
          chart.dataPanel.records.append('rect')
            .attr('class', 'nlsn-chart-metric-1-bar')
            .attr('height', chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
            .attr('x', chart.metricsPanel[1].x)
            .attr('fill', chart.config.metric2BarColor)
            .attr('shape-rendering', 'crispEdges');
        }

        function drawRecordLabels(chart) {
          // Record labels
          chart.dataPanel.records.append('text')
            .attr('class', 'nlsn-chart-record-label')
            .attr('x', chart.recordLabelPanel.x)
            .attr('dy', '1em')
            .attr('text-anchor', chart.recordLabelPanel.textAnchor)
            .attr('fill', chart.config.recordLabelColor)
            .text(function (d) {
              return d.label;
            });
        }

        function drawMetricsData(chart) {
          var formatMetric = d3.format(',.0f');

          var bars = d3.selectAll('g.nlsn-chart-data-panel-record')
            .data(chart.data);

          // Bar metric1
          bars.selectAll('rect.nlsn-chart-metric-0-bar')
            .attr('x', function (d) {
              return (chart.metricsPanel[0].x + chart.metricsPanel[0].xScale(d.metric1));
            })
            .attr('width', function (d) {
              return (chart.metricsPanel[0].width - chart.metricsPanel[0].xScale(d.metric1));
            });

          // Bar metric2
          bars.selectAll('rect.nlsn-chart-metric-1-bar')
            .attr('x', function (d) {
              return chart.metricsPanel[1].x;
            })
            .attr('width', function (d) {
              return chart.metricsPanel[1].xScale(d.metric2);
            });
        }

        function drawTooltips(chart) {
          chart.tipMetric0 = d3.tip()
            .attr('class', 'nlsn-chart-tip')
            .html(function (d) {
              var theHtml = '<div class="nlsn-chart-tooltip">';
              theHtml += '<span class="nlsn-chart-tooltip-dimension">' + d.sharedLabel + '</span>';
              theHtml += '<span class="nlsn-chart-tooltip-metric-color" style="background-color:';
              theHtml += chart.config.metric1BarColor + '">&nbsp;</span>';
              theHtml += '<span class="nlsn-chart-tooltip-heading">' + chart.options.metric1Label + '</span>';
              theHtml += '<span class="nlsn-chart-tooltip-metric">' + d.metric1 + '</span>';
              theHtml += '</div>';
              return theHtml;
            });

          chart.tipMetric1 = d3.tip()
            .attr('class', 'nlsn-chart-tip')
            .html(function (d) {
              var theHtml = '<div class="nlsn-chart-tooltip">';
              theHtml += '<span class="nlsn-chart-tooltip-dimension">' + d.sharedLabel + '</span>';
              theHtml += '<span class="nlsn-chart-tooltip-metric-color" style="background-color:';
              theHtml += chart.config.metric2BarColor + '">&nbsp;</span>';
              theHtml += '<span class="nlsn-chart-tooltip-heading">' + chart.options.metric2Label + '</span>';
              theHtml += '<span class="nlsn-chart-tooltip-metric">' + d.metric2 + '</span>';
              theHtml += '</div>';
              return theHtml;
            });

          chart.svgElement.call(chart.tipMetric0);
          chart.svgElement.call(chart.tipMetric1);

          // Bar metric1
          chart.dataPanel.records.selectAll('rect.nlsn-chart-metric-0-bar')
            .on('mouseover', chart.tipMetric0.show)
            .on('mouseout', chart.tipMetric0.hide);

          // Bar metric2
          chart.dataPanel.records.selectAll('rect.nlsn-chart-metric-1-bar')
            .on('mouseover', chart.tipMetric1.show)
            .on('mouseout', chart.tipMetric1.hide);

        }

      }
    ]
  );
