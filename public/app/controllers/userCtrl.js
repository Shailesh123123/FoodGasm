angular.module('userControllers',['userServices'])

//controller for registration functionality.

.controller('regCtrl',function($http,$location,User,$scope){

var app = this;



this.registrationUser = function(regData){
app.loading = true;
app.errorMsg = false;

console.log('Form Submitted');
console.log(this.regData);

//method to create new user.

User.create(app.regData).then(function(data){
console.log(data.data.success);
console.log(data.data.message);
if(data.data.success)
{
  app.loading = false;
$location.path('/');

}
else {
app.loading = false;
app.errorMsg = data.data.message;

}
});
};

});
