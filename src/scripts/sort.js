// Object filter
let customeSort = {
  "pac-rice": "cheapest",
  "pac-rice": "mostexpansive"
};

// sort by price
let sortItems = () => {

  document.getElementById('pac-price').addEventListener('change', () => {

    let list = JSON.parse(localStorage.getItem('locPackages'));

    const sortType = document.getElementById('pac-price').value;

    if ( sortType == 'cheapest') {
     
      list.sort(function(a, b) { return a.price - b.price }); 
      
      
      generateAllPackages(list);
    } else if ( sortType == 'mostexpansive') {
      list.sort(function(a, b) { return b.price - a.price }); 
      
      generateAllPackages(list);
    }
  });
  
};


  