class LegendModule extends nv.Module {
  constructor(instance, options){
    super({
      name: 'legend',
      supportedCharts: ['*']
    }, instance, options, {
      orientation: 'top',
      distance: 30
    })
  }

  prepare() {
    this.svg = d3.select(this.instance.extendedChart.container)
  }

  process() {
    const processFn = this[`_process_${this.options.orientation}`]
    if(Function.isFunction(processFn)) {
      this.scheduleAndSkipNextUpdate()
      return processFn.call(this)
    }
  }

  _process_top() {
    const legendElem = this.svg.select('.nv-legendWrap')
    const legendTransform = d3.transform(legendElem.attr('transform'))
    const legendBbox = legendElem.node().getBBox()
    const isAtTop = this.instance.extendedChart.showLegend() && legendTransform.translate[1] < 0
    if(isAtTop) {
      legendTransform.translate[1] = -this.options.distance - legendBbox.height
      legendElem.attr('transform', legendTransform)
      this.options.minTopMargin = Math.abs(legendTransform.translate[1])
    }
  }
}

nv.Module.register(LegendModule)
