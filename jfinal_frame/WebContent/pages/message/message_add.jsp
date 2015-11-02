<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>新建消息</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/message/message_add.js"></script>
<style type="text/css">
#form td {
	padding-top: 5px;
}
label {
	font-weight: bold;
	color: #333;
}
#modalDiv {
	width: 100%;
	height: 100%;
	position:absolute;
  	left:0px;
  	top:0px;
  	z-index: 8000;
  	background-color: #fff;
  	opacity: 0.3;
  	display: none;
}
</style>
</head>
<body>

	<div id="modalDiv"></div>

	<div align="left" style="width: 500px;padding-top: 50px;padding-left: 60px;">
		<div style="text-align: center;padding-bottom: 20px;"><label id="sendMes" style="display: none;">消息发送中……</label></div>
		<div><label>消息内容</label></div>
		<div>
			<textarea id="CONTENT" name="CONTENT" type="text" 
				style="width: 495px;height: 100px;resize: none;" maxlength="75"></textarea>
		</div>
		<div style="padding-top: 20px;"><label>跳转URL</label></div>
		<div>
			<textarea id="MES_URL" name="MES_URL" type="text" 
				style="width: 495px;height: 100px;resize: none;" maxlength="200"></textarea>
		</div>
		<div style="padding-top: 20px;"><label>发送结果</label><span id="sendResult" style="padding-left: 10px; color: #c34c17;"></span></div>
		<div id="modalOperate">
            <a href="javascript:void(0);" class="easyui-linkbutton" id="saveA" onclick="save();">发送消息</a>
            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">取消</a>
		</div>
	</div>
  
</body>
</html>