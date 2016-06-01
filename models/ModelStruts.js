var mongoose = require("mongoose");
var shortid = require('shortid');
// 连接字符串格式为mongodb://主机/数据库名
// mongoose.connect('mongodb://localhost/nodecms');

// 数据库连接后，可以对open和error事件指定监听函数。
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function() {
// 	console.log('连接成功')
// 		//在这里创建你的模式和模型
// });

var Schema = mongoose.Schema;
var ModelStrutsSchema = new Schema({
	 _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    date: { type: Date, default: Date.now },
	name:String,
	remark:String,
	author:String
})

var ModelStrutsList = mongoose.model('ModelStrutsList',ModelStrutsSchema);

module.exports = ModelStrutsList;