let saveFormData = () => {
   // get all values choosed in form by user
   let startDate = document.getElementById('start-trip-main').value;
   let endDate = document.getElementById('end-trip-main').value;

   let adultsQuantity = document.getElementById('adults-quantity-main').value;
   let kidsQuantity = document.getElementById('kids-quantity-main').value;
   adultsQuantity = parseInt(adultsQuantity);
   kidsQuantity = parseInt(kidsQuantity);

   let choosedDates = [];
   choosedDates.push(startDate, endDate, adultsQuantity, kidsQuantity)

   choosedDates = JSON.stringify(choosedDates);
   localStorage.setItem("choosedDates", choosedDates)
};

let setFormData = () => {
  // set all values choosed in form by user
  let choosedDates = JSON.parse(localStorage.getItem('choosedDates'));

  document.getElementById('start-trip').value = choosedDates[0];
  document.getElementById('end-trip').value = choosedDates[1];

  document.getElementById('adults-quantity').value = choosedDates[2];
  document.getElementById('kids-quantity').value = choosedDates[3];
};