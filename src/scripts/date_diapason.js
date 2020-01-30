//determine day possible start and end
Date.prototype.toDateInputValue = (function() {
const local = new Date(this);
local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
return local.toJSON().slice(0,10);
});

let startDate = document.getElementById('start-trip');
let checkIn = startDate.value = new Date().toDateInputValue();
startDate.setAttribute("min", checkIn);


let nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);

let endDay = document.getElementById('end-trip');
let checkOut = endDay.value = nextDay.toJSON().slice(0,10);
endDay.setAttribute("min", checkOut);


