
var User = require('../models/users');

module.exports = function(router){
  //http://localhost:8080/users
  router.post('/users', function(req,res){

var user = new User();
user.username = req.body.username;
user.password = req.body.password;
user.email = req.body.email;
user.save(function(err){
	if(err)
	{
		res.send('Username or Email already exists!');
	}
	else
		{
			res.send('User created!');
		}
	}
});
});

return router;
}
