//获取全部数据类型
// function getAllType(){
// 	$.ajax({
// 		type:'post',
// 		url:'/dataType',
// 		dataType:'json',
// 		success:function(res){
// 			if(res){
// 				return res;
// 			}
// 		}
// 	});
// }

//获取已编辑数据类型
function getDataType(){
	$.ajax({
		type:'post',
		url:'/dataModel',
		dataType:'json',
		success:function(res){
			if(res){
				var str ='';
				for(var i = 0; i < res.length; i++){
					var temp = res[i].type;
					str += '<li><a href="/addData/type='+temp+'">'+temp+'</a></li>'
				}
				$(".dropdown-menu").append(str);
			}
		}
	})
}
getDataType();
