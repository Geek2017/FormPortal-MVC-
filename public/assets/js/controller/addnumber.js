$(document).ready(function() {


    firebase.auth().onAuthStateChanged(function(user) {

        //   console.log(user)
        var databaseRef = firebase.database().ref('com_profiles/');
        databaseRef.once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();

                console.log(childData);

                $('#logoimg').attr('src', childData.comlogo);

            });
        });


    });
});