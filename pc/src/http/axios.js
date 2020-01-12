import axios from 'axios'
import Qs from 'qs'

const isDevMode = () => {
  return process.env.NODE_ENV === 'development'
}
const getBaseUrl = () => {
  return isDevMode() ? '' : 'https://baitai1688.com/admin/api'
}
const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: { 
    // 'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
  timeout: 5000,
  // xsrfCookieName: 'XSRF-TOKEN', // default
  // xsrfHeaderName: 'X-XSRF-TOKEN', // default
  validateStatus: function (status) {
    return true
  }
})

instance.interceptors.request.use(config => {
  // do something before request
  if (config.method === 'post') {
    config.data = Qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  // do something
  return response
}, error => {
  return Promise.reject(error)
})

const HttpRequest = {
  get(url, data) {
    return instance.get(url, {params: data})
  },
  post(url, data) {
    return instance.post(url, data)
  }
}

export default HttpRequest