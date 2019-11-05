'use strict';

// Application Modules and Routing
angular
  .module('newApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
     
      .when('/', {
        templateUrl : 'views/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .when('/addnumber', {
        templateUrl : 'views/addnumber.html'
      })
      .when('/salesproposal', {
        templateUrl : 'views/salesproposal.html'
      })
      .when('/tollfreeport', {
        templateUrl : 'views/tollfreeport.html'
      })
      .when('/creditcardauth', {
        templateUrl : 'views/creditcardauth.html'
      })
      .when('/eftauthorration', {
        templateUrl : 'views/eftauthorration.html'
      })
      .when('/loaport', {
        templateUrl : 'views/loaport.html'
      })
      .when('/quickInstruction', {
        templateUrl : 'views/quickInstruction.html'
      })
      .when('/starcode', {
        templateUrl : 'views/starcode.html'
      })
  });