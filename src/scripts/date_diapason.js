// determine day possible start and end
Date.prototype.toDateInputValue = (function() {
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);

let setDiapazonHero = () => {

  //on main page
  let startDateMain = document.getElementById('start-trip-main');
  let checkInMain = startDateMain.value = new Date().toDateInputValue();
  startDateMain.setAttribute("min", checkInMain);

  //on main page
  let endDayMain = document.getElementById('end-trip-main');
  let checkOutMain = endDayMain.value = nextDay.toJSON().slice(0,10);
  endDayMain.setAttribute("min", checkOutMain);
};

let setDiapazon = () => {

  //on reservation page
  let startDate = document.getElementById('start-trip');
  let checkIn = startDate.value = new Date().toDateInputValue();
  startDate.setAttribute("min", checkIn);

  //on reservation page
  let endDay = document.getElementById('end-trip');
  let checkOut = endDay.value = nextDay.toJSON().slice(0,10);
  endDay.setAttribute("min", checkOut);
};