angular.module('adminloginuserControllers',['adminuserServices'])

//controller to authenticate for the admin

.controller('adminregCtrl',function($http,$location,AdminUser){

var app = this;



this.adminregistrationUser = function(adminregData){
app.loading = true;
app.errorMsg = false;

console.log('Form Submitted');
console.log(this.adminregData);

//method to register for admin

AdminUser.create(app.adminregData).then(function(data){
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
