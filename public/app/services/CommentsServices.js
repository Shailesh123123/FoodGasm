angular.module('commentServices', [])


.factory('Comments',['$http',function($http){

commentFactory = {};
console.log('Inside the comment service');
//User.create(regData)
commentFactory.create = function(commentData){

return $http.post('/api/comments', commentData);

}

return commentFactory;

}]);
