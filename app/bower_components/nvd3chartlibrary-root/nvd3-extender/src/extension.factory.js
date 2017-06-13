/*
 Functions that can be implemented by successors
 * onModelInit() - fn called when model is being used by nvd3 to create new chart
 * prepareData(selection) - fn for modifying initial data
 * applyOptions() - fn for specifying options values to chart
 * update() - fn which wraps and replaces original cheart update fn
 * beforeUpdate() - fn which is called before update
 * afterUpdate() - fn which is called after update
 * draw() - fn where some custom drawing can be placed
 * defineOption() - fn for adding custom chart option
 * extendChartOptions() - fn where calls to defineOption are supposed to be placed
 */
nv.ModelExtension = class extends Factory{
  //Config
  // name: string
  // parent: string
  // doInitialDraw: boolean (deprecated)
  // initialDrawTimeout: number (deprecated)
  constructor(config) {
    super(config, {
      doInitialDraw: true,
      initialDrawTimeout: 0
    })

    this.__customOptionValuesStorage = {}

    this._initUtils()
    this._initConstants()

    this._build()

    if (Function.isFunction(this.onModelInit)) {
      this.onModelInit()
    }

    this.id = Date.now()
  }

  _initUtils() {
    this.utils = new nv.ModelExtension.Utils()
  }

  _initConstants() {
    this.constants = {
      nvd3UncustomizableVerticalLeftAxisLabelOffset: 50,
      nvd3UncustomizableHorizontalBottomAxisLabelOffset: 24
    }
  }

  _build() {
    this.chart = nv.models[this.config.parent]()

    this.extendedChart = (selection) => {
      this._initModules()
      this._prepareData(selection)
      this._applyOptions()
      this._callChart(selection)
      this._propagateChartOwnPropertiesToExtendedChart()
      this._customizeUpdate()
      this._prepareModules()

      this.extendedChart.update()
      this.modulesPromise.then(() => {
        this.extendedChart.update()
      })

      return this.extendedChart
    }

    this._propagateChartOwnPropertiesToExtendedChart()
    this._initExtendedChartOptions()
  }

  _propagateChartOwnPropertiesToExtendedChart() {
    Object.extendWithOwnProperties(this.extendedChart, this.chart)
  }

  _callChart(selection) {
    this.chart.call(this.extendedChart, selection)
  }

  _beforeUpdate(args) {
    // this._applyOptions()

    if (Function.isFunction(this.beforeUpdate)) {
      this.beforeUpdate.call(this, ...args)
    }

    this._callModulesBeforeUpdate()
    this._applyModulesMinMarginsToChart()
  }

  _afterUpdate(args) {
    this._callModulesAfterUpdate()

    if (Function.isFunction(this.afterUpdate)) {
      this.afterUpdate.call(this, ...args)
    }
  }

  _customizeUpdate() {
    this.extendedChart.update = (...args) => {
      this._beforeUpdate(args)

      this.chart.update.call(this, ...args)

      if (Function.isFunction(this.update)) {
        this.update.call(this, ...args)
      }

      this._afterUpdate(args)

      this._draw()

    }
  }

  _prepareData(selection) {
    this.selection = selection
    this.originalData = selection.datum()
    this.originalOptions = {
      height: this.extendedChart.height(),
      x: this.extendedChart.x(),
      y: this.extendedChart.y(),
      xAxis: {
        tickFormat: this.extendedChart.xAxis.tickFormat()
      },
      yAxis: {
        tickFormat: this.extendedChart.yAxis.tickFormat()
      },
      margin: Object.copyDeep(this.extendedChart.margin())
    }
    //pre-prepare data for modules - allow modules to modify data before chart does

    this._callModulesBeforePrepareData()

    if (Function.isFunction(this.prepareData)) {
      this.prepareData(selection)
    }
  }

  _applyOptions() {
    //duration
    this.extendedChart.duration(0)

    // //height
    // this.extendedChart.height(this.extendedChart.height() || 450)

    // //x, y display fields
    // this.extendedChart.xDisplayField(this.extendedChart.xDisplayField() || this.extendedChart.xField())
    // this.extendedChart.yDisplayField(this.extendedChart.yDisplayField() || this.extendedChart.yField())

    // //y tick format
    // const originalYAxisTickFormat = this.extendedChart.yAxis.tickFormat()
    // this.extendedChart.yAxis.tickFormat((value) => {

    // })

    this.extendedChart.margin(this.originalOptions.margin)

    if (Function.isFunction(this.applyOptions)) {
      this.applyOptions()
    }
  }

  defineOption(name) {
    Object.defineProperty(this.chart._options, name, {
      get: () => {
        return this.__customOptionValuesStorage[name];
      }, set: (_) => {
        this.__customOptionValuesStorage[name] = _;
      }
    })
  }

  _initExtendedChartOptions() {
    this.extendedChart.options = nv.utils.optionsFunc.bind(this.extendedChart)

    //thesee options will exist for all extensions
    //modules option
    //Can be array of:
    // - strings
    // or
    // - objects like {name: string, options: Object}
    this.defineOption('modules')

    this.defineOption('xField')
    // this.defineOption('xDisplayField')
    this.defineOption('yField')
    // this.defineOption('yDisplayField')

    //custom options
    if (Function.isFunction(this.extendChartOptions)) {
      this.extendChartOptions()
    }

    nv.utils.inheritOptions(this.extendedChart, this.chart)
    nv.utils.initOptions(this.extendedChart)
  }

  _draw() {
    if (Function.isFunction(this.draw)) {
      this.draw()
    }
    this._useModules()
  }

  //MODULES METHODS

  _initModules() {
    const currentModulesDeclarations = this.extendedChart.modules() || []
    if(!areEqual(this.modulesDeclarations, currentModulesDeclarations)) {
      // this.modulesDeclarations = _.cloneDeep(currentModulesDeclarations)
      this.modulesDeclarations = window.cloneDeep(currentModulesDeclarations)


      this.modulesArr = []
      this.modules = {}
      for(let moduleDeclaration of this.modulesDeclarations){
        if(String.isString(moduleDeclaration)) {
          moduleDeclaration = {
            name: moduleDeclaration,
            options: {}
          }
        }

        const Module = nv.modules[moduleDeclaration.name]
        const module = new Module(this, moduleDeclaration.options)

        if(this.modules[module.config.name] == null && (module.config.supportedCharts.includes(this.config.name) || module.config.supportedCharts.includes('*'))){
          this.modulesArr.push(module)
          this.modules[module.config.name] = module
        } else {
          console.warn(`Module "${module.config.name}" doesn't support "${this.config.name}" chart`)
        }
      }
    }
  }

  _forEachEnabledModule(fn) {
    this.modulesArr.each((module) => {
      if(module.options.enabled) {
        fn(module)
      }
    })
  }

  //We do not allow modules to rule margins.
  //We allow them only to specify what values each of them wants as min/max margins, and then we calculate here correct margins based on that
  //summary min is greatest value of all modules' min and initial margin
  //summary max is smallest value of all modules' max and initial margin
  //summary min will be stronger than summary max: if max is smaller than min, its better to have more space than needed
  _applyModulesMinMarginsToChart() {
    let minMargins = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
    this._forEachEnabledModule((module) => {
      minMargins.top = Math.max(module.options.minTopMargin, minMargins.top)
      minMargins.right = Math.max(module.options.minRightMargin, minMargins.right)
      minMargins.bottom = Math.max(module.options.minBottomMargin, minMargins.bottom)
      minMargins.left = Math.max(module.options.minLeftMargin, minMargins.left)
    })
    let maxMargins = {
      top: Infinity,
      right: Infinity,
      bottom: Infinity,
      left: Infinity
    }
    this._forEachEnabledModule((module) => {
      maxMargins.top = Math.min(module.options.maxTopMargin, maxMargins.top)
      maxMargins.right = Math.min(module.options.maxRightMargin, maxMargins.right)
      maxMargins.bottom = Math.min(module.options.maxBottomMargin, maxMargins.bottom)
      maxMargins.left = Math.min(module.options.maxLeftMargin, maxMargins.left)
    })
    let top = Math.min(maxMargins.top, this.originalOptions.margin.top)
    let right = Math.min(maxMargins.right, this.originalOptions.margin.right)
    let bottom = Math.min(maxMargins.bottom, this.originalOptions.margin.bottom)
    let left = Math.min(maxMargins.left, this.originalOptions.margin.left)
    top = Math.max(minMargins.top, top)
    right = Math.max(minMargins.right, right)
    bottom = Math.max(minMargins.bottom, bottom)
    left = Math.max(minMargins.left, left)
    this.extendedChart.margin({top, right, bottom, left})
  }

  _callModulesBeforePrepareData() {
    this._forEachEnabledModule((module) => {
      if(Function.isFunction(module._beforeInstancePrepareData)){
        module._beforeInstancePrepareData()
      }
    })
  }

  _callModulesBeforeUpdate() {
    this._forEachEnabledModule((module) => {
      if(Function.isFunction(module._beforeInstanceUpdate)){
        module._beforeInstanceUpdate()
      }
    })
  }

  _callModulesAfterUpdate() {
    this._forEachEnabledModule((module) => {
      if(Function.isFunction(module._afterInstanceUpdate)){
        module._afterInstanceUpdate()
      }
    })
  }

  _prepareModules() {
    this.extendedChart.dispatch.on('stateChange', () => {
      setTimeout(() => {
        this.extendedChart.update()
      })
    })

    this.modulesArr.each(module => module._prepare())

    this.extendedChart.update()
  }

  _useModules() {
    // if(this.modulesPromise != null) {
    //   this.modulesPromise.cancel()
    // }
    this.modulesPromise = Promise.resolve()
    this._forEachEnabledModule((module) => {
      this.modulesPromise = this.modulesPromise.then(() => {
        return new Promise((resolve, reject) => {
          Promise.resolve(module._process()).then(resolve, reject)
        })
      })
    })

    //making chart reupdate after all modules finished if scheduled
    this.modulesPromise.then(() => {
      if(this.REUPDATE_AFTER_MODULES_CHAIN_FINISHED) {
        this.REUPDATE_AFTER_MODULES_CHAIN_FINISHED = false
        // this.modulesArr.each(module => module.skipNextUpdate())
        this.extendedChart.update()
      }
    })
  }

  scheduleChartReupdateAfterModulesChainFinished() {
    this.REUPDATE_AFTER_MODULES_CHAIN_FINISHED = true
  }

  //REGISTERING
  //register function must be called with class derived from ModelExtension in order to register extension on nvd3
  static register(ClassDerivedFromModelExtension) {
    const name = new ClassDerivedFromModelExtension().config.name

    nv.models[name] = () => {
      const model = new ClassDerivedFromModelExtension()

      return model.extendedChart
    }
  }

}
