//cancel booking
let cancelBooking = () => {

  let cancelBtn = document.querySelector('.booking__cancel');
  if ( cancelBtn ) {
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // define current user
      let currentUser =  JSON.parse(localStorage.getItem('currentUser')).login;
     
      let arrResData = JSON.parse(localStorage.getItem('arrResData'));
     
      // delete rooms current customer reserved before from all array of reserved rooms
      let modifiedResData = arrResData.filter( room => room.customer !== currentUser);
      modifiedResData = JSON.stringify(modifiedResData);
      localStorage.setItem("arrResData", modifiedResData);

      //clean FE
      document.querySelector('.booking__rooms').innerHTML = `<p>You have no reservation.</p>`;

      let rooms = JSON.parse(localStorage.getItem('locData'));
      generateAll(rooms);
      paginate(rooms);
    })
  } 
};