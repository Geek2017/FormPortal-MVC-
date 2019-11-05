'use strict';

// Application Modules and Routing
angular
  .module('loginApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
     
      .when('/', {
        templateUrl : 'views/login.html',
        controller: 'loginCtrl'
      })
     
  });