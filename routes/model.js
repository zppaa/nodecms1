var public = require('./public.js');
var ModelList = require('../models/Model.js');
module.exports = function(app){
	app.get('/addModel', function(req, res, next) {
	    res.render('addModel', { title: '添加数据模板',oneModel:'' });
	});

	//添加数据模板
	app.post('/addModel',function(req,res){
		public.save(req,res,'dataModel',ModelList);
	});

	//修改数据模型
	app.get("/updateModel/:id",function(req, res){
		public.modify(req,res,'addModel',ModelList)
	});


	//更新数据模型
	app.post('/updateModel',function(req, res){
		public.update(req,res,'dataModel',ModelList)
	});

	//删除数据模型
	app.get('/deleteModel/:id',function(req, res){
		public.delete(req,res,'/dataModel',ModelList)
	});
}

