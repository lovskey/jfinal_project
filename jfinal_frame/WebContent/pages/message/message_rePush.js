
var appType; // APP类型：1-Android 2-IOS
var ERROR_CODE_DIR = {
		"0":"调用成功",
		"-1":"参数错误",
		"-2":"请求时间戳不在有效期内",
		"-3":"sign校验无效，检查Access ID和Secret Key（注意不是Access Key）",
		"2":"参数错误",
		"7":"别名/账号绑定的终端数满了（10个）",
		"14":"收到非法token，例如ios终端没能拿到正确的token",
		"15":"信鸽逻辑服务器繁忙",
		"19":"操作时序错误,例如进行tag操作前未获取到deviceToken 没有获取到deviceToken的原因: 1.没有注册信鸽或者苹果推送。 2.provisioning profile制作不正确。",
		"20":"鉴权错误，可能是由于Access ID和Access Key不匹配",
		"40":"推送的token没有在信鸽中注册，或者推送的账号没有绑定token",
		"48":"推送的账号没有在信鸽中注册",
		"63":"标签系统忙",
		"71":"APNS服务器繁忙",
		"73":"消息字符数超限",
		"76":"请求过于频繁，请稍后再试。全量广播限频为每3秒一次，其他推送行为不限频",
		"78":"循环任务参数错误",
		"100":"APNS证书错误。请重新提交正确的证书"
};

$(function() {
	initData(); // 初始化数据
	getData();
});

/**
 * 初始化数据
 */
function initData() {
	$('#APP_TYPE').combobox({   
		textField:'text',
	    valueField:'code',
	    panelHeight:'auto',
		data: [
		       {"text":"全部","code":"0","selected":"true"},
		       {"text":"Android","code":"1"},
		       {"text":"IOS","code":"2"}
			]
	});
}

/**
 * 获取消息信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/MessageAction.do?method=getMessageInfo",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			// 加载数据
			var result = data.SEND_RESULT;
			$('#form').form('load', data);
			
			var errMsg = "";
			errMsg += "<div>错误代码："+result.ret_code+"</div>";
			errMsg += "<div>错误原因："+ERROR_CODE_DIR[result.ret_code]+"</div>";
			$('#resultTd').html(errMsg);
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
 * 创建
 */
function rePush() {
	var jsonObj = $.navinfo.param2Json($("#form").serialize());
	jsonObj.APP_TYPE = $('#APP_TYPE').combobox('getValue');
	jsonObj.TITLE = $('#TITLE').val();
	jsonObj.CONTENT = $('#CONTENT').val();
	
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/MessageAction.do?method=repushMessage",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			var d = $.navinfo.getDialog();
			d.operate = "reflash";
			$.navinfo.getDialog().dialog('close');
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

