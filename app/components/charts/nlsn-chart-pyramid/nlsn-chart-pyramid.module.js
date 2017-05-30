'use strict';

angular.module('nlsnChart.Pyramid.module', [])

  .directive('nlsnChartPyramid', [
    'nlsnDataSvc',
    function (nlsnDataSvc) {

      var theController = function () {
        var vm = this;
        vm.chartData= nlsnDataSvc.getChartDataPyramid();
      };

      return {
        bindToController: true,
        controller: theController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {},
        templateUrl: 'components/charts/nlsn-chart-pyramid/nlsn-chart-pyramid.html'
      };
    }])
;