var async = require("async");
var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
var public = require('./public.js');

var ModelStruts = require('../models/ModelStruts.js');
var DataSchema = require('../models/DataList.js');
var Q = require('q');
// var defer = Q.defer();
// mongoose.Promise = require('q').Promise;
// var query = ModelStruts.findStruts();
// var promise = query.exec();
setInterval(function(){
	async.waterfall([
		function(callback){
			var query = ModelStruts.findStruts();
			query.exec(function(err ,doc){
				callback(null,doc);
			})
		}
		],function(err,result){
			for(var i = 0; i< result.length; i++){
				var temp = result[i]._doc;
				var obj = {};
				obj[temp.name] = String;
				DataSchema.add(obj);
			}
			var DataList =  mongoose.model('DataList',DataSchema);
			router.get('/addData/:type',function(req,res,next){
				res.render('addData',{title:'添加数据',oneModel:''});
			});

			//添加数据
			router.post('/addData',function(req,res){
				public.save(req,res,'dataList',DataList);
			});

			//修改数据
			router.get('/updateData/:id',function(req,res){
				public.modify(req,res,'addData',DataList);
			});

			//修改数据模型返回json数据
			router.post('/updateData/:id',function(req,res){
				var id = req.params.id;
			    if(id){
			        DataList.findOne({_id:id}, function(err, oneModel){
		        		res.send(oneModel)
			        })
		    	}
			});
			//更新数据模型
			router.post('/updateData',function(req,res){
				public.update(req,res,'dataList',DataList);
			});

			//删除数据模型
			router.get('/deleteData/:id',function(req,res){
				public.delete(req,res,'/dataList',DataList)
			});
	})
},2000);
module.exports = router;
