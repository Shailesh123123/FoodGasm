var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./database');
var path = require('path');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var bodyParser = require('body-parser');
var http = require('http');


app.listen(8080, function(){

console.log('Running the server on 8080');

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);


mongoose.promise = global.promise;
mongoose.connect(config.uri, (err) => {
	if(err){
		console.log('Could not connect to the database: ',err);
	}
	else
	{
		console.log(config.secret);
		console.log('Connected to database' +config.db);
	}
});

app.get('*', function(req,res){

res.sendFile(path.join(__dirname + '/public/app/views/index.html'));

});


app.get('/', function(req,res){
res.send('hi!');
});

app.get('/home', function(req,res){
	res.send('hey!');
});
