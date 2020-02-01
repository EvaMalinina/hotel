let logOutUser = () => {
  
  let logOut = document.getElementById('logout-link');
  
  let logLog = document.getElementById('log-login').value;
  let logPas = document.getElementById('log-password').value;
  let logObj = { logLog, logPas };

  //identifier
  let userCoockie = logObj.logLog;

  logOut.addEventListener('click', () => {
   
    logOut.style.display = 'none';
    let logIn = document.getElementById('login-link');
    logIn.style.display = 'flex';

    const logForm = document.getElementById('login');
    logForm.style.display = 'none';
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
