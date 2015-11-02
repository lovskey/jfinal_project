<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>用户管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/base/user/user.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'ROLE_CODE',width:50,hidden:true"></th>
	            <th data-options="field:'ACCOUNT',width:100,sortable:true">账号</th>
	            <th data-options="field:'NAME',width:100,sortable:true">姓名</th>
	            <th data-options="field:'PHONE',width:100,sortable:true">电话</th>
	            <th data-options="field:'ROLE_NAME',width:200,sortable:true">角色</th>
	        </tr>  
	    </thead>  
	</table>
	
	<div id="toolbar" style="height: auto;">
		<div id="operate-action">
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="createOperate();">新增</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="modifyOperate();">修改</a>
		</div>
	</div>
	
</body>
</html>