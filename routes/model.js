var ModelList = require('../models/Model.js');
module.exports = function(app){
	app.get('/addModel', function(req, res, next) {
	  res.render('addModel', { title: '添加数据模板',oneModel:'' });
	});

	//添加数据模板
	app.post('/addModel',function(req,res){
		var modellist = req.body.modelList;	
		if(!modellist){
			console.log(modellist);
			return;
		}
		modellist = new ModelList(modellist)
		
		modellist.save(function(err){
			if(err){
				console.log("保存失败")
				return res.redirect('/')
			}
			console.log("保存成功")
			return res.redirect('/dataModel')
		});
	});

	//修改数据模型
	app.get("/updateModel:id",function(req, res){
		var id = req.params.id;

		if(id){
			ModelList.findOne({_id: id},function(err,oneModel){
				res.render('addModel',{
					oneModel:oneModel
				})
				console.log(oneModel)
			})
		}

	})

	//更新数据模型
	app.post('/updateModel',function(req, res){
		var oneModel = req.body.oneModel;
		if(!oneModel){
			return;
		}
		oneModel.date = getNowFormatDate();
		ModelList.update({_id: oneModel._id},
			{$set:{name:oneModel.name,type:oneModel.type,struts:oneModel.struts,author:oneModel.author,date:oneModel.date}},
			function(err,reslut){
			if(err){
				console.log(err);
				return;
			}
			console.log("更新成功");
			return res.redirect('/dataModel')
		})
	})

	//删除数据模型
	app.get('/deleteModel:id',function(req, res){
		var ids = req.params.id.split(",");
		if(ids){
			for(var i = 0; i < ids.length; i++){
				ModelList.remove({
					_id: {$in: ids}
				}, function(err){
					if(err){
						console.log(err);
						res.end('删除失败');
						return;
					}
					res.end('删除成功');
				})
			}
			
		}
		res.redirect('/dataModel');
	});
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}