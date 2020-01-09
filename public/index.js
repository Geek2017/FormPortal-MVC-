'use strict';


angular.module('newApp').controller('indexdCtrl', function($scope) {

    $scope.url0 = 'Home';
    $scope.url1 = 'Dashboard';

    setTimeout(function() {
        document.getElementById("formportal").style.visibility = "visible";

    }, 4000);

    $(".activate").addClass("active");



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
            console.log('Processing....');
            sessionStorage.setItem('curuserid', snapshot.val().cusid);
            runtime();


            var datacontent = snapshot.val().role

            datacontent == "0" ? $('#gearup').hide() : $('#gearup').show();

            sessionStorage.setItem('role', snapshot.val().role);

            if (snapshot.val().userimage) {

                sessionStorage.setItem('userimg', snapshot.val().userimage);
            }

        });
        if (sessionStorage.getItem('userimg')) {
            console.log('imageloaded')
            $('#profile-mini').attr('src', sessionStorage.getItem('userimg'));
            $('#profile-image').attr('src', sessionStorage.getItem('userimg'));

        } else {
            console.log('imagenotloaded')
            $('#profile-mini').attr('src', 'assets/images/users/avatar.jpg')
            $('#profile-image').attr('src', 'assets/images/users/avatar.jpg')
        }
    }

    function myStopFunction() {
        unicolorandtheme();
        clearInterval(myVar);
    }

    setTimeout(function() {
        var d2 = document.getElementById('span');
        d2.insertAdjacentHTML('beforeend', '' + sessionStorage.getItem('curcomname') + '');
        myStopFunction();
    }, 3000);

    function runtime() {

        var ref = firebase.database().ref("com_profiles");
        ref.orderByChild("cusid").equalTo(sessionStorage.getItem('curuserid')).on("child_added", function(snapshot) {
            console.log('Logo is Set');
            sessionStorage.setItem('curcomname', snapshot.val().comname);
            sessionStorage.setItem('comlogo', snapshot.val().comlogo);
        });

        var ref = firebase.database().ref("theme_info");
        ref.orderByChild("cusid").equalTo(sessionStorage.getItem('curuserid')).on("child_added", function(snapshot) {
            console.log('Unicolor & Theme is Set');
            localStorage.setItem('unicolor', snapshot.val().formcolor);
            localStorage.setItem('theme', snapshot.val().theme);
        });



    }


    function unicolorandtheme() {
        $(".widget.widget-info").css("background", localStorage.getItem('unicolor'));
        $(".panel").css("border-top-color", localStorage.getItem('unicolor'));
        $(".panel-warning").css("border-top-color", localStorage.getItem('unicolor'));
        $(".x-navigation>li.xn-logo>a:first-child").css("background", localStorage.getItem('unicolor'));
        console.log('red')
        $("#theme").prop("href", localStorage.getItem('theme'));
    }


    $scope.logout = function() {

        firebase.auth().signOut().then(() => {
            console.log('Out')
            localStorage.clear();
            sessionStorage.clear();
            window.location.replace("login.html");
        });
    }
});