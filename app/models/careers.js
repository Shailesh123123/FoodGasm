var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CareersSchema = new Schema({

Job_Description: {type: String, lowercase: true,required: true,unique: false},
Added_by: {type:String, lowercase: true,required: true,unique: false},
Team: {type:String, lowercase:true,required: true,unique: false},
Requisites: {type:String, lowercase:true,required: true,unique: false}


});

module.exports = mongoose.model('Careers', CareersSchema);
