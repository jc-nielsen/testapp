{
  class MultiBarHorizontalChartWithAvg extends nv.ModelExtension {
    constructor() {
      super({
        name: 'multiBarHorizontalChartWithAvg',
        parent: 'multiBarHorizontalChart'
      })
    }

    prepareData(selection) {
      this.data = selection.data()[0];

      this._moveLegend();
    }

    draw() {
      var legend = d3.select('.nv-legendWrap');
      var lastRects, dpBarValues = [];

      this.extendedChart.containerHeight = parseFloat(d3.select('.nv-multiBarHorizontalChart .nv-groups').node().getBBox().height);
      this.extendedChart.containerWidth = parseFloat(d3.select('.nv-multiBarHorizontalChart .nv-groups').node().getBBox().width);

      legend.attr('transform', 'translate(' + -(this.extendedChart.containerWidth / 2 - 230) + ',' + (this.extendedChart.containerHeight + 100) + ')');
    }

    _moveLegend() {
      setTimeout(() => {
        d3.selectAll('.nv-series')
          .each(function (d, i) {
            var group = d3.select(this),
              circle = group.select('circle');

            var color = circle.style('fill');
            circle.remove();

            var symbol = group.append('path')
              .attr('d', d3.svg.symbol().type('square'))
              .style('stroke', color)
              .style('fill', color);
          });
      });
    }
  }

  nv.ModelExtension.register(MultiBarHorizontalChartWithAvg)
}
