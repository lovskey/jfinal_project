
var curRoleCode = ""; // 当前选中的角色CODE
var MENU_ID_LIST = new Array(); // 所有菜单ID列表
var SYS_MENU_LIST = new Array(); // 系统目录ID列表

$(function(){
	initRoleGrid(); // 初始化角色列表
	initMenuTree(); // 初始化菜单树
});

/**
 * 初始化角色列表
 */
function initRoleGrid(){
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/RoleAction.do?method=getAllRoleList",
		width: 400,
		height: '100%',
		striped: true,
		collapsible: false,
		remoteSort: false,
		fit: true,
		fitColumns: true,
		singleSelect: true,
		idField: 'KEYID',
		toolbar: '#toolbar',
		pageNumber: 1,
		pageSize: 10,
		pagination: false,
		rownumbers: true,
		showFooter: false,
		onLoadSuccess: function(data){
		},
		onClickRow:function(rowIndex, rowData){
			setAuthoritis(rowData.ROLE_CODE);
			curRoleCode = rowData.ROLE_CODE;
		},
		onDblClickRow: function(rowIndex, rowData) {
		}
	});
}

/**
 * 初始化菜单树
 */
function initMenuTree() {
	// ajax同步请求
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/MenuAction.do?method=getMenuTree",
		data: {},
		dataType: 'json',
		success: function(data) {
			var parentNode;
			var childNode;
			for (var i = 0; i < data.length; i++) {
				parentNode = data[i];
				MENU_ID_LIST.push(parentNode.id);
				if (0 == parentNode.type) {
					SYS_MENU_LIST.push(parentNode.id);
				}
				for (var j = 0; j < parentNode.children.length; j++) {
					childNode = parentNode.children[j];
					MENU_ID_LIST.push(childNode.id);
					if (0 == childNode.type) {
						SYS_MENU_LIST.push(childNode.id);
					}
				}
			}
			
			$('#myTree').tree({
			    checkbox:true,
			    cascadeCheck:false,
			    lines: true,
			    data: data
			});
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 勾选角色拥有的菜单目录
 */
function setAuthoritis(roleCode) {
	var menuTree = $('#myTree');
	// 取消选中所有节点
	for (var i = 0; i < MENU_ID_LIST.length; i++) {
		var node = menuTree.tree('find', MENU_ID_LIST[i]);
		menuTree.tree('uncheck', node.target);
	}
	
	var paramJson = {};
	paramJson.roleCode = roleCode;
	
	// ajax同步请求
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/AuthorityAction.do?method=getAuthoritisByRole",
		data: {"jsonStr": JSON.stringify(paramJson)},
		dataType: 'json',
		success: function(data) {
			// 选中权限
			for(var i in data) {
				var node = menuTree.tree('find', data[i].MENU_ID);
				menuTree.tree('check', node.target);
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 保存角色权限设置
 */
function save() {
	if("" == curRoleCode){
		$.messager.alert('提示信息', '请选择角色', 'error');
		return false;
	}
	
	// 系统管理员必须保留系统目录
	var nodes = $('#myTree').tree('getChecked');
	if ("su_admin" == curRoleCode) {
		var count = 0;
		for(var i = 0; i < nodes.length; i++) {
			if ("0" == nodes[i].type) {
				count += 1;
			}
		}
		if (count != SYS_MENU_LIST.length) {
			$.messager.alert('提示信息', '系统管理员必须包含所有系统目录', 'error');
			return false;
		}
	}
	
	// 获取所有选中节点
	var menuIdList = new Array;
	for(var i = 0; i < nodes.length; i++) {
		menuIdList.push(nodes[i].id);
	}
	
	
	var paramJson = {};
	paramJson.roleCode = curRoleCode;
	paramJson.menuIdList = menuIdList.join(","); ;
	
	// ajax同步请求
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/AuthorityAction.do?method=setAuthoritisByRole",
		data: {"jsonStr": JSON.stringify(paramJson)},
		dataType: 'json',
		success: function(data) {
			if (0 < data.c) {
				$.messager.alert('提示信息', '权限设置成功', 'info');
			} else {
				$.messager.alert('提示信息', '权限设置失败', 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}
