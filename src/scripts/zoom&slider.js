// slide function
const slide = () => {

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
const zoomIn = () => {

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

 // wrap.style.transition = 1.5 + "s";
    // wrap.style.position = "absolute";
    // wrap.style.top = "20%";
    // wrap.style.transform = "translate(-20%, -10%)";
    // wrap.style.right = "10%";
    // wrap.style.display = "flex";
    // wrap.style.zIndex = "100";
    // wrap.style.minWidth = "600px";
    // wrap.style.minHeight = "400px";
    // wrap.style.overflow = "hidden";
    // wrap.style.boxShadow = "0px 50px 300px black";
