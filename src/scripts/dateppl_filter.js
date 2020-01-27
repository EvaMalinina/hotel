let datepplFilter = () => {
  document.getElementById('availability').addEventListener('click', (e) => {
    e.preventDefault();

    // get all values choosed in form by user
    let startDate = document.getElementById('start-trip').value;
    let endDate = document.getElementById('end-trip').value;

    let adultsQuantity = document.getElementById('adults-quantity').value;
    adultsQuantity = parseInt(adultsQuantity);
    let kidsQuantity = document.getElementById('kids-quantity').value;
    kidsQuantity = parseInt(kidsQuantity);

   
    if(isNaN(adultsQuantity) || isNaN(kidsQuantity)) {
      alert( 'Adults and kids quantity have to be a numeric value.' );
    }

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    let reservationList = JSON.parse(localStorage.getItem('arrResData'));
    let deserialData = JSON.parse(localStorage.getItem('locData'));

    for(let room in deserialData) {

      let currentItem = deserialData[room];
      let allGuests = adultsQuantity + kidsQuantity;

      // sort out items with less ppl quantity
      if(currentItem.maxGuests < allGuests ) {
        continue
      };

      for ( let reservedRoom in reservationList ) {
        let currentRoom = reservationList[reservedRoom];

        if( currentRoom.maxGuests === allGuests ) {

          if ( 
            (currentRoom.startDate >= startDate && currentRoom.startDate <= endDate)
            ||
            (currentRoom.endDate >= startDate && currentRoom.endDate <= endDate)
                   
          ) {
            continue
          } else {
            ///
          }
        }
      }
      console.log('start build html');
    }
  })
};