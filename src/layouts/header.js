
import { useEffect, useState } from 'react';
import { Link } from 'umi';
import { authActions } from '../utils/index'

export function Header() {
   
   const [loginStatus, setLoginStatus] = useState(false)

   const logMsg = ["注册/登录", "登出"]

   useEffect( ()=> {
    const jwt = authActions.checkJwt()
    setLoginStatus(true)
   }, [])

   return (

      <div className="static container-sm mx-auto w-screen bg-green-100">

         <div className="absolute right-0 text-sm p-4">
            {
               loginStatus ? 
               <a onClick={authActions.logOut} >登出</a>
               : 
               <Link to="/login">注册/登录</Link>
            }
         </div>

         <div className="text-center text-9xl hover:text-red-500 select-none p-8">
            NICETRY
         </div>

      </div>
   )
}