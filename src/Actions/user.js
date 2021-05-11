import {authActions, RA} from '../utils'

export const UserActions = {
  Login
}

async function Login(Email, Password) {

  const data = {
    "mail": Email,
    "password": Password
  };

  const resData = await RA.HttpRequest("POST", "user/login", data, {})

  if (resData.data.code === 200){
    localStorage.setItem("token", resData.data.data.jwt)
    authActions.goPage('')
  }

}
