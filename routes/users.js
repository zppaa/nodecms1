var User = require('../models/user')
exports.login = function(req, res, next){
	res.render('login',{
		title:'登录页面',
		user:'',
		layout:false
	})
}
exports.register = function(req, res, next){
	res.render('register',{
		title:'注册页面',
		user:{"name":"a","password":"a"},
		layout:false
	})
}
//注册保存
exports.signup = function(req, res){
	var _user = req.body.user;
	User.findOne({name:_user.name}, function(err, user){
		if(err) {
			console.log(err)
		}
		if(user){
			console.log('该用户名已存在,请直接登录')
			// res.redirect('/index');
		}else{
			var user = new User(_user);
			user.save(function(err){
				if(err){
					console.log(err)
				}
				res.redirect('/user/userList');
			})
		}
	})
	
}

exports.userList = function(req, res){
	User.find(function(err, users){
		if(err){
			console.log(err)
		}
		res.render('userList',{
			title:'用户列表',
			users:users
		})
	})
}

exports.signin = function(req, res){
	var _user = req.body.user;
	var name = _user.name
	var password = _user.password
	User.findOne({name: name}, function(err, user){
		if(err){
			console.log(err)
		}
		if(!user){
			console.log('请先注册')
			return false
		}
		user.comparePassword(password, function(err, isMatch){
			if(err){
				console.log(err)
			}
			console.log(isMatch)
			if(isMatch){
				req.session.user = user;
				console.log(req.session.user)
				return res.redirect('/index');
			}else{
				console.log('password is not match')
			}
		})

	})
	
}
exports.logout = function(req, res){
	delete req.session.user
	return res.redirect('/index');
}

//midware for user
exports.signinRequired = function(req, res, next){
	var user = req.session.user;
	console.log(22222222222222222)
	console.log(user)
	if(!user){
		console.log('请先登录')
		return res.redirect('./login')
	}
	next()
}

exports.adminRequired = function(req, res, next){
	var user = req.session.user;
	console.log('1111111111111111111111111')
	console.log(user.role)
	if(user.role <= 10){ 
		return res.redirect('./login')
	}
	next()
}