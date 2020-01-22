let search = () => {
 
  let inpt = document.getElementById('search-this');
  let main = document.querySelector('.main').innerHTML;

  let cancel = document.querySelector( '.search__cancel' );
  let doSearch = document.querySelector( '.search__go' );

  cancel.addEventListener('click', (e) => {
    e.preventDefault();
    inpt.value = '';
    document.querySelector('.main').innerHTML = main;
  });

  doSearch.addEventListener('click', (e) => {
    e.preventDefault();

    if ( inpt.value.length < 2 ) {
      alert('You need to write more then 2 characters to search!');
      document.querySelector('.main').innerHTML = main;

    } else if ( inpt.value.length >= 3 ) {

      // convert input value to RegExp
      searchOnPage = '/'+inpt.value+'/g';
      content = document.querySelector('main').innerHTML;

      // cut all tags name and braces
      result = content.match(/>(.*?)</g); 

      // save arr what was found on the page
      result_arr = [];

      //highlight text what was found
      for(let i = 0; i < result.length; i++ ) {
        result_arr[i] = result[i].replace(eval(searchOnPage), '<span style="background-color:yellow;">'+inpt.value+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
      }

      // change found text with previous from old arr
      for(let i = 0; i < result.length; i++ ) {
        content = content.replace(result[i],result_arr[i]);  
      }

      // change html code
      document.querySelector('main').innerHTML = content; 
    }
  });
};

search();