'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movie', {
        template: '<movie></movie>',
        authenticate:'admin'
      });
  });
