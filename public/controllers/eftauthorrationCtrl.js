angular.module('newApp').controller('eftauthorrationCtrl', function($scope) {
    $scope.url0 = 'Forms';
    $scope.url1 = 'EFT Authorazation';

    var myVar = setInterval(myTimer, 100);

    function myTimer() {
        $(".widget.widget-info").css("background", localStorage.getItem('unicolor'));
        $(".panel").css("border-top-color", localStorage.getItem('unicolor'));
        $(".panel-warning").css("border-top-color", localStorage.getItem('unicolor'));
        $(".x-navigation>li.xn-logo>a:first-child").css("background", localStorage.getItem('unicolor'));
        console.log('EFT color theme set')

    }

    setTimeout(function() {
        clearInterval(myVar);
    }, 2000);

});