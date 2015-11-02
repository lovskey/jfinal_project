
var formdatas;

$(function() {
	initData(); // 初始化数据
	getData(); // 获取车主信息
});

/**
 * 初始化数据
 */
function initData() {
	$('#IS_INDEX').combobox({   
		textField:'text',
		valueField:'code',   
		panelHeight:'auto',   
		data: [
		       {"text":"显示","code":"y"},
		       {"text":"不显示","code":"n"}
	       ]
	});
}

/**
 * 获取车辆信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/ProxyAction.do?method=getProxyIndexInfo",
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

/**
 * 创建
 */
function save() {
	var jsonObj = $.navinfo.param2Json($("#form").serialize());
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/ProxyAction.do?method=updateProxyIndex",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				var d = $.navinfo.getDialog();
				d.operate = "reflash";
				$.messager.alert('提示信息', '修改成功', 'info', returnBack);
			} else {
				$.messager.alert('修改失败', data.m, 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}
