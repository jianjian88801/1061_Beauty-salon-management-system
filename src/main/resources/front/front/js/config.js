
var projectName = '美容院管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

]


var indexNav = [

{
	name: '美容用品',
	url: './pages/meirongyongpin/list.html'
}, 
{
	name: '美容项目',
	url: './pages/meirongxiangmu/list.html'
}, 
{
	name: '用户预约信息',
	url: './pages/yonghuyuyuexinxi/list.html'
}, 
{
	name: '会员预约信息',
	url: './pages/huiyuanyuyuexinxi/list.html'
}, 

]

var adminurl =  "http://localhost:8080/springbootsw863/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"普通用户","menuJump":"列表","tableName":"putongyonghu"}],"menu":"普通用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员","menuJump":"列表","tableName":"huiyuan"}],"menu":"会员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"技师","menuJump":"列表","tableName":"jishi"}],"menu":"技师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"前台","menuJump":"列表","tableName":"qiantai"}],"menu":"前台管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"美容用品","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品管理"},{"child":[{"buttons":["查看","修改","删除","月销量统计","年销量统计"],"menu":"美容项目","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目管理"},{"child":[{"buttons":["审核","查看","修改","删除"],"menu":"用户预约信息","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"会员预约信息","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"美容部位","menuJump":"列表","tableName":"meirongbuwei"}],"menu":"美容部位管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"销量信息","menuJump":"列表","tableName":"xiaoliangxinxi"}],"menu":"销量信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"库存信息","menuJump":"列表","tableName":"kucunxinxi"}],"menu":"库存信息管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"美容项目月统计","menuJump":"列表","tableName":"meirongxiangmuyuetongji"}],"menu":"美容项目月统计管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"美容项目年统计","menuJump":"列表","tableName":"meirongxiangmuniantongji"}],"menu":"美容项目年统计管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"用户月消费信息","menuJump":"列表","tableName":"yonghuyuexiaofeixinxi"}],"menu":"用户月消费信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"用户年消费信息","menuJump":"列表","tableName":"yonghunianxiaofeixinxi"}],"menu":"用户年消费信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"会员月消费信息","menuJump":"列表","tableName":"huiyuanyuexiaofeixinxi"}],"menu":"会员月消费信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"会员年消费信息","menuJump":"列表","tableName":"huiyuannianxiaofeixinxi"}],"menu":"会员年消费信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"技师月业绩统计","menuJump":"列表","tableName":"jishiyueyejitongji"}],"menu":"技师月业绩统计管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"技师年业绩统计","menuJump":"列表","tableName":"jishinianyejitongji"}],"menu":"技师年业绩统计管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"前台月业绩统计","menuJump":"列表","tableName":"qiantaiyueyejitongji"}],"menu":"前台月业绩统计管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"前台年业绩统计","menuJump":"列表","tableName":"qiantainianyejitongji"}],"menu":"前台年业绩统计管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["查看","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品列表","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品模块"},{"child":[{"buttons":["查看","预约","会员预约","用户预约"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户预约信息列表","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息模块"},{"child":[{"buttons":["查看","删除","修改","新增"],"menu":"会员预约信息列表","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品管理"},{"child":[{"buttons":["查看"],"menu":"美容项目","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目管理"},{"child":[{"buttons":["查看","新增","修改","删除"],"menu":"用户预约信息","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品列表","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品模块"},{"child":[{"buttons":["查看","预约","会员预约","用户预约"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户预约信息列表","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息模块"},{"child":[{"buttons":["查看","删除","修改","新增"],"menu":"会员预约信息列表","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"普通用户","tableName":"putongyonghu"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品管理"},{"child":[{"buttons":["查看","预约"],"menu":"美容项目","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员预约信息","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息管理"},{"child":[{"buttons":["查看"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品列表","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品模块"},{"child":[{"buttons":["查看","预约","会员预约","用户预约"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户预约信息列表","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息模块"},{"child":[{"buttons":["查看","删除","修改","新增"],"menu":"会员预约信息列表","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"会员","tableName":"huiyuan"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"美容用品","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品管理"},{"child":[{"buttons":["新增","查看","修改","删除","预约"],"menu":"美容项目","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目管理"},{"child":[{"buttons":["查看"],"menu":"用户预约信息","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息管理"},{"child":[{"buttons":["查看"],"menu":"会员预约信息","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息管理"},{"child":[{"buttons":["查看"],"menu":"技师月业绩统计","menuJump":"列表","tableName":"jishiyueyejitongji"}],"menu":"技师月业绩统计管理"},{"child":[{"buttons":["查看"],"menu":"技师年业绩统计","menuJump":"列表","tableName":"jishinianyejitongji"}],"menu":"技师年业绩统计管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品列表","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品模块"},{"child":[{"buttons":["查看","预约","会员预约","用户预约"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户预约信息列表","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息模块"},{"child":[{"buttons":["查看","删除","修改","新增"],"menu":"会员预约信息列表","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"技师","tableName":"jishi"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"普通用户","menuJump":"列表","tableName":"putongyonghu"}],"menu":"普通用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"会员","menuJump":"列表","tableName":"huiyuan"}],"menu":"会员管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"用户预约信息","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"会员预约信息","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息管理"},{"child":[{"buttons":["查看"],"menu":"前台月业绩统计","menuJump":"列表","tableName":"qiantaiyueyejitongji"}],"menu":"前台月业绩统计管理"},{"child":[{"buttons":["查看"],"menu":"前台年业绩统计","menuJump":"列表","tableName":"qiantainianyejitongji"}],"menu":"前台年业绩统计管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"美容用品列表","menuJump":"列表","tableName":"meirongyongpin"}],"menu":"美容用品模块"},{"child":[{"buttons":["查看","预约","会员预约","用户预约"],"menu":"美容项目列表","menuJump":"列表","tableName":"meirongxiangmu"}],"menu":"美容项目模块"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户预约信息列表","menuJump":"列表","tableName":"yonghuyuyuexinxi"}],"menu":"用户预约信息模块"},{"child":[{"buttons":["查看","删除","修改","新增"],"menu":"会员预约信息列表","menuJump":"列表","tableName":"huiyuanyuyuexinxi"}],"menu":"会员预约信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"前台","tableName":"qiantai"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
