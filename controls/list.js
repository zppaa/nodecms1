var db = require( '../db/sql' );
function addList(req, res){
	var data = req.body;
	data.date = new Date();
	db.addList(data, function(err, doc){
		if(!err){
			res.send({code:0, msg:'add success', data:doc})
		}
	})
}