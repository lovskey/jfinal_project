
$(function() {
	$("#cValue").val(cValue);
	$("#cText").val(cText);
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
	$('#dValue').tooltip({
	    position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
	    content: '<span style="color:#BF1813;">请填写区县代码</span>',
	    showDelay: 0,
	    hideDelay: 0,
		showEvent: '',
		deltaY: -5
	});
	$('#dText').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请填写区县名称</span>',
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
	var dValue = $.navinfo.trimLR($("#dValue").val());
	var dText = $.navinfo.trimLR($("#dText").val());
	if ("" == dValue) {
		$('#dValue').tooltip('show');
		return false;
	} else {
		$('#dValue').tooltip('hide');
		$("#dValue").val(dValue);
	}
	if ("" == dText) {
		$('#dText').tooltip('show');
		return false;
	} else {
		$('#dText').tooltip('hide');
		$("#dText").val(dText);
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
	jsonObj.cValue = cValue;
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/CityAction.do?method=addDistrict",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				$.messager.alert('提示信息', '新增成功', 'info', returnBack);
			} else {
				$.messager.alert('新增失败', data.m, 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

