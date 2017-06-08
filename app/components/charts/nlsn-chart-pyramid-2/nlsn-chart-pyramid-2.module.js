'use strict';

angular.module('nlsnChart.Pyramid2.module', [])
  .directive('nlsnChartPyramid2', [
    '$window',
    'nlsnDataSvc',
    function ($window, nlsnDataSvc) {
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

        var chart = {};
        chart.baseElement = baseElement;
        chart.data = newValue.data;
        chart.heading = newValue.heading;

        nv.utils.windowResize(onResize);

        function onResize() {
          //get window size
          var availableWidth = $window.innerWidth;
          var availableHeight = $window.innerHeight;
          var isUpdate = false;
          if ((availableWidth !== chart.width) && (availableWidth >= chart.config.minWidth) && (availableWidth <= chart.config.maxWidth)) {
            isUpdate = true;
            calculateWidth(availableWidth);
          }
          if ((availableHeight !== chart.height) && (availableHeight >= chart.config.minHeight) && (availableHeight <= chart.config.maxHeight)) {
            isUpdate = true;
            calculateHeight(availableHeight);
          }
          if (!isUpdate) {
            return;
          }

          // Redraw chart
          drawBaseElement(chart);
          drawHeadings(chart);
          drawDataPanel(chart);
          drawMetricsPanels(chart);
          drawRecordLabels(chart);
          drawMetricsData(chart);
          drawTooltips(chart);
          drawAxes(chart);
          drawCenterDivider(chart);
        }

        function calculateWidth(width) {
          //console.log('availableWidth=' + width);
          //console.log('width=' + chart.width);
          chart.width = width;

          chart.dataPanel.width = chart.width - (chart.config.margin.left + chart.config.margin.right);

          chart.metricsPanel[0].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
          chart.metricsPanel[1].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
          chart.metricsPanel[0].xScale = d3.scale.linear().domain([chart.metricsPanel[0].max, 0]).range([0, chart.metricsPanel[0].width]);
          chart.metricsPanel[1].xScale = d3.scale.linear().domain([0, chart.metricsPanel[1].max]).range([0, chart.metricsPanel[1].width]);

          // Do the config conditional calculations
          switch (chart.config.recordLabelPosition) {
            case 'left':
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.config.recordLabelWidth + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
              break;
            case 'center':
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.recordLabelWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x + (chart.dataPanel.width / 2); // For middle anchor
              break;
            case 'right':
              chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
              chart.recordLabelPanel.x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.metricsPanel[1].width + chart.config.centerDividerWidth + chart.config.recordLabelWidth; // For end anchor
              break;
          }

          // Position the axis panels for each metric.
          chart.metricsPanel[0].axisPanel.x = chart.metricsPanel[0].x + chart.dataPanel.x;
          chart.metricsPanel[1].axisPanel.x = chart.metricsPanel[1].x + chart.dataPanel.x;
        }

        function calculateHeight(height) {
          //console.log('availableHeight=' + height);
          //console.log('height=' + chart.height);
          chart.height = height;

          chart.dataPanel.height = chart.height - (chart.config.margin.top + chart.config.margin.bottom);
          chart.dataPanel.yScale = d3.scale.linear().domain([0, chart.data.length]).range([0, chart.dataPanel.height]);
          chart.dataPanel.rowHeight = chart.dataPanel.height / chart.data.length;

          // Position the axis panels for each metric.
          chart.metricsPanel[0].axisPanel.y = chart.metricsPanel[0].y + chart.dataPanel.height;
          chart.metricsPanel[1].axisPanel.y = chart.metricsPanel[1].y + chart.dataPanel.height;
        }

        configureChart(chart);
        createPanels(chart);
        calculateSettings(chart);
        drawBaseElement(chart);
        drawHeadings(chart);
        drawDataPanel(chart);
        drawMetricsPanels(chart);
        drawRecordLabels(chart);
        drawMetricsData(chart);
        drawTooltips(chart);
        drawAxes(chart);
        drawCenterDivider(chart);
      }

      function configureChart(chart) {
        chart.config = {};

        // Configurable properties
        chart.config.width = 800;
        chart.config.height = 500;
        chart.config.minWidth = 400;
        chart.config.minHeight = 300;
        chart.config.maxWidth = 1200;
        chart.config.maxHeight = 800;
        chart.config.margin = {top: 30, right: 20, bottom: 30, left: 6};
        chart.config.isShowMetrics = false;
        chart.config.metric1BarColor = '#41a6f4';
        chart.config.metric2BarColor = '#42f4e8';
        chart.config.rowSpacerHeight = 4;
        chart.config.headingMarginBottom = 8;
        // Position of label for each row, left/center/right
        chart.config.recordLabelPosition = 'left';
        // Alignment of label for each row, start/middle/end
        chart.config.recordLabelAlign = 'start';
        chart.config.centerDividerWidth = 2;
        chart.config.centerDividerColor = '#000000';
        chart.config.recordLabelWidth = 120;
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
        chart.width = chart.config.width;
        chart.height = chart.config.height;

        chart.dataPanel.width = chart.width - (chart.config.margin.left + chart.config.margin.right);
        chart.dataPanel.height = chart.height - (chart.config.margin.top + chart.config.margin.bottom);
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
        chart.metricsPanel[0].xScale = d3.scale.linear().domain([chart.metricsPanel[0].max, 0]).range([0, chart.metricsPanel[0].width]);
        chart.metricsPanel[1].xScale = d3.scale.linear().domain([0, chart.metricsPanel[1].max]).range([0, chart.metricsPanel[1].width]);
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
        chart.baseElement.selectAll('*').remove();

        // Set chart size
        chart.baseElement.attr('width', chart.config.width)
          .attr('height', chart.config.height);
      }

      function drawHeadings(chart) {
        // Heading metric1 label
        // X is set to middle of column to use with text anchor middle
        chart.baseElement.append('text')
          .attr('class', 'nlsn-chart-metric-label')
          .text(chart.heading.metric1Label)
          .attr('x', chart.metricsPanel[0].x + (chart.metricsPanel[0].width / 2))
          .attr('y', chart.config.margin.top - chart.config.headingMarginBottom)
          .attr('text-anchor', 'middle');

        // Heading metric2 label
        // X is set to middle of column to use with text anchor middle
        chart.baseElement.append('text')
          .attr('class', 'nlsn-chart-metric-label')
          .text(chart.heading.metric2Label)
          .attr('x', chart.metricsPanel[1].x + (chart.metricsPanel[1].width / 2))
          .attr('y', chart.config.margin.top - chart.config.headingMarginBottom)
          .attr('text-anchor', 'middle');
      }

      function drawDataPanel(chart) {
        chart.dataPanel.baseElement = chart.baseElement.append('g')
          .attr('class', 'nlsn-chart-data-panel');

        chart.dataPanel.records = chart.dataPanel.baseElement.selectAll('g.nlsn-chart-data-panel-record')
          .data(chart.data)
          .enter().append('g')
          .attr('class', 'nlsn-chart-data-panel-record')
          .attr('transform', function (d, i) {
            return 'translate(' + chart.dataPanel.x + ',' + (chart.dataPanel.y + chart.dataPanel.yScale(i)) + ')';
          });
      }

      function drawGrid(chart) {

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

        chart.baseElement.call(chart.tipMetric1);
        chart.baseElement.call(chart.tipMetric2);

        // Bar metric1
        chart.dataPanel.records.selectAll('rect.nlsn-chart-metric-1-bar')
          .on('mouseover', chart.tipMetric1.show)
          .on('mouseout', chart.tipMetric1.hide);

        // Bar metric2
        chart.dataPanel.records.selectAll('rect.nlsn-chart-metric-2-bar')
          .on('mouseover', chart.tipMetric2.show)
          .on('mouseout', chart.tipMetric2.hide);

      }

      function drawAxes(chart) {
        chart.metricsPanel[0].axisPanel.xAxis = d3.svg.axis()
          .scale(chart.metricsPanel[0].xScale)
          .orient('bottom')
          .ticks(5)
          .tickFormat(d3.format('s'));

        chart.metricsPanel[1].axisPanel.xAxis = d3.svg.axis()
          .scale(chart.metricsPanel[1].xScale)
          .orient('bottom')
          .ticks(5)
          .tickFormat(d3.format('s'));

        chart.dataPanel.baseElement.append('g')
          .attr('class', 'nlsn-chart-axis nlsn-chart-axis-0')
          .attr('transform', 'translate(' + chart.metricsPanel[0].axisPanel.x + ',' + chart.metricsPanel[0].axisPanel.y + ')')
          .call(chart.metricsPanel[0].axisPanel.xAxis);

        chart.dataPanel.baseElement.append('g')
          .attr('class', 'nlsn-chart-axis nlsn-chart-axis-1')
          .attr('transform', 'translate(' + chart.metricsPanel[1].axisPanel.x + ',' + chart.metricsPanel[1].axisPanel.y + ')')
          .call(chart.metricsPanel[1].axisPanel.xAxis);

        if (chart.metricsPanel[0].isHideTickZero) {
          chart.dataPanel.baseElement.selectAll('.nlsn-chart-axis-0 .tick')
            .filter(function (d) {
              return d === 0;
            })
            .remove();
        }

        // chart.dataPanel.baseElement.selectAll('.nlsn-chart-axis-0 .tick').append('line')
        //   .attr(
        //     {
        //       'class': 'nlsn-chart-grid',
        //       'y1': chart.dataPanel.y,
        //       'y2': chart.dataPanel.height,
        //       'x1': function (d) {
        //         return chart.metricsPanel[0].xScale(d);
        //       },
        //       'x2': function (d) {
        //         return chart.metricsPanel[0].xScale(d);
        //       },
        //       'fill': 'none',
        //       'shape-rendering': 'crispEdges',
        //       'stroke': 'black',
        //       'stroke-width': '1px'
        //     });
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

    }])
;
