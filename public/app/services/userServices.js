angular.module('userServices', [])

//factory to get into registration for the user.

.factory('User',['$http',function($http){

userFactory = {};
console.log('Inside the login service');

//factory method to send post request to the backend.

userFactory.create = function(regData){

return $http.post('/api/users', regData);

}

return userFactory;

}]);
