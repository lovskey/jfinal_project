<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>修改会员信息</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/member/member_edit.js"></script>
<script type="text/javascript">
    var keyId = '<%=request.getAttribute("KEYID")%>';
</script>
<style type="text/css">
#form td {
	padding-top: 5px;
}
</style>
</head>
<body >

	<div align="left">
		<form id="form" method="post" style="padding-top: 30px;padding-left: 30px;">
			<div class="error-msg" style="width:593px;"></div>
			<input id="KEYID" name="KEYID" type="text" style="display: none;" />
			<table>
				<tr>
					<td width="100px">
						<label>用户电话：</label>
					</td>
					<td width="500px">
						<input id="USER_PHONE" name="USER_PHONE" type="text" style="width: 480px;" maxlength="11" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>用户昵称：</label>
					</td>
					<td width="500px">
						<input id="USER_NICKNAME" name="USER_NICKNAME" type="text" style="width: 480px;" maxlength="20" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>用户性别：</label>
					</td>
					<td width="500px">
						<input id="USER_SEX" name="USER_SEX" class="easyui-combobox" 
							data-options="editable:false" style="width: 480px;" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>婚姻状态：</label>
					</td>
					<td width="500px">
						<input id="MARRY_STATUS" name="MARRY_STATUS" class="easyui-combobox" 
							data-options="editable:false" style="width: 480px;" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>签名：</label>
					</td>
					<td width="500px">
						<input id="USER_SIGN" name="USER_SIGN" maxlength="120" style="width: 480px;" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>用户头像：</label>
					</td>
					<td width="500px">
						<img id="userHeaderImg" src="" style="display:none;" />
					</td>
				</tr>				
				<tr>
					<td width="100px">
						<label>头像状态：</label>
					</td>
					<td width="500px">
						<input id="USER_IMAGE_STATUS" name="USER_IMAGE_STATUS" class="easyui-combobox" 
							data-options="editable:false" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>是否小秘书：</label>
					</td>
					<td width="500px">
						<input id="IS_SEC" name="IS_SEC" class="easyui-combobox" 
							data-options="editable:false" style="width: 480px;" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>账号状态：</label>
					</td>
					<td width="500px">
						<input id="USER_STATUS" name="USER_STATUS" class="easyui-combobox" 
							data-options="editable:false" style="width: 480px;" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>冻结原因：</label>
					</td>
					<td width="500px">
						<input id="FREEZE_REMARK" name="FREEZE_REMARK" maxlength="120" style="width: 480px;" />
					</td>
				</tr>
				<tr>
					<td></td>				
					<td>
						<div id="modalOperate">
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="save();">保 存</a>
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="reset();">重 置</a>
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">返 回</a>
						</div>
					</td>				
				</tr>
			</table>
		</form>
	</div>
  
</body>
</html>