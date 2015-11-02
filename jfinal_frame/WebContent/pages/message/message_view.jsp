<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看系统消息</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/message/message_view.js"></script>
<script type="text/javascript">
    var keyId = '<%=request.getAttribute("KEYID")%>';
</script>
<style type="text/css">
#form td {
	padding-top: 5px;
}
label {
	font-weight: bold;
	color: #333;
}
</style>
</head>
<body >

	<div align="left" style="width: 500px;padding-top: 50px;padding-left: 60px;">
		<div><label>消息内容</label></div>
		<div>
			<textarea id="CONTENT" name="CONTENT" type="text" 
				style="width: 495px;height: 100px;resize: none;" maxlength="75" disabled="disabled"></textarea>
		</div>
		<div style="padding-top: 20px;"><label>跳转URL</label></div>
		<div>
			<textarea id="MES_URL" name="MES_URL" type="text" 
				style="width: 495px;height: 100px;resize: none;" maxlength="200" disabled="disabled"></textarea>
		</div>
		<div id="modalOperate">
            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">取消</a>
		</div>
	</div>
  
</body>
</html>