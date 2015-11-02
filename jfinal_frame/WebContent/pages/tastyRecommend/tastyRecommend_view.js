
$(function() {
	initData(); // 初始化数据
	getData(); // 获取会员信息
});

/**
 * 初始化数据
 */
function initData() {
	$('#CATEGORY').combobox({   
		textField:'label',
	    valueField:'value',
	    panelHeight:'auto',
	    data: [{
	    	'label': '便餐热菜',
	    	'value': '1'
		},{
			'label': '小吃零食',
			'value': '2'
		},{
			'label': '烘焙甜点',
			'value': '3'
		},{
			'label': '饮品酒茶',
			'value': '4'
		},{
			'label': '养生养颜',
			'value': '5'
		},{
			'label': '粮肉制品',
			'value': '6'
		},{
			'label': '生鲜果蔬',
			'value': '7'
		}
		]
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
		url: $.navinfo.contextPath + "/TastyRecommendAction.do?method=getTastyRecommendInfo",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			// 加载数据
			if ("" == data.PROVINCE || isNaN(data.PROVINCE)) {
			} else {
				data.PROVINCE = $.navinfo.trim2Empty(CHINA_DISTRICT_JSON[data.PROVINCE]);
			}
			if ("" == data.CITY || isNaN(data.CITY)) {
			} else {
				data.CITY = $.navinfo.trim2Empty(CHINA_DISTRICT_JSON[data.CITY]);
			}
			$('#form').form('load', data);
			
			loadTastyImg(); // 加载菜单图片
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

/**
 * 加载菜单图片
 */
function loadTastyImg() {
	// ajax同步获取数据
	$.ajax({
		async: true,
		type: 'GET',
		url: $.navinfo.contextPath + "/TastyRecommendAction.do?method=getTastyImgList",
		data: {"KEYID": keyId},
		dataType: 'json',
		success: function(data) {
			$("#imgTitle").html("图片列表");
			
			var imgJson;
			var imgHtml = "";
			$.each(data, function(index, callback) {
				imgJson = data[index];
				imgHtml += "<img data-src='"+imgJson.PICTURE+"' src='"+IMG_BASE_URL+imgJson.PICTURE_THUMB+"' />";
				if ((index+1)%3 == 0) {
					imgHtml += "<br>";
				}
			});
			$("#imgDiv").html(imgHtml);
			
			initImgEvent(); // 初始化图片单击事件
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#imgTitle").html("图片加载失败");
		}
	});
}

/**
 * 初始化图片单击事件
 */
function initImgEvent() {
	$("#imgDiv img").click(function() {
		var imgSrc = $(this).attr("data-src");
		window.open(IMG_BASE_URL+imgSrc);
	});
}

/**
 * 返回
 */
function returnBack() {
	$.navinfo.getDialog().dialog('close');
}
