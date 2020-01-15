//determine timezone
Date.prototype.toDateInputValue = (function() {
  let local = new Date(this);
  
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

let checkin = document.getElementById('start-trip').value = new Date().toDateInputValue();

let nextday = new Date();
nextday.setDate(nextday.getDate() + 1);

let checkout = document.getElementById('end-trip').value = nextday.toJSON().slice(0,10);
