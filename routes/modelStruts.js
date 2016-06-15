var public = require('./public.js');
var ModelStrutsList = require('../models/ModelStruts.js');

module.exports = function(app){
	
	app.get('/addModelStruts',function(req, res, next){
		res.render('addModelStruts',{ title: '添加数据模板属性',oneModel:''});
	});

	//添加数据模板属性
	app.post('/addModelStruts',function(req, res){
		public.save(req,res,'modelStruts',ModelStrutsList);
	});

	//修改数据模板属性
	app.get('/updateModelStruts/:id',function(req,res){
		public.modify(req,res,'addModelStruts',ModelStrutsList)
	});

	//更新数据模板属性
	app.post('/updateModelStruts',function(req, res){
		public.update(req,res,'modelStruts',ModelStrutsList)
	});

	//删除数据模板属性
	app.get('/deleteModelStruts/:id',function(req, res){
		public.delete(req,res,'/modelStruts',ModelStrutsList)
	});
}
