$(document).ready(function () {
  // alert('checking')
 
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user)
        
      } else {
       console.log(user)
      }
    });
  });