var app7 = angular.module('careersController',['careerServices']);

//controller to add careers.

app7.controller('careersCntrl',function($scope,$location,Careers){


var app = this;

//method to add careers.

this.JobsAdd = function(careerData)
{

  console.log('Career information Submitted');
  console.log(this.careerData);

  Careers.create(app.careerData).then(function(careerData){
  //console.log(data.data.success);
  //console.log(data.data.message);


  });



};

});
