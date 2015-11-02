
$(function() {
	initRoleCombo(); // 初始化角色Combo
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
		data: {},
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
 * 返回
 */
function returnBack() {
	$.navinfo.getDialog().dialog('close');
}

/**
 * 初始化tooltip
 */
function initTooltip() {
	$('#ACCOUNT').tooltip({
	    position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
	    content: '<span style="color:#BF1813;">请填写账号</span>',
	    showDelay: 0,
	    hideDelay: 0,
		showEvent: '',
		deltaY: -5
	});
	$('#PASSWORD').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请设置密码</span>',
		showDelay: 0,
		hideDelay: 0,
		showEvent: '',
		deltaY: -5
	});
	$('#roleCodeTd').tooltip({
		position: 'bottom', // The tooltip position. Possible values are: 'left','right','top','bottom'.
		content: '<span style="color:#BF1813;">请选择角色</span>',
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
	var account = $.navinfo.trimLR($("#ACCOUNT").val());
	$("#ACCOUNT").val(account);
	var password = $.navinfo.trimLR($("#PASSWORD").val());
	$("#PASSWORD").val(password);
	var roleCode = $('#ROLE_CODE').combobox("getValue");
	if ("" == account) {
		$('#ACCOUNT').tooltip('show');
		return false;
	} else {
		$('#ACCOUNT').tooltip('hide');
	}
	if ("" == password) {
		$('#PASSWORD').tooltip('show');
		return false;
	} else {
		$('#PASSWORD').tooltip('hide');
	}
	if ("" == roleCode) {
		$('#roleCodeTd').tooltip('show');
		return false;
	} else {
		$('#roleCodeTd').tooltip('hide');
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
		url: $.navinfo.contextPath + "/UserAction.do?method=insertUserInfo",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				var d = $.navinfo.getDialog();
				d.operate = "reflash";
				$.messager.alert('提示信息', '新增成功', 'info', returnBack);
			} else if (-1 == data.c) {
				$.messager.alert('新增失败', "该账号已存在", 'error');
			} else {
				$.messager.alert('新增失败', data.m, 'error');
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

