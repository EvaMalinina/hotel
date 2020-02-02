let showContent = () => {
  let logo = document.querySelector('.welcome__logo');
  let title = document.querySelector('.welcome__title');
  let smallTitle = document.querySelector('.welcome__small-title');
  let text = document.querySelector('.welcome__text');
  let smallText = document.querySelector('.welcome__small-text');

  setTimeout(function(){
    logo.style.opacity = '1';
  }, 500);
 
  setTimeout(function(){
    title.style.opacity = '1';
  }, 1000);
  
  setTimeout(function(){
    smallTitle.style.opacity = '1';
  }, 1500);

  setTimeout(function(){
    text.style.opacity = '1';
  }, 2000);

  setTimeout(function(){
    smallText.style.opacity = '1';
  }, 2500);
};