
var PAGE_NUMBER = 1;

$(function() {
	initData(); // 初始化数据
	query();
});

/**
 * 初始化数据
 */
function initData() {
	$('#PROVINCE').combobox({   
		textField:'text',
		valueField:'code',   
		data: CHINA_PROVINCE_JSON,
		onSelect:function(record){
			//刷新数据
			$('#CITY').combobox({
				textField:'text',
				valueField:'code', 
				data: CHINA_CITY_JSON[record.code]	
			});
		}
	});
}

/**
 * 初始化datagrid并查询
 */
function query() {
	var params = $.navinfo.param2Json($("#queryForm").serialize());
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/ProxyAction.do?method=getProxyList",
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
 * 首页显示Format
 * @param value
 * @param row
 * @param index
 * @returns
 */
function indexFormat(value,row,index) {
	var s = "";
	if ("y" == row.IS_INDEX) {
		s = "<span style='color:#1FA67B;'>显示</span>";
	} else {
		s = "";
	}
	
	return s;
}

/**
 * 地址Format
 * @param value
 * @param row
 * @param index
 * @returns
 */
function addressFormat(value,row,index) {
	var province = row.PROVINCE;
	var city = row.CITY;
	var s = "";
	if (isNaN(province)) {
		s += province;
	} else {
		s += $.navinfo.trim2Empty(CHINA_DISTRICT_JSON[province]);
	}
	if (isNaN(city)) {
		s += " " + city;
	} else {
		s += " " + $.navinfo.trim2Empty(CHINA_DISTRICT_JSON[city]);
	}
	s += " " + row.ADDRESS;
	
	return s;
}

/**
 * 清空查询内容
 */
function queryFormClear() {
	$('#queryForm').form('clear');
}

/**
 * 设置是否首页显示
 */
function indexSet() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		var d = $.navinfo.dialog("私厨首页显示设置", $.navinfo.contextPath + "/ProxyAction.do?method=index&KEYID="+row.KEYID, 400, 300).dialog('open'); 
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
 * 权重设置
 */
function wvSet() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		var d = $.navinfo.dialog("私厨权重设置", $.navinfo.contextPath + "/ProxyAction.do?method=sort&KEYID="+row.KEYID, 400, 230).dialog('open'); 
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
