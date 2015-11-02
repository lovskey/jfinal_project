

$(document).ready(function() {

});


/**
 * 登录
 */
function login(){
	if (!loginCheck()) {
		return false;
	}
	
	var data = {'account': $("#account").val(), 'password': $("#password").val()};
	
	$.ajax({
		async: false,
		type: "GET",
		url: $.navinfo.contextPath + "/LoginAction.do?method=userLogin",
		data: {"jsonStr": JSON2.stringify(data)},
		dataType: 'json',
		success: function(data) {
			if (0 == data.c) {
				window.location = $.navinfo.contextPath + "/LoginAction.do?method=home";
			} else {
				$("#errorMsg").html(data.m);
			}
		}, 
		error: function() {
		}
	});
}

/**
 * 登录校验
 */
function loginCheck() {
	var account = $("#account").val();
	var password = $("#password").val();
	if ("" == account) {
		$("#errorMsg").html("请输入账号");
		return false;
	} else if ("" == password) {
		$("#errorMsg").html("请输入密码");
		return false;
	} else {
		$("#errorMsg").html("");
		return true;
	}
}
