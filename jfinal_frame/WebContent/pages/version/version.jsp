<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>App版本管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/version/version.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'APP_TYPE',width:100,formatter:appFormat">APP类型</th>
	            <th data-options="field:'OUTER_VERSION',width:100">外部版本号</th>
	            <th data-options="field:'INNER_VERSION',width:100">内部版本号</th>
	            <th data-options="field:'APP_URL',width:250">下载地址URL</th>
	        </tr>  
	    </thead>  
	</table>
	
	<div id="toolbar" style="height: auto;">
	    <!-- 查询 -->
	    <div>
	        <form id="queryForm" method="post" novalidate>
	            <table style="border: none;border-collapse: collapse;">
	                <tr>
	                   <td>
	                       <label for="APP_TYPE">APP类型:</label>
	                   </td>
	                   <td>
	                       <input id="APP_TYPE" name="APP_TYPE" class="easyui-combobox" data-options="editable:false" style="width: 150px;" />
	                   </td>
	                   <td style="padding-left: 20px;" class="btn-div">
	                       <a href="javascript:void(0)" class="easyui-linkbutton" onclick="query();">查询</a>
	                   </td>
	                </tr>
	            </table>
	        </form>
	    </div>		
		<div id="operate-action">
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="viewOperate();">查看</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="createOperate();">新增</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="modifyOperate();">修改</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="delOperate();">删除</a>
		</div>
	</div>
	
</body>
</html>