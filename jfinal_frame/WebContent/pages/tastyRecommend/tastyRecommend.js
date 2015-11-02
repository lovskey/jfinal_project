
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
	
	$('#CATEGORY').combobox({   
		textField:'label',
	    valueField:'value',
	    panelHeight:'auto',
	    data: [{
	    	'label': '便餐热菜',
	    	'value': '1'
		},{
			'label': '小吃零食',
			'value': '2'
		},{
			'label': '烘焙甜点',
			'value': '3'
		},{
			'label': '饮品酒茶',
			'value': '4'
		},{
			'label': '养生养颜',
			'value': '5'
		},{
			'label': '粮肉制品',
			'value': '6'
		},{
			'label': '生鲜果蔬',
			'value': '7'
		}
		]
	});
}

/**
 * 初始化datagrid并查询
 */
function query() {
	var params = $.navinfo.param2Json($("#queryForm").serialize());
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/TastyRecommendAction.do?method=getTastyRecommendList",
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
 * 省份代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function provinceFormat(value,row,index) {
	var s = "";
	if (isNaN(value)) {
		s = value;
	} else {
		s = $.navinfo.trim2Empty(CHINA_DISTRICT_JSON[value]);
	}
	return s;
}

/**
 * 城市代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function cityFormat(value,row,index) {
	var s = "";
	if (isNaN(value)) {
		s = value;
	} else {
		s = $.navinfo.trim2Empty(CHINA_DISTRICT_JSON[value]);
	}
	return s;
}

/**
 * 分类代码转码
 * @param value
 * @param row
 * @param index
 * @returns
 */
function categoryFormat(value,row,index) {
	var s = "";
	if (1 == value) {
		s = "便餐热菜";
	} else if (2 == value) {
		s = "小吃零食";
	} else if (3 == value) {
		s = "烘焙甜点";
	} else if (4 == value) {
		s = "饮品酒茶";
	} else if (5 == value) {
		s = "养生养颜";
	} else if (6 == value) {
		s = "粮肉制品";
	} else if (7 == value) {
		s = "生鲜果蔬";
	} else {
		s = "未定义";
	}
	return s;
}

/**
 * 查看操作
 */
function viewOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		$.navinfo.dialog("查看菜单信息", $.navinfo.contextPath + "/TastyRecommendAction.do?method=view&KEYID="+row.KEYID, 700, 550).dialog('open'); 
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 清空查询内容
 */
function queryFormClear() {
	$('#queryForm').form('clear');
}
