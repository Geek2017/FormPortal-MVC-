'use strict';

// Application Modules and Routing
angular
  .module('sfApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
     
      .when('/', {
        templateUrl : 'views/sfmain.html',
        controller: 'formsindex'
      })
      .when('/sfsalesproposal', {
        templateUrl : 'views/sfsalesproposal.html',
        controller: 'sfsalesproposalCtrl'
      })
     
  });