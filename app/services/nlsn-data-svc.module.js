'use strict';

angular.module('nlsnDataSvc.module', [])
  .service('nlsnDataSvc', ['$resource', function ($resource) {
    this.getChartDataPyramid = function () {
      // var pyramidChartApiUrl = '/public/data/chart/test.json';
      var pyramidChartApiUrl = '/public/data/chart/nlsn-chart-pyramid.sample.json';
      var theResource = $resource(pyramidChartApiUrl, null,
        {
          'query': {method: 'GET', isArray: false}
        });
      // var theResource = $resource(pyramidChartApiUrl);
      return theResource.query();
    }
  }])
;
