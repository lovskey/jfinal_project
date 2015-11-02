<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新增城市</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/city/city_edit.js"></script>
<style type="text/css">
</style>
<script type="text/javascript">
    var xLevel = '<%=request.getAttribute("xLevel")%>';
    var value = '<%=request.getAttribute("value")%>';
    var text = '<%=request.getAttribute("text")%>';
    var keyId = '<%=request.getAttribute("keyId")%>';
</script>
</head>
<body >

	<div align="left">
		<form id="form" method="post" style="padding-top: 30px;padding-left: 80px;">
			<table>
				<tr>
					<td>
						<label>行政区代码：</label>
					</td>
					<td>
						<input id="value" name="value" type="text" style="width:200px" />
					</td>
				</tr>
				<tr>
					<td>
						<label>行政区名称：</label>
					</td>
					<td>
						<input id="text" name="text" type="text" style="width:200px" />
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