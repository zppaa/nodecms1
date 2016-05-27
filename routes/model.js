var List = require('../models/Model.js');
module.exports = function(app){
	app.get('/addModel', function(req, res, next) {
	  res.render('addModel', { title: '添加数据模板',msg:'' });
	});

	// app.post('/addpage',function(req,res){
	// 	//console.log(req.body);
	// 	var list = req.body.list;	
	// 	if(!list){
	// 		console.log(list);
	// 		return;
	// 	}
	// 	var list = new List(list)
		
	// 	list.save(function(err){
	// 		if(err){
	// 			console.log("保存失败")
	// 			return res.redirect('/addpage')
	// 		}
	// 		console.log("保存成功")
	// 		return res.redirect('/textdata')
	// 	})
	// })
}
