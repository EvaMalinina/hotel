window.addEventListener('load', () => {
  
  if ( document.querySelector('.hero') ) {
    fullMenuBook();
    showPackages();
    loadPackages();
    generateAllPackages();

    if (document.querySelector('.rooms-suites')) {
      document.querySelector('.rooms-suites').addEventListener('click', (e) => {
        e.preventDefault();
        hideMain();
        loadData();
        generateAll();
        slide();
        zoomIn();
        selectFilter();
        paginateFiltArr();
        
      });
    }
  }
  else if ( document.getElementById('availability') ) {

    loadData();
    generateAll();
    slide();
    zoomIn();
    paginate();
    showForm();
  }

});