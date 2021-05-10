import axios from 'axios'

export const RA = {
   HttpRequest,
};

function HttpRequest(method, url, body, header) {

   const jwt = localStorage.getItem('token')

   const http = "http://"
   const HOST = "localhost:6079"
   const URL_PRE = "/api/v1/"
   const FULL_URL = http + HOST + URL_PRE + url

   header['token'] = jwt

   let config = { 
      method: method,
      url: FULL_URL,
      headers: header,
      data: body
   };
   console.log(config)
   return axios(config)   
}