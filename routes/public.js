var public = {};

//初始化列表方法
public.initList = function(res,route,list, title){
	list.find(function(err, list){
		res.render(route,{
			title:title,
			list:list
		});
	})
}

//添加数据
public.save = function(req,res,route,list){
    console.log('11111111111111111111'+req.body)
    var _list = req.body._list;

    if(!_list){
        return;
    }
    _list = list(_list);

    _list.save(function(err){
        if(err){
            console.log("保存失败");
            return res.redirect('/');
        }
        console.log("保存成功");
        return res.redirect(route);
    })
}
//修改数据
public.modify = function(req,res,route,list){
    var id = req.params.id;
    if(id){
        list.findOne({_id:id}, function(err, oneModel){
            res.render(route,{
                oneModel:oneModel
            });
        })
    }
}

//更新数据
public.update = function(req,res,route,list){
    var oneModel = req.body.oneModel;
    if(!oneModel){
        return;
    }
    oneModel.date = getNowFormatDate();
    list.update({_id:oneModel._id},
        {$set:oneModel},
        function(err,reslut){
            if(err){
                console.log(err);
                return;
            }
            console.log('更新成功');
            return res.redirect(route)
        })
}

//删除数据
public.delete = function(req,res,route,list){
    var ids = req.params.id.split(",");
    if(ids){
        for(var i = 0; i < ids.length; i++){
            list.remove({
                _id:{$in:ids}
            },function(err){
                if(err){
                    console.log(err);
                    res.end('删除失败');
                    return;
                }
                res.end('删除成功');
            })
        }
    }
    res.redirect(route);
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
module.exports=public;



