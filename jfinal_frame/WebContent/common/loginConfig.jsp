<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%
	String contextPath = request.getContextPath();
%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/css/common.css">
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/css/login/login.css">
<script type="text/javascript" src="<%=contextPath%>/common/js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="<%=contextPath%>/common/js/html5.js"></script>
<script type="text/javascript" src="<%=contextPath%>/common/js/json2.js"></script>
<script type="text/javascript" src="<%=contextPath%>/common/js/navinfoUtils.js"></script>
<script type="text/javascript">
	if(!$.navinfo){
		$.navinfo = {};
	}
	$.navinfo.contextPath = "<%=contextPath%>";
</script>