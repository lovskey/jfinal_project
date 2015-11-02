<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>私厨首页显示设置</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/proxy/proxyIndex.js"></script>
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
						<label>私厨名称：</label>
					</td>
					<td width="200px">
						<input id="COOK_NAME" name="COOK_NAME" type="text" style="width: 180px;" disabled="disabled" />
					</td>
				</tr>				
				<tr>
					<td width="100px">
						<label>首页显示：</label>
					</td>
					<td width="200px">
						<input id="IS_INDEX" name="IS_INDEX" class="easyui-combobox" data-options="editable:false" style="width: 180px;" />
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