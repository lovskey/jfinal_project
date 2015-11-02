<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>菜单管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/tasty/tasty.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'USER_ID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'COOK_ID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'TASTY_TITLE',width:100,sortable:true">标题</th>
	            <th data-options="field:'TASTY_PRICE_BEFORE',width:100,sortable:true">原价</th>
	            <th data-options="field:'TASTY_PRICE_AFTER',width:100,sortable:true">优惠价</th>
	            <th data-options="field:'ORDER_TYPE',width:100,sortable:true">预定方式</th>
	            <th data-options="field:'ORDER_TIME',width:100,sortable:true">供应时段</th>
	            <th data-options="field:'IS_SALE',width:100,sortable:true">是否上架</th>
	            <th data-options="field:'CATEGORY_ID',width:100,sortable:true">分类id</th>
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
	                       <label for="phone">电话:</label>
	                   </td>
	                   <td>
	                       <input id="phone" name="phone" maxlength="11" style="width:200px"/>
	                   </td>
	                   <td>
	                       <label for="CATEGORY">分类:</label>
	                   </td>
	                   <td>
	                       <input id="CATEGORY" name="CATEGORY" class="easyui-combobox" 
	                       	data-options="editable:false" style="width: 80px;" />
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
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="viewOperate();">详情</a>
		</div>
	</div>
	
</body>
</html>