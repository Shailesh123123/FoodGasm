var app = angular.module('adminauthServices',[]);

//factory to authenticate admin.

app.factory('testService1',['$http', function($http){

console.log('inside the factory of admin authorization');
var authFactory = {};

//factory method to authenticate admin.

authFactory.login = function(credentials) {
console.log(credentials);
  return $http.post('/api/adminauthenticate',credentials);
}
console.log(authFactory);
return authFactory;

}]);
