'use strict';

// Application Modules and Routing
angular
  .module('loginApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
     
      .when('/', {
        templateUrl : 'login.html',
        controller: 'loginCtrl'
      })
      .when('/wizard', {
        templateUrl : 'wizard.html',
        controller: 'wizardCtrl'
      })
     
  });