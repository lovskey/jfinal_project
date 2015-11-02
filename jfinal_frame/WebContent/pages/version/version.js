
var PAGE_NUMBER = 1;

$(function() {
	initData(); // 初始化数据
	query();
});

/**
 * 初始化数据
 */
function initData() {
	$('#APP_TYPE').combobox({   
		textField:'label',
	    valueField:'value',
	    panelHeight:'auto',
	    data: [{
	    	'label': 'Android',
	    	'value': '0',
			"selected": true  
		},{
			'label': 'IOS',
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
		url:$.navinfo.contextPath + "/VersionAction.do?method=getVersionList",
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
		pageNumber: PAGE_NUMBER,
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
		}
	});
}

/**
 * 新增版本
 */
function createOperate() {
	var d = $.navinfo.dialog("新增版本", $.navinfo.contextPath + "/VersionAction.do?method=add", 700, 500).dialog('open'); 
	d.operate = "";
	d.dialog({
	    onClose:function(){
	    	if ("reflash" == d.operate) {
	    		PAGE_NUMBER = $(".pagination-num").val();
	    		query();
	    	}
	    }
	});
}

/**
 * 修改版本信息
 */
function modifyOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		var d = $.navinfo.dialog("修改版本信息", $.navinfo.contextPath + "/VersionAction.do?method=edit&KEYID="+row.KEYID, 700, 500).dialog('open'); 
		d.operate = "";
		d.dialog({
			onClose:function(){
		    	if ("reflash" == d.operate) {
		    		PAGE_NUMBER = $(".pagination-num").val();
		    		query();
		    	}
			}
		});
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 查看版本信息
 */
function viewOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		var d = $.navinfo.dialog("查看版本信息", $.navinfo.contextPath + "/VersionAction.do?method=view&KEYID="+row.KEYID, 700, 500).dialog('open'); 
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 删除版本
 */
function delOperate() {
	var row = $('#datagrid').datagrid('getSelected');

	if (row) {
		$.messager.confirm("提示信息","确定删除信息？",function(sure){
			if (sure) {
				$.ajax({
					async: false,
					type: 'POST',
					url: $.navinfo.contextPath + "/VersionAction.do?method=deleteVersion&KEYID="+row.KEYID,
					data: "",
					dataType: 'json',
					success: function(response) {
						if (1 == response.c) {
							$.messager.alert('提示信息', '删除成功', 'info', function(){
					    		PAGE_NUMBER = $(".pagination-num").val();
					    		query();
							});
						} else {
							$.messager.alert('提示信息', "删除失败", 'error');
						}
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
					}
				});
			}
		});
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * APP版本类型代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function appFormat(value,row,index) {
	var s = "";
	if (0 == value) {
		s = "Android";
	} else if (1 == value) {
		s = "IOS";
	} else {
		s = "";
	}
	return s;
}
