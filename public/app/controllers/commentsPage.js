var app3 = angular.module('commentsPageController',['commentServices']);

//controller to add comments for the user/customer functionality

app3.controller('commentsPageCntrl',function($scope,Comments){


var app = this;



this.CommentsUser = function(commentData){


console.log('Comments Submitted');
console.log(this.commentData);


//method to add comments
Comments.create(app.commentData).then(function(commentData){



});
};


});
