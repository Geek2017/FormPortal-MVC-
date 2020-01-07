'use strict';


angular.module('newApp').controller('addnumberdCtrl', function($scope) {

    $scope.url0 = 'Forms';
    $scope.url1 = 'Add Number';

    var myVar = setInterval(myTimer, 100);

    function myTimer() {
        $(".widget.widget-info").css("background", localStorage.getItem('unicolor'));
        $(".panel").css("border-top-color", localStorage.getItem('unicolor'));
        $(".panel-warning").css("border-top-color", localStorage.getItem('unicolor'));
        $(".x-navigation>li.xn-logo>a:first-child").css("background", localStorage.getItem('unicolor'));
        console.log('addnumber color theme set')

    }

    setTimeout(function() {
        clearInterval(myVar);
    }, 2000);


    $('#logoimg').hide()

    firebase.auth().onAuthStateChanged(function(user) {
        var databaseRef = firebase.database().ref('users/');
        databaseRef.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                if (childData.cusemail === user.email) {

                    var databaseRef1 = firebase.database().ref('com_profiles/');
                    databaseRef1.once('value', function(snapshot1) {
                        snapshot1.forEach(function(childSnapshot1) {
                            var childKey1 = childSnapshot1.key;
                            var childData1 = childSnapshot1.val();
                            if (childData1.cusid == childData.cusid) {
                                // localStorage.setItem('addnocusid',childKey)
                                localStorage.setItem('addnologo', childData1.comlogo)
                                    // console.log(childKey);
                                $("#logoimg").attr("src", localStorage.getItem('addnologo'));
                                $('#logoimg').show()
                            }
                        });
                    });
                }
            });
        });

    });




    $scope.saveaddnumber = function() {

        if ($scope.addno1 == null || $scope.addno2 == null || $scope.addno3 == null || $scope.cusbizname == null || $scope.serviceadd == null || $scope.serviceadd2 == null || $scope.servicecity == null || $scope.servicezip == null || $scope.authorname == null || $scope.yourtel1 == null || $scope.yourtel2 == null || $scope.yourtel3 == null) {
            alert('Some Fields are empty!')
        } else {

            var uid = firebase.database().ref().child('users').push().key;

            var data = {
                addnumber: $scope.addno1 + $scope.addno2 + $scope.addno3,
                cusbizname: $scope.cusbizname,
                serviceadd: $scope.serviceadd,
                serviceadd2: $scope.serviceadd2,
                servicecity: $scope.servicecity,
                servicezip: $scope.servicezip,
                authorname: $scope.authorname,
                yourtel: $scope.yourtel1 + $scope.yourtel2 + $scope.yourtel3,
            }

            var updates = {};
            updates['/addnumbers/' + uid] = data;
            firebase.database().ref().update(updates, alert('Data Saved!'));

        }



    }



});