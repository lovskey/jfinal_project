<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%
	String contextPath = request.getContextPath();
%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<link rel="shortcut icon" type="image/x-icon" href="<%=contextPath%>/common/images/favicon.ico">
<link rel="Bookmark" type="image/x-icon" href="<%=contextPath%>/common/images/favicon.ico">
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/plugins/jquery-easyui-1.4.2/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/plugins/jquery-easyui-1.4.2/themes/icon.css">
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/css/common.css">
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/css/biPage.css">
<script type="text/javascript" src="<%=contextPath%>/common/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="<%=contextPath%>/plugins/jquery-easyui-1.4.2/jquery.easyui.min.js"></script>
<script type="text/javascript" src="<%=contextPath%>/plugins/jquery-easyui-1.4.2/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="<%=contextPath%>/common/js/json2.js"></script>
<script type="text/javascript" src="<%=contextPath%>/common/js/customUtils.js?version=0.19_2014012311100"></script>
<script type="text/javascript">
	if(!$.navinfo){
		$.navinfo = {};
	}
	$.navinfo.contextPath = "<%=contextPath%>";
	var IMG_BASE_URL = "http://123.57.53.43:8080/swy";
	
	/* 回收内存 */
	$.fn.panel.defaults.onBeforeDestroy = function() {
		var frame = $('iframe', this);
		if (frame.length > 0) {
			frame[0].contentWindow.document.write('');
			frame[0].contentWindow.close();
			frame.remove();
		}
	};
</script>