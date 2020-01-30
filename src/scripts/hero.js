window.addEventListener('load', () => {

  if ( document.querySelector('.hero') ) {
    fullMenuBook();

    if ( document.querySelector('.rooms-suites') ) {
      loadData('../data/rooms.json', 'locData');
      document.querySelector('.rooms-suites').addEventListener('click', (e) => {

        e.preventDefault();
        showOverview();
        
        let deserialData = JSON.parse(localStorage.getItem('locData'));
        if (deserialData) {
          generateAll(deserialData);
          slide();
          zoomIn();
          selectFilter();
          paginate(filterRooms());
          search();
        }
      });

      loadData('../data/packages.json', 'locPackages');

      document.querySelector('.navigation__packages').addEventListener('click', (e) => {
        e.preventDefault();
        showPackages();
      
        let deserialData = JSON.parse(localStorage.getItem('locPackages'));
        if (deserialData) {
          generateAllPackages(deserialData);
          sortItems();
          
        } 
      });
      showInfo();
    } 
  }
  else if ( document.getElementById('availability') ) {

    // loadData('../data/packages.json', 'locPackages');
    let deserialData = JSON.parse(localStorage.getItem('locData'));
    if ( deserialData ) {
      generateAll(deserialData);
      slide();
      zoomIn();
      paginate(deserialData);
      showForm();
      datepplFilter();
    }
  }
});