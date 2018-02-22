'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/payment', {
        template: '<payment></payment>'
      });
  });
