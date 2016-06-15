var mongoose = require("mongoose");
var shortid = require('shortid');
var Schema = mongoose.Schema;
var ModelStrutsSchema = new Schema({
	 _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:String,
	remark:String,
	author:String,
    date: { type: Date, default: Date.now }
	
})

var ModelStrutsList = mongoose.model('ModelStrutsList',ModelStrutsSchema);

module.exports = ModelStrutsList;