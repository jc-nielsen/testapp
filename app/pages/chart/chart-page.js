'use strict';

angular.module('nlsnChartPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart', {
    templateUrl: 'pages/chart/chart-page.html',
    controller: 'nlsnChartPageCtrl'
  });
}])

.controller('nlsnChartPageCtrl', [function() {

}]);