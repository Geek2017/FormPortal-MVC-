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
 

   
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     
      var databaseRef = firebase.database().ref('users/');
      databaseRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
          var datas =childSnapshot.val();
    
            if(datas.cusemail===user.email){
              console.log(datas.cusname);
             localStorage.setItem('curusername',datas.cusname);
            }  
        })
      });
      
    } else {
      window.location.replace("login.html");
    }
  });


  setTimeout(function () {
    setinfo();
  }, 3000);
  function setinfo(){
    alert('123')
    $scope.curuser = localStorage.getItem('curusername');
  }
  


  $scope.logout=function(){

    firebase.auth().signOut().then(() => {
      console.log('Out')
      localStorage.clear();
      window.location.replace("login.html");
    });
  }
});