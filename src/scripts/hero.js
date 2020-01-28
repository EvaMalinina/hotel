window.addEventListener('load', () => {

  if ( document.querySelector('.hero') ) {
    fullMenuBook();
   
    showPackages();
    loadData('../data/packages.json', 'locPackages');
    let deserialData = JSON.parse(localStorage.getItem('locPackages'));
    generateAllPackages(deserialData);
    sortItems();
    showInfo();

    if ( document.querySelector('.rooms-suites') ) {
      document.querySelector('.rooms-suites').addEventListener('click', (e) => {

        e.preventDefault();
        showOverview();
        loadData('../data/rooms.json', 'locData');

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
    } 
  }
  else if ( document.getElementById('availability') ) {

    loadData();
    generateAll(deserialData);
    slide();
    zoomIn();
    paginate(deserialData);
    showForm();
    datepplFilter();
  }

});