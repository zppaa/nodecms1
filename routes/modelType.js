var public = require('./public.js');
var ModelTypeList = require('../models/ModelType.js');

module.exports = function(app){
	app.get('/addModelType', function(req, res, next){
		res.render('addModelType',{title:'添加数据类型',oneModel:'' });
	});

	//添加数据类型
	app.post('/addModelType',function(req, res){
		public.save(req,res,'ModelType',ModelTypeList);
	});

	//修改数据模型
	app.get("/updateModelType/:id",function(req, res){
		public.modify(req,res,'addModelType',ModelTypeList)
	});

	//更新数据模型
	app.post('/updateModelType',function(req, res){
		public.update(req,res,'modelType',ModelTypeList)
	});

	//删除数据模型
	app.get('/deleteModelType/:id',function(req, res){
		public.delete(req,res,'/modelType',ModelTypeList)
	});
}