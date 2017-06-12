'use strict';

angular.module('nlsnDataSvc.module', [])
  .service('nlsnDataSvc', ['$resource', function ($resource) {

    this.getChartDataDonut = function () {
      var pyramidChartApiUrl = '/public/data/chart/nlsn-chart-donut.json';
      var theResource = $resource(pyramidChartApiUrl, null,
        {
          'query': {method: 'GET', isArray: false}
        });
      return theResource.query();
    };

    this.getChartDataPyramid = function () {
      var pyramidChartApiUrl = '/public/data/chart/nlsn-chart-pyramid.sample.json';
      var theResource = $resource(pyramidChartApiUrl, null,
          {
            'query': {method: 'GET', isArray: false}
          });
      return theResource.query();
    };

  }])
;
