'use strict';


angular.module('newApp').controller('dashboardCtrl', function($scope, $rootScope) {


    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log(current.originalPath); // Do not use $$route here it is private
    });


    // var myVar = setInterval(myTimer, 100);


    // function myTimer() {
    //     $(".widget.widget-info").css("background", localStorage.getItem('unicolor'));
    //     $(".panel").css("border-top-color", localStorage.getItem('unicolor'));
    //     $(".panel-warning").css("border-top-color", localStorage.getItem('unicolor'));
    //     $(".x-navigation>li.xn-logo>a:first-child").css("background", localStorage.getItem('unicolor'));
    //     $(".panel-default").css("border-top-color", localStorage.getItem('unicolor'));
    //     console.log('Dashboard color set')
    // }

    // setTimeout(function() {
    //     clearInterval(myVar);
    // }, 1000);

});