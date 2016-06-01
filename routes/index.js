
var ModelList = require('../models/Model.js');
var ModelStrutsList = require('../models/modelStruts.js');
/* GET home page. */
module.exports = function(app){
	app.get('/', function(req, res, next) {
	  res.render('index', { title: '首页' });
	});

	app.get('/dataModel', function(req, res, next) {
		ModelList.find(function(err, modellist){
			res.render('dataModel', { 
				title: '数据模型',
				modellist:modellist
				});
		});
	});

	app.get('/modelStruts', function(req, res, next) {
		// ModelStrutsList.find(function(err, modelstructlist){
		// 	res.render('modelStruts', { 
		// 		title: '数据模型',
		// 		modelstructlist:modelstructlist
		// 		});
		// });
	    res.render('modelStruts', { title: '数据模型属性' });
	});
	
}

