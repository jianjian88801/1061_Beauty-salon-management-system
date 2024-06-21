import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import qiantai from '@/views/modules/qiantai/list'
    import jishiyueyejitongji from '@/views/modules/jishiyueyejitongji/list'
    import meirongbuwei from '@/views/modules/meirongbuwei/list'
    import huiyuanyuyuexinxi from '@/views/modules/huiyuanyuyuexinxi/list'
    import yonghunianxiaofeixinxi from '@/views/modules/yonghunianxiaofeixinxi/list'
    import jishinianyejitongji from '@/views/modules/jishinianyejitongji/list'
    import yonghuyuyuexinxi from '@/views/modules/yonghuyuyuexinxi/list'
    import meirongxiangmuniantongji from '@/views/modules/meirongxiangmuniantongji/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import putongyonghu from '@/views/modules/putongyonghu/list'
    import huiyuannianxiaofeixinxi from '@/views/modules/huiyuannianxiaofeixinxi/list'
    import jishi from '@/views/modules/jishi/list'
    import qiantaiyueyejitongji from '@/views/modules/qiantaiyueyejitongji/list'
    import meirongyongpin from '@/views/modules/meirongyongpin/list'
    import xiaoliangxinxi from '@/views/modules/xiaoliangxinxi/list'
    import yonghuyuexiaofeixinxi from '@/views/modules/yonghuyuexiaofeixinxi/list'
    import meirongxiangmu from '@/views/modules/meirongxiangmu/list'
    import orders from '@/views/modules/orders/list'
    import kucunxinxi from '@/views/modules/kucunxinxi/list'
    import qiantainianyejitongji from '@/views/modules/qiantainianyejitongji/list'
    import meirongxiangmuyuetongji from '@/views/modules/meirongxiangmuyuetongji/list'
    import config from '@/views/modules/config/list'
    import huiyuanyuexiaofeixinxi from '@/views/modules/huiyuanyuexiaofeixinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/qiantai',
        name: '前台',
        component: qiantai
      }
      ,{
	path: '/jishiyueyejitongji',
        name: '技师月业绩统计',
        component: jishiyueyejitongji
      }
      ,{
	path: '/meirongbuwei',
        name: '美容部位',
        component: meirongbuwei
      }
      ,{
	path: '/huiyuanyuyuexinxi',
        name: '会员预约信息',
        component: huiyuanyuyuexinxi
      }
      ,{
	path: '/yonghunianxiaofeixinxi',
        name: '用户年消费信息',
        component: yonghunianxiaofeixinxi
      }
      ,{
	path: '/jishinianyejitongji',
        name: '技师年业绩统计',
        component: jishinianyejitongji
      }
      ,{
	path: '/yonghuyuyuexinxi',
        name: '用户预约信息',
        component: yonghuyuyuexinxi
      }
      ,{
	path: '/meirongxiangmuniantongji',
        name: '美容项目年统计',
        component: meirongxiangmuniantongji
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/putongyonghu',
        name: '普通用户',
        component: putongyonghu
      }
      ,{
	path: '/huiyuannianxiaofeixinxi',
        name: '会员年消费信息',
        component: huiyuannianxiaofeixinxi
      }
      ,{
	path: '/jishi',
        name: '技师',
        component: jishi
      }
      ,{
	path: '/qiantaiyueyejitongji',
        name: '前台月业绩统计',
        component: qiantaiyueyejitongji
      }
      ,{
	path: '/meirongyongpin',
        name: '美容用品',
        component: meirongyongpin
      }
      ,{
	path: '/xiaoliangxinxi',
        name: '销量信息',
        component: xiaoliangxinxi
      }
      ,{
	path: '/yonghuyuexiaofeixinxi',
        name: '用户月消费信息',
        component: yonghuyuexiaofeixinxi
      }
      ,{
	path: '/meirongxiangmu',
        name: '美容项目',
        component: meirongxiangmu
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/kucunxinxi',
        name: '库存信息',
        component: kucunxinxi
      }
      ,{
	path: '/qiantainianyejitongji',
        name: '前台年业绩统计',
        component: qiantainianyejitongji
      }
      ,{
	path: '/meirongxiangmuyuetongji',
        name: '美容项目月统计',
        component: meirongxiangmuyuetongji
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/huiyuanyuexiaofeixinxi',
        name: '会员月消费信息',
        component: huiyuanyuexiaofeixinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
