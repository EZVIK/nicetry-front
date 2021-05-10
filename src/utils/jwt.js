import { history }from 'umi'

export const authActions = {
   goPage,
   checkJwt,
   logOut
};

function goPage(page) {
   history.push('/'+ page);
}

function checkJwt() {
   const jwt = localStorage.getItem('token')
   // console.log("jwt", jwt)

   // if (!jwt || jwt === ""){
   //    // console.log("jwt jump login", )

   //    goPage("login")
   // } else {

   //    // console.log("jwt jump", )
   //    goPage('')
   // }
   
   return jwt
}

function logOut() {
   localStorage.setItem("token", "")
   goPage("login")
}

