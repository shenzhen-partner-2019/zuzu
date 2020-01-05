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
        //精选写字楼
        async officeBuilding({ dispatch }, data) {
            let res = await axios.get(API.officeBuilding, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 1) {
                return res.data;
            } else {
                return Promise.reject(res);
            }
        }, 
        //热门房源
        async hotListings({ dispatch }, data) {
            let res = await axios.get(API.hotListings, qs.stringify(data),{
                withCredentials: true
            })
            if (res.status == 200) {
                return res.data;
            } else {
                return Promise.reject(res);
            }
        }
    }
}