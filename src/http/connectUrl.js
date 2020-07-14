//链接的服务
const ipconfig={
  service:'https://www.baidu.com'
}
//接口地址
const urls={
  first:ipconfig.service+'/constract/add/queryList'
}
//配置拦截器

export default {
  urls,
  ipconfig
}
