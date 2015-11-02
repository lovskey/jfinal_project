package com.frame.routes;

import com.base.menu.controller.MenuController;
import com.jfinal.config.Routes;

/** 
* @author 刘文多 
* @date 创建时间：2015年11月2日 下午3:43:04 
* @version
* @description
*/
public class FrameRoute extends Routes {

	@Override
	public void config() {
		add("/index",MenuController.class);
	}

}
