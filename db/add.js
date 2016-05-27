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
	date: Date
})

var List = mongoose.model('List',listSchema);

function initData( data, db ){
    var query = {};
    for( var key in data ){
        if( db.list[ key ] ){
            query[ key ] = data[ key ];	
        }
    }
    return query;
}
function addList( data, cb ){
    data = initData( data, ListSchema );
    ( new ListModel( data )).save( function( err, doc  ){
        cb( err, doc );
    })
}

function findList( data, cb ){
    data = initData( data, ListSchema );
    ListModel.findOne( data ).exec( function( err, doc ){
        cb( err, doc );
     })
}

module.exports = {
    addList: addList,
    findList: findList
}