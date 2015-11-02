
$(function() {
	initGrid();
});

/**
 * 初始化datagrid
 */
function initGrid() {
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/UserAction.do?method=getUserList",
		width: 700,
		height: 400,
		striped: true,
		collapsible: true,
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
		showFooter: true,
		onLoadSuccess: function(data){
			$('#datagrid').datagrid('unselectAll');
		},
		onDblClickRow: function(rowIndex, rowData) {
		}
	});
}

/**
 * 新增用户
 */
function createOperate() {
	var d = $.navinfo.dialog("新增用户", $.navinfo.contextPath + "/UserAction.do?method=add", 470, 330).dialog('open'); 
	d.operate = "";
	d.dialog({
	    onClose:function(){
	    	if ("reflash" == d.operate) {
	    		initGrid();
	    	}
	    }
	});
}

/**
 * 修改用户
 */
function modifyOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		if ("root_admin" == row.ROLE_CODE) { // 系统管理员不能通过管理系统修改
			$.messager.alert('提示信息', '不能修改系统管理员', 'error');
			return false;
		} else {
			var d = $.navinfo.dialog("修改用户", $.navinfo.contextPath + "/UserAction.do?method=edit&KEYID="+row.KEYID, 470, 330).dialog('open'); 
			d.operate = "";
			d.dialog({
				onClose:function(){
			    	if ("reflash" == d.operate) {
			    		initGrid();
			    	}
				}
			});
		}
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}