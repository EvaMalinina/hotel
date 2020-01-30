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


