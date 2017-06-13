(function () {

  angular
    .module('nlsn.chart.components.helper',['nlsn.chart.components.util.colors'])
    .service('chartHelpers', [
      '$nlsnColors',
      chartHelpers
    ])

  function chartHelpers($nlsnColors) {
    return new nv.ChartHelpers($nlsnColors.stdcolors)
  }
})();

