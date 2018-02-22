'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/selectdatetheatretime', {
        template: '<selectdatetheatretime></selectdatetheatretime>'
      });
  });
