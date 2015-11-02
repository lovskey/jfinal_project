/*
 * 
 * @autho 黄朝斌
 * Copyright © 2014 BSD & MIT license
 */

var GW_CUR_PAGE = 1; // 当前页数
var GW_TOTAL_PAGE = 0; // 总页数

jQuery.gwPage = {
		create:function(pageNum, pageTotal, callback, jqueryDom) {
			GW_CUR_PAGE = pageNum;
			GW_TOTAL_PAGE = pageTotal;
			var pageHtml = "<div class='gw-page-info'>页码："+GW_CUR_PAGE+" / "+GW_TOTAL_PAGE+"</div>";
			
			if (0 == GW_TOTAL_PAGE || 1 == GW_TOTAL_PAGE) { // 总页数：0或1
				pageHtml += "";
			} else if (5 >= GW_TOTAL_PAGE) { // 总页数：小于或等于5
				if (1 == GW_CUR_PAGE) { // 首页
					pageHtml += "<button class='gw-page gw-page-disabled' data-page='first'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-disabled' data-page='pre'><</button>";
					pageHtml += "<button class='gw-page gw-page-active' data-page='1'>1</button>";
					for (var i = 1; i < GW_TOTAL_PAGE; i++) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+(i+1)+"'>"+(i+1)+"</button>";
					}
					pageHtml += "<button class='gw-page gw-page-link' data-page='next' title='下一页'>></button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='last' title='尾页'>尾页</button>";
				} else if (GW_TOTAL_PAGE == GW_CUR_PAGE) { // 尾页
					pageHtml += "<button class='gw-page gw-page-link' data-page='first' title='首页'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='pre' title='上一页'><</button>";
					for (var i = 1; i < GW_TOTAL_PAGE; i++) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+i+"'>"+i+"</button>";
					}
					pageHtml += "<button class='gw-page gw-page-active' data-page='"+GW_TOTAL_PAGE+"'>"+GW_TOTAL_PAGE+"</button>";
					pageHtml += "<button class='gw-page gw-page-disabled' data-page='next'>></button>";
					pageHtml += "<button class='gw-page gw-page-disabled' data-page='last'>尾页</button>";
				} else { // 中间页
					pageHtml += "<button class='gw-page gw-page-link' data-page='first' title='首页'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='pre' title='上一页'><</button>";
					for (var i = 1; i < GW_CUR_PAGE; i++) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+i+"'>"+i+"</button>";
					}
					pageHtml += "<button class='gw-page gw-page-active' data-page='"+GW_CUR_PAGE+"'>"+GW_CUR_PAGE+"</button>";
					for (var i = GW_CUR_PAGE; i < GW_TOTAL_PAGE; i++) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+(i+1)+"'>"+(i+1)+"</button>";
					}
					pageHtml += "<button class='gw-page gw-page-link' data-page='next' title='下一页'>></button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='last' title='尾页'>尾页</button>";
				}
			} else { // 总页数：大于5
				if (1 == GW_CUR_PAGE) { // 首页
					pageHtml += "<button class='gw-page gw-page-disabled' data-page='first'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-disabled' data-page='pre'><</button>";
					pageHtml += "<button class='gw-page gw-page-active' data-page='1'>1</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='2'>2</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='3'>3</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='4'>4</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='5'>5</button>";
					pageHtml += "<span class='gw-page-dot'>...</span>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='next' title='下一页'>></button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='last' title='尾页'>尾页</button>";
				} else if (GW_TOTAL_PAGE == GW_CUR_PAGE) { // 尾页
					pageHtml += "<button class='gw-page gw-page-link' data-page='first' title='首页'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='pre' title='上一页'><</button>";
					pageHtml += "<span class='gw-page-dot'>...</span>";
					for (var i = 4; i > 0; i--) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+(GW_TOTAL_PAGE-i)+"'>"+(GW_TOTAL_PAGE-i)+"</button>";
					}
					pageHtml += "<button class='gw-page gw-page-active' data-page='"+GW_TOTAL_PAGE+"'>"+GW_TOTAL_PAGE+"</button>";
				} else if (3 >= GW_CUR_PAGE) { // 前3页
					pageHtml += "<button class='gw-page gw-page-link' data-page='first' title='首页'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='pre' title='上一页'><</button>";
					for (var i = 1; i < GW_CUR_PAGE; i++) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+i+"'>"+i+"</button>";
					}
					pageHtml += "<button class='gw-page gw-page-active' data-page='"+GW_CUR_PAGE+"'>"+GW_CUR_PAGE+"</button>";
					for (var i = (GW_CUR_PAGE+1); i <= 5; i++) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+i+"'>"+i+"</button>";
					}
					pageHtml += "<span class='gw-page-dot'>...</span>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='next' title='下一页'>></button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='last' title='尾页'>尾页</button>";
				} else if ((GW_TOTAL_PAGE - GW_CUR_PAGE) < 3) { // 后3页
					pageHtml += "<button class='gw-page gw-page-link' data-page='first' title='首页'>首页</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='pre' title='上一页'><</button>";
					pageHtml += "<span class='gw-page-dot'>...</span>";
					var tempHtm = "";
					var count = 1;
					tempHtm += "<button class='gw-page gw-page-active' data-page='"+GW_CUR_PAGE+"'>"+GW_CUR_PAGE+"</button>";
					for (var i = (GW_CUR_PAGE+1); i <= GW_TOTAL_PAGE; i++) {
						tempHtm += "<button class='gw-page gw-page-link' data-page='"+i+"'>"+i+"</button>";
						count += 1;
					}
					for (var i = (5-count); i > 0; i--) {
						pageHtml += "<button class='gw-page gw-page-link' data-page='"+(GW_CUR_PAGE-i)+"'>"+(GW_CUR_PAGE-i)+"</button>";
					}
					pageHtml += tempHtm;
					pageHtml += "<button class='gw-page gw-page-link' data-page='next' title='下一页'>></button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='last' title='尾页'>尾页</button>";
				} else { // 其他页
					pageHtml += "<button class='gw-page gw-page-link' data-page='first' title='首页'><<</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='pre' title='上一页'><</button>";
					pageHtml += "<span class='gw-page-dot'>...</span>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='"+(GW_CUR_PAGE-2)+"'>"+(GW_CUR_PAGE-2)+"</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='"+(GW_CUR_PAGE-1)+"'>"+(GW_CUR_PAGE-1)+"</button>";
					pageHtml += "<button class='gw-page gw-page-active' data-page='"+GW_CUR_PAGE+"'>"+GW_CUR_PAGE+"</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='"+(GW_CUR_PAGE+1)+"'>"+(GW_CUR_PAGE+1)+"</button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='"+(GW_CUR_PAGE+2)+"'>"+(GW_CUR_PAGE+2)+"</button>";
					pageHtml += "<span class='gw-page-dot'>...</span>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='next' title='下一页'>></button>";
					pageHtml += "<button class='gw-page gw-page-link' data-page='last' title='尾页'>尾页</button>";
				}
			}
			
			if (!jqueryDom) {
				$(".gw-page-div").html(pageHtml);
			} else {
				jqueryDom.html(pageHtml);
			}
			$(".gw-page-link").mouseover(function() {
				$(this).css("color", "#fff");
				$(this).css("background-color", "#a91717");
				$(this).css("border", "1px solid #a91717");
			});
			$(".gw-page-link").mouseout(function() {
				$(this).css("color", "#000");
				$(this).css("background-color", "#fff");
				$(this).css("border", "1px solid #d3d3d3");
			});
			$(".gw-page-link").click(function() {
				$.gwPage.gotoPage(this, pageNum, pageTotal, callback);
			});
		},
		gotoPage:function(dom, pageNum, pageTotal, callback) { // 页码跳转
			var dataPage = $(dom).attr("data-page");
			var page;
			if ("first" == dataPage) { // 首页
				page = 1;
			} else if ("pre" == dataPage) { // 上一页
				page = pageNum - 1;
			} else if ("next" == dataPage) { // 下一页
				page = pageNum + 1;
			} else if ("last" == dataPage) { // 尾页
				page = pageTotal;
			} else { // 其他
				page = parseInt(dataPage);
			}
			callback(page, pageTotal);
		}
};
