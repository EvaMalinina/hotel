// slide function
let slide = () => {

  //return new array from object
  Array.from( document.querySelectorAll('div.example__pic'), ( pic, index ) => {
    const leftBtn = pic.parentNode.querySelector( '.example__left' );
    const rightBtn = pic.parentNode.querySelector( '.example__right' );

    // slide left
    if (leftBtn) {
      leftBtn.addEventListener( 'click', () => {
        let currentPosX = pic.style.backgroundPositionX; 
        currentPosX = /-?\d+/.exec( currentPosX );
      
        let stepLeft = -230;
        pic.style.backgroundPositionX = `${ currentPosX - stepLeft }` + "px";
        pic.style.transition = 0.8 +"s";    
      } );  
    }

    // slide right
    if (rightBtn) {
      rightBtn.addEventListener( 'click', ( event ) => {
        event.preventDefault();
        let currentPosX = pic.style.backgroundPositionX; 
        currentPosX = /-?\d+/.exec( currentPosX );
      
        let stepRight = 230;
        pic.style.backgroundPositionX = `${ currentPosX - stepRight }` + "px";
        pic.style.transition = 0.6 +"s";
      } );   
    }
  });
};

//zoom item
let zoomIn = () => {

  //return new array from object
  Array.from( document.querySelectorAll('div.example__pic-wrap'), ( item ) => {
    const pic = item.querySelector('.example__pic');

    //zoom in and zoom out
    pic.addEventListener('click', (e) => {
      e.preventDefault();

      item.classList.toggle('wrap-active');
      
    });
  });

};

