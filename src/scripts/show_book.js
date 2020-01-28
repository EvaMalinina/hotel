// generate reservation of user
let showBooking = () => {
  if ( JSON.parse(localStorage.getItem('arrResData')) !==undefined) {
    
    let reservation = JSON.parse(localStorage.getItem('arrResData'));

    let list = document.querySelector('.booking__list');

    let customBooking = document.createElement('div');
    let customRooms = document.createElement('div');
    let customActions = document.createElement('div');

    document.querySelector('.container_column').style.flexDirection = "column-reverse";
    list.parentNode.appendChild(customBooking).className = 'booking__customer';

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
    
    for (item of reservation) {
      let roomName = document.createElement('h4');
      roomName.innerHTML = item.name;
      let p = document.createElement('p');
      p.innerHTML = item.status + ' ✔︎';
      customRooms.append(roomName, p);
    }
  }
  
};