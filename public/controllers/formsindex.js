'use strict';


angular.module('sfApp').controller('formsindex', function ($scope,$location)
{
  
// alert(window.location.pathname);
var authurl=window.location.href 

var fields = authurl.split('#/:');

var name = fields[0];
var street = fields[1];

if(fields[1]=='ukjkYyi2QjDaHD9V'){
    // window.location.href = "http://www.w3schools.com";
    $location.path( "/sfsalesproposal" );
}


console.log(name);
console.log(street);



});