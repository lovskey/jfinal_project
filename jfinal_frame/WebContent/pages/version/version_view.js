
var formdatas;
var province,city;

$(function() {
	initData(); // 初始化数据
	getData(); // 获取车主信息
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
	    	'value': '0' 
		},{
			'label': 'IOS',
			'value': '1'
		}]
	});
}

/**
 * 获取车主信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/VersionAction.do?method=getVersionInfo",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			// 加载数据
			formdatas = data;
			$('#form').form('load', data);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 返回
 */
function returnBack() {
	$.navinfo.getDialog().dialog('close');
}
