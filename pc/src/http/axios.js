import axios from 'axios'
import Qs from 'qs'

const HttpRequest = axios.create({
  baseURL: 'https://some-domain.com/api/',
  url: '/user',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: 5000,
  xsrfCookieName: 'XSRF-TOKEN', // default
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
  validateStatus: function (status) {
    return true
  }
})

HttpRequest.interceptors.request.use(config => {
  // do something before request
  if (config.method === 'post') {
    config.data = Qs.stringify(config.data)
    return config
  }
}, error => {
  Promise.reject(error)
})

HttpRequest.interceptors.response.use(response => {
  // do something
  return response
}, error => {
  Promise.reject(error)
})

export default HttpRequest