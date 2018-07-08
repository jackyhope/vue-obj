import axios from 'axios'
import {
  Message,
  MessageBox,
  Loading
} from 'element-ui'
import store from '../store'
import {
  getToken
} from '@/utils/auth'

function request(params) {
  var _config = {
    loading: false,
    errormsg: false,
    ...params
  }

  // 创建axios实例
  const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000 // 请求超时时间
  })

  var loadTip

  // request拦截器
  service.interceptors.request.use(config => {
    if (store.getters.token) {
      config.headers['logintoken'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (_config.loading) {
      loadTip = Loading.service({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    return config
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    if (_config.loading) {
      loadTip.close()
    }
    Promise.reject(error)
  })

  // respone拦截器
  service.interceptors.response.use(
    response => {
      /**
       * code为非0000是抛错 可结合自己业务进行修改
       */
      const res = response.data
      if (_config.loading) {
        loadTip.close()
      }
      return res;
      
    },
    error => {
      if (_config.loading) {
        loadTip.close()
      }
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
  return service();
};



export default request
