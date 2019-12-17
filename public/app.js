'use strict';

// Application Modules and Routing
angular
    .module('newApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'views/dashboard.html',
                controller: 'dashboardCtrl'
            })
            .when('/sharesalesproposal/16461231321634', {
                templateUrl: 'views/sharesalesproposal.html',
                controller: 'sharesalesproposalCtrl'
            })
            .when('/createstaff', {
                templateUrl: 'views/createstaff.html',
                controller: 'createstaffdCtrl'
            })
            .when('/addnumber', {
                templateUrl: 'views/addnumber.html',
                controller: 'addnumberdCtrl'
            })
            .when('/salesproposal', {
                templateUrl: 'views/salesproposal.html',
                controller: 'salesproposalCtrl'
            })
            .when('/tollfreeport', {
                templateUrl: 'views/tollfreeport.html',
                controller: 'tollfreeCtrl'
            })
            .when('/creditcardauth', {
                templateUrl: 'views/creditcardauth.html'
            })
            .when('/eftauthorration', {
                templateUrl: 'views/eftauthorration.html'
            })
            .when('/loaport', {
                templateUrl: 'views/loaport.html',
                controller: 'loaportCtrl'
            })
            .when('/quickInstruction', {
                templateUrl: 'views/quickInstruction.html'
            })
            .when('/starcode', {
                templateUrl: 'views/starcode.html'
            })
            .when('/usersprofile', {
                templateUrl: 'views/usersprofile.html',
                controller: 'usersprofileCrtl'
            })
    });