'use strict';


angular.module('newApp').controller('salesproposalCtrl', function ($scope)
{
  $scope.mrcadd=function(){

    var $tableBody = $('#mcrrowTable').find("tbody"),
      $trLast = $tableBody.find("tr:first"),
      $trNew = $trLast.clone();
  
    $trLast.after($trNew);
   
  }

  $scope.mcritems = [{
    items:"Unlimited use Hosted VoIP service priced monthly per call path"
}, {
    items:"Fax adapter service"
}, {
    items:"Additional DIDs (direct dial phone numbers-one is included)"
},{
  items:"Electronic fax service (inbound and outbound)"
},{
  items:"Virtual Extensions for cell or land lines included at no additional charge"
},{
  items:"SMS Text with 1,000 texts"
},{
  items:"Note: 1.50 per device for regulatory recovery will be added."
}];

});