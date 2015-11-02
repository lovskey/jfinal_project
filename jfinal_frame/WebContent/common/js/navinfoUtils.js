if(!$.navinfo){
	$.navinfo = {};
}

/**
 * 检测浏览器类型及版本
 */
$.navinfo.detectBrowserInfo = function() {
	var userAgent = window.navigator.userAgent.toLowerCase(); 
	var browser = { 
			version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1], 
			safari: /webkit/.test(userAgent), 
			opera: /opera/.test(userAgent),
			chrome:/chrome/.test(userAgent),
			msie: /msie/.test(userAgent) && !/opera/.test(userAgent), 
			mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test(userAgent)
	};
	return browser;
};

/**
 * 获取窗口宽度
 */
$.navinfo.getWinWidth = function() {
	var winWidth = 0;
	// 获取窗口宽度
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth)) {
		winWidth = document.body.clientWidth;
	}
	// 通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement && document.documentElement.clientWidth){
        winWidth = document.documentElement.clientWidth;
	}
	return winWidth;
};

/**
 * 获取窗口高度
 */
$.navinfo.getWinHeight = function() {
	var winHeight = 0;
	// 获取窗口高度
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight)) {
		winHeight = document.body.clientHeight;
	}
	// 通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement && document.documentElement.clientHeight){
		winHeight = document.documentElement.clientHeight;
	}
	return winHeight;
};

/**
 * DIV左右抖动效果
 */
$.navinfo.divShake = function(jqueryDom) {
	jqueryDom.stop()
	.animate({ marginLeft: "-3px" }, 200).animate({ marginLeft: "3px" }, 200)
    .animate({ marginLeft: "-3px" }, 200).animate({ marginLeft: "3px" }, 200)
    .animate({ marginLeft: "0px" }, 200);
};

/*
 * 去除字符串前后空格
 */
$.navinfo.trimLR = function(str) {
	if (str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	} else {
		return str;
	}
};

/**
 * 将param参数形式的字符串，转换为json对象
 */
$.navinfo.param2Json = function(string, overwrite){
	string = string.replace(/\+/g, "%20");//解决JQuery的serialize()方法将空格转成+的问题
	var obj = {}, pairs = string.split('&'), d = decodeURIComponent, name, value;
	$.each(pairs, function(i, pair) {
		pair = pair.split('=');
		name = d(pair[0]);
		value = d(pair[1]);
		obj[name] = overwrite || !obj[name] ? value : [].concat(obj[name]).concat(value);
	});
	return obj;
};

/**
 * 根据codekind获取代码表
 * @param codekinds 代码表类型，如果是多个代码表类型，则以逗号分割
 */
$.navinfo.getCodelist = function(codekinds){
	var codelist=null;
	$.ajax({
	   type: "POST",
	   url: $.navinfo.contextPath + "/CodelistAction.do?method=getCodelist",
	   data: "codekind=" + codekinds,
	   async : false,
	   dataType : "json",
	   success: function(msg){
		   codelist = msg;
	   }
	});
	return codelist;
};

/**
 * 代码表转译
 * @param codelist  代码表数组对象，或代码表类型
 * @param value  代码值
 */
$.navinfo.transcode = function(codelist, value){
	if(codelist instanceof Object){
		for (var i = 0; i < codelist.length; i++) {
	    	var row = codelist[i];
	    	if(row["CODEVALUE"]==value){
	    		return row["CODENAME"];
	    	}
		}
	}else{
		var c = $.navinfo.getCodelist(codelist);
		for (var i = 0; i < c.length; i++) {
	    	var row = c[i];
	    	if(row["CODEVALUE"]==value){
	    		return row["CODENAME"];
	    	}
		}
	}
	return value;
};

/**
 * 判断对象是否为空
 */
$.navinfo.isEmpty = function(data){
	if(!data) return true;
	if(data instanceof Array){
		return data.length==0;
	}
	if(typeof(data) =="object"){
		for(var t in data){
			return false;
		}
		return true;
	}
	return false;
};

/**
 * 判断对象不为空
 */
$.navinfo.isNotEmpty = function(data){
	return !$.navinfo.isEmpty(data);
};

/**
 * 创建弹出框
 */
$.navinfo.dialog = function(name, url, width, height){
	var content ="<iframe scrolling='auto' frameborder='0' src='"+url+"' style='width:100%; height:98%'></iframe>";
	var d = window.top.$("#modalDialog").dialog({   
	    title: name,   
	    'width': width,   
	    'height': height,   
	    content: content,
	    collapsible: false,
	    resizable: false,
	    maximizable: true,
	    modal: true,
	    closed: false,
	    cache: false
	}); 
	window.top.window["modalDialog"] = d;
	return d;
};

/**
 * 获得已创建的弹出框
 */
$.navinfo.getDialog = function(){
	return window.top.window["modalDialog"];
};

/**
 * 删除左右两端的空格
 * @param str
 * @returns str
 */
$.navinfo.trimAll = function(str){
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
};

/*
 * 去除字符串前后空格
 */
$.navinfo.trimLR = function(str) {
	if (str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	} else {
		return str;
	}
};

/**
 * 删除左边的空格
 * @param str
 * @returns str
 */
$.navinfo.trimLeft = function(str){
		return str.replace(/(^\s*)/g,""); 
};

/**
 * 删除右边的空格
 * @param str
 * @returns str
 */
$.navinfo.trimRight = function (str){
		return str.replace(/(\s*$)/g,""); 
};

/**
 * 将未定义对象,null对象，‘null’字符串转换为空字符串
 */
$.navinfo.trim2Empty = function(data) {
	if (!data || null == data || "null" == data || "undefined" == data || undefined == data) {
		return "";
	} else {
		return data;
	}
};

/**
 * hack文件上传按钮
 */
$.navinfo.hackFileBtn = function() {
	var browser = $.navinfo.detectBrowserInfo();
	if (browser.msie) {
		if (8 == parseInt(browser.version)) {
			$(".upload-btn").css({"width":"75px","padding-left":"10px", "position":"relative", "top":"2px","margin-top":"9px"});
		} else if (9 == parseInt(browser.version)) {
			$(".upload-btn").css({"width":"73px","padding-left":"10px", "position":"relative", "top":"2px","margin-top":"12px"});
		} else {
			$(".upload-btn").css({"width":"69px","padding-left":"15px", "position":"relative", "top":"2px","margin-top":"12px"});
		}
	} else if(browser.chrome){
		$(".upload-btn").css({"width":"75px","position":"relative","padding-top":"14px"});
	}else {
		$(".upload-btn").css({"width":"68px","padding-left":"5px","padding-top":"13px"});
	}
};

/**
 * 过滤特殊符号
 */
$.navinfo.checkSpecialSign = function(str){
	var re = /[\$\^&\*]+/g;
	if (re.test(str)) {
		return false;
	}else {
		return true;
	}
};
