let reserveRoom = () => {

  document.querySelector('.example__status').addEventListener('click', (e) => {
    e.preventDefault();
  
    let links = document.querySelectorAll('.example__status');

    const arrReserved = [];
    for (i = 0; i < links.length; i++) {

      links[i].onclick = function() {
        this.innerHTML = 'Reserved';
        let example = this.parentNode;
        
        let name = example.querySelector('.example__title').innerHTML;
        let status = example.querySelector('.example__status').innerHTML;
        const itemReserved = { name, status };
       
        arrReserved.push(itemReserved);
        
        const arrResData = JSON.stringify(arrReserved);
        localStorage.setItem("arrResData", arrResData);

        let oldList = document.querySelector('.booking__customer');
        oldList.parentNode.removeChild(oldList);
        showBooking();
        cancelBooking();
        confirmBooking();
        toLastConfirm();
      }
    };
  })
}