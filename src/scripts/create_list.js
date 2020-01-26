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
