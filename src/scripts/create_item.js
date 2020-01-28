// create list item
let createRoom = (room, li) => { 

  let example = document.createElement('div');
      wrapperPic = document.createElement('div');
      pic = document.createElement('div');
      btnLeft = document.createElement('a');
      btnRight = document.createElement('a');
  
      title = document.createElement('h4');
  
      exampleFeatures = document.createElement('div');
      features = document.createElement('ul');

      featuresItemSize = document.createElement('li');
      featuresNumber = document.createElement('p');
      featuresText = document.createElement('p');

      featuresItemGuest = document.createElement('li');
      featuresGuest = document.createElement('p');
      featuresGuestDesc = document.createElement('p');

      featuresItemBed = document.createElement('li');
      featuresNumBed = document.createElement('p');
      featuresBedDesc = document.createElement('p');

      examplePrice = document.createElement('p');
      exampleLink = document.createElement('a');
  
  example.className = 'example';
  li.className = 'overview__example';
  li.appendChild( example );
  
  wrapperPic.className = 'example__pic-wrap';
  pic.className = 'example__pic';
  btnLeft.className = 'example__left';
  btnRight.className = 'example__right';
  wrapperPic.append( pic, btnLeft, btnRight );
  pic.style.backgroundImage = room.pic;
  btnLeft.innerHTML = '<';
  btnRight.innerHTML = '>';
  
  title.className = 'example__title';
  title.innerHTML= room.name;
  
  exampleFeatures.className = 'example__features';
  exampleFeatures.appendChild( features );
  
  features.className = 'features';
  features.append( featuresItemSize, featuresItemGuest, featuresItemBed );
  
  featuresItemSize.className = 'features__item'; 
  featuresItemGuest.className = 'features__item'; 
  featuresItemBed.className = 'features__item';

  featuresItemSize.append( featuresNumber, featuresText );
  featuresItemGuest.append( featuresGuest, featuresGuestDesc );
  featuresItemBed.append( featuresNumBed, featuresBedDesc );
  
  featuresNumber.className = 'features__number'; 
  featuresGuest.className = 'features__number'; 
  featuresNumBed.className = 'features__number';

  featuresNumber.innerHTML= room.features.msq;
  featuresGuest.innerHTML= room.features.guestNumber;
  featuresNumBed.innerHTML = room.features.bedroom;

  featuresText.className = 'features__text'; 
  featuresGuestDesc.className = 'features__text'; 
  featuresBedDesc.className = 'features__text';

  featuresText.innerHTML = room.features.msqDesc;
  featuresGuestDesc.innerHTML = room.features.guestNumberDesc;
  featuresBedDesc.innerHTML = room.features.bedroomDesc;
  
  examplePrice.className = 'example__price';
  examplePrice.innerHTML = room.price + '$';

  exampleLink.className = 'example__status';
  exampleLink.innerHTML = room.status;
  exampleLink.setAttribute('itemId', room.id);
  
  example.append(wrapperPic, title, examplePrice, exampleFeatures, exampleLink);
};

let createPackage = (pac, li) => { 

  let wrapperPic = document.createElement('div');
      pic = document.createElement('div');
  
      title = document.createElement('h4');
      desc = document.createElement('p');
      price = document.createElement('p');
  
  li.className = 'packages__item';
  li.append( wrapperPic, title, desc, price);
  
  wrapperPic.className = 'packages__pic-wrap';
  pic.className = 'packages__pic';
  wrapperPic.appendChild( pic );

  title.className = 'packages__title';
  title.innerHTML= pac.name;
 
  desc.className = 'package__desc';
  desc.innerHTML= pac.desc;
  
  price.className = 'packages__price';
  price.innerHTML = pac.price + "$";
};