// generate reservation of user
let showBooking = () => {

  if ( JSON.parse(localStorage.getItem('currentUser')) !== undefined) {

    let currentUser =  JSON.parse(localStorage.getItem('currentUser')).login;
    
    let reservation = JSON.parse(localStorage.getItem('arrResData'));

    if (reservation) {
        // filter only current cectomer booking
      let userReserv = reservation.filter( room => room.customer === currentUser);

      if (userReserv) {

        let list = document.querySelector('.booking__list');

        let customBooking = document.createElement('div');
        let customRooms = document.createElement('div');
        let customActions = document.createElement('div');
    
        document.querySelector('.container_column').style.flexDirection = "column-reverse";

        if (!document.querySelector('.booking__customer')) {
          list.parentNode.appendChild(customBooking).className = 'booking__customer';
        }

        customRooms.className = "booking__rooms";
        customRooms.innerHTML = `<h4>Your booking:</h4>`;

        customActions.className = "booking__actions";
        let bookConfirm = document.createElement('a');
        let bookCancel = document.createElement('a');
        bookConfirm.className = "booking__btn booking__confirm";
        bookCancel.className = "booking__btn booking__cancel";

        bookConfirm.innerHTML = 'Confirm';
        bookCancel.innerHTML = 'Cancel';

        customActions.append(bookConfirm, bookCancel)

        customBooking.append(customRooms, customActions);
        
        for ( item of userReserv ) {
          let roomName = document.createElement('h4');
          roomName.innerHTML = item.name;
          let p = document.createElement('p');
          p.innerHTML = item.status + ' ✔︎';
          customRooms.append(roomName, p);
        }
      }
    }  
  } 
};