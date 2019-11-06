'use strict';

// Controller for View1
angular.module('loginApp').controller('wizardCtrl', function ($scope)
{
    alert('123')
   $scope.execute= function() {
        var dbRef = firebase.database().ref().child('cus_data');
        dbRef.on('value', snapshot => {
         var data=snapshot.val();
         for (i=0;i<=data.length;i++){
          var dbRef0 = firebase.database().ref().child('cus_data/'+i+'/customerid');
          dbRef0.on('value', dataval => {
  
            if(dataval.val()==$('#cusid').val()){
              // console.log(dataval.val(),i);
              // alert('Customer Validated AutoFill will take place');
              var dbRef = firebase.database().ref().child('cus_data/'+i);
              dbRef.on('value', calling => {
                // console.log(calling.val());
                $('#comname').val(calling.val().company);
                $('#comcontact').val(calling.val().customerphone);
                $('#comaddress').val(calling.val().address1+' '+calling.val().state);
  
              });
  
  
  
            }
            
          });
         }
         
        })
      }

});