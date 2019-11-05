'use strict';


angular.module('newApp').controller('dashboardCtrl', function ($scope)
{
  $scope.home = 'This is My Home';
  $scope.fireatme=function(){
    alert(1);
  }
});