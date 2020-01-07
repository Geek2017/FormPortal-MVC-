'use strict';


angular.module('newApp').controller('indexdCtrl', function($scope) {

    $scope.url0 = 'Home';
    $scope.url1 = 'Dashboard';






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
            // console.log(user);

            localStorage.setItem('curusermail', user.email);

            var d1 = document.getElementById('curusername');
            d1.insertAdjacentHTML('beforeend', '<p>' + user.displayName + '</p>');
        } else {
            window.location.replace("login.html");
        }
    });


    var myVar = setInterval(myTimer, 100);

    function myTimer() {
        var ref = firebase.database().ref("users");
        ref.orderByChild("cusemail").equalTo(localStorage.getItem('curusermail')).on("child_added", function(snapshot) {
            console.log(snapshot.val());

            if (snapshot.val().userimage) {

                sessionStorage.setItem('userimg', snapshot.val().userimage);
            }

        });
        if (sessionStorage.getItem('userimg')) {
            console.log('imageloaded')
            $scope.userimg = sessionStorage.getItem('userimg');
            $('#profile-mini').attr('src', sessionStorage.getItem('userimg'));
            $('#profile-image').attr('src', sessionStorage.getItem('userimg'));

        } else {
            console.log('imagenotloaded')
            $('#profile-mini').attr('src', 'assets/images/users/avatar.jpg')
            $('#profile-image').attr('src', 'assets/images/users/avatar.jpg')
        }
    }

    function myStopFunction() {
        clearInterval(myVar);
    }

    setTimeout(function() {
        document.getElementById("formportal").style.visibility = "visible";
        myStopFunction()
    }, 5000);


    var ref = firebase.database().ref("com_profiles");
    ref.orderByChild("cusid").equalTo(localStorage.getItem('curuserid')).on("child_added", function(snapshot) {
        // console.log(snapshot.val().comlogo);
        sessionStorage.setItem('comlogo', snapshot.val().comlogo);
    });

    // $scope.comlogo ='';

    $scope.comname = localStorage.getItem('curcomname');

    $scope.logout = function() {

        firebase.auth().signOut().then(() => {
            console.log('Out')
            localStorage.clear();
            sessionStorage.clear();
            window.location.replace("login.html");
        });
    }
});