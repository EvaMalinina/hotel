let reserveRoom = () => {

  document.querySelector('.example__status').addEventListener('click', () => {
    
    let links = document.querySelectorAll('.example__status');

    const arrReserved = [];
    for (i = 0; i < links.length; i++) {
    
      links[i].onclick = function() {
       
        let startDate = document.getElementById('start-trip').value;
        let endDate = document.getElementById('end-trip').value;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let itemId = this.getAttribute('itemId');
      
        let rooms = JSON.parse(localStorage.getItem('locData'));
        for(let key in rooms){
          
          if(rooms[key].id == itemId){
            rooms[key].startDate = startDate;
            rooms[key].endDate = endDate;
            rooms[key].customer = currentUser.login;
            arrReserved.push(rooms[key]);
            this.innerHTML = 'Reserved';
            break;
          }
        }
        
        const arrResData = JSON.stringify(arrReserved);
        localStorage.setItem("arrResData", arrResData);

        let oldList = document.querySelector('.booking__customer');
        if ( oldList ) {
          oldList.parentNode.removeChild(oldList);
        }
        showBooking();
        cancelBooking();
        confirmBooking();
        toLastConfirm();
      }
    };
  })
}