//请求dataModel
var pathname = window.location.pathname
var Type = decodeURI(pathname.split('/')[2]);
getStrcuts(Type)

function getStrcuts(Type){
	var oneModel = $("#js-updateForm").attr("data-value");
	//var _list = $("#js-addForm").attr("data-value");
	$.ajax({
		type:'POST',
		url:'/dataModel',
		dataType:'json',
		success:function(res){
			if(res){
				for(key in res){
					var list = res[key];
					var type = list.type;
					var struts = list.struts;
					struts = struts.split(',');
					var str = ''
					if($.trim(Type) == $.trim(type)){
						for (k in struts){
								str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+struts[k]+' </label>'+
								'<div class="col-sm-9"><input type="text" name="_list['+struts[k]+']" id="form-field-1" placeholder="'+struts[k]+'" class="col-xs-10 col-sm-5" />'
								 +'</div></div><div class="space-4"></div>';
						}
					}else if(){
						for (k in struts){
								str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+struts[k]+' </label>'+
								'<div class="col-sm-9"><input type="text" name="_list['+struts[k]+']" id="form-field-1" placeholder="'+struts[k]+'" class="col-xs-10 col-sm-5" />'
								 +'</div></div><div class="space-4"></div>';
						}
					}
					$('.form-actions').before(str);
				}
			}
		}
	});
}