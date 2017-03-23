var mongoose = require("mongoose");
var shortid = require('shortid');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;
var UserSchema = new Schema({
	 _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    name:{
        unique:true,
        type:String
    },
    password:{
        unique:true,
        type:String
    },
    //0:nomal
    //1:verfied user
    //2:professonal user
    //> 10 admin
    //> 50 spuer admin
    role:{
        type:Number,
        default:0
    },
    date: { type: Date, default: Date.now },

});
UserSchema.pre('save',function(next){
    var user = this;
    bcrypt.genSalt(SALT_WORK_FACTOR,function(err, salt){
        if(err) return next();
        bcrypt.hash(user.password, salt, null, function (err, hash){
            if (err) {
                return next(err)
            } 
            user.password = hash
            next()  
        })  
    })
   // next()
});

UserSchema.methods = {
    comparePassword: function(_password, cb){
        var user = this
        bcrypt.compare(_password, user.password, function(err, isMatch){
            console.log(_password)
            console.log(user.password)
            if(err) return cb(err)
            cb(null, isMatch)
        })
    }
}

// UserSchema.static = {
//     fech:function(cb){
//         return this
//             .find({})
//             .sort()
//              exec(cb)
//     },
//     fingById:function(id,cb){
//         return this
//             .findOne({_id:id})
//             exec(cb)
//     }
// }
var UserList = mongoose.model('UserList',UserSchema);
module.exports = UserList;