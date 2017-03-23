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
				res.redirect('/user/login');
			})
		}
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
		console.log(user)
		user.comparePassword(password, function(err, isMatch){
			if(err){
				console.log(err)
			}
			console.log(isMatch)
			if(isMatch){
				console.log('password is matched')
				return res.redirect('/index');
			}else{
				console.log('password is not match')
			}
		})

	})
	
}