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
