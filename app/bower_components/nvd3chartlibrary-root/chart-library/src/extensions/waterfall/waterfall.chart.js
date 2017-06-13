{
  class Waterfall extends nv.ModelExtension {
    constructor() {
      super({
        name: 'waterfall',
        parent: 'multiBarChart'
      })

      this.defaults = {
        waterfallColors: {
          boundary: 'grey',
          positive: 'green',
          negative: 'red'
        }
      }
    }

    _getChartData() {
      return this.selection.datum()
    }

    draw() {
      var svg = d3.select(this.extendedChart.container)

      //hide lower series
      svg.select('.nv-series-0').attr('display', 'none')

      //paint upper series
      var bars = svg.selectAll('.nv-series-1 rect')[0];
      let series = this.selection.datum()[1]
      bars.forEach((bar, index) => {
        bar = d3.select(bar)
        let serie = series.values[index]
        bar.attr('fill', serie.additionalData.color).style('fill', serie.additionalData.color)
      })
    }

    prepareData(selection) {
      //always taking only first series
      const initialSeries = this._getChartData()[0]

      this.extendedChart.yAxis.axisLabel(initialSeries.key)

      let upperSeries = {
        key: initialSeries.key,
        color: 'black',
        values: []
      }
      let lowerSeries = {
        key: `${initialSeries.key} HIDDEN`,
        color: 'blue',
        values: []
      }

      let currentHeightLower
      let currentHeightUpper
      let prevYValue = 0
      let yMin = Infinity
      let yMax = -Infinity
      for(let i = 0; i < initialSeries.values.length; i++){
        const serie = initialSeries.values[i]
        const yValue = parseFloat(this.extendedChart.y()(serie))
        const xValue = this.extendedChart.x()(serie)
        if(i == 0 || i == initialSeries.values.length - 1) {
          currentHeightLower = 0
        } else {
          currentHeightLower += prevYValue >= 0 ? currentHeightUpper : 0
        }
        currentHeightUpper = Math.abs(yValue)
        if(yValue < 0) {
          currentHeightLower -= currentHeightUpper
        }
        lowerSeries.values[i] = {
          label: xValue,
          value: currentHeightLower
        }
        const waterfallColors = Object.defaultsDeep({}, this.extendedChart.waterfallColors(), this.defaults.waterfallColors)
        const formatted = this.utils.conditionalFormat.fn(yValue)
        const color = formatted.color || (yValue >= 0 ? waterfallColors.positive : waterfallColors.negative)
        upperSeries.values[i] = {
          label: xValue,
          value: currentHeightUpper,
          additionalData: {
            value: yValue >= 0 ? currentHeightLower + currentHeightUpper : currentHeightLower,
            change: i > 0 && i < initialSeries.values.length - 1 ? yValue : null,
            isPositive: yValue >= 0,
            color: i > 0 && i < initialSeries.values.length - 1 ? (color) : waterfallColors.boundary
          }
        }
        //calculating min/max
        if(i > 0 && i < initialSeries.values.length - 1) {
          const visibleYLower = currentHeightLower
          const visibleYUpper = currentHeightLower + currentHeightUpper
          if(yMin > visibleYLower) yMin = visibleYLower
          if(yMax < visibleYUpper) yMax = visibleYUpper
        }

        prevYValue = yValue
      }

      selection.datum([lowerSeries, upperSeries])
      this.extendedChart.x(d => d.label)
      this.extendedChart.y(d => d.value)
      const correction = parseInt((yMax - yMin) / 20)
      yMin = yMin - correction * 2
      yMax = yMax + correction
      if(yMin < 0) yMin = 0
      this.extendedChart.yDomain([yMin, yMax])

      // this.extendedChart.tooltip.contentGenerator(({data}) => {
      //   const format = this.extendedChart.yAxis.tickFormat()
      //   const formattedValue = this.utils.conditionalFormat.fn(data.additionalData.value)
      //   let html = `
      //     <h4 style='text-align:center; margin-top: 5px; margin-bottom: 10px'>${data.label}</h4>
      //     <hr/>
      //     <p style='font-weight: bold'>
      //       ${formattedValue.text}
      //     </p>
      //   `
      //   if(data.additionalData.change != null) {
      //     const formattedChange = this.utils.conditionalFormat.fn(data.additionalData.change)
      //     html += `
      //       <p style='font-weight: bold; color: ${formattedChange.color || data.additionalData.color}'>
      //         ${data.additionalData.change > 0 ? '+' : ''}${formattedChange.text}
      //       </p>
      //     `
      //   }
      //   return html
      // })
    }

    applyOptions() {
      this.extendedChart.stacked(true)
      this.extendedChart.showLegend(false)
      this.extendedChart.showControls(false)
    }

    beforeUpdate(){
    }

    extendChartOptions() {
      this.defineOption('waterfallColors')
    }
  }


  nv.ModelExtension.register(Waterfall)
}
