
var MENU_LIST_JSON;
var currentRightClickTabTitle; // 右键当前点击的tab页

$(function() {
	$("#account").html(account + " [" +roleName + "]");
	
	MENU_LIST_JSON = JSON.parse(menu);
	createAllMenus(); // 创建所有菜单
	
	// 离开页面后清除session
	$(window).unload(function () { 
		$.post($.navinfo.contextPath + "/LoginAction.do?method=removeSession");
	});
});


/**
 * 创建所有菜单
 */
function createAllMenus() {
	var menu = {};
	var options, tree;
	var childMenu = {};
	var treeList;
	$.each(MENU_LIST_JSON, function(index, callback) {
		// 生成一级菜单
		menu = MENU_LIST_JSON[index];
		if ("" == menu.parentId) {
			options = {
					title: menu.text,
					content: '<ul id=menu_'+menu.id+'></ul>'
			};
			$('#leftAccordion').accordion('add', options);
		} else {
			return true;
		}
		
		// 生成二级菜单
		treeList = new Array();
		$.each(MENU_LIST_JSON, function(i, callback) {
			childMenu = MENU_LIST_JSON[i];
			if (childMenu.parentId == menu.id) {
				tree = {
						"id": childMenu.id,
						"text": childMenu.text,
						"attributes": childMenu.url
				};
				treeList.push(tree);
			}
		});
		$('#menu_'+menu.id).tree({   
			data: treeList,
		    onClick: function(menu){
		    	clickTreeNode(menu);
			}
		});
	});
	
	$('#leftAccordion').accordion('select', 0);
}

/**
 * 鼠标点击树形菜单时加载页面
 */
function clickTreeNode(node) {
	if(node.attributes!=null) {
		var tabContainer = $('#rightTabs');
		var nodeText = node.text;
		if (tabContainer.tabs('exists', nodeText)) {
			tabContainer.tabs('select', nodeText);
		} else {
			addTab(node.id, nodeText, $.navinfo.contextPath + node.attributes);
		}
	}
}

/**
 * 增加菜单的tab
 */
function addTab(nodeId, nodeText, nodeUrl){
	var content ='<iframe id="tabs_'+nodeId+'" scrolling="auto" frameborder="0" src="" style="width:100%; height:99%"></iframe>';
	$('#rightTabs').tabs('add',{
	    title: nodeText,   
	    content: content,
	    closable: true
	}); 
	$("#tabs_"+nodeId).attr("src", nodeUrl);
}

/**
 * 关闭当前tab页
 */
function closeCurrentTab(){
	$('#rightTabs').tabs('close', currentRightClickTabTitle);
}

/**
 * 关闭指定tab页
 */
function closeThisTab(nodeText){
	var tabContainer = $('#rightTabs');
	var tabs = tabContainer.tabs('tabs');
	var allTabtitle = []; 
	$.each(tabs,function(i,n){
		allTabtitle.push($(n).panel('options').title); 
	});
	for (var i = 0; i < allTabtitle.length; i++) {
		if(allTabtitle[i] == nodeText){
			tabContainer.tabs('close', allTabtitle[i]);
			break;
		}
	}
}

/**
 * 关闭其他tab页
 */
function closeOthersTab(){
	var tabContainer = $('#rightTabs');
	var tabs = tabContainer.tabs('tabs');
	var allTabtitle = []; 
	$.each(tabs,function(i,n){
		allTabtitle.push($(n).panel('options').title); 
	});
	for (var i = 0; i < allTabtitle.length; i++) {
		if(allTabtitle[i]!=currentRightClickTabTitle){
			tabContainer.tabs('close', allTabtitle[i]);
		}
	}
}

/**
 * 关闭所有tab页
 */
function closeAllTab(){
	var tabContainer = $('#rightTabs');
	var tabs = tabContainer.tabs('tabs');
	var allTabtitle = []; 
	$.each(tabs,function(i,n){
		allTabtitle.push($(n).panel('options').title); 
	});
	for ( var i = 0; i < allTabtitle.length; i++) {
		tabContainer.tabs('close', allTabtitle[i]);
	}
}

/**
 * 退出登录
 */
function loginOut() {
	window.location = $.navinfo.contextPath + "/LoginAction.do?method=logout";
}

