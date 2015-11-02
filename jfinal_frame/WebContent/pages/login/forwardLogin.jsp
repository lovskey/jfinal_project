<!DOCTYPE HTML>
<%@ page contentType="text/html; charset=UTF-8"%>
<html>
<head>
<title></title>
<script type="text/javascript">
	//window.top.window.location = "<%=request.getContextPath()%>/LoginAction.do?method=login";
function logout() {
	window.top.window.location = "<%=request.getContextPath()%>/LoginAction.do?method=login";
}
</script>
</head>

<body>

	<div style="margin: 20px;">
		<span>操作超时</span>
		<a href="javascript:void(0);" onclick="logout();">重新登录</a>
	</div>

</body>

</html>