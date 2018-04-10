var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HotelsSchema = new Schema({

  name: {type: String, lowercase: true,required: true,unique: true},
  location: {type:String, lowercase: true,required: true,unique: true},
  cuisine: {type:String, lowercase:true,required: true,unique: false}

});

module.exports = mongoose.model('Hotels', HotelsSchema);
