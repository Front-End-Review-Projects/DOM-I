const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'nav-item-7': 'Team',
    'nav-item-8': 'Careers',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Header section
// logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// nav bar anchor tags
let aTags = document.getElementsByTagName('a');
aTags[0].textContent = siteContent.nav['nav-item-1'];
aTags[1].textContent = siteContent.nav['nav-item-2'];
aTags[2].textContent = siteContent.nav['nav-item-3'];
aTags[3].textContent = siteContent.nav['nav-item-4'];
aTags[4].textContent = siteContent.nav['nav-item-5'];
aTags[5].textContent = siteContent.nav['nav-item-6'];

let nav = document.querySelector('nav');
console.log(nav);
nav.prepend(siteContent.nav['nav-item-8']);

let navAnchor = document.createElement('a');
navAnchor.textContent = siteContent.nav['nav-item-7'];
nav.appendChild(navAnchor);

//CTA section
let ctaTitle = document.getElementsByTagName('h1');

ctaTitle[0].textContent = siteContent.cta.h1;

let ctaButton = document.getElementsByTagName('button');

ctaButton[0].textContent = siteContent.cta.button;

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);

//Main Content
let mainContentH4 = document.getElementsByTagName('h4');

mainContentH4[0].textContent = siteContent['main-content']['features-h4'];
mainContentH4[1].textContent = siteContent['main-content']['about-h4'];
mainContentH4[2].textContent = siteContent['main-content']['services-h4'];
mainContentH4[3].textContent = siteContent['main-content']['product-h4'];
mainContentH4[4].textContent = siteContent['main-content']['vision-h4'];

let featuresP = document.getElementsByTagName('p');

featuresP[0].textContent = siteContent['main-content']['features-content'];
featuresP[1].textContent = siteContent['main-content']['about-content'];
featuresP[2].textContent = siteContent['main-content']['services-content'];
featuresP[3].textContent = siteContent['main-content']['product-content'];
featuresP[4].textContent = siteContent['main-content']['vision-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Contact Section
let contactH4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

//footer
let footerP = document.querySelector('footer p');

footerP.textContent = siteContent.footer.copyright;
