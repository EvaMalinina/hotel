let registration = () => {

  let regLink = document.getElementById('register-link');
  regLink.addEventListener('click', () => {
    
    let regForm = document.getElementById('registration');
    regForm.style.display = 'flex';
  })
}

registration();

let login = () => {

  let regLink = document.getElementById('login-link');
  regLink.addEventListener('click', () => {
    
    let regForm = document.getElementById('login');
    regForm.style.display = 'flex';
  })
}

login();