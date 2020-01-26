// generate all list items from json
let generateAll = () => {

  let deserialData = JSON.parse(localStorage.getItem('locData'));
  // wrapper for generated list
  let flatList = document.querySelector('.overview__examples');
   
  for (let flat of deserialData) {
    
    let li = document.createElement('li');
    li.className = 'overview__example';
    flatList.appendChild(li);

    createFlat(flat, li);
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
