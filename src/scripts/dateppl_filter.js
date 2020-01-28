let datepplFilter = () => {
  document.getElementById('availability').addEventListener('click', (e) => {
    e.preventDefault();

    // get all values choosed in form by user
    let startDate = document.getElementById('start-trip').value;
    let endDate = document.getElementById('end-trip').value;

    let adultsQuantity = document.getElementById('adults-quantity').value;
    let kidsQuantity = document.getElementById('kids-quantity').value;
    adultsQuantity = parseInt(adultsQuantity);
    kidsQuantity = parseInt(kidsQuantity);

   // only numeric values for quantity inputs
    if(isNaN(adultsQuantity) || isNaN(kidsQuantity)) {
      alert( 'Adults and kids quantity have to be a numeric value.' );
    }

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    let reservationList = JSON.parse(localStorage.getItem('arrResData'));
    let deserialData = JSON.parse(localStorage.getItem('locData'));
    let finallyArray = [];

    for ( let room in deserialData ) {

      let currentItem = deserialData[room];
      let allGuests = adultsQuantity + kidsQuantity;
     
      // sort out items with less ppl quantity
      if(currentItem.features.guestNumber < allGuests ) {
        continue
      };
      let isReserve = false;
      for ( let reservedRoom in reservationList ) {
      
        let currentRoom = reservationList[reservedRoom];
      
        if( currentRoom.features.guestNumber <= allGuests ) {
    
          if ( 
            // if already reserved room start day after and before choosed start day by user
            (new Date(currentRoom.startDate) >= startDate && new Date(currentRoom.startDate) <= endDate)
            ||
            // if already reserved room end day after and before choosed end day by user
            (new Date(currentRoom.endDate) >= startDate && new Date(currentRoom.endDate) <= endDate)
          ) {
            if(currentRoom.id === currentItem.id){
              isReserve = true;
              continue;
            }
          }
        }else{
          isReserve = true;
        }
      }
      console.log('isR', isReserve);
      if(!isReserve){
        finallyArray.push(currentItem);
      } 
    }
    generateAll(finallyArray);
  })
};