let showForm = () => {

  openReg();
  register();
  openLogin();
  login();
  setAdmin();
}

const regForm = document.getElementById('registration');
const logForm = document.getElementById('login');

let openReg = () => {

  let regLink = document.getElementById('register-link');
  regLink.addEventListener('click', (e) => {
    e.preventDefault();
    regForm.style.display = 'flex';
    logForm.style.display = 'none';
  });
};

let register = () => {
  let regBtn = document.getElementById('reg-btn');
  let regUsersArr = [{ 'regLog': 'admin' }, { 'regPas': '12345' }];

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let regLog = document.getElementById('reg-login').value;
    let regPas = document.getElementById('reg-password').value;
    let regObj = { regLog, regPas };

    regUsersArr.push(regObj);
    const regUsersData = JSON.stringify(regUsersArr);
    localStorage.setItem("registeredUsers", regUsersData);

    hideRegForm();
  })
};

let openLogin = () => {

  let regLink = document.getElementById('login-link');
  regLink.addEventListener('click', () => {
    
    logForm.style.display = 'flex';
    regForm.style.display = 'none';
  })
};

let setAdmin = () => {
  //push admin to registered users arr
  let regUsersArr = [{ regLog: "admin", regPas: "12345" }];
  const regUsersData = JSON.stringify(regUsersArr);
  localStorage.setItem("registeredUsers", regUsersData);
}

let login = () => {
  let logBtn = document.getElementById('log-btn');

  logBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let logLog = document.getElementById('log-login').value;
    let logPas = document.getElementById('log-password').value;
    let logObj = { logLog, logPas };
    
    const regUsers = JSON.parse(localStorage.getItem('registeredUsers'));

    if (regUsers) {
      const user = regUsers.find(user => user.regLog === logObj.logLog && user.regPas === logObj.logPas);
      
      if (user) {
        linkSelectBg();
        hideLogForm();
        startSession();
        logOutUser();
       
        if (getCookie('cookieadmin')) {
          showAdminPanel();
        }
      } else {
        alert('There is no such user. Maybe you did a mistake in login or password.');
      }
    } else {
      alert('There is no such registered user.')
    }
  })
};

let hideLogForm = () => {
  logForm.style.display = 'none';
  let logOut = document.getElementById('login-link');
  logOut.innerHTML = 'Log out';
};

let hideRegForm = () => {
  let regBtn = document.getElementById('reg-btn');

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    regForm.style.display = 'none';
  });
};

let showAdminPanel = () => {
  document.querySelector('.booking').innerHTML = '';

  let reservationList = JSON.parse(localStorage.getItem('arrResData'));

  let list = document.querySelector('.booking');
  list.className = 'booking booking__admin'

  let customerList = document.createElement('div');
  list.appendChild(customerList);

  for (item of reservationList) {
    let roomName = document.createElement('h4');
    roomName.innerHTML = item.name;
    let p = document.createElement('p');
    p.innerHTML = item.status;
    customerList.append(roomName, p);
  }
}

// let alertLogin = () => {
//   let reserveBtn = document.querySelector('.example__link');
//   reserveBtn.addEventListener('click', () => {
//     alert('Please log in or register if you are still not with us. Thanks :)');
//   });
// }


