'use strict';


angular.module('newApp').controller('indexdCtrl', function ($scope)
{
  $scope.logout=function(){

    firebase.auth().signOut().then(() => {
      console.log('Out')
      window.location.replace("views/");
    });
  }
});