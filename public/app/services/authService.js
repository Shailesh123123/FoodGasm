var app = angular.module('authServices',[]);

app.service('testFactory', function(Auth){
    this.username = " ";
});

//factory to authenticate a user.

app.factory('Auth',['$http', function($http,AuthToken){


var authFactory = {};

//factory method to authenticate a user.

authFactory.login = function(loginData) {

  return $http.post('/api/authenticate',loginData).then(function(data){

console.log(data.data.token);
console.log('user has logged in');

    return data;
  });
};


//jwt web-tokens to maintain session variables.

authFactory.isLoggedIn = function(){

if(AuthToken.getToken()){

return true;

}
else {

return false;

}

};

authFactory.logout = function(){

console.log('the user has been logged out!');

}

return authFactory;

}]);

app.factory('AuthToken', function($window){

var authTokenFactory = {};

//AuthToken.setToken(token);

authTokenFactory.setToken = function(token) {
if(token)
{
$window.localStorage.setItem('token', token);
}
else {
  {
    $window.localStorage.removeItem('token');
  }
}
};

//AuthToken.getToken();
authTokenFactory.getToken = function(){

return $window.localStorage.getItem('token');

};

return authTokenFactory;

});
