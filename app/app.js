'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngResource',
  'ngRoute',
  'nlsnHomePage.module',
  'nlsnChart1Page.module',
  'nlsnChart2Page.module',
  'nlsnChart3Page.module',
  'nlsnChart.pyramid.module',
  'nlsnChart.donut.module',
  'nlsnChart.3.module',
  'nlsnDataSvc.module'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
