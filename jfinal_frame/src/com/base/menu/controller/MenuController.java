package com.base.menu.controller;

import java.util.List;

import com.base.menu.service.MenuService;
import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/** 
* @author 刘文多 
* @date 创建时间：2015年10月31日 下午1:58:00 
* @version
* @description
*/
public class MenuController extends Controller {
	
	private MenuService menuService = new MenuService();
	public void index(){
		renderText("success");
	}
	

	public void getList(){
		List<Record> list=menuService.getMenu();
		JSONObject json=null;
		JSONArray array=new JSONArray();
		for (Record record : list) {
			json=new JSONObject();
			json.put("node_name", record.getStr("NODE_NAME"));
			array.add(json);
		}
		renderJson(array.toString());
	}
	public void getListPage(){
		render("/pages/home/home.jsp");
	}
}
