/*
 Functions that can be implemented by successors
 * prepare() - fn called when chart instance is ready and wants to prepare modules, before first draw, called once per instance initialization
 * process() - fn called each time on redraw, after chart instance's draw function, supposed to apply module's drawing customization
 * beforeInstancePrepareData() - fn which allows module to take control over selection BEFORE chart instance, called before instance's prepareData, supposed to modify chart instance's initial data. Properties instance.selection and instance.originalData are already available

 Important properties available in each module
 * this.instance: ModelExtension - instance of extension
 * this.options: Object - options passed to the module from outside (from chart config)
 * this.appendedElements: SVGElement[] - array, which expects to contain svg elements. On each drawing act (when _process fn is called) - each element in this array is removed from DOM and array is cleared
 * !IMPORTANT: modules are processed asyncronously, but appendedElements array will be cleared correctly only if it is filled syncronously by the module, otherwise there can remain elems from previous process
 */
nv.Module = class extends Factory{
/*
  Arguments:
  * config - object that configures a module
  *   name: string
  *   supportedCharts: string[]
  * instance - instance of extension
  * options - options passed to the module from outside (from chart config)
  * defaults - defaults to fill options which were not specified
 */
  constructor(config, instance, options = {}, defaults = {}){
    Object.defaultsDeep(options, defaults)

    Object.defaultsDeep(options, {
      enabled: true,
      minTopMargin: 0,
      minRightMargin: 0,
      minBottomMargin: 0,
      minLeftMargin: 0,
      maxTopMargin: Infinity,
      maxRightMargin: Infinity,
      maxBottomMargin: Infinity,
      maxLeftMargin: Infinity,
      formatString: null
    })

    super(config, {
      supportedCharts: []
    }, {instance, options})

    this.promise = Promise.resolve()
    this.previousAppendedElements = {}
  }

  //'private' fns
  __preprocess() {
    if(this.appendedElements != null) {
      this.appendedElements.each(e => e.remove())
    }
    this.appendedElements = []
  }

  __postprocess() {

  }

  // __preprocess() {
  //   this.previousAppendedElements = this.appendedElements
  //   this.appendedElements = []
  // }

  // __postprocess() {
  //   if(this.previousAppendedElements != null) {
  //     this.previousAppendedElements.each(e => e.remove())
  //   }
  // }

  scheduleAndSkipNextUpdate() {
    if(this.SKIPNEXTUPDATE) {
      this.SKIPNEXTUPDATE = false
      return
    }
    this.SKIPNEXTUPDATE = true
    this.instance.scheduleChartReupdateAfterModulesChainFinished()
  }

  //fns called by extension instance
  _process() {
    if(!this.options.enabled) {
      return Promise.resolve()
    }

    // if(this.appendedElements != null) {
    //   this.previousAppendedElements[Date.now()] = this.appendedElements
    //   this.appendedElements.each(e => e.remove())
    // }
    // this.promise.then(() => {
    //   for(let k in this.previousAppendedElements || {}) {
    //     this.previousAppendedElements[k].each(e => e.remove())
    //   }
    //   this.previousAppendedElements = {}
    // })

    // this.appendedElements = []


    // return Promise.resolve(this.process()).then(() => {
    //   this.__setChartOptions()
    // })
    this.__preprocess()
    return Promise.resolve(this.process()).then(() => {
      return Promise.resolve(this.__postprocess())
    })
  }


  // __setChartOptions() {
  //   const margin = this.instance.extendedChart.margin()
  //   const top = Math.max(this.options.minTopMargin, margin.top)
  //   const right = Math.max(this.options.minRightMargin, margin.right)
  //   const bottom = Math.max(this.options.minBottomMargin, margin.bottom)
  //   const left = Math.max(this.options.minLeftMargin, margin.left)
  //   this.instance.extendedChart.margin({top, right, bottom, left})
  // }

  _prepare() {
    if(!this.options.enabled) {
      return
    }

    // this.__setChartOptions()

    this.svg = d3.select(this.instance.extendedChart.container)

    this.prepare()
  }

  _beforeInstancePrepareData() {
    if(!this.options.enabled) {
      return
    }

    this.beforeInstancePrepareData()
  }

  _beforeInstanceUpdate() {
    if(this.options.enabled) {
      return
    }

    // this.__setChartOptions()

    this.beforeInstanceUpdate()

    // this.process()
  }

  _afterInstanceUpdate() {
    if(this.options.enabled) {
      return
    }

    // this.__setChartOptions()

    this.afterInstanceUpdate()
  }

  //to be overriden/overloaded in successor
  prepare(){}
  process(){}
  beforeInstancePrepareData(){}
  beforeInstanceUpdate(){}
  afterInstanceUpdate(){}


  //REGISTERING
  static register(Module) {
    if(nv.modules == null) nv.modules = {}

    let name = Module._name
    if(name == null) {
      const module = new Module
      name = module.config.name
    }

    nv.modules[name] = Module
  }
}
