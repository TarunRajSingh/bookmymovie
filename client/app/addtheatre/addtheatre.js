'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addtheatre', {
        template: '<addtheatre></addtheatre>',
        authenticate:'admin'
      });
  });
