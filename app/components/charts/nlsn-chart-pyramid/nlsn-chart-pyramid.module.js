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
        chart.config.rowSpacerHeight = 10;
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
        chart.dataPanel.height = chart.config.height - chart.config.marginTop;

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

        switch (chart.config.RecordLabelPosition) {
          case 'left':
            chart.dataPanel.width = chart.config.width - (chart.config.recordLabelWidth);
            chart.dataPanel.x = chart.config.recordLabelWidth;
            break;
          case 'center':
            chart.dataPanel.width = chart.config.width;
            chart.dataPanel.x = 0;
            break;
          case 'right':
            chart.dataPanel.width = chart.config.width - (chart.config.recordLabelWidth);
            chart.dataPanel.x = 0;
            break;
        }


        var innerMargin = chart.config.width / 2 + chart.config.recordLabelWidth;
        var chartWidth = chart.config.width - innerMargin;

        var barHeight = chart.config.height / chart.data.length;
        var yScale = d3.scale.linear().domain([0, chart.data.length]).range([0, chart.config.height - chart.config.marginTop]);
        var xScale1 = d3.scale.linear().domain([0, maxMetric1]).range([0, chartWidth - chart.config.recordLabelWidth]);
        var xScale2 = d3.scale.linear().domain([0, maxMetric2]).range([0, chartWidth - chart.config.recordLabelWidth]);
        var commas = d3.format(",.0f");

        // Rendering starts here.
        // Remove any existing chart elements.
        mySvg.selectAll("*").remove();

        // Set chart size
        mySvg.attr("width", chart.config.width)
          .attr("height", chart.config.height);

        // Heading metric1 label
        mySvg.append("text")
          .attr("class", "label")
          .text(chartData.metric1Label)
          .attr("x", chart.config.width - innerMargin)
          .attr("y", chart.config.marginTop - chart.config.headingMarginBottom)
          .attr("text-anchor", "end");

        // Heading metric2 label
        mySvg.append("text")
          .attr("class", "label")
          .text(chartData.metric2Label)
          .attr("x", innerMargin)
          .attr("y", chart.config.marginTop - chart.config.headingMarginBottom);

        /* metric1 bars and data labels */
        var bar = mySvg.selectAll("g.bar")
          .data(chart.data)
          .enter().append("g")
          .attr("class", "bar")
          .attr("transform", function (d, i) {
            return "translate(0," + (yScale(i) + chart.config.marginTop) + ")";
          });

        var wholebar = bar.append("rect")
          .attr("width", chart.config.width)
          .attr("height", barHeight - chart.config.rowSpacerHeight)
          .attr("fill", "none");

        // Left bar for metric1
        bar.append("rect")
          .attr("class", "metric1bar")
          .attr("height", barHeight - chart.config.rowSpacerHeight)
          .attr("fill", chart.config.metric1BarColor);

        // Left side metric value text
        if (chart.config.isShowMetrics) {
          bar.append("text")
            .attr("class", "metric1bar")
            .attr("dx", -3)
            .attr("dy", "1em")
            .attr("text-anchor", "end");
        }

        // Right bar for metric2
        bar.append("rect")
          .attr("class", "metric2bar")
          .attr("height", barHeight - chart.config.rowSpacerHeight)
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
          .attr("x", chart.config.width / 2)
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
              return xScale1(d.metric1);
            });

          // Bar metric2
          bars.selectAll("rect.metric1bar")
            .transition()
            .attr("x", function (d) {
              return innerMargin - xScale2(d.metric2) - 2 * chart.config.recordLabelWidth;
            })
            .attr("width", function (d) {
              return xScale2(d.metric2);
            });

          // Text metric1
          if (chart.config.isShowMetrics) {
            bars.selectAll("text.metric2bar")
              .text(function (d) {
                return commas(d.metric1);
              })
              .transition()
              .attr("x", function (d) {
                return innerMargin + xScale1(d.metric1);
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
                return innerMargin - xScale2(d.metric2) - 2 * chart.config.recordLabelWidth;
              });
          }
        }
      }

    }])
;