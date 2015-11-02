<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>权限管理</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/base/authority/authority.js"></script>
<style type="text/css">
</style>
</head>
<body >

  <table border="0" style="border-collapse:collapse;width: 100%;height: 100%;">
    <tr valign="top">
      <td width="400px" style="padding-top: 20px;">
		 <table id="datagrid" title="系统角色列表">  
		    <thead>  
		        <tr>  
		        	<th data-options="field:'KEYID',width:50,checkbox:false,hidden:true"></th>
		            <th data-options="field:'ROLE_CODE',width:200">角色代码</th>
		            <th data-options="field:'ROLE_NAME',width:200">角色名称</th>
		        </tr>  
		    </thead>  
		</table>
      </td>
      <td style="padding-top: 20px;">
      	 <div class="easyui-panel" title="角色权限设置" style="width:100%;height:100%;"> 
			<div id="operate-action">
	            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="save();">保 存</a>
			</div>	
	       <ul id="myTree" style="padding: 30px 0 0 30px;"></ul>
        </div> 
      </td>
    </tr>
  </table>
  
</body>
</html>