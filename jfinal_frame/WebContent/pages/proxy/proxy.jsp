<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>小秘书管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/common/js/district.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/proxy/proxy.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'USER_KEYID',width:50,hidden:true"></th>
	            <th data-options="field:'COOK_NAME',width:80">私厨名称</th>
	            <th data-options="field:'IS_INDEX',width:50,align:'center',formatter:indexFormat">首页显示</th>
	            <th data-options="field:'COOK_ADDRESS',width:130,formatter:addressFormat">私厨地址</th>
	            <th data-options="field:'COOK_TEL',width:60">私厨电话</th>
	            <th data-options="field:'SORT_NUM',width:50">总权值</th>
	            <th data-options="field:'HAND_SORT_NUM',width:50">手动权值</th>
	            <th data-options="field:'ATTENTION_NUM',width:50">关注数量</th>
	            <th data-options="field:'APPRISE_NUM',width:50">评论数量</th>
	            <th data-options="field:'ORDER_NUM',width:50">已完成订单数</th>
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
	                       <label for="COOK_NAME">私厨名称:</label>
	                   </td>
	                   <td>
	                       <input id="COOK_NAME" name="COOK_NAME" maxlength="24" style="width:200px"/>
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
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="indexSet();">首页设置</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="wvSet();">权重设置</a>
		</div>
	</div>
	
</body>
</html>