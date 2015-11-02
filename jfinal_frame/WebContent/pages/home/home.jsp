<!DOCTYPE HTML>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<%-- <%@ page import="com.navinfo.base.login.UserInfo" language="java"%> --%>

<html>
<head>
<title>后台管理系统</title>
<script type="text/javascript" src="<%=contextPath%>/pages/home/home.js"></script>
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/common/css/home.css">
<style type="text/css">
</style>
<script type="text/javascript">

</script>
</head>
<body class="easyui-layout">

	<div id="north" data-options="region:'north',border:false">
		<div id="topLeftDiv">LOGO</div>
		<div id="topRightDiv">
			<div id="account"></div>
			<div class="north-split"></div>
			<div id="loginOutBtn" onclick="loginOut();">退出</div>
		</div>
	</div>
	<div id="west" data-options="region:'west',split:false">
		<div id="leftAccordion" class="easyui-accordion" data-options="fit:true,border:false"></div>
	</div>
	<div id="center" data-options="region:'center'">
		<div id="rightTabs" class="easyui-tabs" data-options="fit:true,border:false"></div>
	</div>
	
	<!-- 弹出框，供所有页面弹出页使用，注意要使用模态弹出 -->
	<div id="modalDialog"></div>

</body>
</html>