let logOutUser = () => {
  let logOut = document.getElementById('login-link');

  let logLog = document.getElementById('log-login').value;
  let logPas = document.getElementById('log-password').value;
  let logObj = { logLog, logPas };
  //identifier
  let userCoockie = logObj.logLog;

  logOut.addEventListener('click', () => {
    logOut.innerHTML = 'My Account';
    //remove coockie
    document.cookie = 'cookie'+ userCoockie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    logForm.style.display = 'none';
    let oldList = document.querySelector('.booking__customer');
    if ( oldList ) {
      oldList.parentNode.removeChild(oldList);
    }
    
    if(typeof localStorage['currentUser'] !== 'undefined'){
      delete localStorage['currentUser'];
    }
    openReg();
    register();
    openLogin();
    login();
    setAdmin();
  });
};
