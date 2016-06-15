//请求dataModel

var href = window.location.href;
var Type = decodeURI(href.split('type=')[1]);
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
					if($.trim(Type) == $.trim(type)){
						struts = struts.split(',');
						var str = ''
						for (k in struts){
							if(oneModel){
								str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+struts[k]+' </label>'+
								'<div class="col-sm-9"><input type="text" name="'+oneModel[struts[k]]+'" id="form-field-1" value="'+oneModel[struts[k]]+'" placeholder="'+struts[k]+'" class="col-xs-10 col-sm-5" />'
								 +'</div></div><div class="space-4"></div>';
							}else{
								str += '<div class="form-group"><label class="col-sm-3 control-label no-padding-right" for="form-field-1">'+struts[k]+' </label>'+
								'<div class="col-sm-9"><input type="text" name="_list['+struts[k]+']" id="form-field-1" placeholder="'+struts[k]+'" class="col-xs-10 col-sm-5" />'
								 +'</div></div><div class="space-4"></div>';
							}
							
						}
						$('.form-actions').before(str);
					}
					
				}
			}
		}
	});
}