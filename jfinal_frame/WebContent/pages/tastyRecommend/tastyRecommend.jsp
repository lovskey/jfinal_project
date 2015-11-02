<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>推荐菜单管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/common/js/district.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/tastyRecommend/tastyRecommend.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'COOK_ID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'USER_ID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'CATEGORY',width:80,sortable:true,formatter:categoryFormat">分类</th>
	            <th data-options="field:'RESTAURANT',width:80,sortable:true">餐厅名称</th>
	            <th data-options="field:'REC_TITLE',width:100,sortable:true">标题</th>
	            <th data-options="field:'OPENTIME',width:80,sortable:true">营业时间</th>
	            <th data-options="field:'REC_PRICE',width:50,sortable:true">单价</th>
	            <th data-options="field:'REC_PRICE_OLD',width:50,sortable:true">原价</th>
	            <th data-options="field:'PROVINCE',width:60,sortable:true,formatter:provinceFormat">省份</th>
	            <th data-options="field:'CITY',width:60,sortable:true,formatter:cityFormat">城市</th>
	            <th data-options="field:'ADDRESS',width:100,sortable:true">地址</th>
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
	                       <label for="REC_TITLE">标题:</label>
	                   </td>
	                   <td>
	                       <input id="REC_TITLE" name="REC_TITLE" maxlength="20" style="width:200px"/>
	                   </td>
	                   <td>
	                       <label for="CATEGORY">分类:</label>
	                   </td>
	                   <td>
	                       <input id="CATEGORY" name="CATEGORY" class="easyui-combobox" data-options="editable:false" style="width: 100px;" />
	                   </td>
	                   <td>
	                       <label for="PROVINCE">省份:</label>
	                   </td>
	                   <td>
	                       <input id="PROVINCE" name="PROVINCE" class="easyui-combobox" data-options="editable:false" style="width: 100px;" />
	                   </td>
	                   <td style="padding-left: 10px;">
	                       <label for="CITY">城市:</label>
	                   </td>
	                   <td>
	                       <input id="CITY" name="CITY" class="easyui-combobox" data-options="editable:false" style="width: 100px;" />
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