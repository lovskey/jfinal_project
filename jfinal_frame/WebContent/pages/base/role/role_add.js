var formdatas;

$(function() {
	initTooltip(); // 初始化tooltip
});

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
		url: $.navinfo.contextPath + "/RoleAction.do?method=insertRoleInfo",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				var d = $.navinfo.getDialog();
				d.operate = "reflash";
				$.messager.alert('提示信息', '新增成功', 'info', returnBack);
			} else {
				$.messager.alert('新增失败', data.m, 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 表单校验
 */
function formValidate() {
	var roleName = $.navinfo.trimLR($("#ROLE_NAME").val());
	var roleCode = $.navinfo.trimLR($("#ROLE_CODE").val());
	if ("" == roleName) {
		$('#ROLE_NAME').tooltip('show');
		return false;
	} else {
		$('#ROLE_NAME').tooltip('hide');
	}
	if ("" == roleCode) {
		$('#ROLE_CODE').tooltip('show');
		return false;
	} else {
		$('#ROLE_CODE').tooltip('hide');
	}
	
	return true;
}

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
	$('#ROLE_NAME').tooltip({
	    position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
	    content: '<span style="color:#BF1813;">请填写角色名称</span>',
	    showDelay: 0,
	    hideDelay: 0,
	    showEvent: ''
	});
	$('#ROLE_CODE').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请填写角色代码</span>',
		showDelay: 0,
		hideDelay: 0,
	    showEvent: ''
	});
}
