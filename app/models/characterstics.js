var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharactersticsSchema = new Schema({

Name: {type: String, lowercase: true,required: true,unique: false},
City: {type:String, lowercase: true,required: true,unique: false},
Cuisine: {type:String, lowercase:true,required: true,unique: false},
Ratings: {type:String, lowercase:true,required: true,unique: false}


});

module.exports = mongoose.model('Characterstics', CharactersticsSchema);
