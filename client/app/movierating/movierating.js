'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movierating', {
        template: '<movierating></movierating>'
      });
  });
