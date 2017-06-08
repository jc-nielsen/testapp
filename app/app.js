'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngResource',
  'ngRoute',
  'nlsnHomePage.module',
  'nlsnChartPage.module',
  'nlsnChart2Page.module',
  'nlsnChart3Page.module',
  'nlsnChart.Pyramid.module',
  'nlsnChart.Pyramid2.module',
  'nlsnChart.Pyramid3.module',
  'nlsnDataSvc.module'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
