var ModelStrutsList = require('../models/Modelstruts.js');
module.exports = function(app){
	app.get('/addModelStruts',function(req, res){
		res.render('/addModelStruts',{ title: '添加数据模板属性',oneModelStruct:'' });
	});

	//添加数据模板属性
	// app.post('/addModelStruts',function(req, res){
	// 	var modelstrutslist = req.body.modelstrutsList;
	// 	if(!modelstrutslist){
	// 		console.log(modelstrutslist);
	// 		return;
	// 	}
	// 	modelstrutslist = new ModelStrutsList(modelstrutslist);

	// 	modelstrutslist.save(function(err){
	// 		if(err){
	// 			console.log("保存失败")
	// 			return res.redirect('/')
	// 		}
	// 		console.log("保存成功")
	// 		return res.redirect('/modelStruts')
	// 	})
	// })
}
