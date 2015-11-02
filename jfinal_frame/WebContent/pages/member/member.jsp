<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>会员管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/member/member.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'USER_NICKNAME',width:100,sortable:true,align:'center'">昵称</th>
	            <th data-options="field:'USER_PHONE',width:100,sortable:true,align:'center'">电话</th>
	            <th data-options="field:'USER_STATUS',width:60,sortable:true,align:'center',formatter:statusFormat">账号状态</th>
	            <th data-options="field:'USER_SEX',width:50,sortable:true,align:'center',formatter:sexFormat">性别</th>
	            <th data-options="field:'IS_SEC',width:80,sortable:true,align:'center',formatter:isSecFormat">是否小秘书</th>
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
	                       <label for="nickName">昵称:</label>
	                   </td>
	                   <td>
	                       <input id="nickName" name="nickName" maxlength="16" style="width:200px"/>
	                   </td>
	                   <td style="padding-left: 20px;">
	                       <label for="phone">电话:</label>
	                   </td>
	                   <td>
	                       <input id="phone" name="phone" maxlength="11" style="width:200px"/>
	                   </td>
	                   <td>
	                       <label for="USER_STATUS">用户状态:</label>
	                   </td>
	                   <td>
	                       <input id="USER_STATUS" name="USER_STATUS" class="easyui-combobox" 
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
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="viewOperate();">查看</a>
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="modifyOperate();">修改</a>
		</div>
	</div>
	
</body>
</html>