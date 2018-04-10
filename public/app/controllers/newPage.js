var app2 = angular.module('listPageController',['listPageServices']);

//controller to retirve data from the backend and also to navigate to the comments page

app2.controller('listPageCntrl',['$scope','$http', '$location', 'listFactory',function($scope,$http,$location,listFactory){

  var app = this;

console.log('inside list page controller');

//method to retrieve data from the back end

listFactory.getData().then(function(res){

console.log(res.data);


$scope.hotels = res.data;

});

//method to navigate to the comments page.

$scope.init2 = function() {

  $location.path('/comments');



};




}]);
