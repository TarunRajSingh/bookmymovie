'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/moviemapping', {
        template: '<moviemapping></moviemapping>',
        authenticate:'admin'

      });
  });
