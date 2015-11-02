<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看版本信息</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/version/version_view.js"></script>
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
						<label>APP类型：</label>
					</td>
					<td width="200px">
						<input id="APP_TYPE" name="APP_TYPE" class="easyui-combobox" data-options="required:true,editable:false" style="width: 180px;" disabled="disabled" />
					</td>
					<td width="100px">
					</td>
					<td width="200px">
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>外部版本号：</label>
					</td>
					<td width="200px">
						<input id="OUTER_VERSION" name="OUTER_VERSION" type="text" style="width: 180px;" 
							class="easyui-validatebox" data-options="required:true" validType="length[1,12]" disabled="disabled" />
					</td>
					<td width="100px">
						<label>内部版本号：</label>
					</td>
					<td width="200px">
						<input id="INNER_VERSION" name="INNER_VERSION" class="easyui-numberbox" style="width: 180px;" 
							data-options="min:1,precision:0,max:1000,required:true" disabled="disabled" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>下载地址URL：</label>
					</td>
					<td width="500px" colspan="3">
						<textarea id="APP_URL" name="APP_URL" type="text" style="width: 488px;height: 80px;resize: none;" 
							maxlength="200" disabled="disabled"></textarea>
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>版本描述：</label>
					</td>
					<td width="500px" colspan="3">
						<textarea id="DESCRIPTION" name="DESCRIPTION" type="text" style="width: 488px;height: 120px;resize: none;" 
							maxlength="400" disabled="disabled"></textarea>
					</td>
					</td>
				</tr>
				<tr>
					<td></td>				
					<td colspan="3">
						<div id="modalOperate">
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">返 回</a>
						</div>
					</td>				
				</tr>
			</table>
		</form>
	</div>
  
</body>
</html>