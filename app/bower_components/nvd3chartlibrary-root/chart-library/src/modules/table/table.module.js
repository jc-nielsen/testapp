class TableModule extends nv.Module {
  constructor(instance, options){
    super({
      name: TableModule.name,
      supportedCharts: [
        'waterfall'
      ]
    }, instance, options, {
      squeezeChartHeight: false,
      container: null,
      metadata: {
        chart: {
          lines: []
        },
        table: {
          lines: [],
          formatStrings: {},
          showHeadRow: nv.modules.table.constants.TABLE_SHOW_HEAD_ROW,
          firstCellContent: nv.modules.table.constants.TABLE_FIRST_CELL_CONTENT
        }
      },

      rowLineHeight: 25,
      fontSize: 13,
      fontWeight: 'bold',
      fill: 'gainsboro',
      stroke: 'grey',
      strokeWidth: 2,
      align: 'middle',
      valign: 'middle',
      offsetY: 0,
      offsetX: 0,
      maxNLines: 2,
      colors: {
        green: 'green',
        red: 'red'
      },
      tooltips: true,
      titles: false,

      // //not implemented yet
      // rowClick: (row) => {
      //   console.log(row)
      // },
      // changeChartSeriesOnRowClick: true
    })
  }

  static get _name() {
    return 'table'
  }

  _setChartSeries(n) {
    const serie = this.instance.originalData[n]
    if(serie != null) {
      this.instance.selection.datum([serie])
    }
  }

  prepare() {
    this.table = new nv.modules.table.Table()

    //options
    this.options.minLeftMargin = this.options.maxLeftMargin = nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH + nv.modules.table.constants.TABLE_OFFSET_X
    this.options.minRightMargin = this.options.maxRightMargin = nv.modules.table.constants.TABLE_OFFSET_X
    // this.instance.extendedChart.margin({
    //   left: nv.modules.table.constants.TABLE_FIRST_COLUMN_WIDTH + nv.modules.table.constants.TABLE_OFFSET_X,
    //   right: nv.modules.table.constants.TABLE_OFFSET_X
    // })
    // this.instance.extendedChart.discretebar.margin({
    //   left: 0,
    //   right: 0
    // })

    const data = this.instance.originalData
    // this.instance.extendedChart.yAxis.axisLabel(data[0].key)

    const originalYAxisTickFormat = this.instance.extendedChart.yAxis.tickFormat()
    this.instance.extendedChart.yAxis.tickFormat((d) => {
      return parseFloat(d) !== 0 ? originalYAxisTickFormat(d) : ''
    })

    this.instance.extendedChart.xAxis.tickValues(false)

  }

  beforeInstancePrepareData() {
    if(this.options.metadata != null && this.options.metadata.chart != null && this.options.metadata.chart.lines != null) {
      this._setChartSeries(this.options.metadata.chart.lines[0])
    }
  }

  process() {
    //draw table
    const svg = this.instance.extendedChart.container
    const tableOptions = Object.assign({}, this.options, {
      chartData: {
        height: this.instance.extendedChart.height()
      },
      conditionalFormat: (text, line) => {
        if(this.options.metadata.table.showHeadRow) line--
        let formatString = this.options.metadata.table.formatStrings[line] || this.options.formatString
        return this.instance.utils.conditionalFormat.fn(text, formatString)
      },
      textWrap: (args) => {
        return this.instance.utils.textWrap.fn(args)
      },
      scheduleAndSkipNextUpdate: () => {
        this.scheduleAndSkipNextUpdate()
      },
      chartWantedHeight: this.instance.originalOptions.height
    })
    const dataFormatterOptions = Object.assign({}, this.options.metadata.table, {
      x: this.instance.originalOptions.x,
      y: this.instance.originalOptions.y,
      xTickFormat: this.instance.originalOptions.xAxis.tickFormat,
      yTickFormat: this.instance.originalOptions.yAxis.tickFormat,
    })
    const tableData = new nv.modules.table.DataFormatter(this.instance.originalData, dataFormatterOptions).table()
    this.table.init(this.instance, tableOptions, tableData)
  }
}

nv.Module.register(TableModule)
