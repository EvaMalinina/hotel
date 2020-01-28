let startSession = () => {
  let logLog = document.getElementById('log-login').value;
  let logObj = { logLog };

  //identifier
  let userCoockie = logObj.logLog;
  document.cookie = 'cookie'+ userCoockie + '=' + userCoockie +'; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/';
};

let getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}