
$(function() {
	$("#value").val(value);
	$("#text").val(text);
	initTooltip(); // 初始化tooltip
});

/**
 * 返回
 */
function returnBack() {
	$.navinfo.getDialog().dialog('close');
}

/**
 * 初始化tooltip
 */
function initTooltip() {
	$('#value').tooltip({
	    position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
	    content: '<span style="color:#BF1813;">请填写行政区代码</span>',
	    showDelay: 0,
	    hideDelay: 0,
		showEvent: '',
		deltaY: -5
	});
	$('#text').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请填写行政区名称</span>',
		showDelay: 0,
		hideDelay: 0,
		showEvent: '',
		deltaY: -5
	});
}

/**
 * 表单校验
 */
function formValidate() {
	var value = $.navinfo.trimLR($("#value").val());
	var text = $.navinfo.trimLR($("#text").val());
	if ("" == value) {
		$('#value').tooltip('show');
		return false;
	} else {
		$('#value').tooltip('hide');
		$("#value").val(value);
	}
	if ("" == text) {
		$('#text').tooltip('show');
		return false;
	} else {
		$('#text').tooltip('hide');
		$("#text").val(text);
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
	jsonObj.xLevel = xLevel;
	jsonObj.keyId = keyId;
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/CityAction.do?method=editCity",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				$.messager.alert('提示信息', '修改成功', 'info', returnBack);
			} else {
				$.messager.alert('修改失败', data.m, 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

