var formdatas;

$(function() {
	initRoleCombo(); // 初始化角色Combo
	getData(); // 获取角色信息
	initTooltip(); // 初始化tooltip
});

/**
 * 初始化角色Combo
 */
function initRoleCombo() {
	// ajax同步请求
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/RoleAction.do?method=getRoleList",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			$('#ROLE_CODE').combobox({   
			    valueField: 'ROLE_CODE',   
			    textField: 'ROLE_NAME',
			    data: data.rows,
			    editable: false,
			    panelHeight: 'auto'
			});
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 获取角色信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/UserAction.do?method=getUserInfo",
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
 * 返回
 */
function returnBack() {
	$.navinfo.getDialog().dialog('close');
}

/**
 * 初始化tooltip
 */
function initTooltip() {
	$('#PASSWORD').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请设置密码</span>',
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
	var password = $.navinfo.trimLR($("#PASSWORD").val());
	$("#PASSWORD").val(password);
	if ("" == password) {
		$('#PASSWORD').tooltip('show');
		return false;
	} else {
		$('#PASSWORD').tooltip('hide');
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
		url: $.navinfo.contextPath + "/UserAction.do?method=updateUserInfo",
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

