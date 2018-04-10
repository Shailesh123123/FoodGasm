var app1 = angular.module('adminloginController',['adminauthServices']);

//authentication controller to authenticate admin

app1.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

app1.controller('adminsignCtrl',function(AUTH_EVENTS,$location,$scope,$rootScope,testService1,$http)
{

  $scope.credentials = {
     username: '',
     password: ''
   };

//method to authenticate the admin.

   $scope.login = function (credentials) {
     testService1.login(credentials).then(function (user) {
       $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
       $location.path('/adminmainpage');
       //$scope.setCurrentUser(user);
     }, function () {
       $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
     });
   };

});
