angular.module('adminuserServices', [])

//factory to add new admin.

.factory('AdminUser',['$http',function($http){

userFactory = {};
console.log('Inside the admin login service');
//User.create(regData)

//method to create new admin.

userFactory.create = function(adminregData){

return $http.post('/api/adminusers', adminregData);

}

return userFactory;

}]);
