
$(function() {
	getData(); // 获取车主信息
});

/**
 * 获取车主信息
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
			$("#CONTENT").html(data.CONTENT);
			$("#MES_URL").html(data.MES_URL);
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
