var formdatas;

$(function() {
	getData(); // 获取角色信息
	initTooltip(); // 初始化tooltip
});

/**
 * 获取角色信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/RoleAction.do?method=getRoleInfo",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			// 加载数据
			$('#form').form('load', data);
			formdatas = data;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 创建
 */
function update() {
	// 表单校验
	if(!formValidate()) {
		return false;
	}
	
	var jsonObj = $.navinfo.param2Json($("#form").serialize());
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/RoleAction.do?method=updateRoleInfo",
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

/**
 * 表单校验
 */
function formValidate() {
	var roleName = $.navinfo.trimLR($("#ROLE_NAME").val());
	if ("" == roleName) {
		$('#ROLE_NAME').tooltip('show');
		return false;
	} else {
		$('#ROLE_NAME').tooltip('hide');
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
	    position: 'bottom', // 'left','right','top','bottom'.
	    content: '<span style="color:#BF1813;">请填写角色名称</span>',
	    showDelay: 0,
	    hideDelay: 0,
	    showEvent: ''
	});
}
