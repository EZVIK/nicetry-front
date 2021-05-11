import axios from 'axios'
import { connect } from "react-redux";

export const RA = {
   HttpRequest,
};

function HttpRequest(method, url, body, header) {

    const jwt = localStorage.getItem('token')

    const HOST = "https://nicetry.fun"
    const URL_PRE = "/api/v1/"
    const FULL_URL = HOST + URL_PRE + url

    header['Authorization'] = jwt
    header['Content-Type'] = 'application/json'

    let config = {
      method: method,
      url: FULL_URL,
      headers: header,
      data: body
    };

  console.log((config))
  return axios(config)
}

const mapStateToProps = (state) => {
  return {
    dark: state.dark
  };
};



export default connect(mapStateToProps, null)(HttpRequest);


