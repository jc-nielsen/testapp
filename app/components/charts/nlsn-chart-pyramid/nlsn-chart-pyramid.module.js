'use strict';

angular.module('nlsnChart.Pyramid.module', [])
  .directive('nlsnChartPyramid', [
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
          baseElement = d3.select(element[0]).append("svg");
          scope.$watch("chartData", renderChart, true);
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
      }

      function configureChart(chart) {
        chart.config = {};

        // Configurable properties
        chart.config.width = 690;
        chart.config.height = 500;
        chart.config.margin = {top: 40, right: 30, bottom: 30, left: 40};
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
        chart.config.recordLabelWidth = 120;
      }

      function createPanels(chart) {
        // The dataPanel is the box containing the data graph area, includes record labels.
        chart.dataPanel = {};

        // Create a metrics panel for each metric.
        chart.metricsPanel = [];
        chart.metricsPanel[0] = {};
        chart.metricsPanel[1] = {};

        // Create a panel for the record labels
        chart.recordLabelPanel = {};
      }

      function calculateSettings(chart) {
        // Maximum data value is used for scale. Needed for each of the metrics.
        var maxMetric1 = d3.max(chart.data, function (d) {
          return d.metric1;
        });
        var maxMetric2 = d3.max(chart.data, function (d) {
          return d.metric2;
        });
        // Minimum is not required when scaled to zero minimum.
        var minMetric1 = d3.min(chart.data, function (d) {
          return d.metric1;
        });
        var minMetric2 = d3.min(chart.data, function (d) {
          return d.metric2;
        });

        chart.dataPanel.width = chart.config.width - (chart.config.margin.left + chart.config.margin.right);
        chart.dataPanel.height = chart.config.height - (chart.config.margin.top + chart.config.margin.bottom);
        chart.dataPanel.x = 0 + chart.config.margin.left;
        chart.dataPanel.y = 0 + chart.config.margin.top;
        chart.dataPanel.yScale = d3.scale.linear().domain([0, chart.data.length]).range([0, chart.dataPanel.height]);
        chart.dataPanel.rowHeight = chart.dataPanel.height / chart.data.length;

        chart.metricsPanel[0].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
        chart.metricsPanel[1].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
        chart.metricsPanel[0].xScale = d3.scale.linear().domain([0, maxMetric1]).range([0, chart.metricsPanel[0].width]);
        chart.metricsPanel[1].xScale = d3.scale.linear().domain([0, maxMetric2]).range([0, chart.metricsPanel[1].width]);
        chart.metricsPanel[0].y = chart.dataPanel.y;
        chart.metricsPanel[1].y = chart.dataPanel.y;

        // Do the conditional calculations
        switch (chart.config.recordLabelPosition) {
          case 'left':
            chart.metricsPanel[0].x = chart.dataPanel.x + chart.config.recordLabelWidth;
            chart.metricsPanel[1].x = chart.dataPanel.x + chart.config.recordLabelWidth + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
            chart.recordLabelPanel.x = chart.dataPanel.x; // For start anchor
            break;
          case 'center':
            chart.metricsPanel[0].x = chart.dataPanel.x;
            chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.recordLabelWidth;
            chart.recordLabelPanel.x = chart.dataPanel.x + (chart.dataPanel.width / 2); // For middle anchor
            break;
          case 'right':
            chart.metricsPanel[0].x = chart.dataPanel.x;
            chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
            chart.recordLabelPanel.x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.metricsPanel[1].width + chart.config.centerDividerWidth + chart.config.recordLabelWidth; // For end anchor
            break;
        }
      }

      function drawBaseElement(chart) {
        // Remove any existing chart elements.
        chart.baseElement.selectAll("*").remove();

        // Set chart size
        chart.baseElement.attr("width", chart.config.width)
          .attr("height", chart.config.height);
      }

      function drawHeadings(chart) {
        // Heading metric1 label
        // X is set to middle of column to use with text anchor middle
        chart.baseElement.append("text")
          .attr("class", "nlsn-chart-metric-label")
          .text(chart.heading.metric1Label)
          .attr("x", chart.metricsPanel[0].x + (chart.metricsPanel[0].width / 2))
          .attr("y", chart.config.margin.top - chart.config.headingMarginBottom)
          .attr("text-anchor", "middle");

        // Heading metric2 label
        // X is set to middle of column to use with text anchor middle
        chart.baseElement.append("text")
          .attr("class", "nlsn-chart-metric-label")
          .text(chart.heading.metric2Label)
          .attr("x", chart.metricsPanel[1].x + (chart.metricsPanel[1].width / 2))
          .attr("y", chart.config.margin.top - chart.config.headingMarginBottom)
          .attr("text-anchor", "middle");
      }

      function drawDataPanel(chart) {
        // chart.dataPanel.baseElement = mySvg.selectAll("g.nlsn-chart-data-panel")
        //   .data(chart.data)
        //   .enter().append("g")
        //   .attr("class", "nlsn-chart-data-panel")
        //   .attr("transform", function (d, i) {
        //     return "translate(" + chart.dataPanel.x + "," + (chart.dataPanel.y + chart.dataPanel.yScale(i)) + ")";
        //   });

        chart.dataPanel.baseElement = chart.baseElement.selectAll("g.nlsn-chart-data-panel")
          .data(chart.data)
          .enter().append("g")
          .attr("class", "nlsn-chart-data-panel")
          .attr("transform", function (d, i) {
            return "translate(" + chart.dataPanel.x + "," + (chart.dataPanel.y + chart.dataPanel.yScale(i)) + ")";
          });

        chart.dataPanel.row = chart.dataPanel.baseElement.append("rect")
          .attr("width", chart.config.width)
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("fill", "none");
      }

      function drawMetricsPanels(chart) {
        // Left bar for metric1
        chart.dataPanel.baseElement.append("rect")
          .attr("class", "nlsn-chart-metric-1-bar")
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("x", chart.metricsPanel[0].x)
          .attr("fill", chart.config.metric1BarColor);

        //TODO needs margin
        // Left side metric value text
        if (chart.config.isShowMetrics) {
          chart.dataPanel.baseElement.append("text")
            .attr("class", "nlsn-chart-metric-1-bar")
            .attr("dx", -3)
            .attr("dy", "1em")
            .attr("text-anchor", "end");
        }

        // Right bar for metric2
        chart.dataPanel.baseElement.append("rect")
          .attr("class", "nlsn-chart-metric-2-bar")
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("x", chart.metricsPanel[1].x)
          .attr("fill", chart.config.metric2BarColor);

        //TODO needs margin
        if (chart.config.isShowMetrics) {
          chart.dataPanel.baseElement.append("text")
            .attr("class", "nlsn-chart-metric-2-bar")
            .attr("dx", 3)
            .attr("dy", "1em");
        }
      }

      function drawRecordLabels(chart) {
        // Record labels
        chart.dataPanel.baseElement.append("text")
          .attr("class", "nlsn-chart-record-label")
          .attr("x", chart.recordLabelPanel.x)
          .attr("dy", "1em")
          .attr("text-anchor", chart.config.recordLabelAlign)
          .text(function (d) {
            return d.sharedLabel;
          });
      }

      function drawMetricsData(chart) {
        var bars = d3.selectAll("g.nlsn-chart-data-panel")
          .data(chart.data);

        // Text metric1
        if (chart.config.isShowMetrics) {
          bars.selectAll("text.nlsn-chart-metric-1-bar")
            .text(function (d) {
              return commas(d.metric1);
            })
            //.transition()
            .attr("x", function (d) {
              return chart.metricsPanel[0].xScale(d.metric1);
            });
        }

        // Bar metric1
        bars.selectAll("rect.nlsn-chart-metric-1-bar")
        //.transition()
          .attr("x", function (d) {
            return (chart.metricsPanel[0].x + chart.metricsPanel[0].width) - chart.metricsPanel[0].xScale(d.metric1);
          })
          .attr("width", function (d) {
            return chart.metricsPanel[0].xScale(d.metric1);
          });

        // Bar metric2
        bars.selectAll("rect.nlsn-chart-metric-2-bar")
        //          .transition()
          .attr("x", function (d) {
            return chart.metricsPanel[1].x;
          })
          .attr("width", function (d) {
            return chart.metricsPanel[1].xScale(d.metric2);
          });

        // Text metric2
        if (chart.config.isShowMetrics) {
          bars.selectAll("text.nlsn-chart-metric-2-bar")
            .text(function (d) {
              return commas(d.metric2);
            })
            //            .transition()
            .attr("x", function (d) {
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
        chart.dataPanel.baseElement.selectAll("rect.nlsn-chart-metric-1-bar")
          .on('mouseover', chart.tipMetric1.show)
          .on('mouseout', chart.tipMetric1.hide);

        // Bar metric2
        chart.dataPanel.baseElement.selectAll("rect.nlsn-chart-metric-2-bar")
          .on('mouseover', chart.tipMetric2.show)
          .on('mouseout', chart.tipMetric2.hide);

      }

      function drawAxes(chart) {
        return;

        chart.dataPanel.xAxis = [];

        chart.metricsPanel[0].xAxis = d3.svg.axis()
          .scale(chart.metricsPanel[0].xScale)
          .orient("bottom");

        chart.metricsPanel[1].xAxis = d3.svg.axis()
          .scale(chart.metricsPanel[1].xScale)
          .orient("bottom");

        // chart.dataPanel.yAxis = d3.svg.axis()
        //   .scale(chart.dataPanel.yScale)
        //   .orient("left");

        // chart.dataPanel.baseElement.append("g")
        //    .call(chart.metricsPanel[0].xAxis);

        // chart.baseElement.call(chart.metricsPanel[0].xAxis);
        // chart.baseElement.call(chart.metricsPanel[1].xAxis);

        // chart.dataPanel.baseElement.append("g")
        //   .call(xAxis);

        // chart.dataPanel.baseElement.append("g")
        //   .call(chart.dataPanel.xAxis[1]);

        chart.dataPanel.baseElement.append("g")
          .attr("class", "nlsn-chart-axis")
          //.attr("transform", "translate(" + chart.metricsPanel[0].x + "," + (chart.dataPanel.y + chart.dataPanel.height) + ")")
          .call(chart.metricsPanel[0].xAxis);

        //   chart.dataPanel.baseElement.append("g")
        //     .attr("class", "nlsn-chart-axis")
        //     .attr("transform", "translate(0," + chart.dataPanel.height + ")")
        //     .call(chart.dataPanel.xAxis[1]);
      }

    }])
;
