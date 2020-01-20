
const domain = '/admin/api';//测试环境
export default {
	//===============================登录/注册部分==============================
    login: `${domain}/login`,			                    //登录
    loginsms: `${domain}/loginsms`,                         //登录短信
	verifyimg: `${domain}/getcaptcha`,		                    //验证码图片
    register: `${domain}/register`,							//注册
    registersms: `${domain}/regsms`,                        //注册短信
    //===============================楼盘/房源部分==============================
    hotBusinessCircle: `${domain}/hot`,			           //热门商圈
    officeBuilding: `${domain}/top`,                         //精选写字楼
	hotListings: `${domain}/hothouse`,		               //热门房源
    getHouseList: `${domain}/allhouse`,				           //出租--》获取房源列表
    houseListDetail: `${domain}/housedetail`,					  //出租--》某个房源详情
    getAllLoupan: `${domain}/allLoupan`,                       //找楼盘--》所有楼盘列表
    loupanDetail: `${domain}/loupanDetail`,					      //出租--》某个楼盘详情
    //================================共享办公=========================================
    share:`${domain}/share`                                  //共享办公

}