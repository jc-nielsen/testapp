class NumberFormatModule extends nv.Module {
  constructor(instance, options){
    super({
      name: 'numberFormat',
      supportedCharts: ['*']
    }, instance, options, {
      formatString: ',.2f',
      colors: {
        positive: '#07b307',
        negative: '#d60000',
        other: '#666666'
      }
    })
  }

  __format(smth, formatString) {
    if(!formatString) formatString = this.options.formatString
    let text
    let color
    switch(true) {
      case Number.isNumber(smth):
        const number = Number.parseNumber(smth)
        text = d3.format(formatString)(number)
        color = number > 0 ? this.options.colors.positive : number < 0 ? this.options.colors.negative : this.options.colors.other
        break
      case String.isString(smth):
        text = smth
        color = 'black'
        break
      default:
        text = JSON.stringify(smth)
        color = 'black'
    }
    return {text, color}
  }

  beforeInstancePrepareData(){
    this.instance.utils.conditionalFormat.replace(this.__format.bind(this))

    if(this.instance.extendedChart.yAxis != null) {
      const originalYAxisTickFormat = this.instance.extendedChart.yAxis.tickFormat()
      this.instance.extendedChart.yAxis.tickFormat((d) => {
        const smth = originalYAxisTickFormat(d)
        return this.instance.utils.conditionalFormat.fn(smth).text
      })
    }

    if(this.instance.extendedChart.yAxis1 != null) {
      const originalYAxisTickFormat = this.instance.extendedChart.yAxis1.tickFormat()
      this.instance.extendedChart.yAxis1.tickFormat((d) => {
        const smth = originalYAxisTickFormat(d)
        return this.instance.utils.conditionalFormat.fn(smth).text
      })
    }

    if(this.instance.extendedChart.yAxis2 != null) {
      const originalYAxisTickFormat = this.instance.extendedChart.yAxis2.tickFormat()
      this.instance.extendedChart.yAxis2.tickFormat((d) => {
        const smth = originalYAxisTickFormat(d)
        return this.instance.utils.conditionalFormat.fn(smth).text
      })
    }
  }
}

nv.Module.register(NumberFormatModule)
