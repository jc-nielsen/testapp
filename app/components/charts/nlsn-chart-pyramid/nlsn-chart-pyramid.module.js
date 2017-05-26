'use strict';

angular.module('nlsnChart.Pyramid', [])

  .directive('nlsnChartPyramid', [
    //'nlsnChartDataSvc',
    //function (nlsnChartDataSvc) {
    function () {

      var theController = function () {
        var vm = this;

        // vm.chartData= nlsnChartDataSvc.getChartDataPyramid().then {
        //
        // }

      };

      return {
        bindToController: true,
        controller: theController,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {},
        templateUrl: 'components/charts/nlsn-chart-pyramid/nlsn-chart-pyramid.html'
      };
    }]);