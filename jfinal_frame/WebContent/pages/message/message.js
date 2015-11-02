
var formdatas;

$(function() {
	initData(); // 初始化数据
	query();
});

/**
 * 初始化数据
 */
function initData() {
}

/**
 * 初始化datagrid并查询
 */
function query() {
	var params = $.navinfo.param2Json($("#queryForm").serialize());
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/MessageAction.do?method=getMessageList",
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
		pagination: true,
		//查询条件
		queryParams: params,		
		rownumbers: true,
		showFooter: true,
		onLoadSuccess: function(data){
			formdatas = data.rows;
			$('#datagrid').datagrid('unselectAll');
		},
		onDblClickRow: function(rowIndex, rowData) {
		}
	});
}

/**
 * 推送系统消息
 */
function createOperate() {
	window.parent.closeThisTab("推送系统消息");
	window.parent.addTab(new Date().getTime(), "推送系统消息", $.navinfo.contextPath + "/MessageAction.do?method=add");
}

/**
 * 查看系统消息
 */
function viewOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		var d = $.navinfo.dialog("查看系统消息", $.navinfo.contextPath + "/MessageAction.do?method=view&KEYID="+row.KEYID, 630, 480).dialog('open'); 
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 清空查询条件
 */
function queryFormClear() {
	$('#queryForm').form('clear');
}

/**
 * 发送结果转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function resultFormat(value,row,index) {
	var s = row.SUCESS_COUNT + "/" + row.TOTAL_COUNT;
	return s;
}

/**
 * 重新推送消息
 */
function rePush(keyId) {
	var d = $.navinfo.dialog("重新推送", $.navinfo.contextPath + "/MessageAction.do?method=rePush&KEYID="+keyId, 700, 450).dialog('open');
	d.operate = "";
	d.dialog({
	    onClose:function(){
	    	if ("reflash" == d.operate) {
	    		query();
	    	}
	    }
	});
}

