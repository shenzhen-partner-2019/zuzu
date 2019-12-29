
const domain = 'https://baitai1688.com/admin/api';//测试环境
export default {
	//===============================登录/注册部分==============================
    login: `${domain}/login_sms`,			                    //登录
    loginsms: `${domain}/loginsms`,                         //登录短信
	verifyimg: `${domain}/getcaptcha`,		                    //验证码图片
    register: `${domain}/register`,							//注册
    registersms: `${domain}/reg_sms`,                        //注册短信

}