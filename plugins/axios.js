import qs from "qs";
 
export default function({ $axios, redirect }) {
  let header = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/javascript, */*; q=0.01'
}
  $axios.onRequest(config => {
    config.data = qs.stringify(config.data, {
      allowDots: true //Option allowDots can be used to enable dot notation
    });
    config.headers = header
    return config;
  });
 
  $axios.onResponse(response => {
    return Promise.resolve(response.data);
  });

 
  $axios.onError(error => {
    return Promise.reject(error);
  });
}