'use strict';

angular.module('nlsnHomePage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home-page.html',
    controller: 'nlsnHomePageCtrl'
  });
}])

.controller('nlsnHomePageCtrl', [function() {

}]);