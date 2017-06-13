{
  class MultiBarVerticalChart extends nv.ModelExtension {
    constructor() {
      super({
        name: 'multiBarVerticalChart',
        parent: 'multiBarChart'
      })
    }
  }

  nv.ModelExtension.register(MultiBarVerticalChart)
}
