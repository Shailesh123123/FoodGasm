angular.module('listPageServices', [])

//factory to get into the main service.

.factory('listFactory',['$http', function($http){




var vm = this;

//factory method to get into retrieval.

vm.getData = function() {

return $http.get('http://localhost:8080/api/hotels');

};
console.log(vm);
return vm;


}]);
