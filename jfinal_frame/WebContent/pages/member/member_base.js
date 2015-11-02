
$(function() {
	initData(); // 初始化数据
	query();
});

/**
 * 初始化数据
 */
function initData() {
	$('#USER_STATUS').combobox({   
		textField:'label',
	    valueField:'value',
	    panelHeight:'auto',
	    data: [{
	    	'label': '正常',
	    	'value': '0',
			"selected": true 
		},{
			'label': '冻结',
			'value': '1'
		}]
	});
}

/**
 * 初始化datagrid并查询
 */
function query() {
	var params = $.navinfo.param2Json($("#queryForm").serialize());
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/MemberAction.do?method=getMemberList",
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
			$('#datagrid').datagrid('unselectAll');
		},
		onDblClickRow: function(rowIndex, rowData) {
			viewOperate();
		}
	});
}

/**
 * 性别代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function sexFormat(value,row,index) {
	var s = "";
	if (1 == value) {
		s = "男";
	} else if (2 == value) {
		s = "女";
	} else {
		s = "其他";
	}
	return s;
}

/**
 * 账号状态代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function statusFormat(value,row,index) {
	var s = "";
	if ("" == value || "0" == value) {
		s = "正常";
	} else {
		s = "<span style='color:#BF1813;'>冻结</span>";
	}
	return s;
}

/**
 * 是否为小秘书代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function isSecFormat(value,row,index) {
	var s = "";
	if ("n" == value) {
		s = "不是";
	} else {
		s = "是";
	}
	return s;
}

/**
 * 查看操作
 */
function viewOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		$.navinfo.dialog("查看会员信息", $.navinfo.contextPath + "/MemberAction.do?method=view&KEYID="+row.KEYID, 700, 450).dialog('open'); 
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 清空查询内容
 */
function queryFormClear() {
	$('#queryForm').form('clear');
	$('#USER_STATUS').combobox("select", "0");
}
