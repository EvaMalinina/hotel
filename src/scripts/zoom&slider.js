// slider
const slide = () => {
  const rightBtn = document.querySelector('.example__right');  
  const leftBtn = document.querySelector('.example__left');  
  const pic = document.querySelector('.example__pic');

  // slide right
  rightBtn.addEventListener('click', () => {

    let currentPosX = pic.style.backgroundPositionX; 
    currentPosX = /-?\d+/.exec( currentPosX );
  
    let stepRight = 90;
    pic.style.backgroundPositionX = `${ currentPosX - stepRight }` + "%";
    pic.style.transition = 1 +"s";
  }); 

  // slide left
  leftBtn.addEventListener('click', () => {
    
    let currentPosX = pic.style.backgroundPositionX; 
    currentPosX = /-?\d+/.exec( currentPosX );
  
    let stepLeft = -90;
    pic.style.backgroundPositionX = `${ currentPosX - stepLeft }` + "%";
    pic.style.transition = 0.8 +"s";
  }) 
};

//zoom item
const zoomIn = () => {
  const wrap = document.querySelector('.example__pic-wrap');
  const pic = document.querySelector('.example__pic');

  pic.addEventListener('click', () => {
    
    wrap.style.transition = 1.5 + "s";
    wrap.style.position = "absolute";
    wrap.style.top = "20%";
    wrap.style.transform = "translate(-20%, -10%)";
    wrap.style.right = "10%";
    wrap.style.display = "flex";
    wrap.style.zIndex = "100";
    wrap.style.minWidth = "600px";
    wrap.style.minHeight = "400px";
    wrap.style.overflow = "hidden";
    wrap.style.boxShadow = "0px 50px 300px black";
  });
};

