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

        /* edit these settings freely */
        var w = 600,
          h = 400,
          topMargin = 15,
          labelSpace = 60,
          innerMargin = w / 2 + labelSpace,
          outerMargin = 15,
          gap = 2;

        mySvg.attr("width", w)
          .attr("height", h);

        var dataRange = d3.max(data.map(function (d) {
          return Math.max(d.metric1, d.metric2)
        }));

        var dataRange1 = d3.max(data, function (d) {
          return d.metric1;
        });
        var dataRange2 = d3.max(data, function (d) {
          return d.metric2;
        });

        var leftLabel = chartData.metric1Label,
          rightLabel = chartData.metric2Label;

        /* edit with care */
        var chartWidth = w - innerMargin - outerMargin,
          barWidth = h / data.length,
          yScale = d3.scale.linear().domain([0, data.length]).range([0, h - topMargin]),
          total = d3.scale.linear().domain([0, dataRange]).range([0, chartWidth - labelSpace]),
          commas = d3.format(",.0f");

        /* metric1 label */
        mySvg.append("text")
          .attr("class", "label")
          .text(leftLabel)
          .attr("x", w - innerMargin)
          .attr("y", topMargin - 3)
          .attr("text-anchor", "end");

        /* metric2 label */
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
//          .attr("pointer-events", "all");

        // var highlight = function (c) {
        //   return function (d, i) {
        //     bar.filter(function (d, j) {
        //       return i === j;
        //     }).attr("class", c);
        //   };
        // };

        // bar
        //   .on("mouseover", highlight("highlight bar"))
        //   .on("mouseout", highlight("bar"));

        bar.append("rect")
          .attr("class", "femalebar")
          .attr("height", barWidth - gap);

        bar.append("text")
          .attr("class", "femalebar")
          .attr("dx", -3)
          .attr("dy", "1em")
          .attr("text-anchor", "end");

        bar.append("rect")
          .attr("class", "malebar")
          .attr("height", barWidth - gap)
          .attr("x", innerMargin);

        bar.append("text")
          .attr("class", "malebar")
          .attr("dx", 3)
          .attr("dy", "1em");

        /* sharedLabels */
        bar.append("text")
          .attr("class", "shared")
          .attr("x", w / 2)
          .attr("dy", "1em")
          .attr("text-anchor", "middle")
          .text(function (d) {
            return d.sharedLabel;
          });

        // d3.select("#generate").on("click", function () {
        //   for (var i = 0; i < data.length; i++) {
        //     data[i].metric1 = Math.random() * dataRange;
        //     data[i].metric2 = Math.random() * dataRange;
        //   }
        //   refresh(data);
        // });

        refresh(data);

        function refresh(data) {
          var bars = d3.selectAll("g.bar")
            .data(data);
          bars.selectAll("rect.malebar")
            .transition()
            .attr("width", function (d) {
              return total(d.metric1);
            });
          bars.selectAll("rect.femalebar")
            .transition()
            .attr("x", function (d) {
              return innerMargin - total(d.metric2) - 2 * labelSpace;
            })
            .attr("width", function (d) {
              return total(d.metric2);
            });

          bars.selectAll("text.malebar")
            .text(function (d) {
              return commas(d.metric1);
            })
            .transition()
            .attr("x", function (d) {
              return innerMargin + total(d.metric1);
            });
          bars.selectAll("text.femalebar")
            .text(function (d) {
              return commas(d.metric2);
            })
            .transition()
            .attr("x", function (d) {
              return innerMargin - total(d.metric2) - 2 * labelSpace;
            });
        }
      }

    }])
;