var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentsSchema = new Schema({

  username: {type: String, lowercase: true,required: true,unique: true},
  comments: {type:String, lowercase: true,required: true,unique: true},
  Name: {type:String, lowercase:true,required: true,unique: false}

});

module.exports = mongoose.model('Comments', CommentsSchema);
