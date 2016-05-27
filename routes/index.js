

/* GET home page. */
module.exports = function(app){
	app.get('/', function(req, res, next) {
	  res.render('index', { title: '首页' });
	});

	app.get('/dataModel', function(req, res, next) {
	  res.render('dataModel', { title: '数据模型' });
	});
	
}

