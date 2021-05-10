"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authActions = void 0;

var _umi = require("umi");

var authActions = {
  goPage: goPage,
  checkJwt: checkJwt,
  logOut: logOut
};
exports.authActions = authActions;

function goPage(page) {
  _umi.history.push('/' + page);
}

function checkJwt() {
  var jwt = localStorage.getItem('token'); // console.log("jwt", jwt)
  // if (!jwt || jwt === ""){
  //    // console.log("jwt jump login", )
  //    goPage("login")
  // } else {
  //    // console.log("jwt jump", )
  //    goPage('')
  // }

  return jwt;
}

function logOut() {
  localStorage.setItem("token", "");
  goPage("login");
}