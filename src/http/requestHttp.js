import axios from 'axios';
import QS from 'qs';
import {Loading, Message} from 'element-ui';
import store from '../store/store';

let loading;
const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: '拼命加载中....',
    background: 'rgb(0,0,0,0.7)'
  })
}
const endLoading = () => {
  loading.close()
}
//设置请求头
axios.defaults.headers.post['Content-type'] = 'application/json;charset=UTF-8';
//设置跨域请求
axios.defaults.withCredentials = false;
//设置请求拦截器
axios.interceptors.request.use(config => {
    startLoading();
    //const token = store.state.token;
    //token && (config.headers.Authorization = token);
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//设置响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
      endLoading();
      return Promise.resolve(response);
    } else {
      endLoading();
      return Promise.reject(response);
    }
  },
  error => {
    Message.error('请求失败');
    return Promise.reject(error)
  }
)
//设置post情感求方法
export function httpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(response => {
      resolve(response)
    })
  });
}
export default {
  httpGet
}
