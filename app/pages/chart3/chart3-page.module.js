'use strict';

angular.module('nlsnChart3Page.module', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chart3', {
    templateUrl: 'pages/chart3/chart3-page.html',
    controller: 'nlsnChart3PageCtrl'
  });
}])

.controller('nlsnChart3PageCtrl', [function() {

}]);