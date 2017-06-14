'use strict';

angular.module('nlsnChartHelperSvc.module', [])
  .service('nlsnChartHelperSvc', [function () {

    // Requires chart.containerElement, chart.options.width, chart.options.height
    this.drawBaseElement = function (chart) {
      // Remove any existing chart1 elements.
      chart.containerElement.selectAll('*').remove();

      chart.containerElement
          .attr('class', 'nlsn-chart-svg-container');

      chart.svgElement = chart.containerElement.append('svg');

      chart.svgElement
          .attr('class', 'nlsn-chart-svg-content-responsive')
          .attr("viewBox", "0 0 " + chart.options.width + " " + chart.options.height)
          .attr('width', "100%")
          .attr('height', "100%")
          .attr("preserveAspectRatio", "xMinYMin meet");
    };

  }])
;
