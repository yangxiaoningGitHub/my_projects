import axios from 'axios';
import QS from 'qs';
import {Loading, Message} from 'element-ui';
import store from '../store/store'
//设置请求头
axios.defaults.headers.post['Content-type'] = 'application/json;charset=UTF-8';
//设置跨域请求
axios.defaults.withCredentials = true;
//设置请求拦截器
axios.interceptors.request.use(config => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//设置相应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error)
  }
)

//设置Get请求方法
export function httpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

//设置post情感求方法
export function httpPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

export default {
  httpGet,
  httpPost
}
