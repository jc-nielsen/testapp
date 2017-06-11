'use strict';

angular.module('nlsnChart1Page.module', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart1', {
    templateUrl: 'pages/chart1/chart1-page.html',
    controller: 'nlsnChart1PageCtrl'
  });
}])

.controller('nlsnChart1PageCtrl', [function() {

}]);