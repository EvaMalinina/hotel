let loadData = (url, locStorName) => {
  // send request to get json file
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    
    if (request.status >= 200 && request.status < 400) {
      // success 
      const data = JSON.parse(request.responseText);
      serialData = JSON.stringify(data);
      localStorage.setItem(`${locStorName}`, serialData);
      
    } else {
      // we reached our target server, but it returned an error
      console.log('There is a problem in ' + url + '');
    }
  };

  request.onerror = function() {
    // there was a connection error of some sort
    console.log('connection error');
  };
  request.send();
};

