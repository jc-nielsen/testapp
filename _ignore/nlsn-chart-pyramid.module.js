'use strict';

angular.module('nlsnChart.Pyramid', [])
  .directive('nlsnChartPyramid', [
    function () {
    //   'nlsnChartDataSvc',
      //function (nlsnChartDataSvc) {

      var theController = function () {
        var vm = this;

        //vm.chartData = nlsnChartDataSvc.getChartDataPyramid();

        return {
          bindToController: true,
          controller: theController,
          controllerAs: 'vm',
          restrict: 'E',
          scope: {},
          templateUrl: 'components/charts/nlsn-chart-pyramid/nlsn-chart-pyramid.html'
        };
      }
    }])

  // .service('nlsnChartDataSvc', ['$resource', function ($resource) {
  //   this.getChartDataPyramid = function () {
  //     var pyramidChartApiUrl = '/public/data/chart/nlsn-chart-pyramid.sample.json';
  //     var theResource = $resource(pyramidChartApiUrl);
  //     return theResource.query();
  //   }
  // }])
;
