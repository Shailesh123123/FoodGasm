var app2 = angular.module('loginController',['authServices']);

//controller to log into the user account.

app2.controller('signCtrl',function(Auth,$location,$timeout,$scope,testFactory){

  var app3 = this;
  $scope.myService={};
$scope.myService = testFactory;

console.log('Inside the login controller!');

//method to log into the user account.


  this.doLogin = function(loginData){
    app3.message=" ";
  app3.loading = true;
  app3.errorMsg = false;

  console.log(this.loginData);

  Auth.login(app3.loginData).then(function(data){
  console.log(data.data.success);
  console.log(data.data.message);

  if(data.data.success)
  {
    app3.message=" ";
    app3.loading = false;
  $location.path('/mainpage');

  }
  else {

    if (status === 401) {
      $rootScope.$broadcast('event:loginRequired');
    }

  app3.loading = false;
  app3.errorMsg = data.data.message;

  }
  });
  };


});
