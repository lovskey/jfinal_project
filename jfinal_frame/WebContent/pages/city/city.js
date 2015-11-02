
var provinceData;
var xLevel = 1; // 1-省份；2-城市；3-区县

$(function() {
	initGrid();
	initCombox(); // 初始化省市区
});

/**
 * 初始化datagrid
 */
function initGrid() {
	$('#datagrid').datagrid({
		url:$.navinfo.contextPath + "/CityAction.do?method=getProvinceList",
		width: 700,
		height: 400,
		striped: true,
		collapsible: true,
		remoteSort: false,
		fit: true,
		fitColumns: true,
		singleSelect: true,
		idField: 'KEYID',
		toolbar: '#toolbar',
		pageNumber: 1,
		pageSize: 10,
		pagination: false,
		rownumbers: true,
		showFooter: true,
		onLoadSuccess: function(data){
			provinceData = data.rows;
			$('#datagrid').datagrid('unselectAll');
			xLevel = 1; // 1-省份；2-城市；3-区县
		},
		onDblClickRow: function(rowIndex, rowData) {
		}
	});
}

/**
 * 初始化省市区
 */
function initCombox() {
	var province = $('#province').combobox({
		editable:false,
		valueField:'CODE',
		textField:'NAME',
		url:'CityAction.do?method=getProvinceList',
		onSelect:function(record){
			//刷新数据
			$('#city').combobox({
				disabled:false,
				url:'CityAction.do?method=getCityList&code='+record.CODE,
				valueField:'CODE',
				textField:'NAME'				
			});
		}
	});
}

/**
 * 查询
 */
function query() {
	var province = $('#province').combobox("getValue");
	var city = $('#city').combobox("getValue");
	if ("" == province) { // 加载省份列表
		$('#datagrid').datagrid({
			url:$.navinfo.contextPath + "/CityAction.do?method=getProvinceList",
			onLoadSuccess: function(data) {
				xLevel = 1; // 1-省份；2-城市；3-区县
			}		
		});
	} else {
		if ("" == city) { // 加载城市列表
			$('#datagrid').datagrid({
				url:$.navinfo.contextPath + "/CityAction.do?method=getCityList&code="+province,
				onLoadSuccess: function(data) {
					xLevel = 2; // 1-省份；2-城市；3-区县
				}
			});
		} else { // 加载行政区列表
			$('#datagrid').datagrid({
				url:$.navinfo.contextPath + "/CityAction.do?method=getDistrictList&code="+city,
				onLoadSuccess: function(data) {
					xLevel = 3; // 1-省份；2-城市；3-区县
				}
			});
		}
	}
}

/**
 * 新增行政区
 */
function createOperate() {
	var param = null;
	var pValue = $('#province').combobox("getValue");
	var pText = $('#province').combobox("getText");
	var cValue = $('#city').combobox("getValue");
	var cText = $('#city').combobox("getText");
	
	if (1 == xLevel) {
		$.messager.alert('提示信息', '请选择省份', 'error');
		return false;
	} else {
		param = "&xLevel="+xLevel+"&pValue="+pValue+"&pText="+pText+"&cValue="+cValue+"&cText="+cText;
	}
	
	var d = $.navinfo.dialog("新增行政区", $.navinfo.contextPath + "/CityAction.do?method=add"+param, 470, 300).dialog('open'); 
	d.dialog({
	    onClose:function(){
	    	query(); // 重新查询
	    }
	});
}

/**
 * 修改行政区
 */
function modifyOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if (row) {
		var param = "&xLevel="+xLevel+"&value="+row.CODE+"&text="+row.NAME+"&keyId="+row.KEYID;
		var d = $.navinfo.dialog("修改行政区", $.navinfo.contextPath + "/CityAction.do?method=edit"+param, 470, 300).dialog('open'); 
		d.dialog({
			onClose:function(){
				query(); // 重新查询
			}
		});
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 删除
 */
function deleteOperate() {
	var row = $('#datagrid').datagrid('getSelected');
	if(row) {
		$.messager.confirm('确认', '是否确认要删除？', function(r){
			if (r) {
				var url = null;
				if (1 == xLevel) {
					$.messager.alert('提示信息', '不能删除省份', 'error');
					return false;
				} else if (2 == xLevel) {
					url = $.navinfo.contextPath + "/CityAction.do?method=delCity";
				} else {
					url = $.navinfo.contextPath + "/CityAction.do?method=delDistrict";
				}
				
				// Ajax同步请求
				$.ajax({
					type: 'POST',
					async: false,
					url: url,
					data: "KEYID="+row.KEYID,
					dataType: 'json',
					success: function(data) {
						if (1 == data.c) {
							$.messager.alert('提示信息', '删除成功', 'info');
							query(); // 重新查询
						} else {
							$.messager.alert('提示信息', '删除失败', 'error');
						}
					}
				});
			}
		});
	} else {
		$.messager.alert('提示信息', '请选择一条记录', 'warning');
	}
}

/**
 * 清空查询内容
 */
function queryFormClear() {
	$('#queryForm').form('clear');
	xLevel = 1;
}
