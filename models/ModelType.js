var mongoose = require("mongoose");
var shortid = require('shortid');


var Schema = mongoose.Schema;
var ModelTypeSchema = new Schema({
	 _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
	name:String,
	date: { type: Date, default: Date.now },
	author:String
})

var ModelTypeList = mongoose.model('ModelTypeList', ModelTypeSchema);

module.exports = ModelTypeList;