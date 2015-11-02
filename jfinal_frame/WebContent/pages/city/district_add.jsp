<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增区县</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/city/district_add.js"></script>
<style type="text/css">
</style>
<script type="text/javascript">
    var pValue = '<%=request.getAttribute("pValue")%>';
    var pText = '<%=request.getAttribute("pText")%>';
    var cValue = '<%=request.getAttribute("cValue")%>';
    var cText = '<%=request.getAttribute("cText")%>';
</script>
</head>
<body >

	<div align="left">
		<form id="form" method="post" style="padding-top: 30px;padding-left: 80px;">
			<table>
				<tr>
					<td>
						<label>城市代码：</label>
					</td>
					<td>
						<input id="cValue" name="cValue" type="text" style="width:200px" disabled="disabled" />
					</td>
				</tr>
				<tr>
					<td>
						<label>城市名称：</label>
					</td>
					<td>
						<input id="cText" name="cText" type="text" style="width:200px" disabled="disabled" />
					</td>
				</tr>
				<tr>
					<td>
						<label>区县代码：</label>
					</td>
					<td>
						<input id="dValue" name="dValue" type="text" style="width: 200px" maxlength="8"/>
					</td>
				</tr>
				<tr>
					<td>
						<label>区县名称：</label>
					</td>
					<td>
						<input id="dText" name="dText" type="text" style="width: 200px" maxlength="16"/>
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						<div id="modalOperate" style="margin: 30px 0 0 0;text-align: center;">
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