const data = [
  {
    "pic": " ",
    "name": "Junior room",
    "features": {
      "msq": "35-40",
      "msqDesc": "size m2",
      "guestNumber": "2",
      "guestNumberDesc": "max guests",
      "bedroom": "1",
      "bedroomDesc": "bedroom"
    },
    "link": "url(#)",
    "type": "room"
  },
  {
    "pic": " ",
    "name": "Comfort room",
    "features": {
      "msq": "45-55",
      "msqDesc": "size m2",
      "guestNumber": "2",
      "guestNumberDesc": "max guests",
      "bedroom": "1",
      "bedroomDesc": "bedroom"
    },
    "link": "url(#)",
    "type": "room"
  },
  {
    "pic": " ",
    "name": "Specious room",
    "features": {
      "msq": "55-75",
      "msqDesc": "size m2",
      "guestNumber": "3",
      "guestNumberDesc": "max guests",
      "bedroom": "2",
      "bedroomDesc": "bedroom"
    },
    "link": "url(#)",
    "type": "room"
  },
  {
    "pic": " ",
    "name": "Junior suite",
    "features": {
      "msq": "45-55",
      "msqDesc": "size m2",
      "guestNumber": "2",
      "guestNumberDesc": "max guests",
      "bedroom": "1",
      "bedroomDesc": "bedroom"
    },
    "link": "url(#)",
    "type": "suite"
  },
  {
    "pic": " ",
    "name": "Premier suite",
    "features": {
      "msq": "65-85",
      "msqDesc": "size m2",
      "guestNumber": "4",
      "guestNumberDesc": "max guests",
      "bedroom": "1",
      "bedroomDesc": "bedroom"
    },
    "link": "url(#)",
    "type": "suite"
  },
  {
    "pic": " ",
    "name": "President suite",
    "features": {
      "msq": "100-125",
      "msqDesc": "size m2",
      "guestNumber": "5",
      "guestNumberDesc": "max guests",
      "bedroom": "2",
      "bedroomDesc": "bedroom"
    },
    "link": "url(#)",
    "type": "suite"
  }
]

window.addEventListener('load', () => {
  //create basic list
});

const select = document.querySelector('.overview-select');
let flatList = document.querySelector('.overview__examples');

// Object filter
let customeFilter = {
  "type": "all",
  "type": "room",
  "type": "suite"
};

// filtration by rooms
function filterRooms(){
  return data.filter( item => Object.entries(customeFilter)
  .filter( ([ field, value ]) => value !== 'all' )
  .every( ([ field, value ]) => item[ field ] === value ));
}

// filter by select option
select.addEventListener('change', () => {
  customeFilter.type = select.value;
  let filteredArr = filterRooms();

  // console.log(filteredArr, 'filteredArr');

  //pagination items per page
  let notesOnPage = 2;
  let countOfItems = Math.ceil(filteredArr.length / notesOnPage);
  console.log(countOfItems, "countOfItems");

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

     let notes = data.slice(start, end);

     flatList.innerHTML = '';
     for (let note of notes) {
       let li = document.createElement('li');
       li.className = 'overview__example';
       flatList.appendChild(li);

       createFlat(note, li);
     }
   };
 }());

  let pagination = document.querySelector('.pagination');

  // pagination links
  let items = [];
  for (let i = 1; i <= countOfItems; i++) {
    let liPagination = document.createElement('li');
    liPagination.innerHTML = i;
    pagination.appendChild(liPagination);
    items.push(liPagination);
  }

  showPage(items[0]);

  for (let item of items) {
    item.addEventListener('click', function() {
      showPage(this);
    })
  };
});

const createFlat = (note, li) => {

  let example = document.createElement('div');
      wrapperPic = document.createElement('div');
      pic = document.createElement('div');
  
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
  
      exampleLink = document.createElement('a');
  
  example.className = 'example';
  li.className = 'overview__example';
  li.appendChild( example );
  
  wrapperPic.className = 'example__pic-wrap';
  pic.className = 'example__pic';
  wrapperPic.appendChild( pic );
  pic.innerHTML = note.pic;
  
  title.className = 'example__title';
  title.innerHTML= note.name;
  
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

  featuresNumber.innerHTML= note.features.msq;
  featuresGuest.innerHTML= note.features.guestNumber;
  featuresNumBed.innerHTML = note.features.bedroom;

  featuresText.className = 'features__text'; 
  featuresGuestDesc.className = 'features__text'; 
  featuresNumBed.className = 'features__text';

  featuresText.innerHTML = note.features.msqDesc;
  featuresGuestDesc.innerHTML = note.features.guestNumberDesc;
  featuresNumBed.innerHTML = note.features.bedroomDesc;
  
  exampleLink.className = 'example__link';
  
  example.append(wrapperPic, title, exampleFeatures, exampleLink);
};


