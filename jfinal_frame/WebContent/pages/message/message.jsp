<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<title>系统消息</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/message/message.js"></script>
<style type="text/css">
</style>
</head>
<body>
	
    <table id="datagrid">  
	    <thead>  
	        <tr>  
	            <th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
	            <th data-options="field:'SEND_TIME',width:140,sortable:true">发送时间</th>
	            <th data-options="field:'SEND_RESULT',width:100,sortable:true,align:'center',formatter:resultFormat">成功数/总数</th>
	            <th data-options="field:'CONTENT',width:400,sortable:true">消息内容</th>
	            <th data-options="field:'MES_URL',width:200,sortable:true">跳转URL</th>
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
	                       <label for="SEND_TIME_START">起始时间:</label>
	                   </td>
	                   <td>
	                       <input id="SEND_TIME_START" name="SEND_TIME_START" class="easyui-datetimebox" data-options="editable:false" style="width: 180px;" />
	                   </td>
	                   <td style="padding-left: 10px;">
	                       <label for="SEND_TIME_END">截止时间:</label>
	                   </td>
	                   <td>
	                       <input id="SEND_TIME_END" name="SEND_TIME_END" class="easyui-datetimebox" data-options="editable:false" style="width: 180px;" />
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
            <a href="javascript:void(0)" class="easyui-linkbutton" onclick="createOperate();">创建消息</a>
		</div>
	</div>
	
</body>
</html>