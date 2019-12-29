// import axios from 'axios'
import HttpRequest from '../http/axios'
import API from '@/tool/api';
import qs from 'qs';


export default {
    actions: {
        async login({ dispatch }, data) {
            let res = await HttpRequest.post(API.login, qs.stringify(data))
            if (res.status == 1) {
                return res.data;
            } else {
                return dispatch('_reject', res);
            }
        }, 
        async loginsms({ dispatch }, data) {
            let res = await HttpRequest.post(API.loginsms, data)
            if (res.status == 1) {
                return res.data;
            } else {
                return dispatch('_reject', res);
            }
        }, 
        async register({ dispatch }, data) {
            let res = await HttpRequest.post(API.register, data)
            if (res.status == 1) {
                return res.data;
            } else {
                return dispatch('_reject', res);
            }
        }, 
        async registersms({ dispatch }, data) {
            let res = await HttpRequest.post(API.registersms, data)
            if (res.status == 1) {
                return res.data;
            } else {
                return dispatch('_reject', res);
            }
        }, 
        async verifyimg({ dispatch }, data) {
            let res = await HttpRequest.get(API.verifyimg, data)
            if (res.status == 200 && res.data.status == 1) {
                return res.data;
            } else {
                return dispatch('_reject', res);
            }
        },
    }
}