import connectUrl from './connectUrl';
import requestHtpp from  './requestHttp';

const requestUrl={
  ajaxFirst(data){
    return requestHtpp.httpPost(connectUrl.urls.first,data)
  }
}

export default {
  requestUrl
}
