{
  class MultiChartWithNesting extends nv.ModelExtension {
    constructor() {
      super({
        name: 'multiChartExt',
        parent: 'multiChart'
      })
    }
  }

  nv.ModelExtension.register(MultiChartWithNesting)
}
