window.addEventListener('load', () => {
  let deserialData = JSON.parse(localStorage.getItem('locData'));

  if ( document.querySelector('.hero') ) {
    fullMenuBook();
    showPackages();
    loadPackages();
    generateAllPackages();
    sortItems();
    showInfo();

    if (document.querySelector('.rooms-suites')) {
      document.querySelector('.rooms-suites').addEventListener('click', (e) => {
        e.preventDefault();
        showOverview();
        loadData();
        generateAll(deserialData);
        slide();
        zoomIn();
        selectFilter();
        paginateFiltArr();
        
      });
    }
  }
  else if ( document.getElementById('availability') ) {

    loadData();
    generateAll(deserialData);
    slide();
    zoomIn();
    paginate();
    showForm();
    datepplFilter();
  }

});