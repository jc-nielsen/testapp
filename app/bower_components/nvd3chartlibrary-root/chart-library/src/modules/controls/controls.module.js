class ControlsModule extends nv.Module {
  constructor(instance, options){
    super({
      name: 'controls',
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
    const controlsElem = this.svg.select('.nv-controlsWrap')
    const controlsTransform = d3.transform(controlsElem.attr('transform'))
    const controlsBbox = controlsElem.node().getBBox()
    const isAtTop = this.instance.extendedChart.showControls() && controlsTransform.translate[1] < 0
    if(isAtTop) {
      controlsTransform.translate[1] = -this.options.distance - controlsBbox.height
      controlsElem.attr('transform', controlsTransform)
      this.options.minTopMargin = Math.abs(controlsTransform.translate[1])
    }
  }
}

nv.Module.register(ControlsModule)
