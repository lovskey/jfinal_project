
var formdatas;

$(function() {
	initData(); // 初始化数据
	getData(); // 获取会员信息
});

/**
 * 初始化数据
 */
function initData() {
	$('#USER_SEX').combobox({   
		textField:'label',
	    valueField:'value',
	    panelHeight:'auto',
	    data: [{
	    	'label': '男',
	    	'value': '1' 
		},{
			'label': '女',
			'value': '2'
		},{
			'label': '其他',
			'value': '3'
		}]
	});
	$('#MARRY_STATUS').combobox({   
		textField:'label',
		valueField:'value',
		panelHeight:'auto',
		data: [{
			'label': '单身',
			'value': '1' 
		},{
			'label': '已婚',
			'value': '2'
		},{
			'label': '其他',
			'value': '3'
		}]
	});
	$('#USER_IMAGE_STATUS').combobox({   
		textField:'label',
		valueField:'value',
		panelHeight:'auto',
		data: [{
			'label': '正常',
			'value': '0' 
		},{
			'label': '冻结',
			'value': '1'
		}]
	});
	$('#USER_STATUS').combobox({   
		textField:'label',
		valueField:'value',
		panelHeight:'auto',
		data: [{
			'label': '正常',
			'value': '0' 
		},{
			'label': '冻结',
			'value': '1'
		}],
		onSelect: function(record){
			if ("1" == record.value) {
				$('#FREEZE_REMARK').val(formdatas.FREEZE_REMARK);
				$('#FREEZE_REMARK').attr("disabled", false); 
			} else {
				$('#FREEZE_REMARK').val("");
				$('#FREEZE_REMARK').attr("disabled", true); 
			}
		}

	});
	$('#IS_SEC').combobox({   
		textField:'label',
		valueField:'value',
		panelHeight:'auto',
		data: [{
			'label': '不是',
			'value': 'n' 
		},{
			'label': '是',
			'value': 'y'
		}]
	});
}

/**
 * 获取信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/MemberAction.do?method=getMemberInfo",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			// 加载数据
			formdatas = data;
			$('#form').form('load', data);
			if ("" != data.USER_IMAGE) {
				$("#userHeaderImg").attr("src", IMG_BASE_URL+data.USER_IMAGE).show();
			}
			if ("1" == data.USER_STATUS) {
				$('#FREEZE_REMARK').attr("disabled", false); 
			} else {
				$('#FREEZE_REMARK').attr("disabled", true); 
			}
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
		url: $.navinfo.contextPath + "/MemberAction.do?method=updateMemberInfo",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.flag) {
				var d = $.navinfo.getDialog();
				d.operate = "reflash";
				$.messager.alert('提示信息', '修改成功', 'info', returnBack);
			} else if (-1 == data.flag) {
				$.messager.alert('修改失败', "手机号["+$("#USER_PHONE").val()+"]已存在", 'error');
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
	var inputValue = $.navinfo.trimLR($("#USER_PHONE").val());
	$("#USER_PHONE").val(inputValue);
	if(!/^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9])\d{8}$/i.test(inputValue)) {
		$(".error-msg").html("请填写有效手机号").show();
		return false;
	} else {
		$(".error-msg").html("").hide();
	}
	
	if(!$('#form').form('validate')) return false;
	
	return true;
}

