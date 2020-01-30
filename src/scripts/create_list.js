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
  // let n = 0;
 
  for (let pac of arr) {
    // n++;
    let li = document.createElement('li');
    li.className = 'packages__item';
    pacList.appendChild( li );
    
    createPackage( pac, li )   
   
    // pacList.querySelector('.packages__pic').className +=`-${n}`;
  }
  
};
