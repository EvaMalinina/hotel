let loadData = () => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', '/src/data/flats.json', true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      const serialData = JSON.stringify(data);
      localStorage.setItem("locData", serialData);

    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in flats.json file');
    }
  };

  request.onerror = function() {
    // there was a connection error of some sort
    console.log('connection error');
  };
  request.send();
};

let loadPackages = () => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', '/src/data/packages.json', true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      const serialData = JSON.stringify(data);
      localStorage.setItem("locPackages", serialData);

    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in package.json file');
    }
  };

  request.onerror = function() {
    // there was a connection error of some sort
    console.log('connection error');
  };
  request.send();
};