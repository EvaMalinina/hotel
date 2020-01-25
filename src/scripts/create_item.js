// create list item
let createFlat = (flat, li) => { 

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
  
      exampleLink = document.createElement('a');
  
  example.className = 'example';
  li.className = 'overview__example';
  li.appendChild( example );
  
  wrapperPic.className = 'example__pic-wrap';
  pic.className = 'example__pic';
  btnLeft.className = 'example__left';
  btnRight.className = 'example__right';
  wrapperPic.append( pic, btnLeft, btnRight );
  pic.innerHTML = flat.pic;
  btnLeft.innerHTML = '<';
  btnRight.innerHTML = '>';
  
  title.className = 'example__title';
  title.innerHTML= flat.name;
  
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

  featuresNumber.innerHTML= flat.features.msq;
  featuresGuest.innerHTML= flat.features.guestNumber;
  featuresNumBed.innerHTML = flat.features.bedroom;

  featuresText.className = 'features__text'; 
  featuresGuestDesc.className = 'features__text'; 
  featuresBedDesc.className = 'features__text';

  featuresText.innerHTML = flat.features.msqDesc;
  featuresGuestDesc.innerHTML = flat.features.guestNumberDesc;
  featuresBedDesc.innerHTML = flat.features.bedroomDesc;
  
  exampleLink.className = 'example__link';
  exampleLink.innerHTML = flat.link;
  
  example.append(wrapperPic, title, exampleFeatures, exampleLink);
};