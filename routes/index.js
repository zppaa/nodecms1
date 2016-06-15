var publicFn = require('./public');
var ModelList = require('../models/Model.js');
var ModelStrutsList = require('../models/ModelStruts.js');
var ModelTypeList = require('../models/ModelType.js');
/* GET home page. */
module.exports = function(app){
	app.get('/', function(req, res, next) {
	  res.render('index', { title: '首页' });
	});

	app.get('/dataList',function(req, res, next){
		res.render('dataList',{title:'数据'})
	})
	
	app.get('/modelStruts', function(req, res, next) {
	    publicFn.initList(res,"modelStruts",ModelStrutsList,"数据模型属性");
	});

	app.post('/modelStruts', function(req, res, next) {
		ModelStrutsList.find(function(err, list){
			res.send(list)
		});
	});
	
	app.get('/dataModel', function(req, res, next) {
		publicFn.initList(res,"dataModel",ModelList,"数据模型");
	});
	
	app.post('/dataModel', function(req, res, next) {
		ModelList.find(function(err, list){
			res.send(list)
		});
	});

	app.get('/modelType',function(req, res){
		publicFn.initList(res,"modelType",ModelTypeList,"数据类型");
	});

	app.post('/modelType', function(req, res, next) {
		ModelTypeList.find(function(err, list){
			res.send(list)
		});
	});
	
}

