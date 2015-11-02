
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
