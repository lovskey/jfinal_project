<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增用户</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/base/user/user_add.js"></script>
<style type="text/css">
</style>
</head>
<body >

	<div align="left">
		<form id="form" method="post" style="padding-top: 30px;padding-left: 30px;">
			<table>
				<tr>
					<td>
						<label>账号：</label>
					</td>
					<td>
						<input id="ACCOUNT" name="ACCOUNT" type="text" style="width: 300px;" maxlength="32" />
					</td>
				</tr>
				<tr>
					<td>
						<label>密码：</label>
					</td>
					<td>
						<input id="PASSWORD" name="PASSWORD" type="text" style="width: 300px;" maxlength="32" />
					</td>
				</tr>
				<tr>
					<td>
						<label>角色：</label>
					</td>
					<td id="roleCodeTd">
						<input id="ROLE_CODE" name="ROLE_CODE" class="easyui-combobox" type="text" style="width: 300px" />
					</td>
				</tr>
				<tr>
					<td>
						<label>姓名：</label>
					</td>
					<td>
						<input id="NAME" name="NAME" type="text" style="width: 300px" maxlength="32" />
					</td>
				</tr>
				<tr>
					<td>
						<label>电话：</label>
					</td>
					<td>
						<input id="PHONE" name="PHONE" type="text" style="width: 300px" maxlength="16" />
					</td>
				</tr>
				<tr>
					<td></td>				
					<td>
						<div id="modalOperate">
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="save();">保 存</a>
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">返 回</a>
						</div>
					</td>				
				</tr>
			</table>
		</form>
	</div>
  
</body>
</html>