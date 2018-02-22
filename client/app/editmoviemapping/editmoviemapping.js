'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/editmoviemapping', {
        template: '<editmoviemapping></editmoviemapping>',
        authenticate:'admin'

      });
  });
