'use strict';

angular.module('newApp').controller('createstaffdCtrl', function($scope, $filter) {

    $scope.url0 = 'Forms';
    $scope.url1 = 'Credit Card Auth';

    // var ref = firebase.database().ref("users");
    // ref.orderByChild("cusid").equalTo(sessionStorage.getItem('curuserid')).on("child_added", function(snapshot) {

    //     // console.log('Staff List Loaded...', snapshot.val());


    // });

    var fb = firebase.database().ref("users");

    fb.on("value", function(snapshot) {
        $scope.$apply(function() {
            $scope.stafflist = snapshot.val();
            delete $scope.stafflist[localStorage.getItem('childkey')]
            $scope.stafflists = $scope.stafflist
            console.log('Loading Staff Data...');
        });
    });

    $scope.limitit = 2;


    console.log($scope.stafflists);
    $('.parent').find('div:first').remove();

    $scope.crearestaff = function() {

        alert('checking')
        var data = {
            stuffname: $('#stuffname').val(),
            stuffmail: $('#stuffmail').val(),
            stuffcontacts: $('#stuffcontacts').val(),
            stuffdesignation: $('#stuffcontacts').val()
        };



        var passwords = {
            password: $('#stuffpassword').val(),
            cPassword: $('#stuffre-password').val(),
        }

        if (data.stuffmail != '' && passwords.password != '' && passwords.cPassword != '') {
            if (passwords.password == passwords.cPassword) {
                //create the user

                firebase.auth()
                    .createUserWithEmailAndPassword(data.stuffmail, passwords.password)
                    .then(function(user) {

                        sendEmailVerification(data);
                        save_cus_credencials();


                        var cusname = $('#stuffname').val();
                        var email = $('#stuffmail').val();

                        function sendEmailVerification(data) {
                            cusname = firebase.auth().currentUser;
                            email = data.email || user.email;
                            var urlr = "cmlformportal-b8674.web.app";

                            return user.emailVerified || user.sendEmailVerification({
                                url: urlr,
                            });
                        }
                        //save customer cred to firebase
                        function save_cus_credencials() {


                            var uid = firebase.database().ref().child('users').push().key;
                            var cusid = localStorage.getItem('curuserid');
                            var cusname = $('#stuffname').val();
                            var cusemail = $('#stuffmail').val();


                            var data = {
                                user_id: uid,
                                cusid: cusid,
                                cusname: cusname,
                                cusemail: cusemail,
                                role: "0"
                            }

                            if (user) {
                                user.updateProfile({
                                    displayName: $('#stuffname').val()
                                })
                            }


                            var updates = {};
                            updates['/users/' + uid] = data;
                            firebase.database().ref().update(updates);
                            refresh(localStorage.setItem("hidme", 1));

                        }



                        function refresh() {
                            setTimeout(function() {
                                alert("Data Successfully Sent");
                            }, 1000);
                        }

                    }).catch(function(error) {
                        console.log("Registration Failed!", error.message);
                        alert(error.message + ' Check your input');

                    });


            }
        }
    }
});