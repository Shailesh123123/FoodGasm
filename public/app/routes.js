angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider){


$routeProvider.when('/', {

templateUrl: 'app/views/pages/home.html'

})

.when('/about', {

templateUrl: 'app/views/pages/about.html'

})

.when('/signin',
{

templateUrl: 'app/views/pages/users/signin.html',
controller: 'signCtrl',
controllerAs: 'signin'

})

.when('/logout', {

templateUrl: 'app/views/pages/users/logout.html',
controller: 'logoutCntrl'

})

.when('/adminsignin',
{

templateUrl: 'app/views/pages/users/adminsignin.html',
controller: 'adminsignCtrl',
controllerAs: 'adminsignin'

})

.when('/register', {

templateUrl: 'app/views/pages/users/register.html',
controller: 'regCtrl',
controllerAs: 'register'

})

.when('/adminregister', {

templateUrl: 'app/views/pages/users/adminregister.html',
controller: 'adminregCtrl',
controllerAs: 'adminregister'

})

.when('/mainpage', {

templateUrl: 'app/views/pages/users/mainpage.html',
controller: 'mainPageCntrl',
controllerAs: 'mainpage'

})

.when('/adminmainpage', {

templateUrl: 'app/views/pages/users/adminmainpage.html',
controller: 'adminmainPageCntrl',
controllerAs: 'adminmainpage'

})

.when('/addnewhotels', {

templateUrl: 'app/views/pages/users/addnewhotels.html',
controller: 'adminmainhotelsCntrl',
controllerAs: 'adminmainhotels'

})

.when('/careers', {

templateUrl: 'app/views/pages/users/careers.html',
controller: 'careersCntrl',
controllerAs: 'careers'

})

.when('/listpage', {

  templateUrl: 'app/views/pages/users/listpage.html',
  controller: 'listPageCntrl',
  controllerAs: 'listpage'


})

.when('/comments', {

templateUrl: 'app/views/pages/users/comments.html',
controller: 'commentsPageCntrl',
controllerAs: 'comments'

})



.otherwise({ redirectTo: '/'} );

//$locationProvider.html5Mode({
  //enabled: true,
  //requireBase: false
//});

});
