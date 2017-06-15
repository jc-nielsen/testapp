'use strict';

angular.module('nlsnDataSvc.module', [])
  .service('nlsnDataSvc', ['$resource', function ($resource) {

    this.getChartDataDonutShare = function () {
      var pyramidChartApiUrl = '/public/data/chart/nlsn-chart-donut-share.json';
      var theResource = $resource(pyramidChartApiUrl, null,
        {
          'query': {method: 'GET', isArray: false}
        });
      return theResource.query();
    };

    this.getChartDataNvd3Donut = function () {
      var pyramidChartApiUrl = '/public/data/chart/nvd3-donut.json';
      var theResource = $resource(pyramidChartApiUrl, null,
          {
            'query': {method: 'GET', isArray: false}
          });
      return theResource.query();
    };

    this.getChartDataPyramid = function () {
      var pyramidChartApiUrl = '/public/data/chart/nlsn-chart-pyramid.json';
      var theResource = $resource(pyramidChartApiUrl, null,
          {
            'query': {method: 'GET', isArray: false}
          });
      return theResource.query();
    };

  }])
;
