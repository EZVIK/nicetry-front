import axios from 'axios'

export default function ContentData(id) {

   const jwt = localStorage.getItem('token')
   
   let config = { 
      method: 'get',
      url: 'http://localhost:6079/api/v1/nice/' + id,
      headers: { 
         'token': jwt
      }
   };

   return axios(config)
   
}