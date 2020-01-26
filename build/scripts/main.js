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
// hide main sections
let showOverview = () => {
  document.getElementById('history').style.display = "none";
  document.getElementById('overview-rooms').style.display = "flex";
  document.getElementById('packages').style.display = 'none';
  document.getElementById('info').style.display = 'none';
};

let showPackages = () => {
  document.querySelector('.navigation__packages').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('history').style.display = 'none';
    document.getElementById('overview-rooms').style.display = 'none';
    document.getElementById('packages').style.display = 'flex';
    document.getElementById('info').style.display = 'none';
  });
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
  wrapperPic.appendChild( pic );

  title.className = 'packages__title';
  title.innerHTML= pac.name;
 
  desc.className = 'package__desc';
  desc.innerHTML= pac.desc;
  
  price.className = 'packages__price';
  price.innerHTML = pac.price + "$";
};
// generate all list items from json
let generateAll = () => {

  let deserialData = JSON.parse(localStorage.getItem('locData'));
  // wrapper for generated list
  let roomList = document.querySelector('.overview__examples');
   
  for (let room of deserialData) {
    
    let li = document.createElement('li');
    li.className = 'overview__example';
    roomList.appendChild(li);

    createRoom(room, li);
  }
};

let generateAllPackages = () => {

  let deserialData = JSON.parse(localStorage.getItem('locPackages'));
  // wrapper for generated list
  let pacList = document.querySelector('.packages__list');
   
  for (let pac of deserialData) {
    
    let li = document.createElement('li');
    li.className = 'packages__item';
    pacList.appendChild( li );

    createPackage( pac, li ); 
  }
};

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

let paginateFiltArr = () => {
  //pagination 
  let pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  let filteredArr = filterRooms();
  
  let notesOnPage = 2;
  let countOfItems = Math.ceil(filteredArr.length / notesOnPage);

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
      let rooms = filteredArr.slice(start, end);

      let roomList = document.querySelector('.overview__examples');
      roomList.innerHTML = '';
      for (let room of rooms) {
        let li = document.createElement('li');
        li.className = 'overview__example';
        roomList.appendChild(li);

        createRoom(room, li);
        
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

// filter on select change event
let selectFilter = () => {
  let select = document.getElementById('type');
  select.addEventListener('change', () => {
    
    customeFilter.type = select.value;
    filterRooms();
    paginateFiltArr();
  })
};

let paginate = () => {
  //pagination 
  let pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  let deserialData = JSON.parse(localStorage.getItem('locData'));
  
  let notesOnPage = 2;
  let countOfItems = Math.ceil(deserialData.length / notesOnPage);

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
      let rooms = deserialData.slice(start, end);

      let roomList = document.querySelector('.overview__examples');
      roomList.innerHTML = '';
      for (let room of rooms) {
        let li = document.createElement('li');
        li.className = 'overview__example';
        roomList.appendChild(li);

        createRoom(room, li);
        
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
    showPackages();
    loadPackages();
    generateAllPackages();
    showInfo();

    if (document.querySelector('.rooms-suites')) {
      document.querySelector('.rooms-suites').addEventListener('click', (e) => {
        e.preventDefault();
        showOverview();
        loadData();
        generateAll();
        slide();
        zoomIn();
        selectFilter();
        paginateFiltArr();
        
      });
    }
  }
  else if ( document.getElementById('availability') ) {

    loadData();
    generateAll();
    slide();
    zoomIn();
    paginate();
    showForm();
  }

});
let loadData = () => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', '../data/rooms.json', true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      const serialData = JSON.stringify(data);
      localStorage.setItem("locData", serialData);

    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in rooms.json file');
    }
  };

  request.onerror = function() {
    // there was a connection error of some sort
    console.log('connection error');
  };
  request.send();
};

let loadPackages = () => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', '../data/packages.json', true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      const serialData = JSON.stringify(data);
      localStorage.setItem("locPackages", serialData);

    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in package.json file');
    }
  };

  request.onerror = function() {
    // there was a connection error of some sort
    console.log('connection error');
  };
  request.send();
};
let logOutUser = () => {
  let logOut = document.getElementById('login-link');

  let logLog = document.getElementById('log-login').value;
  let logPas = document.getElementById('log-password').value;
  let logObj = { logLog, logPas };
  //identifier
  let userCoockie = logObj.logLog;

  logOut.addEventListener('click', () => {
    logOut.innerHTML = 'My Account';
    //remove coockie
    document.cookie = 'cookie'+ userCoockie + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    logForm.style.display = 'none';
    let oldList = document.querySelector('.booking__customer');
    oldList.parentNode.removeChild(oldList);
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

  openReg();
  register();
  openLogin();
  login();
  setAdmin();
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
  let regUsersArr = [{ 'regLog': 'admin' }, { 'regPas': '12345' }];

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let regLog = document.getElementById('reg-login').value;
    let regPas = document.getElementById('reg-password').value;
    let regObj = { regLog, regPas };

    regUsersArr.push(regObj);
    const regUsersData = JSON.stringify(regUsersArr);
    localStorage.setItem("registeredUsers", regUsersData);

    hideRegForm();
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
        linkSelectBg();
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
  let logOut = document.getElementById('login-link');
  logOut.innerHTML = 'Log out';
};

let hideRegForm = () => {
  let regBtn = document.getElementById('reg-btn');

  regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    regForm.style.display = 'none';
  });
};

let showAdminPanel = () => {
  document.querySelector('.booking').innerHTML = '';

  let reservationList = JSON.parse(localStorage.getItem('arrResData'));

  let list = document.querySelector('.booking');
  list.className = 'booking booking__admin'

  let customerList = document.createElement('div');
  list.appendChild(customerList);

  for (item of reservationList) {
    let roomName = document.createElement('h4');
    roomName.innerHTML = item.name;
    let p = document.createElement('p');
    p.innerHTML = item.status;
    customerList.append(roomName, p);
  }
}

// let alertLogin = () => {
//   let reserveBtn = document.querySelector('.example__link');
//   reserveBtn.addEventListener('click', () => {
//     alert('Please log in or register if you are still not with us. Thanks :)');
//   });
// }



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

// let search = () => {
 
//   let inpt = document.getElementById('search-this');
//   let main = document.querySelector('.main').innerHTML;

//   let cancel = document.querySelector( '.search__cancel' );
//   let doSearch = document.querySelector( '.search__go' );

//   cancel.addEventListener('click', (e) => {
//     e.preventDefault();
//     inpt.value = '';
//     document.querySelector('.main').innerHTML = main;
//     window.location = '';
//   });

//   doSearch.addEventListener('click', (e) => {
//     e.preventDefault();

//     // convert input value to RegExp
//     searchOnPage = '/'+inpt.value+'/g';
//     content = document.querySelector('main').innerHTML;

//     // cut all tags name and braces
//     result = content.match(/>(.*?)</gi); 

//     // save arr what was found on the page
//     result_arr = [];
   
//     if ( inpt.value.length <= 2 ) {
//       alert('You need to write more then 2 characters to search!');
//       document.querySelector('.main').innerHTML = main;
//       window.location = '';

//     } else if ( inpt.value.length >= 3) {

//       //highlight text what was found
//       for(let i = 0; i < result.length; i++ ) {
//         result_arr[i] = result[i].replace(
//           eval(searchOnPage), 
//           '<span style="background-color:yellow;">'+inpt.value+'</span>'
//         )
//       }; 

//       // change found text with previous from old arr
//       for(let i = 0; i < result.length; i++ ) {
//         content = content.replace(result[i],result_arr[i]);  
//       }

//       // change html code
//       document.querySelector('main').innerHTML = content; 
//       window.location = '#' + inpt.value;
//     }
//   });
// };

// search();

// generate reservation of user
let showBooking = () => {
  let reservation = JSON.parse(localStorage.getItem('arrResData'));

  let list = document.querySelector('.booking__list');

  let customBooking = document.createElement('div');
  let customRooms = document.createElement('div');
  let customActions = document.createElement('div');

  document.querySelector('.container_column').style.flexDirection = "column-reverse";
  list.parentNode.appendChild(customBooking).className = 'booking__customer';

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
   
  for (item of reservation) {
    let roomName = document.createElement('h4');
    roomName.innerHTML = item.name;
    let p = document.createElement('p');
    p.innerHTML = item.status + ' ✔︎';
    customRooms.append(roomName, p);
  }
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


let startSession = () => {
  let logLog = document.getElementById('log-login').value;
  let logPas = document.getElementById('log-password').value;
  let logObj = { logLog, logPas };
  //identifier
  let userCoockie = logObj.logLog;
  // document.cookie = 'cookie'+`${userCoockie}` + '=' + `${userCoockie}`+'; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/'+`${userCoockie}`+'/';
  let setCoockie = document.cookie = 'cookie'+ userCoockie + '=' + userCoockie +'; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/';
  
  let cookieYes = getCookie('cookie'+ userCoockie);
  if (cookieYes) {
    reserveRoom();

    if (localStorage.getItem('arrResData')) {
      showBooking();
      cancelBooking();
      confirmBooking();
      toLastConfirm();
    }
  }
};

let getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}