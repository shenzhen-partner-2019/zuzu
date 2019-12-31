
const domain = '/api';//测试环境
export default {
	//===============================登录/注册部分==============================
    login: `${domain}/login`,			                    //登录
    loginsms: `${domain}/login_sms`,                         //登录短信
	verifyimg: `${domain}/getcaptcha`,		                    //验证码图片
    register: `${domain}/register`,							//注册
    registersms: `${domain}/reg_sms`,                        //注册短信
    //===============================楼盘/房源部分==============================
    hotBusinessCircle: `${domain}/hot`,			           //热门商圈
    officeBuilding: `${domain}/top`,                         //精选写字楼
	hotListings: `${domain}/hot_house`,		               //热门房源
    getHouseList: `${domain}/house`,				           //出租--》获取房源列表
    houseListDetail: `${domain}/house`,					  //出租--》某个房源详情
    getAllLoupan: `${domain}/loupan`,                       //找楼盘--》所有楼盘列表
    loupanDetail: `${domain}/loupan`,					      //出租--》某个楼盘详情
}