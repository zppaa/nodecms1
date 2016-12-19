var async = require("async");
var express = require('express');
var router = express.Router();

router.get('/contentTempEdit', function(req, res, next){
	res.render('contentTempEdit',{title:'模板编辑'})
});

//读取模板树信息
router.get('/contentTempEdit', function(req, res, next){
	var params = url.parse(req.url,true);
})


module.exports = router;