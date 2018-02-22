'use strict';

angular.module('yeomanApp', ['yeomanApp.auth', 'yeomanApp.admin', 'yeomanApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });

angular.module('yeomanApp').filter('unique', function () {

    return function (items, filterOn) {

      if (filterOn === false) {
        return items;
      }

      if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
        var hashCheck = {}, newItems = [];

        var extractValueToCompare = function (item) {
          if (angular.isObject(item) && angular.isString(filterOn)) {
            return item[filterOn];
          } else {
            return item;
          }
        };

        angular.forEach(items, function (item) {
          var valueToCheck, isDuplicate = false;

          for (var i = 0; i < newItems.length; i++) {
            if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            newItems.push(item);
          }

        });
        items = newItems;
      }
      return items;
    };

  });

  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tarunrajsingh97@gmail.com',
      pass: ''
    }
  });
  console.log("loggedIN");

  var mailOptions = {
    from: '"Tarun Raj Singh" <tarunrajsingh97@gmail.com',
    to: 'tarunrajsingh97@gmail.com',
    subject: 'Sending Email using Node.js',
   text: 'hello from node js'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
