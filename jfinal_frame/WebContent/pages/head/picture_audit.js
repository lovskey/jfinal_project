
var pictureSrc;

$(function() {
	initData(); // 初始化数据
	getData(); // 获取车主信息
});

/**
 * 初始化数据
 */
function initData() {
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
}

/**
 * 获取车主信息
 */
function getData() {
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/HeadAction.do?method=getMemberInfo",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			// 加载数据
			$('#form').form('load', data);
			$("#auditImg").attr("src", IMG_BASE_URL+data.USER_IMAGE);
			
			$("#auditImg").load(function(){
				var realWidth = $(this).width();
				var realHeight = $(this).height();
				$("#imgWidth").text(realWidth+"px");
				$("#imgHeight").text(realHeight+"px");
				var rateW = 0, rateH = 0;
				if (1180 < realWidth) {
					rateW = realWidth/1180;
				}
				if (500 < realHeight) {
					rateH = realHeight/485;
				}
				var rate = Math.max(rateW, rateH);
				if (0 != rate) {
					$(this).width(realWidth/rate);
					$(this).height(realHeight/rate);
				}
				$(this).show();
				$("#imgInfo").show();
			});
			
			$("#auditImg").error(function(){
				$("#imgDiv").html("图片加载失败");
			});
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 审核图片
 */
function audit() {
	var jsonObj = $.navinfo.param2Json($("#form").serialize());
	// ajax同步提交数据
	$.ajax({
		async: false,
		type: 'POST',
		url: $.navinfo.contextPath + "/HeadAction.do?method=updateHeadAudit",
		data: jsonObj,
		dataType: 'json',
		success: function(data) {
			if (1 == data.c) {
				var d = $.navinfo.getDialog();
				d.operate = "reflash";
				$.messager.alert('提示信息', '审核成功', 'info', returnBack);
			} else {
				$.messager.alert('提示信息', '审核失败', 'error');
			}
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
