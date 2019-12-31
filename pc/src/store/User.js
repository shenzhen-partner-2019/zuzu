// import axios from 'axios'
// import HttpRequest from '../http/axios'
import axios from 'axios'
import API from '@/tool/api';
import qs from 'qs';


export default {
    actions: {
        //登陆
        async login({ dispatch }, data) {
            let res = await axios.post(API.login, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res;
            } else {
                return Promise.reject(res);
            }
        }, 
        //登陆验证码
        async loginsms({ dispatch }, data) {
            let res = await axios.post(API.loginsms, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 1) {
                return res.data;
            } else {
                return Promise.reject(res);
            }
        }, 
        //注册
        async register({ dispatch }, data) {
            let res = await axios.post(API.register, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data;
            } else {
                return Promise.reject(res);
            }
        }, 
        //注册短信
        async registersms({ dispatch }, data) {
            let res = await axios.post(API.registersms, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res;
            } else {
                return Promise.reject(res);
            }
        }, 
        //获取验证码图片
        async verifyimg({ dispatch }, data) {
            let res = await axios.get(API.verifyimg, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200 && res.data.status == 1) {
                return res.data;
            } else {
                return Promise.reject(res);
            }
        },
    }
}