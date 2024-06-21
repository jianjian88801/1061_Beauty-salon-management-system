package com.entity.view;

import com.entity.HuiyuanyuyuexinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 会员预约信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-04-26 10:06:05
 */
@TableName("huiyuanyuyuexinxi")
public class HuiyuanyuyuexinxiView  extends HuiyuanyuyuexinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public HuiyuanyuyuexinxiView(){
	}
 
 	public HuiyuanyuyuexinxiView(HuiyuanyuyuexinxiEntity huiyuanyuyuexinxiEntity){
 	try {
			BeanUtils.copyProperties(this, huiyuanyuyuexinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
