'use strict';

angular.module('nlsnChart2Page.module', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart2', {
    templateUrl: 'pages/chart2/chart2-page.html',
    controller: 'nlsnChart2PageCtrl'
  });
}])

.controller('nlsnChart2PageCtrl', [function() {

}]);