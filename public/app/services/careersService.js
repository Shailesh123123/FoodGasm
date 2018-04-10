angular.module('careerServices', [])

//factory for career services.

.factory('Careers',['$http', function($http){

careerFactory = {};
console.log('Inside the comment service');
//method to add new career options.

careerFactory.create = function(careerData){

return $http.post('/api/careers', careerData);

}

return careerFactory;

}]);
