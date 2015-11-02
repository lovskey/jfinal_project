<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>重新推送</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/message/message_rePush.js"></script>
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
			<input id="KEYID" name="KEYID" type="text" style="display: none;" />
			<table>
				<tr>
					<td width="100px">
						<label>系统类型：</label>
					</td>
					<td width="200px">
						<input id="APP_TYPE" name="APP_TYPE" class="easyui-combobox" style="width: 180px;" disabled="disabled" />
					</td>
					<td width="100px" style="display: none;">
						<label>消息类型：</label>
					</td>
					<td width="200px" style="display: none;">
						<input id="MESSAGE_TYPE" name="MESSAGE_TYPE" class="easyui-combobox" data-options="editable:false" style="width: 180px;" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>消息标题：</label>
					</td>
					<td width="500px" colspan="3">
						<input id="TITLE" name="TITLE" type="text" style="width: 488px;" disabled="disabled" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>消息内容：</label>
					</td>
					<td width="500px" colspan="3">
						<textarea id="CONTENT" name="CONTENT" type="text" 
							style="width: 488px;height: 80px;resize: none;" disabled="disabled"></textarea>
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>失败原因：</label>
					</td>
					<td width="500px" colspan="3" id="resultTd">
					</td>
				</tr>				
				<tr>
					<td></td>				
					<td colspan="3">
						<div id="modalOperate">
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="rePush();">重新推送</a>
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">取消</a>
						</div>
					</td>				
				</tr>
			</table>
		</form>
	</div>
  
</body>
</html>