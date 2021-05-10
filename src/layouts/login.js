import { useState, useEffect } from 'react'
import axios from 'axios'
import { history, Link } from 'umi';
import { authActions } from '../utils/index'
import { connect } from 'react-redux';


export function LoginPage(props) {

  const [email, setEmail] = useState("default@nicetry.fun");
  const [password, setPwd] = useState("");
  const [submitted, SetSubmited] = useState(false)

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswdChange = (e) => setPwd(e.target.value);

  const handleLogin = async (e) =>  {
    e.preventDefault();

    var data = JSON.stringify({
      "mail": email,
      "password": password
    });
    console.log(data)
    
    var config = {
      method: 'post',
      url: 'http://localhost:6079/api/v1/user/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    console.log("LOGIN")
    
    const resData = await axios(config)

    console.log(JSON.stringify(resData.data.code))

    if (resData.data.code == 200) {
      localStorage.setItem("token", resData.data.data.jwt)
      authActions.goPage('')
    }
  } 
  
  useEffect( ()=>{
    authActions.checkJwt()
    
  },[])

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {/* <input type="hidden" name="remember" defaultValue="true" /> */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleEmailChange}

              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handlePasswdChange}

              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div> */}
           <Link to="/l">JUMP</Link>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


// function mapStateToProps(state) {
//   const { loggingIn } = state.authentication;
//   return {
//       loggingIn
//   };
// }

// const connectedLoginPage = connect(mapStateToProps)(LoginPage);
// export { connectedLoginPage as LoginPage }; 