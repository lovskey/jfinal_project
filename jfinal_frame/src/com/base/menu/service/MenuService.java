package com.base.menu.service;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

/** 
* @author 刘文多 
* @date 创建时间：2015年11月2日 下午4:07:29 
* @version
* @description
*/
public class MenuService  {
	
	public List<Record> getMenu(){
		List<Record> list=Db.find("select * from T_MGR_MENU");
		return list;
	}
}
