let showForm = () => {

  openReg();
  register();
  openLogin();
  login();
}

const regForm = document.getElementById('registration');
const logForm = document.getElementById('login');

let openReg = () => {

  let regLink = document.getElementById('register-link');
  regLink.addEventListener('click', () => {
    regForm.style.display = 'flex';
    logForm.style.display = 'none';
  });
};

let register = () => {
  let regBtn = document.getElementById('reg-btn');
  let regUsersArr = [];

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let regLog = document.getElementById('reg-login').value;
    let regPas = document.getElementById('reg-password').value;
    let regObj = { regLog, regPas };
    regUsersArr.push(regObj);
    const regUsersData = JSON.stringify(regUsersArr);
    localStorage.setItem("registeredUsers", regUsersData);
  })
};

let openLogin = () => {

  let regLink = document.getElementById('login-link');
  regLink.addEventListener('click', () => {
    
    logForm.style.display = 'flex';
    regForm.style.display = 'none';
  })
};

let login = () => {
  let logBtn = document.getElementById('log-btn');

  logBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let logLog = document.getElementById('log-login').value;
    let logPas = document.getElementById('log-password').value;
    let logObj = { logLog, logPas };
    // localStorage.getItem("registeredUsers", regUsersData);
    let regUsers = JSON.parse(localStorage.getItem('registeredUsers'));
    const user = regUsers.some(user => user.regLog === logObj.logLog && user.regPas === logObj.logPas)
  
    if (user) {
      document.getElementById('login-link').innerHTML = 'Log out';
      logForm.style.display = 'none';
      
      reserveRoom();
      if (localStorage.getItem('arrResData') !== null) {
        showBooking();
        cancelBooking();
        confirmBooking();
        toLastConfirm();
      }
     
    } else {
      alert('There is no such user. Maybe you did a mistake in login or password.');
    }
    console.log(logObj, regUsers);
  })
};



