//请求dataModel
var pathname = window.location.pathname;

var Type = decodeURI(pathname.split('/')[2]);
var Id = decodeURI(pathname.split('/')[2]);
addData(Type)
editData(Id);
function editData(Id){
	$.ajax({
		type:'POST',
		url:'/updateData/'+Id,
		dataType:'json',
		success:function(res){
			var str = '';
			if(res){
				for(key in res){
					if(key != "_id" && key != "__v" && key != "date"){
						str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+key+' </label>'+
									'<div class="col-sm-9"><input type="text" name="res['+res[key]+']" id="form-field-1" placeholder="'+res[key]+'" class="col-xs-10 col-sm-5" />'
									 +'</div></div><div class="space-4"></div>';
					}
					
				}
			}
			$('.form-actions').before(str);
		}
	});
}
function addData(Type){
	//var _list = $("#js-addForm").attr("data-value");
	$.ajax({
		type:'POST',
		url:'/dataModel',
		dataType:'json',
		success:function(res){
			if(res){
				var str = '';
				for(key in res){
					var list = res[key];
					var type = list.type;
					var id = list._id;
					var struts = list.struts;
					struts = struts.split(',');
					
					if($.trim(Type) == $.trim(type)){
						for (k in struts){
								str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+struts[k]+' </label>'+
								'<div class="col-sm-9"><input type="text" name="_list['+struts[k]+']" id="form-field-1" placeholder="'+struts[k]+'" class="col-xs-10 col-sm-5" />'
								 +'</div></div><div class="space-4"></div>';
						}
					}
					// else if(oneModel && Id == id){
					// 	for (var i=0;i<struts.length;i++){
					// 		str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+struts[i]+' </label>'+
					// 		'<div class="col-sm-9"><input type="text" name="oneModel['+list[struts[i]]+']" value="'+list[struts[i]]+'" id="form-field-1" placeholder="'+list[struts[i]]+'" class="col-xs-10 col-sm-5" />'
					// 		 +'</div></div><div class="space-4"></div>';
					// 	}
					// }
					
				}
				console.log(str)
				$('.form-actions').before(str);
			}
		}
	});
}