
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
 * 重置
 */
function reset() {
	$('#form').form('load', formdatas);
}

/**
 * 返回
 */
function returnBack() {
	$.navinfo.getDialog().dialog('close');
}

/**
 * 表单校验
 */
function formValidate() {
	// 校验：APP类型
	var inputValue = $('#APP_TYPE').combobox('getValue');
	if ("" == inputValue) {
		$(".error-msg").html("请选择APP类型").show();
		return false;
	} else {
		$(".error-msg").html("").hide();
	}
	
	// 校验：外部版本号
	inputValue = $.navinfo.trimLR($("#OUTER_VERSION").val());
	$("#OUTER_VERSION").val(inputValue);
	if ("" == inputValue) {
		$(".error-msg").html("请填写外部版本号").show();
		return false;
	} else {
		$(".error-msg").html("").hide();
	}
	
	// 校验：内部版本号
	inputValue = $.navinfo.trimLR($("#INNER_VERSION").val());
	$("#INNER_VERSION").val(inputValue);
	if ("" == inputValue) {
		$(".error-msg").html("请填写内部版本号").show();
		return false;
	} else {
		$(".error-msg").html("").hide();
	}
	
	// 校验：下载地址URL
	inputValue = $.navinfo.trimLR($("#APP_URL").val());
	$("#APP_URL").val(inputValue);
	if ("" == inputValue) {
		$(".error-msg").html("请填写下载地址URL").show();
		return false;
	} else {
		$(".error-msg").html("").hide();
	}
	
	return true;
}

/**
 * 创建
 */
function save() {
	// 表单校验
	if(!formValidate()) {
		return false;
	}
	
	var jsonObj = $.navinfo.param2Json($("#form").serialize());
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/VersionAction.do?method=updateVersion",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				var d = $.navinfo.getDialog();
				d.operate = "reflash";
				$.messager.alert('提示信息', '修改成功', 'info', returnBack);
			} else {
				$.messager.alert('新增失败', data.m, 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

