// var mongodb = require('./db');
// console.log(1)
// function Data(title,des,con,time){
// 	console.log(1)
// 	this.title = title;
// 	this.des = des;
// 	this.con = con;
// 	if(time){
// 		this.time = time;
// 	}else{
// 		this.time = new Date();
// 	}
// };


// module.exports = Data;

// /*
//  * 保存一条发言到数据库
//  * @param {Function} callback: 执行完数据库操作的应该执行的回调函数
//  */

// Data.prototype.save = function save(callback){
// 	var data = {
// 		this.title = title;
// 		this.des = des;
// 		this.con = con;
// 		this.time = time;
// 	};

// 	mongodb.open(function(err, db){
// 		if(err){
// 			mongodb.close();
// 			return callback(err);
// 		}

// 		db.collection('datas',function(err, collection){
// 			if(err){
// 				mongodb.close();
// 				return callback(err);
// 			}
// 			collection.insert(post,{safe:true},function(err,data){
// 				mongodb.close();
// 				callback(err,data);
// 			});
// 		});
// 	});
// };
var mongoose = require("mongoose");

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost/nodecms');

// 数据库连接后，可以对open和error事件指定监听函数。
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	console.log('连接成功')
		//在这里创建你的模式和模型
});

var Schema = mongoose.Schema;
var listSchema = new Schema({
	title:String,
	des:String,
	con:String,
	time:String
})

var List = mongoose.model('List',listSchema);

module.exports = List;