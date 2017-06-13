{
  class MultiBarChartWithNesting extends nv.ModelExtension {
    constructor() {
      super({
        name: 'multiBarHorizontalChartExt',
        parent: 'multiBarHorizontalChart'
      })
    }
  }

  nv.ModelExtension.register(MultiBarChartWithNesting)
}
