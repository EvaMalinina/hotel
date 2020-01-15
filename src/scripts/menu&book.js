const hero = document.querySelector('.hero');

//to disable scroll
const noScroll = () => {
  window.scrollTo(0, 0);
}

document.getElementById('menu-open').addEventListener('click', function() {
 
  if( hero.className == 'hero' ) {

    hero.classList.add('hero_fullmenu');
    window.addEventListener('scroll', noScroll);
    
  } else if ( hero.className == 'hero hero_fullmenu') {

    hero.classList.remove('hero_fullmenu');
    window.removeEventListener('scroll', noScroll); 
  }
});

document.getElementById('booking-open').addEventListener('click', function() {
 
  if( hero.className == 'hero' ) {

    hero.classList.add('hero_fullbook');
    window.addEventListener('scroll', noScroll);
    
  } else if ( hero.className == 'hero hero_fullbook') {

    hero.classList.remove('hero_fullbook');
    window.removeEventListener('scroll', noScroll); 
  } 
});





