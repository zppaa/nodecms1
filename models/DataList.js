var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var shortid = require("shortid");
var ModelStruts = require('./ModelStruts.js');
var Schema = mongoose.Schema;

//从数据库查询Struts name
var DataSchema = new Schema({
        _id:{
            type:String,
            unique:true,
            'default': shortid.generate
        },
        title:String,
        con:String,
        des:String,
        author:String,
        date: { type: Date, default: Date.now }
    });
// var query = ModelStruts.findStruts(obj);
// var promise = query.exec();

// promise.then(function(){
//         for(key in doc){
// 	        var temp = doc[key]._doc.remark;
// 	        obj[temp] = String;
//     	}
//     	DataSchema.add(obj);
        
// }).then(function(){
	
// })
var DataList = mongoose.model('DataList',DataSchema);
		module.exports = DataList;


	
