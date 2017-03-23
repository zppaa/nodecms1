var User = require('../routes/users');
module.exports = function(app){
	console.log('22222222222222222222222222222222222222222222222222222222222222')
	app.get('login',User.login)
}