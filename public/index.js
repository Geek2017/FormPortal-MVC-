'use strict';


angular.module('newApp').controller('indexdCtrl', function ($scope)
{
  var config = {
    apiKey: "AIzaSyArkU60LENXmQPHRvWoK26YagzprezV3dg",
    authDomain: "cmlformportal-b8674.firebaseapp.com",
    databaseURL: "https://cmlformportal-b8674.firebaseio.com/",
    projectId: "cmlformportal-b8674"
  };
  firebase.initializeApp(config);

  //create firebase references
  var Auth = firebase.auth();
  var dbRef = firebase.database();
  var usersRef = dbRef.ref('users')
  var auth = null;

   
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.emailVerified)

    } else {
     console.log(user)
      window.location.replace("login.html");
      
    }
  });
 
  $scope.logout=function(){

    firebase.auth().signOut().then(() => {
      console.log('Out')
      window.location.replace("login.html");
    });
  }
});