var mongoose = require("mongoose");
var shortid = require("shortid");
var ModelStruts = require('./ModelStruts.js');

//从数据库查询Struts name
var obj = {
		_id:{
			type:String,
			unique:true,
			'default': shortid.generate
		},
		author:String,
	    date: { type: Date, default: Date.now }
	};
ModelStruts.find(function (err,doc) {
	
	// if(err){
	// 	res.end(err);
	// }
	// res.end(doc)
	// for(key in doc){
	// 	console.log();
	// 	var temp = doc[key]._doc.remark;
	// 	obj[temp] = String;

	// }
})
console.log(doc);
var Schema = mongoose.Schema;
var DataSchema = new Schema(obj);

var DataList = mongoose.model('DataList',DataSchema);
module.exports = DataList;
