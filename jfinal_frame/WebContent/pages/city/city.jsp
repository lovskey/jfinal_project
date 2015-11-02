<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>城市管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/city/city.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'NAME',width:100,sortable:true,align:'center'">名称</th>
	            <th data-options="field:'CODE',width:100,sortable:true,align:'center'">代码</th>
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
	                       <label for="province">省份:</label>
	                   </td>
	                   <td>
	                       <input id="province" name="province" class="easyui-combobox" data-options="editable: false" style="width:200px"/>
	                   </td>
	                   <td style="padding-left: 20px;">
	                       <label for="city">城市:</label>
	                   </td>
	                   <td>
	                       <input id="city" name="city" class="easyui-combobox" data-options="editable: false" style="width:200px"/>
	                   </td>
	                   <td style="padding-left: 20px;" class="btn-div">
	                       <a href="javascript:void(0)" class="easyui-linkbutton" onclick="query();">查询</a>
	                       <a href="javascript:void(0)" class="easyui-linkbutton" onclick="queryFormClear();">清空</a>
	                   </td>
	                </tr>
	            </table>
	        </form>
	    </div>		
		<div id="operate-action">
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="createOperate();">新增</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="modifyOperate();">修改</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="deleteOperate();">删除</a>
		</div>
	</div>
	
</body>
</html>