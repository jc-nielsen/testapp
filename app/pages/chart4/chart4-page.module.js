'use strict';

angular.module('nlsnChart4Page.module', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/chart4', {
      templateUrl: 'pages/chart4/chart4-page.html',
      controller: 'nlsnChart4PageCtrl'
    });
  }])

  .controller('nlsnChart4PageCtrl', [function () {

  }]);
