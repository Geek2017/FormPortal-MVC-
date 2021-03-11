angular.module('newApp').controller('eftauthorrationCtrl', function($scope) {

    $("#comname").text(localStorage.getItem('comname'))
    $("#comadd").text(localStorage.getItem('comaddress'))
    $("#comno").text(localStorage.getItem('comcontact'))

    if (sessionStorage.getItem('comlogo')) {
        console.log('imageloaded')
        $('#comlogo').attr('src', sessionStorage.getItem('comlogo'));
    } else {
        console.log('imagenotloaded')
        $('#comlogo').attr('src', 'assets/images/plj.jpg')
    }

});