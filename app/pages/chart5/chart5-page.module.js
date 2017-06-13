'use strict';

angular.module('nlsnChart5Page.module', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/chart5', {
      templateUrl: 'pages/chart5/chart5-page.html',
      controller: 'nlsnChart5PageCtrl'
    });
  }])

  .controller('nlsnChart5PageCtrl', [function () {

  }]);
