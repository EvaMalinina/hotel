//cancel booking
let cancelBooking = () => {

  document.querySelector('.booking__cancel').addEventListener('click', (e) => {
    e.preventDefault();

    //clean localStorage
    JSON.parse(localStorage.getItem('arrResData'));
    itemsCanceled = [];
    localStorage.setItem("arrResData", itemsCanceled);

    //clean FE
    document.querySelector('.booking__rooms').innerHTML = `<p>You have no reservation.</p>`;
  })
};