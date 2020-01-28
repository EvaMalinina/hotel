// Object filter
let customeSort = {
  "pac-rice": "cheapest",
  "pac-rice": "mostexpansive"
};

// filtration by rooms
let sortItems = () => {

  document.getElementById('pac-price').addEventListener('change', () => {

    let list = JSON.parse(localStorage.getItem('locPackages'));
    const pricesList = list.map( item => item.price);
    console.log(pricesList);

    const sortType = document.getElementById('pac-price').value;

    if ( sortType == 'cheapest') {
      console.log('yes');
      let flag = true;
    
      while(flag){

        flag = false;
        for ( let i = 0; i < pricesList.length - 1; i++ ) {

          if ( pricesList[i] > pricesList[ i + 1 ] ) {
            let tmp = pricesList[i];
            pricesList[i] = pricesList[ i + 1 ];
            pricesList[ i + 1 ] = tmp;
            flag = true;
          }
        }
      }
      console.log(pricesList);
    } else {
      ///
    }
  });
  
};


  