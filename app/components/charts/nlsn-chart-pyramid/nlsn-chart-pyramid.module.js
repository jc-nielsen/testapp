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
        //controllerAs: 'vm',
        restrict: 'E',
        scope: {},
        link: function (scope, element) {
          mySvg = d3.select(element[0]).append("svg");
          scope.$watch("chartData", renderChart, true);
        }
      };

      function renderChart(newValue, oldValue, scope) {
        if (!(newValue && newValue.data && newValue.data.length)) {
          return;
        }

        var chartData = newValue; //temp

        var chart = {};
        chart.data = newValue.data;
        chart.config = {};

        // Configurable properties
        chart.config.width = 600;
        chart.config.height = 400;
        chart.config.isShowMetrics = true;
        //chart.config.isShowMetrics = true;
        chart.config.metric1BarColor = '#41a6f4';
        chart.config.metric2BarColor = '#42f4e8';
        chart.config.rowSpacerHeight = 4;
        chart.config.marginTop = 40;
        chart.config.headingMarginBottom = 8;
        // Position of label for each row, left/center/right
        chart.config.RecordLabelPosition = 'center';
        // Alignment of label for each row, left/center/right
        chart.config.RecordLabelAlign = 'center';
        chart.config.centerDividerWidth = 2;

        //TODO calculate text width
        chart.config.recordLabelWidth = 60;

        // The dataPanel is the box containing the data graph area, without legends or margins.
        chart.dataPanel = {};

        // Create a metrics panel for each metric.
        chart.dataPanel.metricsPanel = [];
        chart.dataPanel.metricsPanel[0] = {};
        chart.dataPanel.metricsPanel[1] = {};

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
        chart.config.recordLabelPanel = {};

        switch (chart.config.RecordLabelPosition) {
          case 'left':
            chart.dataPanel.width = chart.config.width - (chart.config.recordLabelWidth);
            chart.dataPanel.x = chart.config.recordLabelWidth;
            chart.dataPanel.metricsPanel[1].x = chart.dataPanel.x + chart.config.centerDividerWidth;
            chart.dataPanel.metricsPanel[0].width = (chart.dataPanel.width - chart.config.centerDividerWidth) / 2;
            chart.dataPanel.metricsPanel[1].width = (chart.dataPanel.width - chart.config.centerDividerWidth) / 2;
            chart.config.recordLabelPanel.x = 0;
            break;
          case 'center':
            chart.dataPanel.width = chart.config.width;
            chart.dataPanel.x = 0;
            chart.dataPanel.metricsPanel[0].width = (chart.dataPanel.width - chart.config.recordLabelWidth) / 2;
            chart.dataPanel.metricsPanel[1].x = chart.dataPanel.x + chart.dataPanel.metricsPanel[0].width + chart.config.recordLabelWidth;
            chart.dataPanel.metricsPanel[1].width = (chart.dataPanel.width - chart.config.recordLabelWidth) / 2;
            chart.config.recordLabelPanel.x = chart.dataPanel.width / 2; // For center align
            break;
          case 'right':
            chart.dataPanel.width = chart.config.width - (chart.config.recordLabelWidth);
            chart.dataPanel.x = 0;
            chart.dataPanel.metricsPanel[1].x = chart.dataPanel.x + chart.config.centerDividerWidth;
            chart.dataPanel.metricsPanel[0].width = (chart.dataPanel.width - chart.config.centerDividerWidth) / 2;
            chart.dataPanel.metricsPanel[1].width = (chart.dataPanel.width - chart.config.centerDividerWidth) / 2;
            chart.config.recordLabelPanel.x = chart.dataPanel.width;
            break;
        }

        chart.dataPanel.metricsPanel[0].x = chart.dataPanel.x;
        chart.dataPanel.height = chart.config.height - chart.config.marginTop;
        chart.dataPanel.yScale = d3.scale.linear().domain([0, chart.data.length]).range([0, chart.dataPanel.height]);

        //TODO refactor this
        var innerMargin = chart.config.width / 2 + chart.config.recordLabelWidth;
        var chartWidth = chart.config.width - innerMargin;

        chart.dataPanel.rowHeight = chart.dataPanel.height / chart.data.length;
        chart.dataPanel.metricsPanel[0].xScale = d3.scale.linear().domain([0, maxMetric1]).range([0, chartWidth - chart.config.recordLabelWidth]);
        chart.dataPanel.metricsPanel[1].xScale = d3.scale.linear().domain([0, maxMetric2]).range([0, chartWidth - chart.config.recordLabelWidth]);
        var commas = d3.format(",.0f");

        // Rendering starts here.
        // Remove any existing chart elements.
        mySvg.selectAll("*").remove();

        // Set chart size
        mySvg.attr("width", chart.config.width)
          .attr("height", chart.config.height);

        // Heading metric1 label
        // X is set to center of column to use with text anchor middle
        mySvg.append("text")
          .attr("class", "label")
          .text(chartData.metric1Label)
          .attr("x", chart.dataPanel.metricsPanel[0].x + (chart.dataPanel.metricsPanel[0].width / 2))
          .attr("y", chart.config.marginTop - chart.config.headingMarginBottom)
          .attr("text-anchor", "middle");

        // Heading metric2 label
        // X is set to center of column to use with text anchor middle
        mySvg.append("text")
          .attr("class", "label")
          .text(chartData.metric2Label)
          .attr("x", chart.dataPanel.metricsPanel[1].x + (chart.dataPanel.metricsPanel[1].width / 2))
          .attr("y", chart.config.marginTop - chart.config.headingMarginBottom)
          .attr("text-anchor", "middle");

        // Position the data panel
        var bar = mySvg.selectAll("g.bar")
          .data(chart.data)
          .enter().append("g")
          .attr("class", "bar")
          .attr("transform", function (d, i) {
            return "translate(" + chart.dataPanel.x + "," + (chart.dataPanel.yScale(i) + chart.config.marginTop) + ")";
          });

        var wholebar = bar.append("rect")
          .attr("width", chart.config.width)
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("fill", "none");

        // Left bar for metric1
        bar.append("rect")
          .attr("class", "metric1bar")
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("fill", chart.config.metric1BarColor);

        //TODO
        // Left side metric value text
        if (chart.config.isShowMetrics) {
          bar.append("text")
            .attr("class", "metric1bar")
            .attr("dx", -3)
            .attr("dy", "1em")
            .attr("text-anchor", "end");
        }

        //TODO
        // Right bar for metric2
        bar.append("rect")
          .attr("class", "metric2bar")
          .attr("height", chart.dataPanel.rowHeight - chart.config.rowSpacerHeight)
          .attr("x", innerMargin)
          .attr("fill", chart.config.metric2BarColor);

        if (chart.config.isShowMetrics) {
          bar.append("text")
            .attr("class", "metric2bar")
            .attr("dx", 3)
            .attr("dy", "1em");
        }

        // SharedLabels
        bar.append("text")
          .attr("class", "shared")
          .attr("x", chart.config.recordLabelPanel.x)
          .attr("dy", "1em")
          .attr("text-anchor", "middle")
          .text(function (d) {
            return d.sharedLabel;
          });

        refresh(chart.data);

        function refresh(data) {
          var bars = d3.selectAll("g.bar")
            .data(data);

          // Bar metric1
          bars.selectAll("rect.metric2bar")
            .transition()
            .attr("width", function (d) {
              return chart.dataPanel.metricsPanel[0].xScale(d.metric1);
            });

          // Bar metric2
          bars.selectAll("rect.metric1bar")
            .transition()
            .attr("x", function (d) {
              return innerMargin - chart.dataPanel.metricsPanel[1].xScale(d.metric2) - 2 * chart.config.recordLabelWidth;
            })
            .attr("width", function (d) {
              return chart.dataPanel.metricsPanel[1].xScale(d.metric2);
            });

          // Text metric1
          if (chart.config.isShowMetrics) {
            bars.selectAll("text.metric2bar")
              .text(function (d) {
                return commas(d.metric1);
              })
              .transition()
              .attr("x", function (d) {
                return innerMargin + chart.dataPanel.metricsPanel[0].xScale(d.metric1);
              });
          }

          // Text metric2
          if (chart.config.isShowMetrics) {
            bars.selectAll("text.metric1bar")
              .text(function (d) {
                return commas(d.metric2);
              })
              .transition()
              .attr("x", function (d) {
                return innerMargin - chart.dataPanel.metricsPanel[1].xScale(d.metric2) - 2 * chart.config.recordLabelWidth;
              });
          }
        }
      }

    }])
;