window.addEventListener('load', () => {

  //zoom item
  // const zoomIn = () => {
  //   const wrap = document.querySelector('.example__pic-wrap');
  //   const pic = document.querySelector('.example__pic');

  //   pic.addEventListener('click', () => {
  //     wrap.style.transform = "scale(1.5, 1.5)";
  //   });
  // }

  // const items = document.querySelectorAll('.example__pic-wrap');
  // console.log(items.length);
  // for (item of items) {
  //   zoomIn();
  // }

  // slider
  const slide = () => {
    const leftBtn = document.querySelector('.example__left');
    const rightBtn = document.querySelector('.example__right');
    const pic = document.querySelector('.example__pic');
   
    let x = pic.style.backgroundPositionX; 
    rightBtn.addEventListener('click', () => {
      pic.style.backgroundPosition = (`0`, `${x}+50%`)
    })

    leftBtn.addEventListener('click', () => {
      pic.style.backgroundPosition = (`0`, `${x}-50%`)
    })
  }
 
 slide();
}); 
