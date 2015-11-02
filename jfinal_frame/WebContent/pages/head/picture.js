
$(function() {
	initData(); // 初始化数据
	initEvent(); // 初始化图片单击事件
	query(1); // 查询数据
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
	    	'value': '0',
    		"selected": true 
		},{
			'label': '冻结',
			'value': '1'
		}]
	});
}

/**
 * 初始化图片单击事件
 */
function initEvent() {
	$("#imgDiv img").click(function(event) {
		var KEYID = $(this).attr("data-KEYID");
		
		var d = $.navinfo.dialog("审核头像", $.navinfo.contextPath 
				+ "/HeadAction.do?method=audit&KEYID="+KEYID, 800, 600).dialog('open'); 
		d.operate = "";
		d.dialog({
		    onClose:function(){
		    	if ("reflash" == d.operate) {
		    		query(GW_CUR_PAGE);
		    	}
		    }
		});
	});
}

/**
 * 分页
 * @param pageNum
 * @param pageTotal
 */
function creatPage(pageNum, pageTotal){
	$.gwPage.create(pageNum, pageTotal, query);
}

/**
 * 查询
 */
function query(pageNum) {
	var params = $.navinfo.param2Json($("#queryForm").serialize());
	params.pageNum = pageNum;
	params.pageSize = 10;
	
	// ajax同步获取数据
	$.ajax({
		async: false,
		type: 'GET',
		url: $.navinfo.contextPath + "/HeadAction.do?method=getPictureList",
		data: params,
		dataType: 'json',
		success: function(data) {
			creatPage(data.pageNum, data.pageTotal);
			$(".gw-page-div").append("<div class='total-record-div'>共 "+data.recordTotal+" 记录</div>");
			
			var imgObj;
			for (var i = 0; i < 10; i++) {
				if (data.rows[i]) {
					imgObj = $("#img"+i);
					imgObj.attr("src", IMG_BASE_URL+data.rows[i].USER_IMAGE).show();
					imgObj.attr("data-KEYID", data.rows[i].KEYID);
					imgObj.show();
				} else {
					$("#img"+i).attr("src", "").hide();
				}
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}
