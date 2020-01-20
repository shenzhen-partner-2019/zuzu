// import axios from 'axios'
// import HttpRequest from '../http/axios'
import axios from 'axios'
import API from '@/tool/api';
import qs from 'qs';


export default {
    actions: {
        //热门商圈
        async hotBusinessCircle({ dispatch }, data) {
            let res = await axios.get(API.hotBusinessCircle, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res;
            } else {
                return Promise.reject(res);
            }
        }, 
        //共享办公
        async getShare({ dispatch }, data) {
            let res = await axios.post(API.share, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data;
            } else {
                return Promise.reject(res);
            }
        }, 
        //精选写字楼
        async officeBuilding({ dispatch }, data) {
            let res = await axios.post(API.officeBuilding, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data.data;
            } else {
                return Promise.reject(res);
            }
        }, 
        //热门房源
        async hotListings({ dispatch }, data) {
            let res = await axios.post(API.hotListings, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data.data;
            } else {
                return Promise.reject(res);
            }
        },
        //所有楼盘
        async getAllLoupan({ dispatch }, data) {
            let res = await axios.post(API.getAllLoupan, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data.data;
            } else {
                return Promise.reject(res);
            }
        },
        //楼盘详情
        async loupanDetail({ dispatch }, data) {
            let res = await axios.post(API.loupanDetail, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data.data;
            } else {
                return Promise.reject(res);
            }
        },
        //所有房源
        async getHouseList({ dispatch }, data) {
            let res = await axios.post(API.getHouseList, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data.data;
            } else {
                return Promise.reject(res);
            }
        },
        //房源详情
        async houseListDetail({ dispatch }, data) {
            let res = await axios.post(API.houseListDetail, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data.data;
            } else {
                return Promise.reject(res);
            }
        },
    }
}