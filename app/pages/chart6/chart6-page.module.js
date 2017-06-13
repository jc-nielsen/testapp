'use strict';

angular.module('nlsnChart6Page.module', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/chart6', {
      templateUrl: 'pages/chart6/chart6-page.html',
      controller: 'nlsnChart6PageCtrl'
    });
  }])

  .controller('nlsnChart6PageCtrl', [function () {

  }]);
