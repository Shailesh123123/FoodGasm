var app = angular.module('mainController',[]);

//Into the main controller for the main page

app.controller('mainPageCntrl',function($scope, $location){

//into the method to take you to lispage to search for hotels on the click of listpage button for customer.

$scope.getUserOne = function () {

  console.log('inside here');



        $location.path('/listpage');
    }



});
