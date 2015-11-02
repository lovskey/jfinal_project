
$(function() {
	
});

/**
 * 返回
 */
function returnBack() {
	window.parent.closeThisTab("系统消息");
	window.parent.addTab(new Date().getTime(), "系统消息", $.navinfo.contextPath + "/MessageAction.do?method=begin");
	window.parent.closeThisTab("推送系统消息");
}


/**
 * 表单校验
 */
function formValidate() {
	var content = $.navinfo.trimLR($("#CONTENT").val());
	$("#CONTENT").val(content);
	if("" == content) {
		$.messager.alert('提示信息', '请填写消息内容', 'warning');
		return false;
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
	} else {
		$("#sendMes").html("消息发送中……").show();
	}
	
	var jsonObj = {};
	jsonObj.content = $("#CONTENT").val();
	jsonObj.url = $.navinfo.trimLR($("#MES_URL").val());
	
	$("#modalDiv").show();
	// ajax同步提交数据
	$.ajax({
		async: true,
		type: 'POST',
		url: $.navinfo.contextPath + "/easemob/sendMessage.dos",
		data: {"p": JSON2.stringify(jsonObj)},
		dataType: 'json',
		success: function(data) {
			$("#modalDiv").hide();
			$("#sendMes").html("").hide();
			
			if (-1 == data.result) {
				$("#sendResult").html("消息发送失败").show();
			} else {
				$('#saveA').linkbutton('disable', "true");
				$("#sendResult").html("成功数/总数:" + data.result).show();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#modalDiv").hide();
			$("#sendMes").html("消息发送失败").show();
		}
	});
}

