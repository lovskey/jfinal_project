<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>图片管理</title>
<link rel="stylesheet" type="text/css" href="<%=contextPath%>/plugins/gw-page/gw-page.css">
<script type="text/javascript" src="<%=contextPath%>/plugins/gw-page/gw-page.js"></script>
<script type="text/javascript" src="<%=contextPath%>/pages/head/picture.js"></script>
<style type="text/css">
#imgDiv {
	padding: 10px 0 0 40px;
}

#imgDiv td {
	padding: 10px;
}

#imgDiv img {
	width: 140px;
	height: 140px;
	cursor: pointer;
	display: none;
}

#imgDiv img:hover {
    box-shadow:0 0 3px 3px rgba(53,152,219,0.6);
}
</style>
</head>
<body>
	
	<div id="toolbar" style="height: auto;">
	    <!-- 查询 -->
	    <div>
	        <form id="queryForm" method="post" novalidate>
	            <table style="border: none;border-collapse: collapse;">
	                <tr>
	                   <td>
	                       <label for="USER_PHONE">账号:</label>
	                   </td>
	                   <td>
	                       <input id="USER_PHONE" name="USER_PHONE" class="easyui-validatebox" 
	                       	data-options="validType:'length[0,11]'" style="width:150px"/>
	                   </td>
	                   <td>
	                       <label for="USER_NICKNAME">昵称:</label>
	                   </td>
	                   <td>
	                       <input id="USER_NICKNAME" name="USER_NICKNAME" class="easyui-validatebox" 
	                       	data-options="validType:'length[0,20]'" style="width:150px"/>
	                   </td>
	                   <td>
	                       <label for="USER_IMAGE_STATUS">头像状态:</label>
	                   </td>
	                   <td>
	                       <input id="USER_IMAGE_STATUS" name="USER_IMAGE_STATUS" class="easyui-combobox" 
	                       	data-options="editable:false" style="width: 100px;" />
	                   </td>
	                   <td style="padding-left: 20px;" class="btn-div">
	                       <a href="javascript:void(0)" class="easyui-linkbutton" onclick="query(1);">查询</a>
	                   </td>
	                </tr>
	            </table>
	        </form>
	    </div>		
		<div class="gw-page-div" align="left">
		</div>
	</div>
	
	<div id="imgDiv">
		<table>
			<tr>
				<td><img id="img0" src="" title="单击查看详情" /></td>
				<td><img id="img1" src="" title="单击查看详情" /></td>
				<td><img id="img2" src="" title="单击查看详情" /></td>
				<td><img id="img3" src="" title="单击查看详情" /></td>
				<td><img id="img4" src="" title="单击查看详情" /></td>
			</tr>
			<tr>
				<td><img id="img5" src="" title="单击查看详情" /></td>
				<td><img id="img6" src="" title="单击查看详情" /></td>
				<td><img id="img7" src="" title="单击查看详情" /></td>
				<td><img id="img8" src="" title="单击查看详情" /></td>
				<td><img id="img9" src="" title="单击查看详情" /></td>
			</tr>
		</table>
	</div>
	
</body>
</html>