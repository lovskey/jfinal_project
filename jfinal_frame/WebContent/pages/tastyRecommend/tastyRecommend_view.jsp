<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/common/config.jsp"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>查看菜单信息</title>
<script type="text/javascript" src="<%=request.getContextPath()%>/common/js/district.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/pages/tastyRecommend/tastyRecommend_view.js"></script>
<script type="text/javascript">
    var keyId = '<%=request.getAttribute("KEYID")%>';
</script>
<style type="text/css">
#form td {
	padding-top: 5px;
}

#imgDiv {
    border: 1px solid #e4e4e4;
    margin-top: 5px;
    padding-bottom: 10px;
}

#imgDiv img {
	width: 180px;
	height: 180px;
	margin-left: 15px;
	margin-top: 10px;
	cursor: pointer;
}

#imgDiv img:hover {
    box-shadow:0 0 3px 3px rgba(53,152,219,0.6);
}
</style>
</head>
<body >

	<div align="left">
		<form id="form" method="post" style="padding-top: 30px;padding-left: 30px;">
			<div class="error-msg" style="width:593px;"></div>
			<input id="KEYID" name="KEYID" type="text" style="display: none;" />
			<table>
				<tr>
					<td width="100px">
						<label>标题：</label>
					</td>
					<td width="500px">
						<input id="REC_TITLE" name="REC_TITLE" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>详情：</label>
					</td>
					<td width="500px">
						<textarea id="REC_CONTENT" name="REC_CONTENT" type="text" 
							style="width: 480px;height: 80px;resize: none;" disabled="disabled"></textarea>
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>简介：</label>
					</td>
					<td width="500px">
						<input id="REC_CONTENT_SIMPLE" name="REC_CONTENT_SIMPLE" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>单价：</label>
					</td>
					<td width="500px">
						<input id="REC_PRICE" name="REC_PRICE" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>原价：</label>
					</td>
					<td width="500px">
						<input id="REC_PRICE_OLD" name="REC_PRICE_OLD" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>省份：</label>
					</td>
					<td width="500px">
						<input id="PROVINCE" name="PROVINCE" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>城市：</label>
					</td>
					<td width="500px">
						<input id="CITY" name="CITY" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>详细地址：</label>
					</td>
					<td width="500px">
						<input id="ADDRESS" name="ADDRESS" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>分类：</label>
					</td>
					<td width="500px">
						<input id="CATEGORY" name="CATEGORY" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>营业时间：</label>
					</td>
					<td width="500px">
						<input id="OPENTIME" name="OPENTIME" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td width="100px">
						<label>餐厅名称：</label>
					</td>
					<td width="500px">
						<input id="RESTAURANT" name="RESTAURANT" type="text" style="width: 480px;" disabled="true" />
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<div id="imgTitle">菜单图片加载中……</div>
						<div id="imgDiv">
						</div>
					</td>
				</tr>
				<tr>
					<td></td>				
					<td>
						<div id="modalOperate">
				            <a href="javascript:void(0);" class="easyui-linkbutton" onclick="returnBack();">返 回</a>
						</div>
					</td>				
				</tr>
			</table>
		</form>
	</div>
  
</body>
</html>