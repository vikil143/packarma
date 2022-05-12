import axios from 'axios';
import store from '../store';

const BASEURL = 'http://skyonliners.com/demo/packult/customerapi/';
// const BASEURL = 'https://muat.maakmobiles.com/maak/';
// const BASEURL = 'https://staging.mypcot.com/maksu/';
// const commonToken = 'bXlwY290LmNvbTpteXBjb3RpbmZvdGVjaA==';
// const commonToken = 'bXlwY290LmNvbTpteXBjb3RpbmZvdGVjaA==';
const commonToken = 'YWRtaW46bXlwY290';

const api = async ({
  method,
  url,
  data = {},
  // currencyCode = 1,
  // userLanguage = 'ar',
  // showToast,
  // whichHashKey,
  ...restHeader
}) => {
  // console.log('$$$$$$$$ api hit 1', {
  //   url,
  //   data,
  //   userLanguage,
  //   restHeader,
  //   // whichHashKey,
  // });
  const headers = {
    Accept: 'application/json',
    Authorization: `Basic ${commonToken}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'access-token': store.getState()?.userLocalData?.token ?? null,
    // 'Accept-Language': 'en',
    ...restHeader,
  };

  // console.log(
  //   '### api render response....',
  //   store.getState()?.userLocalData.token,
  // );

  const formData = new FormData();
  // formData.append('currency_code', currencyCode);
  // formData.append('userLanguage', userLanguage);

  for (let key in data) {
    formData.append(key, data[key]);
  }

  const instance = axios.create({
    baseURL: BASEURL,
    headers,
  });

  //   instance.interceptors.response.use(response => {
  //     if (response.data.success == INVALIDTOKEN) {
  //       handleLogoutWithRef({
  //         dispatch: store.dispatch,
  //         // navigation: navigationRef,
  //       });
  //       navigationRef.current?.navigate('Login');
  //     } else {
  //       return response;
  //     }
  //   });

  return await instance.request({
    url,
    method: 'POST',
    data: formData,
  });
};

export default api;
