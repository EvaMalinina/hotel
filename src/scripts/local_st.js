let loadData = () => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', '../data/rooms.json', true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      const serialData = JSON.stringify(data);
      localStorage.setItem("locData", serialData);

    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in rooms.json file');
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
  request.open('GET', '../data/packages.json', true);

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