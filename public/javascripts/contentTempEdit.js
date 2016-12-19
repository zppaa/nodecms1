//系统模板树
function initSystemTempData(){
    $.ajax({
    	type:'get',
    	url:'/contentTempEdit',
    	dataType:'json',
    	success:function(res){
    		if(res){
    			console.log(res)
    		}
    	}
    })
}