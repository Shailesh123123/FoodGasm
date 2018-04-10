var User = require('../models/users');
var AdminUser = require('../models/adminuser');
var Characterstics = require('../models/characterstics');
var Comments = require('../models/comments');
var Hotels = require('../models/hotels');
var Careers = require('../models/careers');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/characterstics";
var http = require('http');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var request = require('request-promise');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';

Promise.promisifyAll(mongoose);

//constructor (@Inject(Http) private http:Http) { }

module.exports = function(router){
  //http://localhost:8080/api/users
  router.post('/users', function(req,res){

console.log("I am here") ;
var user = new User();
user.username = req.body.username;
user.password = req.body.password;
user.email = req.body.email;
if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == ''|| req.body.email == null || req.body.email == '')
{
res.json({ success: false, message: 'Ensure username,email and password were provided'});
}
else {

user.save(function(err){
	if(err)
	{
		res.json({ success: false, message: 'Username or email already exists!'});
	}
	else
		{
			res.json({ success: true, message: 'User created!'});
		}

});
}
});



//http://localhost:8080/api/adminusers

router.post('/adminusers', function(req,res){

console.log("I am here into admin users") ;
var adminuser = new AdminUser();
adminuser.username = req.body.username;
adminuser.password = req.body.password;
adminuser.email = req.body.email;
if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == ''|| req.body.email == null || req.body.email == '')
{
res.json({ success: false, message: 'Ensure username,email and password were provided'});
}
else {

adminuser.save(function(err){
if(err)
{
  res.json({ success: false, message: 'Username or email already exists!'});
}
else
  {
    res.json({ success: true, message: 'User created!'});
  }

});
}
});



//http://localhost:8080/api/authenticate

router.post('/authenticate',function(req,res){
User.findOne({ username: req.body.username }).select('email username password').exec(function(err, user){

if(err) throw err;

if(!user){

  res.json({ success: false, message: 'Could not authenticate user'});
} else if(user){
if(req.body.password){

var validPassword = user.comparePassword(req.body.password);

}
else{
  res.json({ success: false,message: 'No password provided'});
}
  var validPassword = user.comparePassword(req.body.password);
  if(!validPassword){

    res.json({ success: false,message: 'Could not authenticate password' });

  }
  else {
var token = jwt.sign({ username: user.username, email: user.email}, secret, { expiresIn: '24h'});
res.json({ success: true,message: 'User authenticated', token: token});


  }
}
});
});

jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' });

//http://localhost:8080/api/adminauthenticate

router.post('/adminauthenticate',function(req,res){
AdminUser.findOne({ username: req.body.username }).select('email username password').exec(function(err, adminuser){
console.log('into the method to authenticate admin user');
if(err) throw err;

if(!adminuser){

  res.json({ success: false, message: 'Could not authenticate admin'});
} else if(adminuser){
if(req.body.password){

var validPassword = adminuser.comparePassword(req.body.password);

}
else{

  res.json({ success: false,message: 'No password provided'});
}
  var validPassword = adminuser.comparePassword(req.body.password);
  if(!validPassword){

    res.json({ success: false,message: 'Could not authenticate password' });

  }
  else {
res.json({ success: true,message: 'Admin authenticated'});


  }
}
});
});

//http://localhost:8080/api/hotels

router.get('/hotels',function(req,res){


mongoose.connect('mongodb://localhost:27017/characterstics');

var db = mongoose.connection;

var characterstics = new Characterstics();
characterstics.Name = req.body.Name;
characterstics.City = req.body.City;
characterstics.Cuisine = req.body.Cuisine;
characterstics.Ratings = req.body.Ratings;


var charactersMap = {};
Characterstics.find({}).exec()
.then(function(characterstics){

charactersMap = characterstics;
//res.send(charactersMap);
console.log(charactersMap);

})
.then(undefined, function(err){
      //Handle error
      console.log(err);
    })

 });





//http://localhost:8080/api/comments

router.post('/comments', function(req,res){

  mongoose.connect('mongodb://localhost:27017/comments');

  var db = mongoose.connection;

res.send('Posted new comments!');

console.log('posted new comments');

var comments = new Comments(req.body);
comments.username = req.body.username;
comments.comments = req.body.comments;
comments.name = req.body.Name;



comments.save(function(err){
	if(err)
  {
console.log(err);
    //res.json({ success: false, message: ' comments could not be added!'});
  }
	else
  {

    //res.json({ success: true, message: 'comments added!'});
    console.log(comments);
  }
//console.log(comments);
});


});

//http://localhost:8080/api/addhotels

router.post('/newhotels', function(req,res){

console.log('the request is getting in here');

  mongoose.connect('mongodb://localhost:27017/characterstics');

  var db = mongoose.connection;

res.send('Posted new hotels!');

console.log('posted new hotels');

var characterstics = new Characterstics(req.body);
characterstics.Name = req.body.Name;
characterstics.City = req.body.City;
characterstics.Cuisine = req.body.Cuisine;
characterstics.Ratings = req.body.Ratings;




characterstics.save(function(err){
	if(err)
  {
console.log(err);
    //res.json({ success: false, message: ' comments could not be added!'});
  }
	else
  {

    //res.json({ success: true, message: 'comments added!'});
    console.log(characterstics);
  }
//console.log(comments);
});


});

//http://localhost:8080/api/addhotels

router.post('/careers', function(req,res){

console.log('the request is getting in here in careers post request');

  mongoose.connect('mongodb://localhost:27017/careers');

  var db = mongoose.connection;

res.send('Posted new careers in the job cart!');

console.log('posted new jobs');

var careers = new Careers(req.body);
careers.Job_Description = req.body.Job_Description;
careers.Added_by = req.body.Added_by;
careers.Team = req.body.Team;
careers.Requisites = req.body.Requisites;




careers.save(function(err){
	if(err)
  {
console.log(err);
    //res.json({ success: false, message: ' comments could not be added!'});
  }
	else
  {

    //res.json({ success: true, message: 'comments added!'});
    console.log(careers);
  }
//console.log(comments);
});


});
return router;
}
