package com.entity.view;

import com.entity.MeirongxiangmuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 美容项目
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-04-26 10:06:05
 */
@TableName("meirongxiangmu")
public class MeirongxiangmuView  extends MeirongxiangmuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public MeirongxiangmuView(){
	}
 
 	public MeirongxiangmuView(MeirongxiangmuEntity meirongxiangmuEntity){
 	try {
			BeanUtils.copyProperties(this, meirongxiangmuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
