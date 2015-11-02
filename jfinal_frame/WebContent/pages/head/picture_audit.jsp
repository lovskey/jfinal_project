<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>头像审核</title>
<script type="text/javascript" src="<%=contextPath%>/pages/head/picture_audit.js"></script>
<style type="text/css">
#form td {
	padding-top: 12px;
}
#form label {
	padding-left: 10px;
}
#auditDiv {
    border-bottom: 1px solid #ccc;
    padding-left: 70px;
    margin-bottom: 10px;
}
#auditImg {
	display: none;
}
#imgInfo {
    background: rgba(0, 0, 0, 0.5) none repeat scroll 0 0;
    color: #fff;
    margin: 0 auto;
    position: absolute;
    width: 100%;
	display: none;
}
</style>
<script type="text/javascript">
    var keyId = '<%=request.getAttribute("KEYID")%>';
</script>
</head>
<body>
	
	<div id="auditDiv">
		<form id="form">
			<input id="KEYID" name="KEYID" type="text" style="display: none;" />
            <table style="border: none;border-collapse: collapse;">
                <tr>
                   <td>
                       <label for="USER_PHONE">用户账号:</label>
                   </td>
                   <td>
                       <input id="USER_PHONE" name="USER_PHONE" style="width: 120px;" disabled="disabled" />
                   </td>                
                   <td>
                       <label for="USER_NICKNAME">用户昵称:</label>
                   </td>
                   <td>
                       <input id="USER_NICKNAME" name="USER_NICKNAME" style="width: 120px;" disabled="disabled" />
                   </td>                
                   <td>
                       <label for="CATEGORY">头像状态:</label>
                   </td>
                   <td>
                       <input id="USER_IMAGE_STATUS" name="USER_IMAGE_STATUS" class="easyui-combobox" 
                       	data-options="editable:false" style="width: 80px;" />
                   </td>
                   <td style="padding-left: 20px;" class="btn-div">
                       <a href="javascript:void(0)" class="easyui-linkbutton" onclick="audit();">确定</a>
                   </td>
                </tr>
            </table>		
		</form>
	</div>
	<div id="imgDiv" align="center">
		<div id="imgInfo" align="center">
			<span>图片宽度：</span><span id="imgWidth"></span>
			<span>图片高度：</span><span id="imgHeight"></span>
		</div>
		<img id="auditImg" src="" />
	</div>
	
</body>
</html>