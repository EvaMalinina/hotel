//confirm booking
let confirmBooking = () => {

  document.querySelector('.booking__confirm').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.booking').style.display = 'none';
    document.querySelector('.checkout').style.display = 'flex';
    document.querySelector('.confirmation').style.display = 'none';
  })
};