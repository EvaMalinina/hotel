let showForm = () => {
  
  let isRegister = false;
  if (typeof localStorage['currentUser'] !== 'undefined') {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const regUsers = JSON.parse(localStorage.getItem('registeredUsers'));
  
      if (regUsers) {
        const user = regUsers.find(user => user.regLog === currentUser.login && user.regPas === currentUser.password);
      
        if (user) {
          linkSelectBg();
          hideLogForm();
          startSession();
          
          reserveRoom();
          showBooking();
          
          confirmBooking();
          toLastConfirm();
          logOutUser();

          isRegister = true;
        } else {
          alert('There is no such user. Maybe you did a mistake in login or password.');
        }
      } else {
        alert('There is no such registered user.')
      }
  }
  if(!isRegister){
    openReg();
    register();
    openLogin();
    login();
    setAdmin();
  }
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
  let regUsersArr = [{ 'regLog': 'admin', 'regPas': '12345' }];

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let regLog = document.getElementById('reg-login').value;
    let regPas = document.getElementById('reg-password').value;
    let regObj = { regLog, regPas };

    regUsersArr.push(regObj);
    const regUsersData = JSON.stringify(regUsersArr);

    Promise.all([
      hideRegForm(),
      localStorage.setItem("registeredUsers", regUsersData),
    
    ]).then(
      result => alert("Thank you for reservation! Now login please."),
      error => alert("Sorry you can not be registered. Please contact us by mail."),
    );
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
        localStorage.setItem('currentUser', JSON.stringify({login: logLog, password: logPas}));
       
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
  let logOut = document.getElementById('logout-link');
  logOut.style.display = 'flex';
  let logIn = document.getElementById('login-link');
  logIn.style.display = 'none';
};

let hideRegForm = () => {
  regForm.style.display = 'none';
};

let showAdminPanel = () => {
  document.querySelector('.booking').innerHTML = '';

  let reservationList = JSON.parse(localStorage.getItem('arrResData'));

  let list = document.querySelector('.booking');
  list.className = 'booking booking__admin'


  for (item of reservationList) {
    let customerList = document.createElement('div');
    customerList.className = 'booking__item'
    list.appendChild(customerList);

    let roomName = document.createElement('h4');
    roomName.innerHTML = item.name;

    let startDate = document.createElement('p');
    startDate.innerHTML = 'Start date: ' + item.startDate;
    let endDate = document.createElement('p');
    endDate.innerHTML = 'End date: ' + item.endDate;

    let customer = document.createElement('p');
    customer.innerHTML = 'Customer: ' + item.customer;

    customerList.append(roomName, startDate, endDate, customer);
  }
}



