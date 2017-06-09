'use strict';

angular.module('nlsnChart.Pyramid2.module', [])
    .directive('nlsnChartPyramid2', [
      '$document',
      '$window',
      'nlsnDataSvc',
      function ($document, $window, nlsnDataSvc) {
        var containerElement;
        var theController = function ($scope) {
          $scope.chartData = nlsnDataSvc.getChartDataPyramid();
        };

        return {
          bindToController: true,
          controller: theController,
          restrict: 'E',
          scope: {},
          link: function (scope, element) {
            containerElement = d3.select(element[0]).append('div');
            scope.$watch('chartData', renderChart, true);
          }
        };

        function renderChart(newValue, oldValue, scope) {
          if (!(newValue && newValue.data && newValue.data.length)) {
            return;
          }

          var chart = {};
          chart.containerElement = containerElement;
          chart.data = newValue.data;
          chart.heading = newValue.heading;

          nv.utils.windowResize(onResize);

          function onResize() {
            var element = chart.containerElement[0][0];

            // Extract the width and height that was computed by CSS.
            var width = element.clientWidth;
            var height = element.clientHeight;
            console.log('width =' + width);
            console.log('height =' + height);

            //get window size
            //var availableWidth = $window.innerWidth;
            //var availableHeight = $window.innerHeight;

            //chart.svgElement
            //    .attr('width', width)
            //    .attr('height', height);
          }

          configureChart(chart);
          createPanels(chart);
          calculateSettings(chart);
          drawBaseElement(chart);
          drawHeadings(chart);
          drawDataPanel(chart);
          drawAxis(chart);
          drawGrid(chart);
          drawCenterDivider(chart);
          drawMetricsPanels(chart);
          drawRecordLabels(chart);
          drawMetricsData(chart);
          drawTooltips(chart);
        }

        function configureChart(chart) {
          chart.config = {};

          // Configurable properties
          chart.config.width = 600;
          chart.config.height = 300;
          chart.config.minWidth = 400;
          chart.config.minHeight = 200;
          chart.config.maxWidth = 1200;
          chart.config.maxHeight = 800;
          chart.config.margin = {top: 30, right: 20, bottom: 30, left: 6};
          chart.config.isShowMetrics = false;
          chart.config.metric1BarColor = '#006699';
          chart.config.metric2BarColor = '#44aaaa';
          chart.config.rowSpacerHeight = 2;
          chart.config.headingMarginBottom = 8;
          // Position of label for each row, left/center/right
          chart.config.recordLabelPosition = 'left';
          // Alignment of label for each row, start/middle/end
          chart.config.recordLabelAlign = 'start';
          chart.config.centerDividerWidth = 2;
          chart.config.centerDividerColor = '#000000';
          chart.config.recordLabelWidth = 120;
          chart.config.defaultColor1 = '#999999';
          chart.config.defaultColor2 = 'lightgray';
          chart.config.recordLabelColor = chart.config.defaultColor1;
          chart.config.headingLabelColor = chart.config.defaultColor1;
          chart.config.axisColor = chart.config.defaultColor2;
          chart.config.gridColor = chart.config.defaultColor2;
        }

        function createPanels(chart) {
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

          // Create a panel for the center divider
          chart.centerDividerPanel = {};
        }

        function calculateSettings(chart) {
          chart.dataPanel.width = chart.config.width - (chart.config.margin.left + chart.config.margin.right);
          chart.dataPanel.height = chart.config.height - (chart.config.margin.top + chart.config.margin.bottom);
          chart.dataPanel.x = 0 + chart.config.margin.left;
          chart.dataPanel.y = 0 + chart.config.margin.top;
          chart.dataPanel.yScale = d3.scale.linear().domain([0, chart.data.length]).range([0, chart.dataPanel.height]);
          chart.dataPanel.rowHeight = chart.dataPanel.height / chart.data.length;

          // Maximum data value is used for scale. Needed for each of the metrics.
          chart.metricsPanel[0].max = d3.max(chart.data, function (d) {
            return d.metric1;
          });
          chart.metricsPanel[1].max = d3.max(chart.data, function (d) {
            return d.metric2;
          });
          // Minimum is not required when scaled to zero minimum.
          chart.metricsPanel[0].min = d3.min(chart.data, function (d) {
            return d.metric1;
          });
          chart.metricsPanel[1].min = d3.min(chart.data, function (d) {
            return d.metric2;
          });

          chart.metricsPanel[0].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
          chart.metricsPanel[1].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
          chart.metricsPanel[0].xScale = d3.scale.linear()
              .domain([chart.metricsPanel[0].max, 0])
              .range([0, chart.metricsPanel[0].width])
              .nice();
          chart.metricsPanel[1].xScale = d3.scale.linear()
              .domain([0, chart.metricsPanel[1].max])
              .range([0, chart.metricsPanel[1].width])
              .nice();
          chart.metricsPanel[0].y = chart.dataPanel.y;
          chart.metricsPanel[1].y = chart.dataPanel.y;

          // Do the config conditional calculations
          switch (chart.config.recordLabelPosition) {
            case 'left':
              chart.metricsPanel[0].x = chart.dataPanel.x + chart.config.recordLabelWidth;
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.config.recordLabelWidth + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x; // For start anchor
              chart.metricsPanel[0].isHideTickZero = true;
              chart.isCenterDivider = true;
              break;
            case 'center':
              chart.metricsPanel[0].x = chart.dataPanel.x;
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.recordLabelWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x + (chart.dataPanel.width / 2); // For middle anchor
              chart.metricsPanel[0].isHideTickZero = false;
              chart.isCenterDivider = false;
              break;
            case 'right':
              chart.metricsPanel[0].x = chart.dataPanel.x;
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.metricsPanel[1].width + chart.config.centerDividerWidth + chart.config.recordLabelWidth; // For end anchor
              chart.metricsPanel[0].isHideTickZero = true;
              chart.isCenterDivider = true;
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

          chart.containerElement
              .attr('class', 'nlsn-chart-svg-container');

          chart.svgElement = chart.containerElement.append('svg');

          // Set chart size
          chart.svgElement
              .attr('class', 'nlsn-chart-svg-content-responsive')
              .attr("viewBox", "0 0 " + chart.config.width + " " + chart.config.height)
              .attr('width', "100%")
              .attr('height', "100%")
              .attr("preserveAspectRatio", "xMinYMin meet");
        }

        function drawHeadings(chart) {
          // Heading metric1 label
          // X is set to middle of column to use with text anchor middle
          chart.svgElement.append('text')
              .attr('class', 'nlsn-chart-metric-label')
              .text(chart.heading.metric1Label)
              .attr('x', chart.metricsPanel[0].x + (chart.metricsPanel[0].width / 2))
              .attr('y', chart.config.margin.top - chart.config.headingMarginBottom)
              .attr('text-anchor', 'middle')
              .attr('stroke', chart.config.headingLabelColor);

          // Heading metric2 label
          // X is set to middle of column to use with text anchor middle
          chart.svgElement.append('text')
              .attr('class', 'nlsn-chart-metric-label')
              .text(chart.heading.metric2Label)
              .attr('x', chart.metricsPanel[1].x + (chart.metricsPanel[1].width / 2))
              .attr('y', chart.config.margin.top - chart.config.headingMarginBottom)
              .attr('text-anchor', 'middle')
              .attr('stroke', chart.config.headingLabelColor);
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

        function drawAxis(chart) {
          chart.metricsPanel[0].axisPanel.xAxis = d3.svg.axis()
              .scale(chart.metricsPanel[0].xScale)
              .orient('bottom')
              .ticks(6)
              .tickSize(0)
              .tickFormat(d3.format('s'));

          chart.metricsPanel[1].axisPanel.xAxis = d3.svg.axis()
              .scale(chart.metricsPanel[1].xScale)
              .orient('bottom')
              .ticks(5)
              .tickSize(0)
              .tickFormat(d3.format('s'));

          chart.dataPanel.baseElement.append('g')
              .attr('class', 'nlsn-chart-axis nlsn-chart-axis-0')
              .attr('transform', 'translate(' + chart.metricsPanel[0].axisPanel.x + ',' + chart.metricsPanel[0].axisPanel.y + ')')
              .attr('stroke', chart.config.axisColor)
              .call(chart.metricsPanel[0].axisPanel.xAxis);

          chart.dataPanel.baseElement.append('g')
              .attr('class', 'nlsn-chart-axis nlsn-chart-axis-1')
              .attr('transform', 'translate(' + chart.metricsPanel[1].axisPanel.x + ',' + chart.metricsPanel[1].axisPanel.y + ')')
              .attr('stroke', chart.config.axisColor)
              .call(chart.metricsPanel[1].axisPanel.xAxis);

          if (chart.metricsPanel[0].isHideTickZero) {
            chart.dataPanel.baseElement.selectAll('.nlsn-chart-axis-0 .tick')
                .filter(function (d) {
                  return d === 0;
                })
                .remove();
          }
        }


        function drawGrid(chart) {

          // Grid lines - verticle
          chart.dataPanel.baseElement.selectAll('.nlsn-chart-axis .tick').append('line')
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
                    'stroke-width': '2px'
                  });
        }

        function drawCenterDivider(chart) {
          if (!chart.isCenterDivider) {
            return;
          }

          chart.dataPanel.baseElement.append('rect')
              .attr('class', 'nlsn-chart-center-divider')
              .attr('x', chart.centerDividerPanel.x)
              .attr('y', chart.centerDividerPanel.y)
              .attr('height', chart.centerDividerPanel.height)
              .attr('width', chart.config.centerDividerWidth)
              .attr('fill', chart.config.centerDividerColor);
        }

        function drawMetricsPanels(chart) {
          // Left bar for metric1
          chart.dataPanel.records.append('rect')
              .attr('class', 'nlsn-chart-metric-1-bar')
              .attr('height', chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
              .attr('x', chart.metricsPanel[0].x)
              .attr('fill', chart.config.metric1BarColor);

          //TODO needs margin
          // Left side metric value text
          if (chart.config.isShowMetrics) {
            chart.dataPanel.records.append('text')
                .attr('class', 'nlsn-chart-metric-1-bar')
                .attr('dx', -3)
                .attr('dy', '1em')
                .attr('text-anchor', 'end');
          }

          // Right bar for metric2
          chart.dataPanel.records.append('rect')
              .attr('class', 'nlsn-chart-metric-2-bar')
              .attr('height', chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
              .attr('x', chart.metricsPanel[1].x)
              .attr('fill', chart.config.metric2BarColor);

          //TODO needs margin
          if (chart.config.isShowMetrics) {
            chart.dataPanel.records.append('text')
                .attr('class', 'nlsn-chart-metric-2-bar')
                .attr('dx', 3)
                .attr('dy', '1em');
          }
        }

        function drawRecordLabels(chart) {
          // Record labels
          chart.dataPanel.records.append('text')
              .attr('class', 'nlsn-chart-record-label')
              .attr('x', chart.recordLabelPanel.x)
              .attr('dy', '1em')
              .attr('text-anchor', chart.config.recordLabelAlign)
              .attr('stroke', chart.config.recordLabelColor)
              .text(function (d) {
                return d.sharedLabel;
              });
        }

        function drawMetricsData(chart) {
          var formatMetric = d3.format(',.0f');

          var bars = d3.selectAll('g.nlsn-chart-data-panel-record')
              .data(chart.data);

          // Text metric1
          if (chart.config.isShowMetrics) {
            bars.selectAll('text.nlsn-chart-metric-1-bar')
                .text(function (d) {
                  return formatMetric(d.metric1);
                })
                .attr('x', function (d) {
                  return chart.metricsPanel[0].xScale(d.metric1);
                });
          }

          // Bar metric1
          //TODO xscale
          bars.selectAll('rect.nlsn-chart-metric-1-bar')
              .attr('x', function (d) {
                return (chart.metricsPanel[0].x + chart.metricsPanel[0].xScale(d.metric1));
              })
              .attr('width', function (d) {
                return (chart.metricsPanel[0].width - chart.metricsPanel[0].xScale(d.metric1));
              });

          // Bar metric2
          bars.selectAll('rect.nlsn-chart-metric-2-bar')
              .attr('x', function (d) {
                return chart.metricsPanel[1].x;
              })
              .attr('width', function (d) {
                return chart.metricsPanel[1].xScale(d.metric2);
              });

          // Text metric2
          if (chart.config.isShowMetrics) {
            bars.selectAll('text.nlsn-chart-metric-2-bar')
                .text(function (d) {
                  return formatMetric(d.metric2);
                })
                .attr('x', function (d) {
                  return chart.metricsPanel[1].xScale(d.metric2);
                });
          }
        }

        function drawTooltips(chart) {
          chart.tipMetric1 = d3.tip()
              .attr('class', 'nlsn-chart-tip')
              .html(function (d) {
                return d.metric1;
              });

          chart.tipMetric2 = d3.tip()
              .attr('class', 'nlsn-chart-tip')
              .html(function (d) {
                return d.metric2;
              });

          chart.svgElement.call(chart.tipMetric1);
          chart.svgElement.call(chart.tipMetric2);

          // Bar metric1
          chart.dataPanel.records.selectAll('rect.nlsn-chart-metric-1-bar')
              .on('mouseover', chart.tipMetric1.show)
              .on('mouseout', chart.tipMetric1.hide);

          // Bar metric2
          chart.dataPanel.records.selectAll('rect.nlsn-chart-metric-2-bar')
              .on('mouseover', chart.tipMetric2.show)
              .on('mouseout', chart.tipMetric2.hide);

        }

      }])
;
