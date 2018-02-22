'use strict';

angular.module('yeomanApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/seatbooking', {
                template: '<seatbooking></seatbooking>'
      });
  });
