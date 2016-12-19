//获取模型结构属性
$(function(){
    $("#deletall").on("click",function(){
        var ids =[];
        var vals = $("input[type=hidden]");
        for(var i = 0; i< vals.length; i++ ){
            var temp = vals[i];
            if($(temp).next("input").is(':checked')){
                ids.push($(vals[i]).val())
            }
        }
        if(ids.length != 0){
            $(this).attr("href","deleteModelStruts/"+ids)
        }
    });

    
    
})
function getTags(url,id,tagsTree){
    $.ajax({
        type:'post',
        url:url,
        dataType:'json',
        success:function(res){
            if(res){
                //Ztree配置
                if(url == '/modelType'){
                    var setting = {
                        check: {
                            enable: true,
                            chkStyle: "radio",
                            radioType: "all"
                        },
                        view: {
                            dblClickExpand: false
                        },
                        data: {
                            simpleData: {
                                enable: true
                            }
                        },
                        callback: {
                            beforeClick: beforeTagsClick,
                            onCheck: onTagsCheck
                        }
                    };
                }
                if(url == '/modelStruts'){
                    var setting = {
                        check: {
                            enable: true,
                            chkStyle: "checkbox"
                        },
                        view: {
                            dblClickExpand: false
                        },
                        data: {
                            simpleData: {
                                enable: true
                            }
                        },
                        callback: {
                            beforeClick: beforeTagsClick,
                            onCheck: onTagsCheck
                        }
                    };
                }
                //初始化
                $.fn.zTree.init($("#"+tagsTree), setting, res);

                //回调函数
                function beforeTagsClick(treeId, treeNode) {
                    var zTree = $.fn.zTree.getZTreeObj(tagsTree);
                    zTree.checkNode(treeNode, !treeNode.checked, null, true);
                    return false;
                }
                //回调函数
                function onTagsCheck(e, treeId, treeNode) {
                    var zTree = $.fn.zTree.getZTreeObj(tagsTree),
                        nodes = zTree.getCheckedNodes(true),
                        v = "";
                    for (var i=0, l=nodes.length; i<l; i++) {
                        if(i > 3){
                            return;
                        }
                        v += nodes[i].name + ",";
                    }
                    if (v.length > 0 ) {
                        v = v.substring(0, v.length-1);
                    }
                    var tagObj = $("#"+id);
                    tagObj.val("");
                    tagObj.val(v);
                    tagObj.attr("value", v);
                }
            }
        }
    })
}

function showTagsMenu(url,id,menuContent,tagsTree) {
    getTags(url,id,tagsTree);    
    var cityObj = $("#"+id);
    var cityOffset = $("#"+id).offset();
    $("#"+menuContent).slideDown("fast");

    $("body").bind("mousedown", onBodyDown);
}
function hideTagsMenu(menuContent) {
    $("#"+menuContent).fadeOut("fast");
    $("body").unbind("mousedown", onBodyDown);
}
function onBodyDown(event) {
    if (!(event.target.id == "menuBtn" || event.target.id == "tagSel" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
        hideTagsMenu("menuContent");
    }
    if (!(event.target.id == "menuBtn1" || event.target.id == "tagSel1" || event.target.id == "menuContent1" || $(event.target).parents("#menuContent1").length>0)) {
        hideTagsMenu("menuContent1");
    }
}

//将后台获取的list解析为tree对象所需的json数据
function changeToTreeJson(result,key,oldValue){
    var arrTree = [];
    var treeItem;
    for(var i=0;i<result.length;i++){
        if(key === "tags"){
            var checkState = false;
            var tagsArr = oldValue.split(",");
            for(var j=0;j<tagsArr.length;j++){
                if(result[i].name === tagsArr[j].toString()){
                    checkState = true;
                    break;
                }
            }
            treeItem = new TagsTree(result[i]._id,result[i].name,checkState);
        }else if(key === "tempTree"){
            treeItem = new TempsTree(result[i]._id,result[i].name,result[i].forder);
        }else if(key === "tempForderTree"){
            treeItem = new TempsTree(0,result[i].name,"");
        }else if(key === "allThemeFolderTree"){
            treeItem = new TempsTree(result[i]._id,result[i].name,result[i].alias);
        }else{
            treeItem = new TreeInfo(result[i]._id,result[i].parentID,result[i].name,result[i].sortPath,result[i].homePage,result[i].contentTemp,true,false);
        }
        arrTree.push(treeItem);
    }
    return arrTree;
}





