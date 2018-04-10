angular.module('mainServices', [])

//fcatory to get into main service

.factory('Main',['$http',function($http){

mainFactory = {};

//factory method to get into hotels data.

mainFactory.create = function(searchData){

  return $http.get('api/hotels',searchData);
}

  return mainFactory;
}]);
