{
  class DiscreteBarChartWithTable extends nv.ModelExtension {
    constructor() {
      super({
        name: 'discreteBarChartWithTable',
        parent: 'discreteBarChart'
      })
    }

    _initTable() {
      this.table = new nv.modules.table.Table()
    }

    _extendConfig() {
      Object.assign(this.config, {
        chartMetric: nv.modules.table.constants.CHART_DEFAULT_METRIC
      })
    }

    _getChartData() {
      return this.data.chart(this.config.chartMetric)
    }

    _getTableData() {
      return this.data.table()
    }

    _drawChart() {
      var svg = d3.select(this.extendedChart.container)

      var lastTargetY = null;
      var lastHeight = 0;
      var bars = svg.selectAll('rect.discreteBar')[0];

      bars.forEach((current, index) => {
        const chartData = this._getChartData()
        var dataValue = chartData[0].values[index].value;

        var currentX = parseFloat(d3.transform(d3.select(current.parentNode).attr('transform')).translate[0]);
        var currentY = parseFloat(d3.transform(d3.select(current.parentNode).attr('transform')).translate[1]);
        var currentHeight = d3.select(current).node().getBBox().height;

        if (index === bars.length - 1) {
          d3.select(current).attr('fill', 'grey');
        } else {
          if (index === 0) {
            lastTargetY = currentY + currentHeight;
          }

          if (dataValue < 0) {
            var targetY = lastTargetY;

            d3.select(current.parentNode).attr('transform', 'translate(' + currentX + ', ' + targetY + ')');
            d3.select(current).attr('fill', 'red');

            lastTargetY = targetY + currentHeight;
          }
          else {
            var targetY = lastTargetY - currentHeight;

            d3.select(current.parentNode).attr('transform', 'translate(' + currentX + ', ' + targetY + ')');
            d3.select(current).attr('fill', 'green');

            lastTargetY = targetY;
          }

          if (index === 0) {
            d3.select(current).attr('fill', 'grey');
          }
        }

        lastHeight = currentHeight;

        if (index === 0) {
          var shiftToZeroXAxis = 0;
          var containerHeight = 370//parseFloat(svg.select('.nv-discreteBarWithAxes').node().getBBox().height);

          shiftToZeroXAxis += containerHeight - (currentY + currentHeight) + 10;

          svg.select('.nv-barsWrap.nvd3-svg').attr('transform', 'translate(0, ' + shiftToZeroXAxis + ')');
        }
      });
    }

    _drawTable() {
      const svg = this.extendedChart.container
      const tableOptions = Object.assign(this.extendedChart.table(), {
        chartData: {
          height: this.extendedChart.height()
        }
      })
      const tableData = this._getTableData()
      this.table.init(svg, tableOptions, tableData)
    }


    //FNS CALLED BY PARENT IF IMPLEMENTED
    onModelInit() {
      this._initTable()
      this._extendConfig()
    }

    prepareData(selection) {
      let chartDataArray = []
      selection.each((initialData) => {
        let chartData;
        if(Array.isArray(initialData)){
          chartData = initialData
        } else {
          const tableOptions = this.extendedChart.table()
          this.data = new nv.modules.table.Data(initialData, {
            autoAddFirstColumn: tableOptions.autoAddFirstColumn
          })
          chartData = this._getChartData()
        }
        chartDataArray.push(chartData)
      })
      selection.data(chartDataArray)
    }

    applyOptions() {
      this.extendedChart.margin({
        left: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH + nv.modules.table.constants.TABLE_OFFSET_X,
        right: nv.modules.table.constants.TABLE_OFFSET_X
      })
      this.extendedChart.discretebar.margin({
        left: 0,
        right: 0
      })
      const chartData = this._getChartData()
      this.extendedChart.yAxis.axisLabel(chartData[0].key)
    }

    draw() {
      this._drawChart()
      this._drawTable()
    }

    extendChartOptions() {
      let tableOptions;

      Object.defineProperty(this.chart._options, 'table', {
        get: function () {
          return tableOptions;
        }, set: function (_) {
          tableOptions = _;
        }
      })
    }
  }

  nv.ModelExtension.register(DiscreteBarChartWithTable)
}
