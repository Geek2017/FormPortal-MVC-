'use strict';


angular.module('newApp').controller('indexdCtrl', function ($scope)
{
 

  setTimeout(function(){ 
    document.getElementById("formportal").style.visibility = "visible";
  }, 3000);

    

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
 

   
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
       $('curusername').val(user.displayName);
       console.log(user);

       localStorage.setItem('curusermail',user.email);

       var d1 = document.getElementById('curusername');
       d1.insertAdjacentHTML('beforeend', '<p>'+user.displayName+'</p>');
    } else {
      window.location.replace("login.html");
    }
  });
  
  



  $scope.logout=function(){

    firebase.auth().signOut().then(() => {
      console.log('Out')
      localStorage.clear();
      window.location.replace("login.html");
    });
  }
});