<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增角色</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/base/role/role_add.js"></script>
<style type="text/css">
</style>
<script type="text/javascript">
</script>
</head>
<body >

	<div align="left">
		<form id="form" method="post" style="padding-top: 30px;padding-left: 30px;">
			<table>
				<tr>
					<td>
						<label>角色名称：</label>
					</td>
					<td>
						<input id="ROLE_NAME" name="ROLE_NAME" type="text" style="width: 300px;" maxlength="32" />
					</td>
				</tr>
				<tr>
					<td>
						<label>角色代码：</label>
					</td>
					<td>
						<input id="ROLE_CODE" name="ROLE_CODE" type="text" style="width: 300px" maxlength="32" />
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