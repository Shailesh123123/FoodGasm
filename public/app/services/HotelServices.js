angular.module('hotelServices', [])


.factory('Factory',['$http',function($http){

  commentFactory = {};
  console.log('Inside the comment service');
  //User.create(regData)
  commentFactory.create = function(hotelData){

  return $http.post('/api/newhotels', hotelData);

  }

  return commentFactory;
}]);
