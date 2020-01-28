let search = () => {
  let searchArr = [];
  let inpt = document.getElementById('search-room').oninput = function() {
   
    let val = this.value.trim().toLowerCase();
  
    let deserialData = JSON.parse(localStorage.getItem('locData'));
  
    let cancel = document.querySelector( '.search__cancel' );
    let doSearch = document.querySelector( '.search__go' );

    cancel.addEventListener('click', (e) => {
      e.preventDefault();
      this.value = '';
      searchArr = [];
      generateAll(deserialData);
      paginate(deserialData);
    });

    doSearch.addEventListener('click', (e) => {
      e.preventDefault();
     
      if ( val != '' ) {
        deserialData.forEach( function(elem) {
          
          if (elem.name.toLowerCase().search(val) != -1) {
            searchArr.push(elem);
          }
        }) 
      }
      generateAll(searchArr);
      paginate(searchArr);
    })
  }
};

