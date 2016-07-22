var mongoose = require("mongoose");
var shortid = require("shortid");

var ModelStruts = require('./ModelStruts.js');
var Schema = mongoose.Schema;

//从数据库查询Struts name
var DataSchema = new Schema(
// {
//         _id:{
//             type:String,
//             unique:true,
//             'default': shortid.generate
//         },
//         title:String,
//         con:String,
//         des:String,
//         author:String,
//         type:String,
//         date: { type: Date, default: Date.now }
//     }
    );
var obj = {
    _id:{
            type:String,
            unique:true,
            'default': shortid.generate
        },
        date: { type: Date, default: Date.now }
}
DataSchema.add(obj);
// var DataList = mongoose.model('DataList',DataSchema);
    module.exports = DataSchema;
