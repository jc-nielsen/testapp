'use strict';

angular.module('nlsnChart.Pyramid.module', [])
  .directive('nlsnChartPyramid', [
    'nlsnDataSvc',
    function (nlsnDataSvc) {
      var mySvg;
      var theController = function ($scope) {
        $scope.chartData = nlsnDataSvc.getChartDataPyramid();
      };

      return {
        bindToController: true,
        controller: theController,
        restrict: 'E',
        scope: {},
        link: function (scope, element) {
          mySvg = d3.select(element[0]).append("svg");
          scope.$watch("chartData", renderChart, true);
        }
      };

      function renderChart(newValue, oldValue, scope) {
        var chart = {};

        if (!(newValue && newValue.data && newValue.data.length)) {
          return;
        }
        chart.data = newValue.data;
        chart.heading = newValue.heading;

        configureChart(chart);
        drawBaseElement(chart);
        drawHeadings(chart);
        drawDataPanel(chart);
        drawMetricsPanels(chart);
        drawRecordLabels(chart);
        drawMetricsData(chart);
        drawTooltips(chart);
        drawGrid(chart);
      }

      function configureChart(chart) {
        chart.config = {};

        // Configurable properties
        chart.config.width = 600;
        chart.config.height = 400;
        chart.config.isShowMetrics = false;
        //chart.config.isShowMetrics = true;
        chart.config.metric1BarColor = '#41a6f4';
        chart.config.metric2BarColor = '#42f4e8';
        chart.config.rowSpacerHeight = 4;
        chart.config.marginTop = 40;
        chart.config.headingMarginBottom = 8;
        // Position of label for each row, left/center/right
        chart.config.recordLabelPosition = 'left';
        // Alignment of label for each row, start/middle/end
        chart.config.recordLabelAlign = 'start';
        chart.config.centerDividerWidth = 2;
        chart.config.recordLabelWidth = 120;

        // The dataPanel is the box containing the data graph area, includes record labels.
        chart.dataPanel = {};

        // Create a metrics panel for each metric.
        chart.metricsPanel = [];
        chart.metricsPanel[0] = {};
        chart.metricsPanel[1] = {};

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

        // Create a panel for the record labels
        chart.recordLabelPanel = {};

        chart.dataPanel.width = chart.config.width;
        chart.dataPanel.x = 0;
        chart.metricsPanel[0].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
        chart.metricsPanel[1].width = ((chart.dataPanel.width - chart.config.recordLabelWidth) - chart.config.centerDividerWidth) / 2;
        chart.dataPanel.height = chart.config.height - chart.config.marginTop;
        chart.dataPanel.yScale = d3.scale.linear().domain([0, chart.data.length]).range([0, chart.dataPanel.height]);
        chart.dataPanel.rowHeight = chart.dataPanel.height / chart.data.length;
        chart.metricsPanel[0].xScale = d3.scale.linear().domain([0, maxMetric1]).range([0, chart.metricsPanel[0].width]);
        chart.metricsPanel[1].xScale = d3.scale.linear().domain([0, maxMetric2]).range([0, chart.metricsPanel[1].width]);
        var commas = d3.format(",.0f");

        // Do the conditional calculations
        switch (chart.config.recordLabelPosition) {
          case 'left':
            chart.metricsPanel[0].x = chart.config.recordLabelWidth;
            chart.metricsPanel[1].x = chart.dataPanel.x + chart.config.recordLabelWidth + chart.metricsPanel[0].width + chart.config.centerDividerWidth;
            chart.recordLabelPanel.x = 0; // For start anchor
            break;
          case 'center':
            chart.metricsPanel[0].x = chart.dataPanel.x;
            chart.metricsPanel[1].x = chart.dataPanel.x + chart.metricsPanel[0].width + chart.config.recordLabelWidth;
            chart.recordLabelPanel.x = chart.dataPanel.width / 2; // For middle anchor
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
        mySvg.selectAll("*").remove();

        // Set chart size
        mySvg.attr("width", chart.config.width)
          .attr("height", chart.config.height);
      }

      function drawHeadings(chart) {
        // Heading metric1 label
        // X is set to middle of column to use with text anchor middle
        mySvg.append("text")
          .attr("class", "nlsn-chart-metric-label")
          .text(chart.heading.metric1Label)
          .attr("x", chart.metricsPanel[0].x + (chart.metricsPanel[0].width / 2))
          .attr("y", chart.config.marginTop - chart.config.headingMarginBottom)
          .attr("text-anchor", "middle");

        // Heading metric2 label
        // X is set to middle of column to use with text anchor middle
        mySvg.append("text")
          .attr("class", "nlsn-chart-metric-label")
          .text(chart.heading.metric2Label)
          .attr("x", chart.metricsPanel[1].x + (chart.metricsPanel[1].width / 2))
          .attr("y", chart.config.marginTop - chart.config.headingMarginBottom)
          .attr("text-anchor", "middle");
      }

      function drawDataPanel(chart) {
        chart.dataPanel.baseElement = mySvg.selectAll("g.nlsn-chart-data-panel")
          .data(chart.data)
          .enter().append("g")
          .attr("class", "nlsn-chart-data-panel")
          .attr("transform", function (d, i) {
            return "translate(" + chart.dataPanel.x + "," + (chart.dataPanel.yScale(i) + chart.config.marginTop) + ")";
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

        //TODO
        // Left side metric value text
        if (chart.config.isShowMetrics) {
          chart.dataPanel.baseElement.append("text")
            .attr("class", "nlsn-chart-metric-1-bar")
            .attr("dx", -3)
            .attr("dy", "1em")
            .attr("text-anchor", "end");
        }

        //TODO
        // Right bar for metric2
        chart.dataPanel.baseElement.append("rect")
          .attr("class", "nlsn-chart-metric-2-bar")
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("x", chart.metricsPanel[1].x)
          .attr("fill", chart.config.metric2BarColor);

        //TODO
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
            .transition()
            .attr("x", function (d) {
              return chart.metricsPanel[0].xScale(d.metric1);
            });
        }

        // Bar metric1
        bars.selectAll("rect.nlsn-chart-metric-1-bar")
          .transition()
          .attr("x", function (d) {
            return (chart.metricsPanel[0].x + chart.metricsPanel[0].width) - chart.metricsPanel[0].xScale(d.metric1);
          })
          .attr("width", function (d) {
            return chart.metricsPanel[0].xScale(d.metric1);
          });

        // Bar metric2
        bars.selectAll("rect.nlsn-chart-metric-2-bar")
          .transition()
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
            .transition()
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

        mySvg.call(chart.tipMetric1);
        mySvg.call(chart.tipMetric2);

        // Bar metric1
        chart.dataPanel.baseElement.selectAll("rect.nlsn-chart-metric-1-bar")
          .on('mouseover', chart.tipMetric1.show)
          .on('mouseout', chart.tipMetric1.hide);

        // Bar metric2
        chart.dataPanel.baseElement.selectAll("rect.nlsn-chart-metric-2-bar")
          .on('mouseover', chart.tipMetric2.show)
          .on('mouseout', chart.tipMetric2.hide);

      }

      function drawGrid(chart) {
      }

    }])
;
