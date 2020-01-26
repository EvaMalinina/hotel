//confirm booking
let confirmBooking = () => {

  document.querySelector('.booking__confirm').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.booking').style.display = 'none';
    document.querySelector('.checkout').style.display = 'flex';
    document.querySelector('.confirmation').style.display = 'none';

    linkCheckoutBg();
  })
};

let linkSelectBg = () => {
  let link = document.querySelector('.link-select');
  link.style.backgroundColor = 'darkgray';
};

let linkCheckoutBg = () => {
  let link = document.querySelector('.link-checkout');
  link.style.backgroundColor = 'darkgray';
};

//go to last confirm page
let toLastConfirm = () => {
  document.querySelector('.form__last-confirm').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.checkout').style.display = 'none';
    document.querySelector('.confirmation').style.display = 'flex';

    linkConfirmBg();
  })
}

let linkConfirmBg = () => {
  let link = document.querySelector('.link-confirm');
  link.style.backgroundColor = 'darkgray';
};