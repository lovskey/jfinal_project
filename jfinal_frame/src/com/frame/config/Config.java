package com.frame.config;

import com.frame.routes.FrameRoute;
/** 
* @author 刘文多 
* @date 创建时间：2015年10月31日 下午1:56:15 
* @version
* @description
*/
import com.jfinal.config.*;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.render.ViewType;

public class Config extends JFinalConfig {
	
	public void configConstant(Constants me) {
		me.setErrorView(401, "/error/401.html");
		me.setErrorView(403, "/error/403.html");
		me.setError404View("/error/404.html");
		me.setError500View("/error/500.html");
		PropKit.use("db_config.txt"); // 加载少量必要配置，随后可用PropKit.get(...)获取值
		me.setDevMode(PropKit.getBoolean("devMode", false));
		me.setViewType(ViewType.JSP); // 设置视图类型为Jsp，否则默认为FreeMarker
	}

	public void configRoute(Routes me) {
		me.add(new FrameRoute());
	}

	public void configPlugin(Plugins me) {
		// 配置C3p0数据库连接池插件
		String url = PropKit.get("jdbcUrl");
		String user = PropKit.get("user").trim();
		String password = PropKit.get("password").trim();
		C3p0Plugin c3p0Plugin = new C3p0Plugin(url, user, password);
		me.add(c3p0Plugin);

		// 配置ActiveRecord插件
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		me.add(arp);
//		arp.addMapping("t_mgr_menu", "keyid",T_MGR_MENU.class);
	
		
	}

	public void configInterceptor(Interceptors me) {
	}

	public void configHandler(Handlers me) {
	}
}
