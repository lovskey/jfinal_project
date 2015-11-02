<!DOCTYPE HTML>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/loginConfig.jsp"%>
<html>
<head>
<title>咪丫咪管理系统</title>
<script type="text/javascript" src="<%=contextPath%>/pages/login/login.js"></script>
<style type="text/css">
</style>
<script>
</script>
</head>
<body>

	<div style="margin: 0 auto;width:500px;padding-top: 50px;">
		<table>
			<tr>
				<td></td>
				<td><div id="errorMsg"></div></td>
			</tr>
			<tr>
				<td>账号：</td>
				<td><input type="text" id="account" maxlength="32" /></td>
			</tr>
			<tr>
				<td>密码：</td>
				<td><input type="password" id="password" maxlength="32" onkeydown="if(event.keyCode==13){login();}" /></td>
			</tr>
			<tr>
				<td></td>
				<td>
					<button style="width: 155px;" onclick="login();">登录</button>
				</td>
			</tr>
		</table>
	</div>

</body>
</html>