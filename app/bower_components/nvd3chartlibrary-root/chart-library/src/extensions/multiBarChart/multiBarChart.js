{
  class MultiBarChartWithNesting extends nv.ModelExtension {
    constructor() {
      super({
        name: 'multiBarChartExt',
        parent: 'multiBarChart'
      })
    }
  }

  nv.ModelExtension.register(MultiBarChartWithNesting)
}
