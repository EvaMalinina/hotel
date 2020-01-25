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
      let flats = filteredArr.slice(start, end);

      let flatList = document.querySelector('.overview__examples');
      flatList.innerHTML = '';
      for (let flat of flats) {
        let li = document.createElement('li');
        li.className = 'overview__example';
        flatList.appendChild(li);

        createFlat(flat, li);
        
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
      let flats = deserialData.slice(start, end);

      let flatList = document.querySelector('.overview__examples');
      flatList.innerHTML = '';
      for (let flat of flats) {
        let li = document.createElement('li');
        li.className = 'overview__example';
        flatList.appendChild(li);

        createFlat(flat, li);
        
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



