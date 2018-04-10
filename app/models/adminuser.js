var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema1 = new Schema({
  username: { type: String, lowercase: true,required: true,unique: true},
  password: { type: String, required: true},
  email: {type: String, required: true, lowercase: true,unique: true}
});

UserSchema1.pre('save', function(next1) {
  // do stuff
  var user1 = this;
bcrypt.hash(user1.password, null, null, function(err, hash){
  if(err) return next1(err);
  user1.password = hash;
  next1();
});

 });

UserSchema1.methods.comparePassword = function(password){

return bcrypt.compareSync(password,this.password);

};

module.exports = mongoose.model('AdminUser', UserSchema1);
