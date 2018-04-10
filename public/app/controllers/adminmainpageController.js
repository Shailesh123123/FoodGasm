var app5 = angular.module('adminmainpageController',[]);

app5.controller('adminmainPageCntrl',function($scope,$location){

//On click of add new entities button takes you to the add new hotels page.

$scope.init4 = function(){

$location.path('/addnewhotels');

};

//On click of add new entities button takes you to the careers page.

$scope.init5 = function(){

$location.path('/careers');

};



});
