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
        templateUrl: 'components/charts/nlsn-chart-pyramid/nlsn-chart-pyramid.html',
        link: function (scope, element) {
          mySvg = d3.select(element[0]).append("svg");
          scope.$watch("chartData", renderChart, true);
        }
      };

      function renderChart(newValue, oldValue, scope) {
        if (!(newValue && newValue.data && newValue.data.length)) {
          return;
        }

        var chartData = newValue;
        var data = chartData.data;
        var w = 600,
          h = 400,
          topMargin = 15,
          labelSpace = 60,
          innerMargin = w / 2 + labelSpace,
          outerMargin = 15,
          gap = 8,
          metric1BarColor = '#41a6f4',
          metric2BarColor = '#42f4e8';

        // Range is used for scale. Needed for each of the metrics.
        // Minimum is not required when scaled to zero minimum.
        var dataRange1 = d3.max(data, function (d) {
          return d.metric1;
        });
        var dataRange2 = d3.max(data, function (d) {
          return d.metric2;
        });

        var leftLabel = chartData.metric1Label,
          rightLabel = chartData.metric2Label;

        var chartWidth = w - innerMargin - outerMargin,
          barWidth = h / data.length,
          yScale = d3.scale.linear().domain([0, data.length]).range([0, h - topMargin]),
          xScale1 = d3.scale.linear().domain([0, dataRange1]).range([0, chartWidth - labelSpace]),
          xScale2 = d3.scale.linear().domain([0, dataRange2]).range([0, chartWidth - labelSpace]),
          commas = d3.format(",.0f");

        // Rendering starts here.
        // Remove any existing chart elements.
        mySvg.selectAll("*").remove();

        // Set chart size
        mySvg.attr("width", w)
          .attr("height", h);

        // metric1 label
        mySvg.append("text")
          .attr("class", "label")
          .text(leftLabel)
          .attr("x", w - innerMargin)
          .attr("y", topMargin - 3)
          .attr("text-anchor", "end");

        // metric2 label
        mySvg.append("text")
          .attr("class", "label")
          .text(rightLabel)
          .attr("x", innerMargin)
          .attr("y", topMargin - 3);

        /* female bars and data labels */
        var bar = mySvg.selectAll("g.bar")
          .data(data)
          .enter().append("g")
          .attr("class", "bar")
          .attr("transform", function (d, i) {
            return "translate(0," + (yScale(i) + topMargin) + ")";
          });

        var wholebar = bar.append("rect")
          .attr("width", w)
          .attr("height", barWidth - gap)
          .attr("fill", "none");

        // Left value bar
        bar.append("rect")
          .attr("class", "femalebar")
          .attr("height", barWidth - gap)
          .attr("fill", metric1BarColor);

        bar.append("text")
          .attr("class", "femalebar")
          .attr("dx", -3)
          .attr("dy", "1em")
          .attr("text-anchor", "end");

        // Right value bar
        bar.append("rect")
          .attr("class", "malebar")
          .attr("height", barWidth - gap)
          .attr("x", innerMargin)
          .attr("fill", metric2BarColor);

        bar.append("text")
          .attr("class", "malebar")
          .attr("dx", 3)
          .attr("dy", "1em");

        // SharedLabels
        bar.append("text")
          .attr("class", "shared")
          .attr("x", w / 2)
          .attr("dy", "1em")
          .attr("text-anchor", "middle")
          .text(function (d) {
            return d.sharedLabel;
          });

        refresh(data);

        function refresh(data) {
          var bars = d3.selectAll("g.bar")
            .data(data);
          bars.selectAll("rect.malebar")
            .transition()
            .attr("width", function (d) {
              return xScale1(d.metric1);
            });
          bars.selectAll("rect.femalebar")
            .transition()
            .attr("x", function (d) {
              return innerMargin - xScale2(d.metric2) - 2 * labelSpace;
            })
            .attr("width", function (d) {
              return xScale2(d.metric2);
            });

          bars.selectAll("text.malebar")
            .text(function (d) {
              return commas(d.metric1);
            })
            .transition()
            .attr("x", function (d) {
              return innerMargin + xScale1(d.metric1);
            });
          bars.selectAll("text.femalebar")
            .text(function (d) {
              return commas(d.metric2);
            })
            .transition()
            .attr("x", function (d) {
              return innerMargin - xScale2(d.metric2) - 2 * labelSpace;
            });
        }
      }

    }])
;