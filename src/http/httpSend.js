import https from './requestHttp';
import httpUrl from  './connectUrl';
const methods = {
  requestMeth(data){
    return  https.httpGet(httpUrl.urls.first, data)
  }
}

export default{
  methods
}
