
$(function() {
	$("#pValue").val(pValue);
	$("#pText").val(pText);
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
	$('#cValue').tooltip({
	    position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
	    content: '<span style="color:#BF1813;">请填写城市代码</span>',
	    showDelay: 0,
	    hideDelay: 0,
		showEvent: '',
		deltaY: -5
	});
	$('#cText').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请填写城市名称</span>',
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
	var cValue = $.navinfo.trimLR($("#cValue").val());
	var cText = $.navinfo.trimLR($("#cText").val());
	if ("" == cValue) {
		$('#cValue').tooltip('show');
		return false;
	} else {
		$('#cValue').tooltip('hide');
		$("#cValue").val(cValue);
	}
	if ("" == cText) {
		$('#cText').tooltip('show');
		return false;
	} else {
		$('#cText').tooltip('hide');
		$("#cText").val(cText);
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
	jsonObj.pValue = pValue;
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/CityAction.do?method=addCity",
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

