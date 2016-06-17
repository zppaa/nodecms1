var public = require('./public.js');
var DataList = require('../models/DataList.js');

module.exports = function(app){
	app.get('/addData/:type',function(req,res,next){
		res.render('addData',{title:'添加数据',oneModel:''});
	});

	//添加数据
	app.post('/addData',function(req,res){
		public.save(req,res,'dataList',DataList);
	});

	//修改数据
	app.get('/updateData/:id',function(req,res){
		public.modify(req,res,'addData',DataList);
	});

	//更新数据模型
	app.post('/updateData',function(req,res){
		public.update(req,res,'dataList',DataList);
	});

	//删除数据模型
	app.get('/deleteData/:id',function(){
		public.delete(req,res,'dataList',DataList)
	});
}