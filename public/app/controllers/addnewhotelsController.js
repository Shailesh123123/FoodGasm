var app6 = angular.module('addnewhotelsController',['hotelServices']);


//Into the controller in the admin functionality to add new hotels

app6.controller('adminmainhotelsCntrl',function($scope,Factory,$http){



var app = this;

//method to add hotels.

this.AddHotels = function(hotelData){


console.log('hotel data Submitted');
console.log(this.hotelData);

Factory.create(app.hotelData).then(function(hotelData){




});
};


});
