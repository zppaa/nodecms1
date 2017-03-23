var async = require("async");
var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
var publicFn = require('./public');
var ModelList = require('../models/Model.js');
var ModelStrutsList = require('../models/ModelStruts.js');
var ModelTypeList = require('../models/ModelType.js');
var DataSchema = require('../models/DataList.js');
var User = require('./users.js')
/* GET home page. */
router.get('/index', function(req, res, next) {
	
  	res.render('index', { 
  		title: '首页'
  	});
});

//user
router.get('/user/login', User.login);
router.get('/user/register',User.register);
router.post('/user/signup',User.signup);
router.post('/user/signin',User.signin);
router.get('/user/logout',User.logout);

router.get('/contentTempEdit', function(req, res, next) {
  	res.render('contentTempEdit', { title: '模板编辑' });
});
router.get('/modelStruts', function(req, res, next) {
	publicFn.initList(res,"modelStruts",ModelStrutsList,"数据模型属性");
});

router.post('/modelStruts', function(req, res, next) {
	ModelStrutsList.find(function(err, list){
		res.send(list)
	});
});
setInterval(function(){
	async.waterfall([
		function(callback){
			var query = ModelStrutsList.findStruts();
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
			router.get('/dataList',function(req, res, next){
				publicFn.initList(res,"dataList",DataList,"数据");
			})
			// module.exports = router;
	})
},2000)



router.get('/dataModel', function(req, res, next) {
	publicFn.initList(res,"dataModel",ModelList,"数据模型");
});

router.post('/dataModel', function(req, res, next) {
	ModelList.find(function(err, list){
		res.send(list)
	});
});

router.get('/modelType',function(req, res){
	publicFn.initList(res,"modelType",ModelTypeList,"数据类型");
});

router.post('/modelType', function(req, res, next) {
	ModelTypeList.find(function(err, list){
		res.send(list)
	});
});
module.exports = router;
// module.exports = function(app){
// 	app.get('/', function(req, res, next) {
// 	  res.render('index', { title: '首页' });
// 	});

// 	app.get('/dataList',function(req, res, next){
// 		//res.render('dataList',{title:'数据'})
// 		publicFn.initList(res,"dataList",DataList,"数据");
// 	})
	
// 	app.get('/modelStruts', function(req, res, next) {
// 	    publicFn.initList(res,"modelStruts",ModelStrutsList,"数据模型属性");
// 	});

// 	app.post('/modelStruts', function(req, res, next) {
// 		ModelStrutsList.find(function(err, list){
// 			res.send(list)
// 		});
// 	});
	
// 	app.get('/dataModel', function(req, res, next) {
// 		publicFn.initList(res,"dataModel",ModelList,"数据模型");
// 	});
	
// 	app.post('/dataModel', function(req, res, next) {
// 		ModelList.find(function(err, list){
// 			res.send(list)
// 		});
// 	});

// 	app.get('/modelType',function(req, res){
// 		publicFn.initList(res,"modelType",ModelTypeList,"数据类型");
// 	});

// 	app.post('/modelType', function(req, res, next) {
// 		ModelTypeList.find(function(err, list){
// 			res.send(list)
// 		});
// 	});
	
// }

