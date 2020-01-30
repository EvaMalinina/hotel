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

