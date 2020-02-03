//cancel booking
let cancelBooking = () => {

  let cancelBtn = document.querySelector('.booking__cancel');
  if ( cancelBtn ) {
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // define current user
      let currentUser =  JSON.parse(localStorage.getItem('currentUser')).login;
     
      let arrResData = JSON.parse(localStorage.getItem('arrResData'));
     
      // delete rooms current customer reserved before from all array of reserved rooms
      let modifiedResData = arrResData.filter( room => room.customer !== currentUser);
      modifiedResData = JSON.stringify(modifiedResData);
      localStorage.setItem("arrResData", modifiedResData);

      //clean FE
      document.querySelector('.booking__rooms').innerHTML = `<p>You have no reservation.</p>`;

      let rooms = JSON.parse(localStorage.getItem('locData'));
      generateAll(rooms);
      paginate(rooms);
    })
  } 
};
// hide main sections
let showOverview = () => {
  document.getElementById('history').style.display = "none";
  document.getElementById('overview-rooms').style.display = "flex";
  document.getElementById('packages').style.display = 'none';
  document.getElementById('info').style.display = 'none';
};

let showPackages = () => {
  document.getElementById('history').style.display = 'none';
  document.getElementById('overview-rooms').style.display = 'none';
  document.getElementById('packages').style.display = 'flex';
  document.getElementById('info').style.display = 'none';
};

let showInfo = () => {
  document.querySelector('.navigation__info').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('history').style.display = 'none';
    document.getElementById('overview-rooms').style.display = 'none';
    document.getElementById('packages').style.display = 'none';
    document.getElementById('info').style.display = 'flex';
  });
};
//confirm booking
let confirmBooking = () => {
  
  if (document.querySelector('.booking__confirm')) {
    document.querySelector('.booking__confirm').addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector('.booking').style.display = 'none';
      document.querySelector('.checkout').style.display = 'flex';
      document.querySelector('.confirmation').style.display = 'none';

      linkCheckoutBg();
    })
  }
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
// create list item
let createRoom = (room, li) => { 

  let example = document.createElement('div');
      wrapperPic = document.createElement('div');
      pic = document.createElement('div');
      btnLeft = document.createElement('a');
      btnRight = document.createElement('a');
  
      title = document.createElement('h4');
  
      exampleFeatures = document.createElement('div');
      features = document.createElement('ul');

      featuresItemSize = document.createElement('li');
      featuresNumber = document.createElement('p');
      featuresText = document.createElement('p');

      featuresItemGuest = document.createElement('li');
      featuresGuest = document.createElement('p');
      featuresGuestDesc = document.createElement('p');

      featuresItemBed = document.createElement('li');
      featuresNumBed = document.createElement('p');
      featuresBedDesc = document.createElement('p');

      examplePrice = document.createElement('p');
      exampleLink = document.createElement('a');
  
  example.className = 'example';
  li.className = 'overview__example';
  li.appendChild( example );
  
  wrapperPic.className = 'example__pic-wrap';
  pic.className = 'example__pic';
  btnLeft.className = 'example__left';
  btnRight.className = 'example__right';
  wrapperPic.append( pic, btnLeft, btnRight );
  pic.style.backgroundImage = room.pic;
  btnLeft.innerHTML = '<';
  btnRight.innerHTML = '>';
  
  title.className = 'example__title';
  title.innerHTML= room.name;
  
  exampleFeatures.className = 'example__features';
  exampleFeatures.appendChild( features );
  
  features.className = 'features';
  features.append( featuresItemSize, featuresItemGuest, featuresItemBed );
  
  featuresItemSize.className = 'features__item'; 
  featuresItemGuest.className = 'features__item'; 
  featuresItemBed.className = 'features__item';

  featuresItemSize.append( featuresNumber, featuresText );
  featuresItemGuest.append( featuresGuest, featuresGuestDesc );
  featuresItemBed.append( featuresNumBed, featuresBedDesc );
  
  featuresNumber.className = 'features__number'; 
  featuresGuest.className = 'features__number'; 
  featuresNumBed.className = 'features__number';

  featuresNumber.innerHTML= room.features.msq;
  featuresGuest.innerHTML= room.features.guestNumber;
  featuresNumBed.innerHTML = room.features.bedroom;

  featuresText.className = 'features__text'; 
  featuresGuestDesc.className = 'features__text'; 
  featuresBedDesc.className = 'features__text';

  featuresText.innerHTML = room.features.msqDesc;
  featuresGuestDesc.innerHTML = room.features.guestNumberDesc;
  featuresBedDesc.innerHTML = room.features.bedroomDesc;
  
  examplePrice.className = 'example__price';
  examplePrice.innerHTML = room.price + '$';

  exampleLink.className = 'example__status';
  exampleLink.innerHTML = room.status;
  exampleLink.setAttribute('itemId', room.id);
  
  example.append(wrapperPic, title, examplePrice, exampleFeatures, exampleLink);
};

let createPackage = (pac, li) => { 

  let wrapperPic = document.createElement('div');
      pic = document.createElement('div');
  
      title = document.createElement('h4');
      desc = document.createElement('p');
      price = document.createElement('p');
  
  li.className = 'packages__item';
  li.append( wrapperPic, title, desc, price);
  
  wrapperPic.className = 'packages__pic-wrap';  
  pic.className = 'packages__pic';
  pic.style.backgroundImage = pac.pic;
  wrapperPic.appendChild( pic );

  title.className = 'packages__title';
  title.innerHTML= pac.name;
 
  desc.className = 'package__desc';
  desc.innerHTML= pac.desc;
  
  price.className = 'packages__price';
  price.innerHTML = pac.price + "$";
};
// generate all list items from json
let generateAll = (arr) => {

  // wrapper for generated list
  let roomList = document.querySelector('.overview__examples');
  roomList.innerHTML = '';
  for (let room of arr) {
    
    const li = document.createElement('li');
    li.className = 'overview__example';
    roomList.appendChild(li);

    createRoom(room, li);
  }
};

let generateAllPackages = (arr) => {

  // wrapper for generated list
  let pacList = document.querySelector('.packages__list');
  pacList.innerHTML = '';
 
  for (let pac of arr) {

    let li = document.createElement('li');
    li.className = 'packages__item';
    pacList.appendChild( li );
    
    createPackage( pac, li )   
   
  } 
};

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

    // max number of guest 5
    let maxPplReserve = 5;
    if(adultsQuantity + kidsQuantity > maxPplReserve) {
      alert( 'The maximum guests number per reservation is 5.' );
      return false;
    }

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    if (startDate > endDate) {
      alert( 'Your start day of trip can not be after the end of trip.' )
    }

    let reservationList = JSON.parse(localStorage.getItem('arrResData'));
    let deserialData = JSON.parse(localStorage.getItem('locData'));
    let finalArray = [];

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
      // console.log('isR', isReserve);
      if(!isReserve){
        finalArray.push(currentItem);
      } 
    }
    
    if (finalArray.length != 0) {
      generateAll(finalArray);
      paginate(finalArray);
    }
  })
};
// Object filter
let customeFilter = {
  "type": "all",
  "type": "room",
  "type": "suite"
};

// filtration by rooms
let filterRooms = () => {
  let deserialData = JSON.parse(localStorage.getItem('locData'));
  const type = document.getElementById('type').value;
  const result = type === 'all' ? deserialData : deserialData.filter( item => item.type === type );
  return result;
};

// filter on select change event
let selectFilter = () => {
  let select = document.getElementById('type');
  select.addEventListener('change', () => {
    
    customeFilter.type = select.value;
    filterRooms();
    paginate(filterRooms());
  })
};

let paginate = (arr) => {
  //pagination 
  let pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';
  
  let notesOnPage = 2;
  let countOfItems = Math.ceil(arr.length / notesOnPage);

  // generate paginated page
  let showPage = (function() {
  let active;
  
    return function(item) {
      if( active ) {
        active.classList.remove('active');
      }
      active = item;
      
      item.classList.add('active');

      let pageNum = +item.innerHTML;

      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;
      let rooms = arr.slice(start, end);

      let roomList = document.querySelector('.overview__examples');
      roomList.innerHTML = '';
      for (let room of rooms) {
        let li = document.createElement('li');
        li.className = 'overview__example';
        roomList.appendChild(li);

        createRoom(room, li);
        // reserveRoom();
      }
      slide();
      zoomIn();
    };
  }()); 

  // pagination links
  let items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let paginationLink = document.createElement('li');
    paginationLink.innerHTML = i;
    pagination.appendChild(paginationLink);
    items.push(paginationLink);
  }
  
  // first generated page
  showPage(items[0]);

  // change generated page on clink on pagination link
  for (let item of items) {
    item.addEventListener('click', function() {
      showPage(this);
    })
  };
};



window.addEventListener('load', () => {

  if ( document.querySelector('.hero') ) {
    fullMenuBook();
    showContent();

    document.getElementById('booking-open').addEventListener('click', () => {
      setDiapazonHero();
    });

    if ( document.getElementById('availability-main') ) {
      
      document.getElementById('availability-main').addEventListener('click', () => {
        saveFormData();
      });
    }

    if ( document.querySelector('.rooms-suites') ) {
      loadData('../data/rooms.json', 'locData');
      document.querySelector('.rooms-suites').addEventListener('click', (e) => {

        e.preventDefault();
        showOverview();
        
        let deserialData = JSON.parse(localStorage.getItem('locData'));
        if (deserialData) {
          generateAll(deserialData);
          slide();
          zoomIn();
          selectFilter();
          paginate(filterRooms());
          search();
        }
      });

      loadData('../data/packages.json', 'locPackages');

      document.querySelector('.navigation__packages').addEventListener('click', (e) => {
        e.preventDefault();
        showPackages();
      
        let deserialData = JSON.parse(localStorage.getItem('locPackages'));
        if (deserialData) {
          generateAllPackages(deserialData);
          sortItems();
          
        } 
      });
      showInfo();
    } 
  }
  else if ( document.getElementById('availability') ) {
    loadData('../data/rooms.json', 'locData');
    setDiapazon();
    setFormData();
    
    document.getElementById('availability').addEventListener('click', () => { 
    
      let deserialData = JSON.parse(localStorage.getItem('locData'));
      if ( deserialData ) {
        generateAll(deserialData);
        slide();
        zoomIn();
        paginate(deserialData);
        showForm();
        datepplFilter();
      }
    })    
  }
});
let loadData = (url, locStorName) => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      serialData = JSON.stringify(data);
      localStorage.setItem(`${locStorName}`, serialData);
      
    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in ' + url + '');
    }
  };

  request.onerror = function() {
    // there was a connection error of some sort
    console.log('connection error');
  };
  request.send();
};


let logOutUser = () => {
  
  let logOut = document.getElementById('logout-link');
  
  let logLog = document.getElementById('log-login').value;
  let logPas = document.getElementById('log-password').value;
  let logObj = { logLog, logPas };

  //identifier
  let userCoockie = logObj.logLog;

  logOut.addEventListener('click', () => {
   
    logOut.style.display = 'none';
    let logIn = document.getElementById('login-link');
    logIn.style.display = 'flex';

    const logForm = document.getElementById('login');
    logForm.style.display = 'none';
    //remove coockie
    document.cookie = 'cookie'+ userCoockie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    logForm.style.display = 'none';
    let oldList = document.querySelector('.booking__customer');
    if ( oldList ) {
      oldList.parentNode.removeChild(oldList);
    }
    
    if(typeof localStorage['currentUser'] !== 'undefined'){
      delete localStorage['currentUser'];
    }
   
    openReg();
    register();
    openLogin();
    login();
    setAdmin();
  });
};

let fullMenuBook = () => {
  const hero = document.querySelector('.hero');

  //to disable scroll
  let noScroll = () => {
    window.scrollTo(0, 0);
  }

  let openMenu = () => {
    document.getElementById('menu-open').addEventListener('click', function() {
    
      if( hero.className == 'hero' ) {

        hero.classList.add('hero_fullmenu');
        window.addEventListener('scroll', noScroll);
        
      } else if ( hero.className == 'hero hero_fullmenu' ) {

        hero.classList.remove('hero_fullmenu');
        window.removeEventListener('scroll', noScroll); 
      }
    });
  }


  let openBooking = () => {
    document.getElementById('booking-open').addEventListener('click', function() {
    
      if( hero.className == 'hero' ) {

        hero.classList.add('hero_fullbook');
        window.addEventListener('scroll', noScroll);
        
      } else if ( hero.className == 'hero hero_fullbook' ) {

        hero.classList.remove('hero_fullbook');
        window.removeEventListener('scroll', noScroll); 
      } 
    });
  }

  openMenu();
  openBooking();
};




let showForm = () => {
  
  let isRegister = false;
  if (typeof localStorage['currentUser'] !== 'undefined') {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const regUsers = JSON.parse(localStorage.getItem('registeredUsers'));
  
      if (regUsers) {
        const user = regUsers.find(user => user.regLog === currentUser.login && user.regPas === currentUser.password);
      
        if (user) {
          linkSelectBg();
          hideLogForm();
          startSession();
          
          reserveRoom();
          showBooking();
          
          confirmBooking();
          toLastConfirm();
          logOutUser();

          isRegister = true;
        } else {
          alert('There is no such user. Maybe you did a mistake in login or password.');
        }
      } else {
        alert('There is no such registered user.')
      }
  }
  if(!isRegister){
    openReg();
    register();
    openLogin();
    login();
    setAdmin();
  }
}

const regForm = document.getElementById('registration');
const logForm = document.getElementById('login');

let openReg = () => {

  let regLink = document.getElementById('register-link');
  regLink.addEventListener('click', (e) => {
    e.preventDefault();
    regForm.style.display = 'flex';
    logForm.style.display = 'none';
  });
};

let register = () => {
  let regBtn = document.getElementById('reg-btn');
  let regUsersArr = [{ 'regLog': 'admin', 'regPas': '12345' }];

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let regLog = document.getElementById('reg-login').value;
    let regPas = document.getElementById('reg-password').value;
    let regObj = { regLog, regPas };

    regUsersArr.push(regObj);
    const regUsersData = JSON.stringify(regUsersArr);

    Promise.all([
      hideRegForm(),
      localStorage.setItem("registeredUsers", regUsersData),
    
    ]).then(
      result => alert("Thank you for reservation! Now login please."),
      error => alert("Sorry you can not be registered. Please contact us by mail."),
    );
  })
};

let openLogin = () => {

  let regLink = document.getElementById('login-link');
  regLink.addEventListener('click', () => {
    
    logForm.style.display = 'flex';
    regForm.style.display = 'none';
  })
};

let setAdmin = () => {
  //push admin to registered users arr
  let regUsersArr = [{ regLog: "admin", regPas: "12345" }];
  const regUsersData = JSON.stringify(regUsersArr);
  localStorage.setItem("registeredUsers", regUsersData);
}

let login = () => {
  let logBtn = document.getElementById('log-btn');

  logBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let logLog = document.getElementById('log-login').value;
    let logPas = document.getElementById('log-password').value;
    let logObj = { logLog, logPas };
    
    const regUsers = JSON.parse(localStorage.getItem('registeredUsers'));

    if (regUsers) {
      const user = regUsers.find(user => user.regLog === logObj.logLog && user.regPas === logObj.logPas);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify({login: logLog, password: logPas}));
       
        hideLogForm();
        startSession();
        logOutUser();
       
        if (getCookie('cookieadmin')) {
          showAdminPanel();
        }
      } else {
        alert('There is no such user. Maybe you did a mistake in login or password.');
      }
    } else {
      alert('There is no such registered user.')
    }
  })
};

let hideLogForm = () => {
  logForm.style.display = 'none';
  let logOut = document.getElementById('logout-link');
  logOut.style.display = 'flex';
  let logIn = document.getElementById('login-link');
  logIn.style.display = 'none';
};

let hideRegForm = () => {
  regForm.style.display = 'none';
};

let showAdminPanel = () => {
  document.querySelector('.booking').innerHTML = '';

  let reservationList = JSON.parse(localStorage.getItem('arrResData'));

  let list = document.querySelector('.booking');
  list.className = 'booking booking__admin'


  for (item of reservationList) {
    let customerList = document.createElement('div');
    customerList.className = 'booking__item'
    list.appendChild(customerList);

    let roomName = document.createElement('h4');
    roomName.innerHTML = item.name;

    let startDate = document.createElement('p');
    startDate.innerHTML = 'Start date: ' + item.startDate;
    let endDate = document.createElement('p');
    endDate.innerHTML = 'End date: ' + item.endDate;

    let customer = document.createElement('p');
    customer.innerHTML = 'Customer: ' + item.customer;

    customerList.append(roomName, startDate, endDate, customer);
  }
}




let reserveRoom = () => {

  let links = document.querySelectorAll('.example__status');

  // // make reservation link active
  // for (link of links) {
  //   link.classList.add('example__status_active');
  // }

  let alreadyResData = JSON.parse(localStorage.getItem('arrResData'));

  if (alreadyResData) {
    arrReserved = alreadyResData;
  } else {
    arrReserved = [];
  }
 
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

}


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
let search = () => {
  let searchArr = [];
  let inpt = document.getElementById('search-room').oninput = function(e) {
    e.preventDefault();
    let deserialData = JSON.parse(localStorage.getItem('locData'));
    
    let val = this.value.trim().toLowerCase();
  
    if ( val != '' ) {

      for (elem of deserialData) {
        if ( elem.name.toLowerCase().search(val) != -1 ) {

          searchArr.push(elem);
        } 
        // else if ( elem.name.toLowerCase().search(val) != 1 ){
        //   throw console.error('error');
        // }
      }
    
      generateAll(searchArr);
      paginate(searchArr);  
      searchArr = []; 

    } else {
      generateAll(deserialData);
      paginate(deserialData);
    }
  
    let cancel = document.querySelector( '.search__cancel' );

    cancel.addEventListener('click', (e) => {
      e.preventDefault();
      this.value = '';
      searchArr = [];
      generateAll(deserialData);
      paginate(deserialData);
    });
  }
};


// generate reservation of user
let showBooking = () => {

  if ( JSON.parse(localStorage.getItem('currentUser')) !== undefined) {

    let currentUser =  JSON.parse(localStorage.getItem('currentUser')).login;
    
    let reservation = JSON.parse(localStorage.getItem('arrResData'));

    if (reservation) {
        // filter only current cectomer booking
      let userReserv = reservation.filter( room => room.customer === currentUser);

      if (userReserv) {

        let list = document.querySelector('.booking__list');

        let customBooking = document.createElement('div');
        let customRooms = document.createElement('div');
        let customActions = document.createElement('div');
    
        document.querySelector('.container_column').style.flexDirection = "column-reverse";

        if (!document.querySelector('.booking__customer')) {
          list.parentNode.appendChild(customBooking).className = 'booking__customer';
        }

        customRooms.className = "booking__rooms";
        customRooms.innerHTML = `<h4>Your booking:</h4>`;

        customActions.className = "booking__actions";
        let bookConfirm = document.createElement('a');
        let bookCancel = document.createElement('a');
        bookConfirm.className = "booking__btn booking__confirm";
        bookCancel.className = "booking__btn booking__cancel";

        bookConfirm.innerHTML = 'Confirm';
        bookCancel.innerHTML = 'Cancel';

        customActions.append(bookConfirm, bookCancel)

        customBooking.append(customRooms, customActions);
        
        for ( item of userReserv ) {
          let roomName = document.createElement('h4');
          roomName.innerHTML = item.name;
          let p = document.createElement('p');
          p.innerHTML = item.status + ' ✔︎';
          customRooms.append(roomName, p);
        }
      }
    }  
  } 
};
let showContent = () => {
  let logo = document.querySelector('.welcome__logo');
  let title = document.querySelector('.welcome__title');
  let smallTitle = document.querySelector('.welcome__small-title');
  let text = document.querySelector('.welcome__text');
  let smallText = document.querySelector('.welcome__small-text');

  setTimeout(function(){
    logo.style.opacity = '1';
  }, 500);
 
  setTimeout(function(){
    title.style.opacity = '1';
  }, 1000);
  
  setTimeout(function(){
    smallTitle.style.opacity = '1';
  }, 1500);

  setTimeout(function(){
    text.style.opacity = '1';
  }, 2000);

  setTimeout(function(){
    smallText.style.opacity = '1';
  }, 2500);
};
// slide function
let slide = () => {

  //return new array from object
  Array.from( document.querySelectorAll('div.example__pic'), ( pic, index ) => {
    const leftBtn = pic.parentNode.querySelector( '.example__left' );
    const rightBtn = pic.parentNode.querySelector( '.example__right' );

    // slide left
    if (leftBtn) {
      leftBtn.addEventListener( 'click', () => {
        let currentPosX = pic.style.backgroundPositionX; 
        currentPosX = /-?\d+/.exec( currentPosX );
      
        let stepLeft = -230;
        pic.style.backgroundPositionX = `${ currentPosX - stepLeft }` + "px";
        pic.style.transition = 0.8 +"s";    
      } );  
    }

    // slide right
    if (rightBtn) {
      rightBtn.addEventListener( 'click', ( event ) => {
        event.preventDefault();
        let currentPosX = pic.style.backgroundPositionX; 
        currentPosX = /-?\d+/.exec( currentPosX );
      
        let stepRight = 230;
        pic.style.backgroundPositionX = `${ currentPosX - stepRight }` + "px";
        pic.style.transition = 0.6 +"s";
      } );   
    }
  });
};

//zoom item
let zoomIn = () => {

  //return new array from object
  Array.from( document.querySelectorAll('div.example__pic-wrap'), ( item ) => {
    const pic = item.querySelector('.example__pic');

    //zoom in and zoom out
    pic.addEventListener('click', (e) => {
      e.preventDefault();

      item.classList.toggle('wrap-active');
      
    });
  });

};


// Object filter
let customeSort = {
  "pac-rice": "cheapest",
  "pac-rice": "mostexpansive"
};

// sort by price
let sortItems = () => {

  document.getElementById('pac-price').addEventListener('change', () => {

    let list = JSON.parse(localStorage.getItem('locPackages'));

    const sortType = document.getElementById('pac-price').value;

    if ( sortType == 'cheapest') {
     
      list.sort(function(a, b) { return a.price - b.price }); 
      
      
      generateAllPackages(list);
    } else if ( sortType == 'mostexpansive') {
      list.sort(function(a, b) { return b.price - a.price }); 
      
      generateAllPackages(list);
    }
  });
  
};


  
let startSession = () => {
  let logLog = document.getElementById('log-login').value;
  let logObj = { logLog };

  //identifier
  let userCoockie = logObj.logLog;
  document.cookie = 'cookie'+ userCoockie + '=' + userCoockie +'; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/';
};

let getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}